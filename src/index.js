// let newRound = new LoginPage()
// newRound.render()

let stocksArr = {}
let currentStock = null
const calculateModal = document.querySelector("#calculate")
const formEl = modalDiv.querySelector("form")

ModalStocks.getSP500().then(data => {
    data.forEach(stock => {
        let newStock = new StockCard(stock)
        newStock.render()
        // popUpWindow(stock)
    })
})

// calls
const nextBtn = modalDiv.querySelector("#nextBtn")
const monthBtns = document.querySelector(".month-btns")
const sharePrice = document.querySelector("#shareValue")
const shareInput = document.querySelector("#shares")
const totalField = document.querySelector("#totalShareValue")
const mainDiv = document.querySelector(".main")

function monthlyData(stock, month){
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stock}&apikey=CKKX1N7YZOUYD6IV`)
    // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=ACN&apikey=demo`)
    .then(r => r.json())
    .then(data => {
        let monthData = data["Monthly Time Series"]
        let keysArray = Object.keys(monthData)
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
        } else if (month == "March") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-03"
            })
        } else if (month == "April") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-04"
            })
        } else if (month == "May") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-05"
            })
            } else if (month == "June") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-06"
            })
        } else if (month == "July") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-07"
            })
        } else if (month == "August") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-08"
            })
        } else if (month == "September") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-09"
            })
        } else if (month == "October") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-10"
            })
        } else if (month == "November") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-11"
            })
        } else if (month == "December") {
            monthD = keysArray.filter(x => {
                return x.substring(0,7) == "2019-12"
            })
        } 
        let stockChosen = monthData[monthD]
        let average = (~~stockChosen["2. high"] + ~~stockChosen["3. low"]) / 2
        stocksArr[stock] = {"average": average, "month": month}
        console.log("stocksArr: ", stocksArr)
        checkAmount()
        return average
    })
}




// will search through stocks using symbol
function searchStocks() {
    let allSpans = stocksMainDIV.querySelectorAll("span")
    allSpans.forEach(span => {
        let input = document.getElementById("myInput");
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
    let buttons = modal.querySelectorAll("button")
    buttons.forEach(button => {
        button.disabled = false
        button.style.backgroundColor = ""
        nextBtn.disabled = true
        nextBtn.style.backgroundColor = ""
        sharePrice.innerHTML = "<b>price</b>"
        shareInput.placeholder = "Number of stocks"
        shareInput.value = ""
        shareInput.disabled = true
        totalField.innerHTML = "$0"
    })
    modal.classList.toggle("show-modal");
}

// user should choose a month, amount of stocks
// function popUpWindow(stock){
//     formEl.addEventListener("click", async (evt) => {
//         evt.preventDefault()
//         let month = evt.target.name
//         if (evt.target.tagName == "BUTTON"){
//             shareInput.disabled = false
//             event.target.style.backgroundColor = "green"
//             event.target.disabled = true

//             monthBtns.querySelectorAll("button").forEach(button => button.disabled = true)

//             currentStock = stock.Symbol
//             let average = await monthlyData(currentStock, month)
//             sharePrice.innerHTML = `
//                 $${average} x 
//             `
//         }
//     })
// }
function popUpWindow(stock){
    // debugger
    console.log(formEl)
    formEl.addEventListener("click", async (evt) => {
        evt.preventDefault()
        let month = evt.target.name
        console.log(month)
        if (evt.target.tagName == "BUTTON"){
            shareInput.disabled = false
            event.target.style.backgroundColor = "green"
            event.target.disabled = true

            monthBtns.querySelectorAll("button").forEach(button => button.disabled = true)

            currentStock = stock.Symbol
            let average = await monthlyData(currentStock, month)
            sharePrice.innerHTML = `
                $${average} x 
            `
        }
    })

    // formEl.addEventListener("click", (evt) => {
    //     evt.preventDefault()
    //     let month = evt.target.name
    //     if (evt.target.tagName == "BUTTON"){
    //         shareInput.disabled = false
    //         event.target.style.backgroundColor = "green"
    //         event.target.disabled = true

    //         monthBtns.querySelectorAll("button").forEach(button => button.disabled = true)

    //         currentStock = stock.Symbol
    //         let average = monthlyData(currentStock, month)
    //         .then(data => {
    //             sharePrice.innerHTML = `
    //                 $${data} x 
    //             `
    //         })
    //     }
    // })
}

function shareTotal(){
    let input = shareInput.value
    if (input != ("" || 0)) {
        nextBtn.disabled = false
        nextBtn.style.backgroundColor = "green"
    } else {
        nextBtn.disabled = true 
        nextBtn.style.backgroundColor = ""
    }
    let price = stocksArr[currentStock].average
    let total = input * price
    totalField.innerHTML = `
        $${total}
    `
}

function nextB(){
    toggleModal()   
    let spanElements = mainDiv.querySelectorAll(".symbol")
    let spanArray = Array.from(spanElements)
    let i = spanArray.filter(s => s.innerHTML == currentStock)
    let cardChosen = i[0].parentElement.parentElement
    let sideStocksDiv = document.querySelector(".sidestocks")
    cardChosen.lastElementChild.remove()
    sideStocksDiv.append(cardChosen)
}

function checkAmount(){
    if(Object.keys(stocksArr).length == 2) {
        console.log("YES")
    }
}