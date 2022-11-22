var opcion_id = 0
var regresarOpcion = () => {
    $("#admin-panel").load("opcionocupacional.html");
}
var respuestaRegistroOpcion = (data) => {
    console.log(data)
    sessionStorage.setItem("mensaje", data.mensaje_cliente)
    regresarOpcion()
}
var registrarOpcion = () => {
    let val_nombre = document.getElementById("input-opcion-nombre").value
    let val_familia = document.getElementById("cbo-familia").value
    if (opcion_id > 0) {
        ws_put(url_http + "opcionocupacional", {
            id: opcion_id,
            nombre: val_nombre,
            id_familia_profesional: val_familia
        }, respuestaRegistroOpcion)

    } else {
        ws_post_token(url_http + "opcionocupacional", {
            id: opcion_id,
            nombre: val_nombre,
            id_familia_profesional: val_familia
        }, respuestaRegistroOpcion)
    }

}

var modificarOpcion = () => {
    if (sessionStorage.getItem("opcion") !== null) {
        let datos = JSON.parse(sessionStorage.getItem("opcion"))
        opcion_id = datos.id_opcion_ocupacional
        document.getElementById("input-opcion-nombre").value = datos.nombre
        id_seleccion = datos.id_familia_profesional
        document.getElementById("cbo-familia").value = datos.id_familia_profesional
    } else {
        opcion_id = 0
    }
}
modificarOpcion()