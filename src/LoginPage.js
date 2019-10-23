class LoginPage {

    constructor() {
        this.loginDiv = document.createElement('div')
        this.h1 = document.createElement('h1')
        this.h3 = document.createElement('h3')
        this.easyButton = document.createElement('button')
        this.brake = document.createElement('br')
        this.mediumButton = document.createElement('button')
        this.brake2 = document.createElement('br')
        this.hardButton = document.createElement('button')


        this.easyButton.addEventListener('click', () => {
            startingAccount = 20000
            stocksMainDIV.innerHTML = ""

            ModalStocks.getSP500()
            .then(data => {
                data.forEach(stock => {

                    let newStock = new StockCard(stock)
                    newStock.render()
                })
            })
        })

        this.mediumButton.addEventListener('click', () => {
            startingAccount = 10000
            stocksMainDIV.innerHTML = ""

            ModalStocks.getSP500().then(data => {
                data.forEach(stock => {
                    // displayTitle(stock);
                    let newStock = new StockCard(stock)
                    newStock.render()
                })
            })
        })

        this.hardButton.addEventListener('click', () => {
            startingAccount = 5000
            stocksMainDIV.innerHTML = ""

            ModalStocks.getSP500().then(data => {
                data.forEach(stock => {
                    // displayTitle(stock);
                    let newStock = new StockCard(stock)
                    newStock.render()
                })
            })
        })

    }

    render() {
        this.loginDiv.className = "login"
        this.h1.innerText = 'Start a new game'
        this.h3.innerText = 'Choose your level'
        this.easyButton.className = 'btn btn-primary btn-block btn-large'
        this.mediumButton.className = 'btn btn-primary btn-block btn-large'
        this.hardButton.className = 'btn btn-primary btn-block btn-large'
        this.easyButton.innerText = "Easy"
        this.mediumButton.innerText = "Medium"
        this.hardButton.innerText = "Hard"

        this.loginDiv.append(this.h1, this.h3, this.easyButton, this.brake, this.mediumButton, this.brake2, this.hardButton)
        stocksMainDIV.append(this.loginDiv)

        return stocksMainDIV
    }

    static scoreAndGame(){
      let newGameButton = document.querySelector('#buttonNewGame')
      let scoreButton = document.querySelector('#buttonScore')

      newGameButton.addEventListener('click', () => {
        stocksMainDIV.innerHTML = ""
        let newRound = new LoginPage()
        newRound.render()
      })

      scoreButton.addEventListener('click', () => {
        stocksMainDIV.innerHTML = ""
        ModalStocks.easyScore().then(scoresObj => {
          scoresObj.forEach(scoreObj => {
            let newScore = new ScoreTable(scoreObj)
            newScore.render()
          })
        })
      })
    }
}
