// const BASE_URL = "http://127.0.0.1:3000/"
let mainContainer=document.getElementById('main-container')

let body=document.querySelector('body')
body.className="main"
let mainHeading=document.createElement('h2')
mainHeading.className="side-label"
let leftCard=document.createElement('div')
leftCard.className="card-info"

let rightSide=document.getElementById('side-bar')

let mainObj={}
let mainCatg={}
let globalNav=undefined
let championId={}
let globalListId={}
let currentUser={}
let userLists=[]

// function userLogIn() {
//     let userLogIn = document.getElementById("log-in")

//     userLogIn.innerHTML +=
//     `
//     <center>
//     <h1>Champions of</h1> <img src="img/backgrounds/lol-logo-rendered-hi-res.png" width="300" height="150">
//     <h3>Your resident 'liker'!</h3>
//     <h4>Click on your favorite champions to 'like' them to get them added to your account!</h4>
//     </center>
//     `
// }

// function createForm() {
//     let usersForm = document.getElementById("users-form")

//     usersForm.innerHTML +=
//     `
//     <center>
//     <form>
//     Name: <input type="text" id="name">
//     Email: <input type="text" id="email">
//     Username: <input type="text" id="username">
//     <input type="submit" value="Sign up!">
//     </form>
//     </center>
//     `

//     usersForm.addEventListener("submit", signUp)
// }

// function signUp() {
//     event.preventDefault();
//     let name = document.getElementById("name").value
//     let email = document.getElementById("email").value
//     let username = document.getElementById("username").value

//     let user = {
//         name: name,
//         email: email,
//         username: username
//     }

//     fetch(`${BASE_URL}/users`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })

//     .then(resp => resp.json())
//     .then(response => {
//         currentUser = response  
//          if (response.id) {
//             mainContainer.id="main-container"
//             startMainPage()
//          }
//     })
// }
let signUpAction = () => {
    body.className="login"
    mainContainer.innerHTML=""
    mainContainer.id="main-container"
    body.className="login"
    let signUpPopup=document.createElement('div')
    signUpPopup.className="signup-form-popup"
    let signupForm=document.createElement('form')
    signupForm.className="form-container"
    signupForm.id="signup-form"
    let label=document.createElement('h2')
    label.innerText="Sign Up"
    let nameInput=document.createElement('input')
    nameInput.placeholder="Name"
    nameInput.name="name"
    nameInput.type="text"
    let emailInput=document.createElement('input')
    emailInput.placeholder="Email"
    emailInput.name="email"
    emailInput.type="text"
    let usernameInput=document.createElement('input')
    usernameInput.placeholder="User Name"
    usernameInput.name="username"
    usernameInput.type="text"
    let createAcct=document.createElement("BUTTON")
    createAcct.type="submit"
    createAcct.class="btn"
    createAcct.innerText="Create Account!"


 
    mainContainer.innerHTML=""
    mainContainer.id="main-container-3"
    body.className="login"
    let logInPopup=document.createElement('div')
    logInPopup.className="login-form-popup"
    let logInForm=document.createElement('form')
      
    logInForm.className="form-container"
    logInForm.id="signup-form"
    let labelLogin=document.createElement('h2')
    labelLogin.innerText="Login"
    let nameInputLogin=document.createElement('input')
    nameInputLogin.placeholder="Name"
    nameInputLogin.name="name"
    nameInputLogin.type="text"
    let emailInputLogin=document.createElement('input')
    emailInputLogin.placeholder="Email"
    emailInputLogin.name="email"
    emailInputLogin.type="text"
    let nameInputLoginF=document.createElement('input')
    nameInputLoginF.placeholder="User Name"
    nameInputLoginF.name="username"
    nameInputLoginF.type="text"
    let login=document.createElement("BUTTON")
    login.type="submit"
    login.class="btn"
    login.innerText="Login!"


    logInForm.append(labelLogin, nameInputLogin, emailInputLogin, nameInputLoginF, login)
    logInPopup.append(logInForm)
    mainContainer.append(logInPopup)

   signupForm.append(label, nameInput, emailInput, usernameInput, createAcct)
   signUpPopup.append(signupForm)
   mainContainer.append(signUpPopup)

 
   signupForm.addEventListener("submit", (e) => {
    
        e.preventDefault()
        body.className="main"
        let name=e.target.name.value
        let username=e.target.username.value
        fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             },
             body: JSON.stringify({
                 name: name,
                 username: username
             })
        })
        .then(resp => resp.json())
        .then(response => {
           currentUser = response  
            if(response.id) {
                mainContainer.id="main-container"
            startMainPage()
            }
        })
        
    })


    logInForm.addEventListener("submit", (evt) => {
        evt.preventDefault()
        console.log("click")
    
        let username=evt.target.username.value
        fetch(`${BASE_URL}/users/${currentUser}`)
        .then(resp => resp.json())
        .then(foundUser => {
            currentUser = foundUser
        if (foundUser.username===username) {
            console.log(foundUser) 
            console.log(currentUser)
            listFormLogin()
            }
    
        })
    })
}
signUpAction()
console.log(currentUser)


function startMainPage(){
    mainContainer.innerHTML=""
   
    if (!userLists.length===0) {
        mainContainer.id="main-container-2"
    }
    else {
        mainContainer.id="main-container"
    }

    fetch(`${BASE_URL}/users/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(user => {
        currentUser=user
        if (user.lists.length===0) {
            rightSide.style.display="none"
        }
        else{
           
        }
    
        displayList(currentUser.lists)
    })

}  