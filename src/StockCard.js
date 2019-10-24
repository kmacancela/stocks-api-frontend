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
      toggleModal(stock.Symbol);
    })

  }

    render(){
      this.stockDIV.className = "card"
      this.contentDIV.className = "content"
      this.headerDIV.className = "header"
      this.headerDIV.innerText = this.name
      this.metaDIV.className = "meta"
      this.metaDIV.innerText = this.sector
      this.labelSPAN.className = "ui label symbol"
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

}
