var cboPais = (data) => {
    let cbo_pais = document.getElementById("cbo-pais")
    cbo_pais.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_pais}"
            >${element.nombre}</option>`
            cbo_pais.innerHTML += contenido
        });
        consultarComunDepartamento()

    } else {
        cbo_pais.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-pais").addEventListener("change", (e) => {
    consultarComunDepartamento()
})
var consultarComunPais = () => {
    ws_get(url_http + "pais", cboPais)
}
consultarComunPais()
