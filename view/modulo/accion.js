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
    let val_fe = document.getElementById("input-modulo-fe").value
    let val_fc = document.getElementById("input-modulo-fc").value
    let val_ppp = document.getElementById("input-modulo-ppp").value
    if (modulo_id > 0) {
        ws_put(url_http + "modulo", {
            id: modulo_id,
            nombre: val_nombre,
            id_familia_profesional: val_familia,
            id_opcion_ocupacional: val_opcion,
            horas: val_horas,
            fe: (val_fe === "" ? "0" : val_fe),
            fc: (val_fc === "" ? "0" : val_fc),
            ppp: (val_ppp === "" ? "0" : val_ppp)
        }, respuestaRegistroModulo)

    } else {
        ws_post_token(url_http + "modulo", {
            id: modulo_id,
            nombre: val_nombre,
            id_familia_profesional: val_familia,
            id_opcion_ocupacional: val_opcion,
            horas: val_horas,
            fe: val_fe,
            fc: val_fc,
            ppp: val_ppp
        }, respuestaRegistroModulo)
    }

}

var modificarModulo = () => {
    val_cbo_comun_opcion = true
    val_cbo_comun_modulo = false
    if (sessionStorage.getItem("modulo") !== null) {
        let datos = JSON.parse(sessionStorage.getItem("modulo"))
        modulo_id = datos.id_modulo
        document.getElementById("input-modulo-nombre").value = datos.nombre
        document.getElementById("input-modulo-horas").value = datos.horas
        document.getElementById("input-modulo-fe").value = datos.fe
        document.getElementById("input-modulo-fc").value = datos.fc
        document.getElementById("input-modulo-ppp").value = datos.ppp
        id_seleccion = datos.id_familia_profesional
        id_seleccion_opcion = datos.id_opcion_ocupacional
        consultarComunFamilia()
    } else {
        consultarComunFamilia()
        modulo_id = 0
    }
}
modificarModulo()