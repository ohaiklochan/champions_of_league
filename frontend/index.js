document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers()
})

// fetch requests:
// read - fetch users index
const BASE_URL = "http://127.0.0.1:3000/"

function fetchUsers() {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users) {
            let u = new User(user.id, user.name, user.email, user.username)
            u.renderUser();
        }
    } )
}
// create - create a new user
// add an event listener
// submitted? => fetch 'post' to backend
// do something with returned object 

function createForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `
    <center>
    <form>
    Name: <input type="text" id="name"><br>
    Email: <input type="text" id="email"><br>
    Username: <input type="text" id="username"><br>
    <input type="submit" value="Sign up!">
    </form>
    </center>
    `

    usersForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission() {
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
    .then(user => {
        let u = new User(user.id, user.name, user.email, user.username)
        u.renderUser();
    })
}

// delete - delete a user


// const buttons = document.getElementsByClassName("delete-bttn")
// console.log(buttons)
// for (const button of buttons) {
//     button.addEventListener("click", () => {
//         debugger;
//     })
// }

function deleteUser() {
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })

    this.location.reload(true);

}