var validarSession = ()=>{
    if(sessionStorage.getItem("token")===null){
        abrirVentana("index.html")
    }
}
validarSession()