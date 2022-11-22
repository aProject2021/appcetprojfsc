function ws_post(url, dato, metodocallback) {
    limpiarMensajesError()
    $.ajax({
        type: 'POST',
        contentType: "application/json",
        url: url,
        data: JSON.stringify(dato),
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
            console.log(data)
            console.log("Problemas con el envio del formulario");
            if (data.status == 422) {
                if (data.responseJSON.data.length === undefined) {
                    let span_error = document.getElementById("error_" + data.responseJSON.data.value)
                    span_error.innerHTML = data.responseJSON.data.mensaje
                    span_error.style.display = "block"
                } else {
                    data.responseJSON.data.forEach((error) => {
                        let span_error = document.getElementById("error_" + error.value)
                        span_error.innerHTML = error.mensaje
                        span_error.style.display = "block"

                    })
                }

            } else {
                mostrarModalMensaje("Alerta", data.responseJSON.mensaje_cliente, "warning")
            }

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

function ws_get_conreversa(url, metodocallback, combo) {
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
                (document.getElementById(combo).checked === true ? document.getElementById(combo).checked = false : document.getElementById(combo).checked = true)
            console.log("Problemas con el envio del formulario");
            mostrarModalMensaje("Alerta", "Problemas de conexión, por favor inténtelo de nuevo")
        }
    });

}