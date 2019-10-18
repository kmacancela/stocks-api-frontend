const bodyEl = document.createElement("body")
const stocksDiv = document.querySelector(".stocks")
// "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"

const url = "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

getStocks()
getSP500()

function getSP500(){
    fetch(proxyUrl + url)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        data.forEach(dataPiece => {
            console.log(dataPiece.Symbol)
        })
    })
}

function getStocks(){
    // fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=CKKX1N7YZOUYD6IV")
    fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo")
    .then(r => r.json())
    .then(data => {
        let arrayOfStocks = []
        data.bestMatches.forEach(dataPiece => {
            arrayOfStocks.push(dataPiece)
        })
        arrayOfStocks.forEach(stock => {
            // let updatedStock = JSON.parse(stock)[0]
            // console.log(updatedStock)
            // console.log(stock["1. symbol"])
            displayTitle(stock)
        })
    })
}

function displayTitle(stock){
    let name = stock["2. name"]
    let type = stock["3. type"]
    let symbol = stock["1. symbol"]
    let region = stock["4. region"]

    stocksDiv.innerHTML +=
    `
    <div class="card" data-id="${symbol}">
        <div class="content">
            <div class="header">
                ${name}
            </div>
            <div class="meta">
                ${type}
            </div>
            <div class="description">
                ${symbol}
            </div>
            <span class="ui label">
                ${region}
            </span>
        </div>
        <div class="extra content">
            <div class="ui blue button">Buy Ticket</div>
        </div>
    </div>
    `
}

// function addStockToDOM(stock){
//     console.log(stock.contains("name"))
//     let h1El = document.createElement("h1")
//         h1El.textContent = stock.name
//     bodyEl.append(h1El)
//     console.log(bodyEl)
// }
