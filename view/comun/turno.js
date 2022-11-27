var id_seleccion_turno = 0
var cboTurno = (data) => {
    let cbo_turno = document.getElementById("cbo-turno")
    cbo_turno.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_turno}" 
            ${id_seleccion_turno > 0 ? (id_seleccion_turno === element.id_turno ? "selected" : "") : ""}
            >${element.descripcion}</option>`
            cbo_turno.innerHTML += contenido
        });
        consultarComunCiclo()

    } else {
        cbo_turno.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-turno").addEventListener("change", (e) => {
    consultarComunSeccion()
})
var consultarComunTurno = () => {
    ws_get(url_http + "turno", cboTurno)
}
