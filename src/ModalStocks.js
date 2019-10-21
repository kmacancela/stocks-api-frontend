class ModalStocks {

    static getSP500() {
      return fetch(proxyUrl + url).then((r) => r.json())
    }

    static getStocks(stockSymbol) {
        // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=CKKX1N7YZOUYD6IV`)
        return fetch(alphaURL + stockSymbol + apiKey).then(r => r.json())
            
    }




}
