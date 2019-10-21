const bodyEl = document.createElement("body")
// for modal
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".close-button")
const modalDiv = document.querySelector(".modal-content")
const sidenav = document.querySelector(".sidenav")

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

function monthlyData(stock, year, month){
    
    return null
}

function getStocks(symbol){
    // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
    .then(r => r.json())
    .then(data => {
        console.log("Monthly: ", data["Monthly Time Series"])
        let monthlyData = data["Monthly Time Series"]

        console.log(monthlyData["2019-10-21"])
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
    contentDIV.className = "content"
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

    // adding an event listener for when user clicks on a buy button
    buyButton.addEventListener("click", () => {
        console.log("Stock:", stock);
        getStocks(stock.Symbol)

        // will trigger modal popup window
        if (event.target === buyButton) {
            toggleModal();
        }  
        
        // to add data in modal
        popUpWindow(stock)

        
    })
}

// will search through stocks using symbol
function searchStocks() {
    let stocksMainDIV = document.getElementById('stocksMainDIV')
    // let allStockCards = document.getElementsByClassName('card')
    let allSpans = stocksMainDIV.querySelectorAll("span")
    allSpans.forEach(span => {
        let input = document.getElementById("myInput");
        // converts input to uppercase, for filtering purposes
        let filter = input.value.toUpperCase();
        txtValue = span.textContent
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            span.parentElement.parentElement.style.display = ""
        } else {
            span.parentElement.parentElement.style.display = "none"
        }
    })
}

// modal popup box test
function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal()
    }
}

closeButton.addEventListener("click", toggleModal)
window.addEventListener("click", windowOnClick)

// when user chooses a stock to add to nav bar or to update
function popUpWindow(stock){
    // modalDiv.innerHTML += `<br> ${stock.Symbol}`
    // console.log(modalDiv)
    let year = "2019"
    let jan = document.querySelector("#jan")
    console.log(modalDiv)

    jan.addEventListener("click", () => {
        toggleModal()
        sidenav.textContent = "HIIIIIIII"
    })
}

