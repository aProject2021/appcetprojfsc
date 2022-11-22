var id_seleccion_opcion = 0
var val_default_opcion = 0
var val_cbo_comun_modulo = false
var cboOpcion = (data) => {
    let cbo_familia = document.getElementById("cbo-opcion")
    cbo_familia.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach(element => {
            let contenido = `<option value="${element.id_opcion_ocupacional}" 
            ${id_seleccion_opcion > 0 ? (id_seleccion_opcion === element.id_opcion_ocupacional ? "selected" : "") : ""}
            >${element.nombre}</option>`
            cbo_familia.innerHTML += contenido
        });
        if (val_cbo_comun_modulo) {
            consultarComunModulo()
        }
    } else {
        cbo_familia.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-opcion").addEventListener("change", (e) => {
    if (val_cbo_comun_modulo) {
        consultarComunModulo()
    }
})
var consultarComunOpcion = (id) => {
    ws_get(url_http + "opcionocupacional/" + id, cboOpcion)
}
