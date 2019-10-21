class LoginPage {

  constructor() {
    this.loginDiv = document.createElement('div')
    this.h1 = document.createElement('h1')
    this.h3 = document.createElement('h3')
    this.easyButton = document.createElement('button')
    this.mediumButton = document.createElement('button')
    this.hardButton = document.createElement('button')
    this.brake = document.createElement('br')
    this.brake2 = document.createElement('br')

    this.easyButton.addEventListener('click', () => {
      startingAccount = 20000
      displayMonths()
      console.log(this.easyButton);
    })

    this.mediumButton.addEventListener('click', () => {
      startingAccount = 10000
      displayMonths()
      console.log(this.mediumButton);
    })

    this.hardButton.addEventListener('click', () => {
      startingAccount = 5000
      displayMonths()
      console.log(this.hardButton);
    })
  }

  render(){
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

}


  // function loginPage(){
  //
  //   let loginDiv = document.createElement('div')
  //   loginDiv.className = "login"
  //   let h1 = document.createElement('h1')
  //   h1.innerText = 'Start a new game'
  //   let h3 = document.createElement('h3')
  //   h3.innerText = 'Choose your level'
  //   let easyButton = document.createElement('button')
  //   let mediumButton = document.createElement('button')
  //   let hardButton = document.createElement('button')
  //   easyButton.className = 'btn btn-primary btn-block btn-large'
  //   mediumButton.className = 'btn btn-primary btn-block btn-large'
  //   hardButton.className = 'btn btn-primary btn-block btn-large'
  //   easyButton.innerText = "Easy"
  //   mediumButton.innerText = "Medium"
  //   hardButton.innerText = "Hard"
  //   let brake = document.createElement('br')
  //   let brake2 = document.createElement('br')
  //
  //   easyButton.addEventListener('click', () => {
  //     displayMonths()
  //   })
  //
  //   mediumButton.addEventListener('click', () => {
  //     displayMonths()
  //   })
  //
  //   hardButton.addEventListener('click', () => {
  //     displayMonths()
  //   })
  //
  //   loginDiv.append(h1, h3, easyButton, brake, mediumButton, brake2, hardButton)
  //   stocksMainDIV.append(loginDiv)
  //
  //

    // stocksMainDIV.innerHTML = `
    //   <div class="login">
    //   	<h1>Start a new game</h1>
    //       <!-- <form method="post">
    //       	<input type="text" name="u" placeholder="Username"  />
    //         <input type="text" name="p" placeholder="Email"  />
    //       </form> -->
    //       <h3>Choose your level</h3>
    //       <button type="submit" class="btn btn-primary btn-block btn-large" >Easy</button>
    //       <br>
    //       <button type="submit" class="btn btn-primary btn-block btn-large" >Medium</button>
    //       <br>
    //       <button type="submit" class="btn btn-primary btn-block btn-large" >Hard</button>
    //   </div>
    // `


  // }
