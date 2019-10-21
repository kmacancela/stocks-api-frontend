const bodyEl = document.createElement("body")
// "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"

const url = "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

let years = [1999, 2003, 2006, 2012, 2016, 2018]


// getSP500()
// displayMonths()

let newGame = new LoginPage()
newGame.render()




function getSP500(){
    fetch(proxyUrl + url)
    .then(r => r.json())
    .then(data => {
      data.forEach(stock => {
        displayTitle(stock);
      })
    })
}



// Fetch stock based on the selection
function getStocks(symbol){
    // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
    .then(r => r.json())
    .then(data => {
      debugger
      let months = Object.keys(data["Monthly Time Series"])
      let lastMonth = parseInt(months[0].slice(0,4))
      let firstMonth = parseInt(months[months.length-1].slice(0,4))
      return console.log(range(firstMonth, lastMonth))
    })
}


// Displays a selection of months inside the main DIV

function displayMonths(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    stocksMainDIV.innerHTML = ""

    months.forEach(month => {
    let monthButton = document.createElement('a')
    let stockDIV = document.createElement('div')

    stockDIV.className = "card"
    monthButton.className = "testbutton"
    monthButton.innerText = month
    stockDIV.append(monthButton)
    stocksMainDIV.append(stockDIV)

    monthButton.addEventListener('click', (evt) =>{


    })
  })
}




// Creates all stocks inside the main DIV
function displayTitle(stock){
    //create elements
    let stockDIV = document.createElement('div')
    let contentDIV = document.createElement('div')
    let headerDIV = document.createElement('div')
    let metaDIV = document.createElement('div')
    let labelSPAN = document.createElement('span')
    let buttonDIV = document.createElement('div')
    let buyButton = document.createElement('button')

    stockDIV.className = "card"
    contentDIV.calssName = "content"
    headerDIV.className = "header"
    headerDIV.innerText = stock.Name
    metaDIV.className = "meta"
    metaDIV.innerText = stock.Sector
    labelSPAN.className = "ui label"
    labelSPAN.innerHTML = stock.Symbol
    buttonDIV.className = "extra content"
    buyButton.className = "ui blue button"
    buyButton.innerText = "Buy Stock"

    buttonDIV.append(buyButton)
    contentDIV.append(headerDIV, metaDIV, labelSPAN)
    stockDIV.append(contentDIV, buttonDIV)
    stocksMainDIV.append(stockDIV)

    buyButton.addEventListener("click", () => {
      console.log(stock);
      getStocks(stock.Symbol)
    })

  // Range function
    function range(rangeStart, rangeStop) {
      var range = [];
      for (var i = rangeStart; i <= rangeStop; i++) {
        range.push(i);
      }
      return range
    }


}
