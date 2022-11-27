var id_seleccion_seccion = 0
var cboSeccion = (data) => {
    let cbo_seccion = document.getElementById("cbo-seccion")
    cbo_seccion.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_seccion}" 
            ${id_seleccion_seccion > 0 ? (id_seleccion_seccion === element.id_seccion ? "selected" : "") : ""}
            >${element.nombre}</option>`
            cbo_seccion.innerHTML += contenido
        });
        
    } else {
        cbo_seccion.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

var consultarComunSeccion = () => {
    ws_get(url_http + "seccion?in_turno="+document.getElementById("cbo-turno").value+
    "&in_ciclo="+document.getElementById("cbo-ciclo").value, cboSeccion)
}
