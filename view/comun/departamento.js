var cboDepartamento = (data) => {
    let cbo_departamento = document.getElementById("cbo-departamento")
    cbo_departamento.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido = `<option value="${element.id_departamento}"
            >${element.nombre}</option>`
            cbo_departamento.innerHTML += contenido
        });
        consultarComunProvincia()

    } else {
        cbo_departamento.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
document.getElementById("cbo-departamento").addEventListener("change", (e) => {
    consultarComunProvincia()
})
var consultarComunDepartamento = () => {
    ws_get(url_http + "departamento?in_pais="+document.getElementById("cbo-pais").value, cboDepartamento)
}
