var matricula_id = 0
var estudiante_id = 0
var regresarMatricula = () => {
    $("#admin-panel").load("matricula.html");
}
var nuevoRegistroEstudiante = () => {
    $("#admin-panel").load("form_estudiante.html");
}
var responseBuscarAlumno = (data) => {
    console.log(data)
    if (data.estado === 200) {
        let datos = data.data
        estudiante_id = datos.id_alumno
        document.getElementById("input-matricula-nombre").value = datos.apellido_paterno + " " +
            datos.apellido_materno + " " + datos.nombres
    } else {
        estudiante_id = 0
        document.getElementById("input-matricula-nombre").value = ""
    }
}
document.getElementById("input-matricula-dni").addEventListener("keyup", (e) => {
    let numero = e.target.value
    if (numero.length === 8) {
        ws_get(url_http + "alumno?in_numero=" + numero, responseBuscarAlumno)
    } else {
        document.getElementById("input-matricula-nombre").value = ""
    }

})
var respuestaRegistroMatricula = (data) => {
    sessionStorage.setItem("mensaje", data.mensaje_cliente)
    regresarMatricula()
}
var parseFecha = (fecha) => {
    if (fecha !== "") {
        let lista = fecha.split('/')
        return lista[2] + '-' + lista[1] + '-' + lista[0]
    }
    else {
        return ""
    }
}
var registrarMatricula = () => {
    let val_docente = document.getElementById("cbo-docente").value
    let val_seccion = document.getElementById("cbo-seccion").value
    let val_modulo = document.getElementById("cbo-modulo").value
    let val_duracion = document.getElementById("input-matricula-duracion").value
    let val_fecha_inicio = document.getElementById("input-matricula-fecha-inicio").value
    let val_fecha_fin = document.getElementById("input-matricula-fecha-fin").value
    let val_requisitos = document.getElementsByClassName("requisito-check")
    console.log(val_requisitos)
    let val_requisito_size = val_requisitos.length
    let val_cadena = []
    for (let i = 0; i < val_requisito_size; i++) {
        console.log(val_requisitos[i])
        val_cadena.push({
            id_requisito: val_requisitos[i].value,
            estado: (val_requisitos[i].checked ? 1 : 0)
        })
    }
    console.log(val_cadena)
    if (matricula_id > 0) {
        ws_put(url_http + "matricula", {
            id: matricula_id,
            id_alumno: estudiante_id,
            id_modulo: parseInt(val_modulo),
            id_docente: parseInt(val_docente),
            id_seccion: parseInt(val_seccion),
            duracion: val_duracion,
            fecha_inicio: val_fecha_inicio,
            fecha_termino: val_fecha_fin,
            requisito: val_cadena
        }, respuestaRegistroMatricula)

    } else {
        ws_post_token(url_http + "matricula", {
            id: matricula_id,
            id_alumno: estudiante_id,
            id_modulo: parseInt(val_modulo),
            id_docente: parseInt(val_docente),
            id_seccion: parseInt(val_seccion),
            duracion: val_duracion,
            fecha_inicio: val_fecha_inicio,
            fecha_termino: val_fecha_fin,
            requisito: val_cadena
        }, respuestaRegistroMatricula)
    }

}

var modificarMatricula = () => {

    if (sessionStorage.getItem("alumno-id") !== null) {
        estudiante_id = parseInt(sessionStorage.getItem("alumno-id"))
        document.getElementById("input-matricula-dni").value = sessionStorage.getItem("alumno-documento")
        document.getElementById("input-matricula-nombre").value = sessionStorage.getItem("alumno-nombres")
        sessionStorage.removeItem("alumno-id")
    }

    val_cbo_comun_opcion = true
    val_cbo_comun_modulo = true
    val_view_duracion = true
    if (sessionStorage.getItem("matricula") !== null) {
        let datos = JSON.parse(sessionStorage.getItem("matricula"))
        console.log(datos)
        matricula_id = datos.id_matricula
        estudiante_id = datos.id_alumno
        id_seleccion = datos.id_familia
        id_seleccion_familia = datos.id_familia
        id_seleccion_opcion = datos.id_opcion
        id_seleccion_modulo = datos.id_modulo
        id_seleccion_turno = datos.id_turno
        id_seleccion_seccion = datos.id_seccion
        id_seleccion_ciclo = datos.id_ciclo
        id_seleccion_docente = datos.id_docente
        val_id_matricula = matricula_id
        document.getElementById("input-matricula-duracion").value = datos.duracion
        document.getElementById("input-matricula-fecha-inicio").value = datos.fecha_inicio
        document.getElementById("input-matricula-fecha-fin").value = datos.fecha_termino
        document.getElementById("input-matricula-dni").value = datos.alumno_nro_documento
        document.getElementById("input-matricula-nombre").value = datos.alumno_apellido_nombre
        consultarComunTurno()
        consultarComunFamilia()
        consultarComunRequisito()

    } else {
        matricula_id = 0
        val_id_matricula = 0
        consultarComunTurno()
        consultarComunFamilia()
        consultarComunRequisito()
    }
}
modificarMatricula()