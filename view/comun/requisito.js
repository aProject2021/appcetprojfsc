var val_id_matricula = 0
var listaRequisito = (data) => {
    let div_requisito = document.getElementById("div-requisitos")
    div_requisito.innerHTML = ""
    val_default = 0
    if (data.estado === 200) {
        let datos = data.data
        datos.forEach((element, index) => {
            let contenido =
                `<div class="form-check form-check-inline col-md-3 ">
                <input class="form-check-input requisito-check" ${element.estado > 0 ? "checked" : ""} type="checkbox" id="inlineCheckbox${element.id_requisito}" value="${element.id_requisito}">
                <label class="form-check-label" for="inlineCheckbox${element.id_requisito}">${element.descripcion}</label>
            </div>`
            div_requisito.innerHTML += contenido
        });

    } else {
        div_requisito.innerHTML = `No se encontraron registros`
    }
}

var consultarComunRequisito = () => {
    let filtro = (val_id_matricula > 0 ? "?in_matricula=" + val_id_matricula : "")
    ws_get(url_http + "requisito" + filtro, listaRequisito)
}
