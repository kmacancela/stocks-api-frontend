let stocksMainDIV = document.getElementById('stocksMainDIV')
let startingAccount = 0

const bodyEl = document.createElement("body")
    // for modal
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".close-button")
const modalDiv = document.querySelector(".modal-content")
const sidenav = document.querySelector(".sidenav")

const searchBar = document.querySelector("#myInput")
const balance = document.querySelector(".balance")
const doneBtn = document.querySelector(".done")
const newGameBtn = document.querySelector("#buttonNewGame")
const scoreboardBtn = document.querySelector("#buttonScore")

// "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"

const url = "https://pkgstore.datahub.io/core/s-and-p-500-companies/constituents_json/data/64dd3e9582b936b0352fdd826ecd3c95/constituents_json.json"
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const alphaURL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=`
const apiKey = `&apikey=CKKX1N7YZOUYD6IV`

const modalTutorial = document.querySelector(".modal-tutorial")
const modalDivTutorial = document.querySelector(".modal-content-tutorial")
