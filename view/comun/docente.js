var id_seleccion_docente = 0
var cboDocente = (data) => {
    let cbo_docente = document.getElementById("cbo-docente")
    cbo_docente.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_docente}" 
            ${id_seleccion_docente > 0 ? (id_seleccion_docente === element.id_docente ? "selected" : "") : ""}
            >${element.nombres_apellido}</option>`
            cbo_docente.innerHTML += contenido
        });
        
    } else {
        cbo_docente.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

var consultarComunDocente = () => {
    ws_get(url_http + "docente",cboDocente)
}
consultarComunDocente()