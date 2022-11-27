
var cboEstado= (data) => {
    let cbo_estado = document.getElementById("cbo-estado")
    cbo_estado.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_estado}" 
            >${element.nombre}</option>`
            cbo_estado.innerHTML += contenido
        });

    } else {
        cbo_estado.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

var consultarComunEstado= () => {
    ws_get(url_http + "estadocivil", cboEstado)
}
consultarComunEstado()