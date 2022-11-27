var mostrarDashMatriculaPorEdad = (data) => {
  if (data.estado == 200) {
    let datos = data.data
    let datos_length = datos.length
    let colores = ['rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'];
    let colorBorde = [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ];
    let listaNombre = [];
    let listaColor = [];
    let listaColorBorde = [];
    let listaData = [];
    for (let i = 0; i < datos_length; i++) {
      listaNombre.push(datos[i].indice);
      listaColor.push(colores[i]);
      listaColorBorde.push(colorBorde[i]);
      listaData.push(datos[i].valor)
    }
    let topMatriculaData = {
      labels: listaNombre,
      datasets: [{
        label: 'Matriculas por edad',
        data: listaData,
        backgroundColor: listaColor,
        borderColor: listaColorBorde,
        borderWidth: 1,
        fill: false
      }]
    };
    var options = {
      scales: {        
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
  
    };
    if ($("#dash-matricula-edad").length) {
      var barChartCanvas = $("#dash-matricula-edad").get(0).getContext("2d");
      var barChart = new Chart(barChartCanvas, {
        type: 'polarArea',
        data: topMatriculaData,
        options: options
      });
    }
  }
}
ws_get(url_http + "dashboard/matricula/edad", mostrarDashMatriculaPorEdad)