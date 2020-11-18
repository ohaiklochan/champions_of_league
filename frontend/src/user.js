class User {
    constructor(id, name, email, username) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
    }
    renderUser() {
        let usersDiv = document.getElementById('users-container')

        usersDiv.innerHTML =
        `
        <center>
        <ul>
        <li>Username: ${this.username} x Name: ${this.name} x Email: ${this.email}</li>
        </ul>
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

function createUser(user) {
    let usersDiv = document.getElementById('users-container')

        usersDiv.innerHTML =
        `
        <center>
        <ul>
        <li>Username: ${user.username} x Name: ${user.name} x Email: ${user.email}</li>
        </ul>
        <center>
        `
}

function userFormSubmission(form) {
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const username = formData.get("username")

    const user = {
        name: name,
        email: email,
        username: username
    }

    createUser(body)
    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    // .then(resp => resp.json())
    // .then(users => {
    //     for (const user of users){
    //         let u = new User(user.id, user.name, user.email, user.username)
    //         u.renderUser();
    //     }
    // })


    alert("Your info has been added!")
    form.reset()

}

export {userPage, userForm}