class ScoreTable {

  constructor(scoreLevel) {
    this.tableDIV = document.createElement('div')
    this.h2 = document.createElement('h2')
    this.table = document.createElement('table')
    this.tableRowHead = document.createElement('tr')
    this.tableHeadName = document.createElement('th')
    this.tableHeadPortfolio = document.createElement('th')

    this.tableDIV.className = "table"
    this.h2.innerText = `${scoreLevel.difficulty} Level`
    this.tableHeadName.innerText = 'Name'
    this.tableHeadPortfolio.innerText = 'Portfolio $'

    this.tableRowHead.append(this.tableHeadName, this.tableHeadPortfolio)
    this.table.append(this.tableRowHead)


    scoreLevel.games.forEach((game) => {
      let tr = document.createElement('tr')
      let tdName = document.createElement('td')
      let tdPortfolio = document.createElement('td')

      tdName.innerText = game.username
      tdPortfolio.innerText = `$ ${game.score}.00`

      tr.append(tdName, tdPortfolio)
      this.table.append(tr)
    })

    this.tableDIV.append(this.h2, this.table)
  }


  render(){
    stocksMainDIV.append(this.tableDIV)
    return stocksMainDIV

  }

}
