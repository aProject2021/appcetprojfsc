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
function ws_post_token(url, dato, metodocallback) {
    limpiarMensajesError()
    $.ajax({
        type: 'POST',
        contentType: "application/json",
        url: url,
        data: JSON.stringify(dato),
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") },
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
        dataType: "JSON",
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") },
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
            metodocallback(data)
        }
    });

}
function ws_delete(url, metodocallback) {
    $.ajax({
        type: 'DELETE',
        url: url,
        dataType: "JSON",
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") },
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
            metodocallback(data)
        }
    });

}
function ws_put(url, dato, metodocallback) {
    limpiarMensajesError()
    $.ajax({
        type: 'PUT',
        contentType: "application/json",
        url: url,
        data: JSON.stringify(dato),
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") },
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