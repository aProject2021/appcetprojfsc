var mostrarDashMatriculaPorGenero = (data) => {
  if (data.estado == 200) {
    let datos = data.data
    let listaData = [];
    let femenino = datos.find(elements => elements.indice === 'F')
    let masculino = datos.find(elements => elements.indice === 'M')
    listaData.push(masculino !== undefined ? masculino.valor : 0)
    listaData.push(femenino !== undefined ? femenino.valor : 0)

    let topMatriculaData = {
      labels: ["Masculino", "Femenino"],
      datasets: [{
        label: 'Matriculas por género',
        data: listaData,
        backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
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
    if ($("#dash-matricula-genero").length) {
      var barChartCanvas = $("#dash-matricula-genero").get(0).getContext("2d");
      var barChart = new Chart(barChartCanvas, {
        type: 'pie',
        data: topMatriculaData,
        options: options
      });
    }
  }
}
var consultarDashGenero = () => {
ws_get(url_http + "dashboard/matricula/genero?in_anio="+document.getElementById("cbo-anio").value, mostrarDashMatriculaPorGenero)
}
consultarDashGenero()