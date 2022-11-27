
var regresarEstudiante = () => {
    $("#admin-panel").load("form_matricula.html");
}
var respuestaRegistroEstudiante = (data) => {
    sessionStorage.setItem("alumno-id", data.data.codigo)
    regresarEstudiante()
}
var registrarEstudiante = () => {
    let val_tipo_doc = document.getElementById("cbo-documento").value
    let val_grado = document.getElementById("cbo-instruccion").value
    let val_estado = document.getElementById("cbo-estado").value
    let val_distrito = document.getElementById("cbo-distrito").value
    let val_nombre = document.getElementById("input-alumno-nombre").value
    let val_ape_paterno = document.getElementById("input-alumno-apaterno").value
    let val_ape_materno = document.getElementById("input-alumno-amaterno").value
    let val_nacimiento = document.getElementById("input-alumno-fecha").value
    let val_direccion = document.getElementById("input-alumno-direccion").value
    let val_telefono = document.getElementById("input-alumno-telefono").value
    let val_correo = document.getElementById("input-alumno-correo").value
    let val_nro = document.getElementById("input-alumno-dni").value
    let val_sexo = document.getElementById("masculino").value
    sessionStorage.setItem("alumno-documento", val_nro)
    sessionStorage.setItem("alumno-nombres", val_ape_paterno + " " + val_ape_materno + " " + val_nombre)
    ws_post_token(url_http + "alumno", {
        id_alumno: 0,
        id_tipo_doc_identidad: val_tipo_doc,
        id_grado_instruccion: val_grado,
        id_estado_civil: val_estado,
        id_distrito: val_distrito,
        nombres: val_nombre,
        apellido_paterno: val_ape_paterno,
        apellido_materno: val_ape_materno,
        sexo: (val_sexo.checked ? "M" : "F"),
        fecha_nacimiento: val_nacimiento,
        direccion: val_direccion,
        telefono: val_telefono,
        correo: val_correo,
        nro_documento: val_nro
    }, respuestaRegistroEstudiante)

}

