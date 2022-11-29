var cboAnio = () => {
    let cbo_anio = document.getElementById("cbo-anio")
    var today = new Date();
    var year = today.getFullYear();
    for (let i = 2022; i <= year; i++) {
        let contenido = `<option value="${i}"
            >${i}</option>`
        cbo_anio.innerHTML += contenido
    }
}
document.getElementById("cbo-anio").addEventListener("change", (e) => {

    consultarDashModulo()
    consultarDashEdad()
    consultarDashGenero()
    consultarDashDonacion()

})
cboAnio()