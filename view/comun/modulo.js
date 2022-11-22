var id_seleccion_opcion = 0
var id_seleccion_familia = 0
var id_seleccion_modulo = 0
var cboModulo = (data) => {
    let cbo_familia = document.getElementById("cbo-modulo")
    cbo_familia.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data.filter(elemento => elemento.id_familia_profesional === parseInt(document.getElementById("cbo-familia").value)
            && elemento.id_opcion_ocupacional === parseInt(document.getElementById("cbo-opcion").value))
        console.log(datos)
        if (datos.length > 0) {
            datos.forEach(element => {
                let contenido = `<option value="${element.id_modulo}" 
                ${id_seleccion_modulo > 0 ? (id_seleccion_modulo === element.id_modulo ? "selected" : "") : ""}
            >${element.nombre}</option>`
                cbo_familia.innerHTML += contenido
            });
        } else {
            cbo_familia.innerHTML = `<option value="0">No se encontraron registros</option>`
        }

    } else {
        cbo_familia.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

var consultarComunModulo = () => {
    ws_get(url_http + "modulo/", cboModulo)
}
