var mostrarDatosUsuario = (data) => {

    if (data.estado === 200) {
        console.log(data)
        let datos = data.data
        document.getElementById("name-user").innerHTML = datos.nombre + " " + datos.apellido_paterno + " " + datos.apellido_materno
    }

}
ws_get(url_http + "usuario/" + sessionStorage.getItem("usuario"), mostrarDatosUsuario)