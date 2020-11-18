class User {
    constructor(id, name, email, username) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
    }

    // renderUser() {
    //     let usersDiv = document.getElementById("users-container")

    //     usersDiv.innerHTML +=
    //     `
    //     <center>
    //     <ul>
    //     <h3> Username: ${this.username}</h3>
    //     <li> Name: ${this.name} - Email: ${this.email} </li>
    //     </ul>
    //     <button class="delete-bttn" data-id=${this.id} onclick="logOut()">Log Out</button>
    //     <center>
    //     `
    // }


    createForm() {
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

}