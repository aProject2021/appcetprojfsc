var lista_modulos = []
var id_seleccion_opcion = 0
var id_seleccion_familia = 0
var id_seleccion_modulo = 0
var val_duracion = ""
var val_view_duracion = false
var cboModulo = (data) => {
    let cbo_modulo = document.getElementById("cbo-modulo")
    cbo_modulo.innerHTML = ""
    if (data.estado === 200) {
        lista_modulos = data.data
        let datos = data.data.filter(elemento => elemento.id_familia_profesional === parseInt(document.getElementById("cbo-familia").value)
            && elemento.id_opcion_ocupacional === parseInt(document.getElementById("cbo-opcion").value))
        console.log(datos)
        if (datos.length > 0) {
            datos.forEach(element => {
                let contenido = `<option value="${element.id_modulo}" 
                ${id_seleccion_modulo > 0 ? (id_seleccion_modulo === element.id_modulo ? "selected" : "") : ""}
            >${element.nombre}</option>`
                cbo_modulo.innerHTML += contenido
            });
            if (val_view_duracion) {
                cambiarDuracion()
            }
        } else {
            cbo_modulo.innerHTML = `<option value="0">No se encontraron registros</option>`
            if (val_view_duracion) {
                document.getElementById("input-matricula-duracion").value = "0"
            }
        }

    } else {
        cbo_modulo.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}
var cambiarDuracion = () => {
    let id_modulo = document.getElementById("cbo-modulo").value
    let modulo = lista_modulos.find(element => element.id_modulo === parseInt(id_modulo))
    document.getElementById("input-matricula-duracion").value = modulo.horas
}
document.getElementById("cbo-modulo").addEventListener("change", (e) => {
    if (val_view_duracion) {
        cambiarDuracion()
    }
})
var consultarComunModulo = () => {
    ws_get(url_http + "modulo/", cboModulo)
}
