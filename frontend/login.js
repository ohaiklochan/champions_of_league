const BASE_URL = "http://127.0.0.1:3000/"

function userLogIn() {
    let userLogIn = document.getElementById("log-in")

    userLogIn.innerHTML +=
    `
    <center>
    <h1>Champions of</h1> <img src="img/backgrounds/lol-logo-rendered-hi-res.png" width="300" height="150">
    <h3>Your resident 'liker'!</h3>
    <h4>Click on your favorite champions to 'like' them to get them added to your account!</h4>
    </center>
    `
}

function createForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `
    <center>
    <form>
    Name: <input type="text" id="name">
    Email: <input type="text" id="email">
    Username: <input type="text" id="username">
    <input type="submit" value="Sign up!">
    </form>
    </center>
    `

    usersForm.addEventListener("submit", signUp)
}

function signUp() {
    event.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value

    let user = {
        name: name,
        email: email,
        username: username
    }

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    .then(resp => resp.json())
    .then(response => {
        currentUser = response  
         if (response.id) {
            mainContainer.id="main-container"
            startMainPage()
         }
    })
}