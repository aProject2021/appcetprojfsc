var lista_familia = []
var nuevoRegistroFamilia = () => {
    sessionStorage.removeItem("familia")
    $("#admin-panel").load("form_familiaprofesional.html");
}
var mostrarFamilia = (data) => {
    let tabla_familia = document.getElementById("tb_familia")
    tabla_familia.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        lista_familia = datos        
        datos.forEach(element => {
            let contenido =
                `<tr>
                    <th scope="row">${element.id_familia_profesional}</th>
                    <td>${element.nombre}</td>
                    <td>${element.descripcion}</td>
                    <td>
                    <button class="btn btn-outline-light"
                    type="button" onclick="editarFamilia(${element.id_familia_profesional})">
                    <img src="img/icons/editar.png" alt="Editar">
                    </button>
                    <button class="btn btn-outline-light"
                    type="button" onclick="eliminarFamilia(${element.id_familia_profesional})">
                    <img src="img/icons/eliminar.png" alt="Eliminar">
                    </button>
                    </td>
                </tr>`
            tabla_familia.innerHTML += contenido
        });

    } else {
        tabla_familia.innerHTML = `No se encontraron registros`
    }
}
var respuestaEliminar = (data) => {
    if (data.estado === 200) {
        listarFamilia()
        mostrarModalMensaje("Éxito", data.mensaje_cliente, "success")
    } else {
        mostrarModalMensaje("Alerta", data.mensaje_cliente, "warning")
    }
}
var eliminarFamilia = (id) => {
    ws_delete(url_http + "familiaprofesional/" + id, respuestaEliminar)
}
var editarFamilia = (id) => {
    let familia = lista_familia.find(elemento => elemento.id_familia_profesional === id)
    sessionStorage.setItem("familia", JSON.stringify(familia))
    $("#admin-panel").load("form_familiaprofesional.html");
}
if (sessionStorage.getItem("mensaje") !== null) {
    mostrarModalMensaje("Éxito", sessionStorage.getItem("mensaje"), "success")
    sessionStorage.removeItem("mensaje")
}
var listarFamilia = () => {
    sessionStorage.removeItem("familia")
    ws_get(url_http + "familiaprofesional", mostrarFamilia)
}
listarFamilia()
