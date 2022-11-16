function ws_post(url, dato, metodocallback) {
    $.ajax({
        type: 'POST',
        url: url,
        data: dato,
        beforeSend: function () {

        },
        complete: function (data) {
        },
        success: function (data) {
            var respuesta = (data !== "" ? data : "");
            if (metodocallback !== null) {
                metodocallback(respuesta);
            }
        },
        error: function (data) {
            divloader.style.display = 'none'
            console.log("Problemas con el envio del formulario");
            mostrarModalMensaje("Alerta", "Problemas de conexión, por favor inténtelo de nuevo")
        }
    });
}
function ws_get(url, metodocallback) {
    $.ajax({
        type: 'GET',
        url: url,
        beforeSend: function () {

        },
        complete: function (data) {
        },
        success: function (data) {
            var respuesta = (data !== "" ? data : "");
            if (metodocallback !== null) {
                metodocallback(respuesta);
            }
        },
        error: function (data) {
            divloader.style.display = 'none'
            console.log("Problemas con el envio del formulario");
            mostrarModalMensaje("Alerta", "Problemas de conexión, por favor inténtelo de nuevo")
        }
    });

}

function ws_get_conreversa(url, metodocallback,combo) {
    $.ajax({
        type: 'GET',
        url: url,
        beforeSend: function () {

        },
        complete: function (data) {
        },
        success: function (data) {
            var respuesta = (data !== "" ? data : "");
            if (metodocallback !== null) {
                metodocallback(respuesta);
            }
        },
        error: function (data) {
            divloader.style.display = 'none'
            (document.getElementById(combo).checked === true ? document.getElementById(combo).checked =false : document.getElementById(combo).checked =true)
            console.log("Problemas con el envio del formulario");
            mostrarModalMensaje("Alerta", "Problemas de conexión, por favor inténtelo de nuevo")
        }
    });

}