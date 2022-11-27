var mostrarDashMatriculaPorGenero = (data) => {
  if (data.estado == 200) {
    let datos = data.data
    let listaData = [];
    let enero = datos.find(elements => elements.indice === '1')
    let febrero = datos.find(elements => elements.indice === '2')
    let marzo = datos.find(elements => elements.indice === '3')
    let abril = datos.find(elements => elements.indice === '4')
    let mayo = datos.find(elements => elements.indice === '5')
    let junio = datos.find(elements => elements.indice === '6')
    let julio = datos.find(elements => elements.indice === '7')
    let agosto = datos.find(elements => elements.indice === '8')
    let septiembre = datos.find(elements => elements.indice === '9')
    let octubre = datos.find(elements => elements.indice === '10')
    let noviembre = datos.find(elements => elements.indice === '11')
    let diciembre = datos.find(elements => elements.indice === '12')
    listaData.push(enero !== undefined ? enero.valor : 0)
    listaData.push(febrero !== undefined ? febrero.valor : 0)
    listaData.push(marzo !== undefined ? marzo.valor : 0)
    listaData.push(abril !== undefined ? abril.valor : 0)
    listaData.push(mayo !== undefined ? mayo.valor : 0)
    listaData.push(junio !== undefined ? junio.valor : 0)
    listaData.push(julio !== undefined ? julio.valor : 0)
    listaData.push(agosto !== undefined ? agosto.valor : 0)
    listaData.push(septiembre !== undefined ? septiembre.valor : 0)
    listaData.push(octubre !== undefined ? octubre.valor : 0)
    listaData.push(noviembre !== undefined ? noviembre.valor : 0)
    listaData.push(diciembre !== undefined ? diciembre.valor : 0)

    let topMatriculaData = {
      labels: ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre",
    "Noviembre","Diciembre"],
      datasets: [{
        label: 'Donaciones',
        data: listaData,
        backgroundColor: ['rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
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
    if ($("#dash-mes-donacion").length) {
      var barChartCanvas = $("#dash-mes-donacion").get(0).getContext("2d");
      var barChart = new Chart(barChartCanvas, {
        type: 'line',
        data: topMatriculaData,
        //options: options
      });
    }
  }
}
ws_get(url_http + "dashboard/donacion/mes", mostrarDashMatriculaPorGenero)