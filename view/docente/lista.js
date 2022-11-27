var lista_docente = []
var nuevoRegistroDocente = () => {
    sessionStorage.removeItem("docente")
    $("#admin-panel").load("form_docente.html");
}
var mostrarDocente = (data) => {
    let tabla_docente = document.getElementById("tb_docente")
    tabla_docente.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        lista_docente = datos        
        datos.forEach(element => {
            let contenido =
                `<tr>
                    <th scope="row">${element.id_docente}</th>
                    <td>${element.familia_profesional}</td>
                    <td>${element.opcion_ocupacional}</td>
                    <td>${element.modulo}</td>
                    <td>${element.nombres_apellido}</td>
                    <td>
                    <button class="btn btn-outline-light"
                    type="button" onclick="editarDocente(${element.id_docente})">
                    <img src="img/icons/editar.png" alt="Editar">
                    </button>
                    <button class="btn btn-outline-light"
                    type="button" onclick="eliminarDocente(${element.id_docente})">
                    <img src="img/icons/eliminar.png" alt="Eliminar">
                    </button>
                    </td>
                </tr>`
            tabla_docente.innerHTML += contenido
        });

    } else {
        tabla_docente.innerHTML = `No se encontraron registros`
    }
}
var respuestaEliminar = (data) => {
    if (data.estado === 200) {
        listarDocente()
        mostrarModalMensaje("Éxito", data.mensaje_cliente, "success")
    } else {
        mostrarModalMensaje("Alerta", data.mensaje_cliente, "warning")
    }
}
var eliminarDocente = (id) => {
    ws_delete(url_http + "docente/" + id, respuestaEliminar)
}
var editarDocente = (id) => {
    let docente = lista_docente.find(elemento => elemento.id_docente === id)
    sessionStorage.setItem("docente", JSON.stringify(docente))
    $("#admin-panel").load("form_docente.html");
}
if (sessionStorage.getItem("mensaje") !== null) {
    mostrarModalMensaje("Éxito", sessionStorage.getItem("mensaje"), "success")
    sessionStorage.removeItem("mensaje")
}
var listarDocente = () => {
    sessionStorage.removeItem("docente")
    ws_get(url_http + "docente", mostrarDocente)
}
var exportarDocente = () => {
    if (lista_docente.length > 0) {
        window.location.href = url_http + "reporte/docente"
    } else {
        mostrarModalMensaje("Alerta", "No se encontraron registros", "warning")
    }
}
listarDocente()
