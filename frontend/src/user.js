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
        <ul>
        <h3> Username: ${this.username}</h3>
        <li> Name: ${this.name} - Email: ${this.email} </li>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        `
    }

    // instance method goes here
}