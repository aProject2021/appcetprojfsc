var id_seleccion_opcion = 0
var cboOpcion = (data) => {
    let cbo_familia = document.getElementById("cbo-opcion")
    cbo_familia.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach(element => {
            let contenido = `<option value="${element.id_opcion_ocupacional}" 
            ${id_seleccion_opcion > 0 ? "selected" : ""}
            >${element.nombre}</option>`
            cbo_familia.innerHTML += contenido
        });

    } else {
        cbo_familia.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

var consultarComunOpcion = (id) => {
    ws_get(url_http + "opcionocupacional/" + id, cboOpcion)
}
