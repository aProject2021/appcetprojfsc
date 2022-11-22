document.getElementById("btn_ingresar").addEventListener("click", () => {
   
    let val_usuario = document.getElementById("input-usuario").value.trim()
    let val_clave = document.getElementById("input-clave").value.trim()
    ws_post(url_http + "credenciales", {
        in_usuario: val_usuario,
        in_clave: val_clave
    }, respuestaAcceso)
})

const respuestaAcceso = (data) => {
    console.log(data.data.out_token)
    sessionStorage.setItem("token", data.data.out_token)
    abrirVentana("home.html")
}
