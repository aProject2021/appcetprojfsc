var lista_modulo = []
var nuevoRegistroModulo = () => {
    sessionStorage.removeItem("modulo")
    $("#admin-panel").load("form_modulo.html");
}
var mostrarModulo = (data) => {
    let tabla_modulo = document.getElementById("tb_modulo")
    tabla_modulo.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        lista_modulo = datos        
        datos.forEach(element => {
            let contenido =
                `<tr>
                    <th scope="row">${element.id_modulo}</th>
                    <td>${element.familia_profesional}</td>
                    <td>${element.opcion_ocupacional}</td>
                    <td>${element.nombre}</td>
                    <td>
                    <button class="btn btn-outline-light"
                    type="button" onclick="editarModulo(${element.id_modulo})">
                    <img src="img/icons/editar.png" alt="Editar">
                    </button>
                    <button class="btn btn-outline-light"
                    type="button" onclick="eliminarModulo(${element.id_modulo})">
                    <img src="img/icons/eliminar.png" alt="Eliminar">
                    </button>
                    </td>
                </tr>`
            tabla_modulo.innerHTML += contenido
        });

    } else {
        tabla_modulo.innerHTML = `No se encontraron registros`
    }
}
var respuestaEliminar = (data) => {
    if (data.estado === 200) {
        listarModulo()
        mostrarModalMensaje("Éxito", data.mensaje_cliente, "success")
    } else {
        mostrarModalMensaje("Alerta", data.mensaje_cliente, "warning")
    }
}
var eliminarModulo = (id) => {
    ws_delete(url_http + "modulo/" + id, respuestaEliminar)
}
var editarModulo = (id) => {
    let modulo = lista_modulo.find(elemento => elemento.id_modulo === id)
    sessionStorage.setItem("modulo", JSON.stringify(modulo))
    $("#admin-panel").load("form_modulo.html");
}
if (sessionStorage.getItem("mensaje") !== null) {
    mostrarModalMensaje("Éxito", sessionStorage.getItem("mensaje"), "success")
    sessionStorage.removeItem("mensaje")
}
var listarModulo = () => {
    sessionStorage.removeItem("modulo")
    ws_get(url_http + "modulo", mostrarModulo)
}
listarModulo()
