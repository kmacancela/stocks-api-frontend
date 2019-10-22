class StockCard {

  constructor(stock){
    this.name = stock.Name
    this.sector = stock.Sector
    this.symbol = stock.Symbol
    this.stockDIV = document.createElement('div')
    this.contentDIV = document.createElement('div')
    this.headerDIV = document.createElement('div')
    this.metaDIV = document.createElement('div')
    this.labelSPAN = document.createElement('span')
    this.buttonDIV = document.createElement('div')
    this.buyButton = document.createElement('button')

    this.buyButton.addEventListener("click", () => {
        ModalStocks.getStocks(this.symbol)
          .then(data => {
              // console.log("Monthly: ", data["Monthly Time Series"])
              // let monthlyData = data["Monthly Time Series"]
              // console.log(monthlyData["2019-10-21"])
          })

        // will trigger modal popup window
        if (event.target === this.buyButton) {
            toggleModal();
        }

        // to add data in modal
        popUpWindow(stock)
    })

  }
    //create elements

    render(){
      this.stockDIV.className = "card"
      this.contentDIV.className = "content"
      this.headerDIV.className = "header"
      this.headerDIV.innerText = this.name
      this.metaDIV.className = "meta"
      this.metaDIV.innerText = this.sector
      this.labelSPAN.className = "ui label"
      this.labelSPAN.innerHTML = this.symbol
      this.buttonDIV.className = "extra content"
      this.buyButton.className = "ui blue button"
      this.buyButton.innerText = "Buy Stock"

      this.buttonDIV.append(this.buyButton)
      this.contentDIV.append(this.headerDIV, this.metaDIV, this.labelSPAN)
      this.stockDIV.append(this.contentDIV, this.buttonDIV)
      stocksMainDIV.append(this.stockDIV)

      return stocksMainDIV
    }


    // adding an event listener for when user clicks on a buy button

}
