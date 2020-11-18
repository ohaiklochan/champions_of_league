class User {
    constructor(id, name, email, username) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
    }


    renderUser() {
        let usersDiv = document.getElementById("users-container")

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

    usersForm.addEventListener("submit")
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
        u.renderUser;
    })
}

export {userPage}