class StockCard {

  constructor(stock){
    this.name = stock.Name
    this.sector = stock.Sector
    this.symbol = stock.Symbol
    this.stockDIV = document.createElement('div')
    this.contentDIV = document.createElement('div')
    this.headerDIV = document.createElement('div')
    this.labelSPAN = document.createElement('span')

    this.stockDIV.addEventListener("click", () => {
      toggleModal(stock.Symbol);
    })
  }

  render(){
    this.stockDIV.className = "card"
    this.contentDIV.className = "content"
    this.headerDIV.className = "header"
    this.headerDIV.innerText = this.name
    this.labelSPAN.innerHTML = this.symbol
    this.contentDIV.append(this.headerDIV, this.labelSPAN)
    this.stockDIV.append(this.contentDIV)
    stocksMainDIV.append(this.stockDIV)
    return stocksMainDIV
  }
}
