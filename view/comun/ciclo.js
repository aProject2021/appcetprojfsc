var id_seleccion_ciclo = 0
var cboCiclo = (data) => {
    let cbo_ciclo = document.getElementById("cbo-ciclo")
    cbo_ciclo.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_ciclo}" 
            ${id_seleccion_ciclo > 0 ? (id_seleccion_ciclo === element.id_ciclo ? "selected" : "") : ""}
            >${element.nombre}</option>`
            cbo_ciclo.innerHTML += contenido
        });
        consultarComunSeccion()
    } else {
        cbo_ciclo.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-ciclo").addEventListener("change", (e) => {

    consultarComunSeccion()

})
var consultarComunCiclo = () => {
    ws_get(url_http + "ciclo", cboCiclo)
}
