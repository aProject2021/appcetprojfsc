"use strict";

$(document).ready(function () {

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  // Select2

  // $(".select2").select2({
  //   theme: 'bootstrap4',
  // });
  //
  // $(".select2-multiple").select2({
  //   theme: 'bootstrap4',
  // });

  // End select2

  $("#show-resumen").click(function () {
    $("#content-sorteo").hide();
    $("#content-resumen").show();
  });

  $("#show-sorteo").click(function () {
    $("#content-sorteo").show();
    $("#content-resumen").hide();
  });

  // Admin Dashboard  active item sidebar
  $(".sidebar-admin button").click(function () {
    $(".active").removeClass("active-item-sidebar");
  });
  // Admin Dashboard  active item sidebar

  // Admin panel
  $("#toggle-btn-sidebar").click(function () {
    $("#admin-panel").toggleClass("ml-panel ml-panel-0");
  });
  // End admin panel

  // SHOW HIDE PANELS
  $(".showDashboard").click(function () {
    $("#admin-panel").load("dashboard.html");
  });
  $(".showMatricula").click(function () {
    $("#admin-panel").load("matricula.html");
  });
  $(".showFamiliaProfesional").click(function () {
    console.log("Ingresa")
    $("#admin-panel").load("familiaprofesional.html");
  });
  $(".showOpcionOcupacional").click(function () {
    $("#admin-panel").load("opcionocupacional.html");
  });
  $(".showModulo").click(function () {
    $("#admin-panel").load("modulo.html");
  });
  $(".showDocentes").click(function () {
    $("#admin-panel").load("docente.html");
  });

  $("#btn-nuevo-docente").click(function () {
    $("#admin-panel").load("form_docente.html");
  });
  $(".btn-registro-docente").click(function () {
    $("#admin-panel").load("docente.html");
  });

  $("#btn-nuevo-modulo").click(function () {
    $("#admin-panel").load("form_modulo.html");
  });
  $(".btn-registro-modulo").click(function () {
    $("#admin-panel").load("modulo.html");
  });
  $("#btn-nuevo-opcion").click(function () {
    $("#admin-panel").load("form_opcionocupacional.html");
  });
  $(".btn-registro-opcion").click(function () {
    $("#admin-panel").load("opcionocupacional.html");
  });
  
 
  $("#btn-nuevo-matricula").click(function () {
    $("#admin-panel").load("form_matricula.html");
  });
  $(".btn-registro-matricula").click(function () {
    $("#admin-panel").load("matricula.html");
  });
  $("#btn-nuevo-estudiante").click(function () {
    $("#admin-panel").load("form_estudiante.html");
  });
  $(".btn-registro-estudiante").click(function () {
    $("#admin-panel").load("matricula.html");
  });
  // END SHOW HIDE PANELS

  $('#imgFileLogoEmpresa').change(function () {
    var curElement = $('#photoProfile');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
  // END UPLOAD PICTURE PROFILE

  // Show hide Tag
  $('#checkContratacionPublicaNp').click(function () {
    $("#tag-arbitro").toggleClass("flex hide");
  });
  // End Show hide Tag
  // End admin dashboard

});

// admin btn sidebar togle menu
const btnToggle = document.querySelector('#toggle-btn-sidebar');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar-admin').classList.toggle('active');
  console.log(document.getElementById('sidebar-admin'))
});

// End admin btn sidebar togle menu

