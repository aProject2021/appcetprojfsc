var familia_id = 0
var regresarFamilia = () => {
    $("#admin-panel").load("familiaprofesional.html");
}
var respuestaRegistroFamilia = (data) => {
    console.log(data)
    sessionStorage.setItem("mensaje", data.mensaje_cliente)
    regresarFamilia()
}
var registrarFamilia = () => {
    let val_nombre = document.getElementById("input-familia-nombre").value
    let val_descripcion = document.getElementById("input-familia-descripcion").value
    if (familia_id > 0) {
        ws_put(url_http + "familiaprofesional", {
            id: familia_id,
            nombre: val_nombre,
            descripcion: val_descripcion,
            imagen: ""
        }, respuestaRegistroFamilia)

    } else {
        ws_post_token(url_http + "familiaprofesional", {
            id: familia_id,
            nombre: val_nombre,
            descripcion: val_descripcion,
            imagen: ""
        }, respuestaRegistroFamilia)
    }

}

var modificarFamilia = () => {
    if (sessionStorage.getItem("familia") !== null) {
        let datos = JSON.parse(sessionStorage.getItem("familia"))
        familia_id = datos.id_familia_profesional
        document.getElementById("input-familia-nombre").value = datos.nombre
        document.getElementById("input-familia-descripcion").value = datos.descripcion
    } else {
        familia_id = 0
    }
}
modificarFamilia()