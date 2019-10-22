let newRound = new LoginPage()
newRound.render()

function monthlyData(stock, month){
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=ACN&apikey=CKKX1N7YZOUYD6IV`)
    .then(r => r.json())
    .then(data => {
        let monthlyData = data["Monthly Time Series"]
        let chosenMonthData = monthlyData
        let keysArray = Object.keys(chosenMonthData)
        let monthD = keysArray.filter(x => {
            return x.substring(0,7) == "2019-10"
        })
        console.log(monthD)
        console.log("Chosen Month Data:", monthlyData[monthD])
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
function popUpWindow(stock){
    // modalDiv.innerHTML += `<br> ${stock.Symbol}`
    // console.log(modalDiv)
    let year = "2019"
    let jan = document.querySelector("#jan")
    // let jan2 = documen
    // let monthBtns = modalDiv.querySelectorAll("button")
    // console.log(monthBtns)
    // console.log(modalDiv)

    // jan.addEventListener("click", () => {
    //     toggleModal()
    //     sidenav.textContent = "HIIIIIIII"
    // })

    jan.addEventListener("click", evt => {
        console.log(evt.target.id)
        // if (evt.target.id = "jan"){
        //     console.log("Hi")
        // }
    })

    let numEl = document.createElement("input")
        numEl.value = "Enter num of stocks"
    
    modalDiv.append(numEl)

    let nextBtn = modalDiv.querySelector("#nextBtn")
    // console.log("Next: ", nextBtn)
    nextBtn.addEventListener("click", evt => {
        console.log("Next:", nextBtn)
        monthlyData("ACN", "January")
    })
}
