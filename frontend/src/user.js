class User {
    constructor(id, name, email, username) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
    }


    renderUser() {
        let usersDiv = document.getElementById('users-container')

        usersDiv.innerHTML +=
        `
        <center>
        <ul>
        <li>Username: ${this.username} x Name: ${this.name} x Email: ${this.email}</li>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onclick="logOut()">Log Out</button>
        <center>
        `
    }
}
const BASE_URL = "http://127.0.0.1:3000"
const userForm = document.getElementById('user-form')

function userPage() {
    userForm.style.display = 'block'
    userForm.innerHTML =
    `
    <form id="user-form">
    <label>Name:</label> <input type="text" id="name">
    <label>Email:</label> <input type="text" id="email">
    <label>Username:</label> <input type="text" id="username">
    <input type="submit" value="Log in">
    </form>
    `

    userForm.addEventListener("submit", (event) => {
        event.preventDefault()
        userFormSubmission(userForm)
    })
    return (
        `
        <h3 id="name-of-page">Your Information</h3>
        `
    )
}

function userFormSubmission(form) {
    const formSubmission = new FormSubmission(form)
    const name = formSubmission.get("name")
    const email = formSubmission.get("email")
    const username = formSubmission.get("username")

    const body = {
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
    .then(user => {
        let u = new User(user.id, user.name, user.email, user.username)
        u.renderUser;
    })
}

export {userPage, userForm}