

//
// let appleStocks = 30
let monthly = []
let months = []
// TIME_SERIES_MONTHLY.forEach(month => ()=> {
// let value = appleStocks * parseInt(month.close)
//  monthly.push(value)
// })
monthly = [3000, 2500, 2780, 3400, 3456]
month = ["Jan", "Fev", "Mar", "Apr", "May"]
//

getChart()




function getChart(){
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: month,
          datasets: [{
              label: 'Your portfolio investment throught the years',
              data: monthly,
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false,
                      suggestedMin: 1500,
                      suggestedMax: 5000,
                      callback: function(value, index, values) {
                        return '$' + value;
                    }
                  }
              }]
          }
      }
  });
}
