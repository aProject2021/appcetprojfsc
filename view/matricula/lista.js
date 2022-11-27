var lista_matricula = []
var nuevoRegistroMatricula = () => {
    sessionStorage.removeItem("matricula")
    $("#admin-panel").load("form_matricula.html");
}
var mostrarMatricula = (data) => {
    let tabla_matricula = document.getElementById("tb_matricula")
    tabla_matricula.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        lista_matricula = datos
        datos.forEach(element => {
            let contenido =
                `<tr>
                    <th scope="row">${element.id_matricula}</th>                    
                    <td colspan="2">${element.fecha}</td>
                    <td colspan="2">${element.alumno_nombre_apellido}</td>
                    <td colspan="2">${element.especialidad}</td>
                    <td colspan="2">${element.modulo}</td>
                    <td colspan="2">${element.docente}</td>
                    <td>
                    <button class="btn btn-outline-light"
                    type="button" onclick="editarMatricula(${element.id_matricula})">
                    <img src="img/icons/editar.png" alt="Editar">
                    </button>
                    <button class="btn btn-outline-light"
                    type="button" onclick="eliminarMatricula(${element.id_matricula})">
                    <img src="img/icons/eliminar.png" alt="Eliminar">
                    </button>
                    </td>
                </tr>`
            tabla_matricula.innerHTML += contenido
        });

    } else {
        tabla_matricula.innerHTML = `No se encontraron registros`
    }
}
var respuestaEliminar = (data) => {
    if (data.estado === 200) {
        listarMatricula()
        mostrarModalMensaje("Éxito", data.mensaje_cliente, "success")
    } else {
        mostrarModalMensaje("Alerta", data.mensaje_cliente, "warning")
    }
}
var eliminarMatricula = (id) => {
    ws_delete(url_http + "matricula/" + id, respuestaEliminar)
}
var editarMatricula = (id) => {
    let matricula = lista_matricula.find(elemento => elemento.id_matricula === id)
    sessionStorage.setItem("matricula", JSON.stringify(matricula))
    $("#admin-panel").load("form_matricula.html");
}
if (sessionStorage.getItem("mensaje") !== null) {
    mostrarModalMensaje("Éxito", sessionStorage.getItem("mensaje"), "success")
    sessionStorage.removeItem("mensaje")
}
var listarMatricula = () => {
    sessionStorage.removeItem("matricula")
    ws_get(url_http + "matricula", mostrarMatricula)
}
var exportarMatricula = () => {
    if (lista_matricula.length > 0) {
        window.location.href = url_http + "reporte/matricula"
    } else {
        mostrarModalMensaje("Alerta", "No se encontraron registros", "warning")
    }
}
listarMatricula()
