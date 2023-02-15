var ctx = document.getElementById('Chart-softhabilities').getContext('2d');
var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
            labels: ['Creatividad', 'Objetividad', 'Efectividad', 'Organización', 'Liderazgo', 'Autonomía'],
            datasets: [{
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: 'green',
                  borderColor: 'black',
            }]
      },
      options: {
            scales: {
                  xAxes: [{
                        gridLines: {
                              display: false
                        },
                        ticks: {
                              display: false
                        }
                  }],
                  yAxes: [{
                        gridLines: {
                              display: false
                        },
                        ticks: {
                              display: true
                        }
                  }]
            },
            legend: {
                  display: false
            }
      }

});