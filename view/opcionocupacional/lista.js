var lista_opcion = []
var nuevoRegistroOpcion = () => {
    sessionStorage.removeItem("opcion")
    $("#admin-panel").load("form_opcionocupacional.html");
}
var mostrarOpcion = (data) => {
    let tabla_opcion = document.getElementById("tb_opcion")
    tabla_opcion.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        lista_opcion = datos        
        datos.forEach(element => {
            let contenido =
                `<tr>
                    <th scope="row">${element.id_opcion_ocupacional}</th>
                    <td>${element.familia_profesional}</td>
                    <td>${element.nombre}</td>
                    <td>
                    <button class="btn btn-outline-light"
                    type="button" onclick="editarOpcion(${element.id_opcion_ocupacional})">
                    <img src="img/icons/editar.png" alt="Editar">
                    </button>
                    <button class="btn btn-outline-light"
                    type="button" onclick="eliminarOpcion(${element.id_opcion_ocupacional})">
                    <img src="img/icons/eliminar.png" alt="Eliminar">
                    </button>
                    </td>
                </tr>`
            tabla_opcion.innerHTML += contenido
        });

    } else {
        tabla_opcion.innerHTML = `No se encontraron registros`
    }
}
var respuestaEliminar = (data) => {
    if (data.estado === 200) {
        listarOpcion()
        mostrarModalMensaje("Éxito", data.mensaje_cliente, "success")
    } else {
        mostrarModalMensaje("Alerta", data.mensaje_cliente, "warning")
    }
}
var eliminarOpcion = (id) => {
    ws_delete(url_http + "opcionocupacional/" + id, respuestaEliminar)
}
var editarOpcion = (id) => {
    let opcion = lista_opcion.find(elemento => elemento.id_opcion_ocupacional === id)
    sessionStorage.setItem("opcion", JSON.stringify(opcion))
    $("#admin-panel").load("form_opcionocupacional.html");
}
if (sessionStorage.getItem("mensaje") !== null) {
    mostrarModalMensaje("Éxito", sessionStorage.getItem("mensaje"), "success")
    sessionStorage.removeItem("mensaje")
}
var listarOpcion = () => {
    sessionStorage.removeItem("opcion")
    ws_get(url_http + "opcionocupacional", mostrarOpcion)
}
listarOpcion()
