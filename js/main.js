"use strict";

$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

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

$("#show-resumen").click(function() {
  $("#content-sorteo").hide();
  $("#content-resumen").show();
});

$("#show-sorteo").click(function() {
  $("#content-sorteo").show();
  $("#content-resumen").hide();
});

// Admin Dashboard  active item sidebar
$(".sidebar-admin button").click(function(){
  $(".active").removeClass("active-item-sidebar");
});
// Admin Dashboard  active item sidebar

// Admin panel
$("#toggle-btn-sidebar").click(function(){
     $("#admin-panel").toggleClass("ml-panel ml-panel-0");
 });
// End admin panel

// SHOW HIDE PANELS
$(".showDashboard").click(function() {
  $("#dashboard-panel").show();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".showMatricula").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").show();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".showFamiliaProfesional").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").show();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".showOpcionOcupacional").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").show();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".showModulo").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").show();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".showDocentes").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").show();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});

$("#btn-nuevo-docente").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").show();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".btn-registro-docente").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").show();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});

$("#btn-nuevo-modulo").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").show();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".btn-registro-modulo").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").show();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$("#btn-nuevo-opcion").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").show();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".btn-registro-opcion").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").show();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$("#btn-nuevo-familia").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").show();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$(".btn-registro-familia").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").show();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$("#btn-nuevo-matricula").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").show();
  $("#estudiante-registro-panel").hide();
});
$(".btn-registro-matricula").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").show();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").hide();
});
$("#btn-nuevo-estudiante").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").hide();
  $("#estudiante-registro-panel").show();
});
$(".btn-registro-estudiante").click(function() {
  $("#dashboard-panel").hide();
  $("#matricula-panel").hide();
  $("#familia-profesional-panel").hide();
  $("#opcion-ocupacional-panel").hide();
  $("#modulo-panel").hide();
  $("#docente-panel").hide();
  $("#docente-registro-panel").hide();
  $("#modulo-registro-panel").hide();
  $("#opcion-ocupacional-registro-panel").hide();
  $("#familia-profesional-registro-panel").hide();
  $("#matricula-registro-panel").show();
  $("#estudiante-registro-panel").hide();
});
  // END SHOW HIDE PANELS

  $('#imgFileLogoEmpresa').change(function(){
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
     $('#checkContratacionPublicaNp').click(function() {
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

