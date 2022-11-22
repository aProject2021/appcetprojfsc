let id_seleccion = 0
var cboFamilia = (data) => {
    let cbo_familia = document.getElementById("cbo-familia")
    cbo_familia.innerHTML = ""
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach(element => {
            let contenido = `<option value="${element.id_familia_profesional}" 
            ${id_seleccion > 0 ? "selected" : ""}
            >${element.nombre}</option>`
            cbo_familia.innerHTML += contenido
        });

    } else {
        cbo_familia.innerHTML = `<option value="0">No se encontraron registros</option>`
    }
}

ws_get(url_http + "familiaprofesional", cboFamilia)