var modulo_id = 0
var regresarModulo = () => {
    $("#admin-panel").load("modulo.html");
}
var respuestaRegistroModulo = (data) => {
    console.log(data)
    sessionStorage.setItem("mensaje", data.mensaje_cliente)
    regresarModulo()
}
var registrarModulo = () => {
    let val_nombre = document.getElementById("input-modulo-nombre").value
    let val_familia = document.getElementById("cbo-familia").value
    let val_opcion = document.getElementById("cbo-opcion").value
    let val_horas = document.getElementById("input-modulo-horas").value
    if (modulo_id > 0) {
        ws_put(url_http + "modulo", {
            id: modulo_id,
            nombre: val_nombre,
            id_familia_profesional: val_familia,
            id_opcion_ocupacional: val_opcion,
            horas: val_horas
        }, respuestaRegistroModulo)

    } else {
        ws_post_token(url_http + "modulo", {
            id: modulo_id,
            nombre: val_nombre,
            id_familia_profesional: val_familia,
            id_opcion_ocupacional: val_opcion,
            horas: val_horas
        }, respuestaRegistroModulo)
    }

}

var modificarModulo = () => {
    if (sessionStorage.getItem("modulo") !== null) {
        let datos = JSON.parse(sessionStorage.getItem("modulo"))
        modulo_id = datos.id_modulo
        document.getElementById("input-modulo-nombre").value = datos.nombre
        document.getElementById("input-modulo-horas").value= datos.horas
        id_seleccion = datos.id_familia_profesional
        id_seleccion_opcion = datos.id_opcion_ocupacional   
        consultarComunFamilia()
    } else {
        consultarComunFamilia()
        modulo_id = 0
    }
}
modificarModulo()