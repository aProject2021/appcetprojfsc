var docente_id = 0
var regresarDocente = () => {
    $("#admin-panel").load("docente.html");
}
var respuestaRegistroDocente = (data) => {
    console.log(data)
    sessionStorage.setItem("mensaje", data.mensaje_cliente)
    regresarDocente()
}
var registrarDocente = () => {
    let val_nombre = document.getElementById("input-docente-nombre").value
    let val_familia = document.getElementById("cbo-familia").value
    let val_opcion = document.getElementById("cbo-opcion").value
    let val_modulo = document.getElementById("cbo-modulo").value
    if (docente_id > 0) {
        ws_put(url_http + "docente", {
            id: docente_id,
            nombres_apellido: val_nombre,
            id_familia_profesional: val_familia,
            id_opcion_ocupacional: val_opcion,
            id_modulo:val_modulo
        }, respuestaRegistroDocente)

    } else {
        ws_post_token(url_http + "docente", {
            id: docente_id,
            nombres_apellido: val_nombre,
            id_familia_profesional: val_familia,
            id_opcion_ocupacional: val_opcion,
            id_modulo:val_modulo
        }, respuestaRegistroDocente)
    }

}

var modificarDocente = () => {
    val_cbo_comun_opcion = true
    val_cbo_comun_modulo = true
    if (sessionStorage.getItem("docente") !== null) {
        let datos = JSON.parse(sessionStorage.getItem("docente"))
        docente_id = datos.id_docente
        document.getElementById("input-docente-nombre").value = datos.nombres_apellido
        id_seleccion = datos.id_familia_profesional
        id_seleccion_opcion = datos.id_opcion_ocupacional 
        id_seleccion_modulo = datos.id_modulo   
        consultarComunFamilia()
    } else {
        consultarComunFamilia()
        docente_id = 0
    }
}
modificarDocente()