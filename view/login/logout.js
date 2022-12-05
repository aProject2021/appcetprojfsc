document.getElementById("btn-cerrar-sesion").addEventListener("click",()=>{
    sessionStorage.clear()
    abrirVentana("index.html")
})