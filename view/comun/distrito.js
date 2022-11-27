var cboDistrito = (data) => {
    let cbo_distrito = document.getElementById("cbo-distrito")
    cbo_distrito.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_distrito}"
            >${element.nombre}</option>`
            cbo_distrito.innerHTML += contenido
        });

    } else {
        cbo_distrito.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
var consultarComunDistrito = () => {
    ws_get(url_http + "distrito?in_provincia=" + document.getElementById("cbo-provincia").value, cboDistrito)
}
