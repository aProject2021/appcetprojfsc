
var cboTipo= (data) => {
    let cbo_tipo = document.getElementById("cbo-documento")
    cbo_tipo.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_tipo}" 
            >${element.descripcion}</option>`
            cbo_tipo.innerHTML += contenido
        });

    } else {
        cbo_tipo.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

var consultarComunTipo= () => {
    ws_get(url_http + "tipodocumento", cboTipo)
}
consultarComunTipo()