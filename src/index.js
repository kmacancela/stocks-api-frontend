const bodyEl = document.createElement("body")
// "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"

const url = "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'


getSP500()

function getSP500(){
    fetch(proxyUrl + url)
    .then(r => r.json())
    .then(data => {
      data.forEach(stock => {
        displayTitle(stock);
      })
    })
}

function getStocks(symbol){
    // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
    .then(r => r.json())
    .then(data => {
      console.log(data["Monthly Time Series"])

        // let arrayOfStocks = []
        // data.bestMatches.forEach(dataPiece => {
        //     arrayOfStocks.push(dataPiece)
        // })
        // arrayOfStocks.forEach(stock => {
        //     displayTitle(stock)
        // })
    })
}

function displayTitle(stock){
    //create elements
    let stocksMainDIV = document.getElementById('stocksMainDIV')
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
}

// function addStockToDOM(stock){
//     console.log(stock.contains("name"))
//     let h1El = document.createElement("h1")
//         h1El.textContent = stock.name
//     bodyEl.append(h1El)
//     console.log(bodyEl)
// }
