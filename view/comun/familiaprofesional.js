var id_seleccion = 0
var val_default = 0
var cboFamilia = (data) => {
    let cbo_familia = document.getElementById("cbo-familia")
    cbo_familia.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_familia_profesional}" 
            ${id_seleccion > 0 ? "selected" : ""}
            >${element.nombre}</option>`
            cbo_familia.innerHTML += contenido
            val_default = (index === 0 ? element.id_familia_profesional : val_default)
        });
        consultarComunOpcion(id_seleccion > 0 ? id_seleccion : val_default)
    } else {
        cbo_familia.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-familia").addEventListener("change", (e) => {
    consultarComunOpcion(e.target.value)
})
var consultarComunFamilia = () => {
    ws_get(url_http + "familiaprofesional", cboFamilia)
}
