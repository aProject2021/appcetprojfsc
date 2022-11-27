var cboProvincia = (data) => {
    let cbo_provincia = document.getElementById("cbo-provincia")
    cbo_provincia.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_provincia}"
            >${element.nombre}</option>`
            cbo_provincia.innerHTML += contenido
        });
        consultarComunDistrito()

    } else {
        cbo_provincia.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-provincia").addEventListener("change", (e) => {
    consultarComunDistrito()
})
var consultarComunProvincia = () => {
    ws_get(url_http + "provincia?in_departamento=" + document.getElementById("cbo-departamento").value, cboProvincia)
}
