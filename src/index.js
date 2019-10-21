

let newRound = new LoginPage()
newRound.render()

function monthlyData(stock, year, month) {

    return null
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
function popUpWindow(stock) {
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
