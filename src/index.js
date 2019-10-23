// let newRound = new LoginPage()
// newRound.render()
<<<<<<< HEAD
=======

let stocksArr = {}
const calculateModal = document.querySelector("#calculate")
const formEl = modalDiv.querySelector("form")

ModalStocks.getSP500().then(data => {
    data.forEach(stock => {
        // displayTitle(stock);
        let newStock = new StockCard(stock)
        newStock.render()
    })
})

// calls
const nextBtn = modalDiv.querySelector("#nextBtn")

let numEl = document.createElement("input")
    numEl.value = "Enter num of stocks"
    modalDiv.append(numEl)
>>>>>>> master

function monthlyData(stock, month){
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stock}&apikey=CKKX1N7YZOUYD6IV`)
    // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=ACN&apikey=demo`)
    .then(r => r.json())
    .then(data => {
        let monthlyData = data["Monthly Time Series"]
        // let chosenMonthData = monthlyData
        console.log(monthlyData);
        let keysArray = Object.keys(monthlyData)
        console.log("Month passed: ", month)
        let monthD
        if (month == "January"){
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-01"
            })
        } else if (month == "February") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-02"
            })
            console.log("TEST: ", monthD)
        }
        console.log("MonthD: ", monthD)
        let stockChosen = monthlyData[monthD]
        console.log("Chosen Month Data:", stockChosen)

        let average = (~~stockChosen["2. high"] + ~~stockChosen["3. low"]) / 2.00
        // console.log("Average: ", average)
        // stocksArr.push({"Symbol": stock, "Average": average, "Month": month})
        // stocksArr.push(stock: {"Average": average, "Month": month})
        stocksArr[stock] = {"average": average, "month": month}
        console.log("Stock Arr: ", stocksArr)
        return average
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
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
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

// user should choose a month, amount of stocks
function popUpWindow(stock){
    formEl.addEventListener("click", async (evt) => {
        evt.preventDefault()
        let month = evt.target.name
        let average
        if (month != ""){
            let stockSymbol = stock.Symbol
            let average = await monthlyData(stockSymbol, month)
            console.log("Averageline 104: ", average)
            // .then(data => {
            //     average = data
            //     console.log("Data: ", data)
            // })

<<<<<<< HEAD
    let numEl = document.createElement("input")
        numEl.value = "Enter num of stocks"

    modalDiv.append(numEl)
=======
>>>>>>> master

        }
    })
}
