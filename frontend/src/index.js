// document.addEventListener("DOMContentLoaded", () => {
//     // createForm();
//     // fetchUsers();
//     Champion.showChampion()
// })

// fetch requests:
// read - fetch users index
const BASE_URL = "http://127.0.0.1:3000/"

import {enter} from './src/enter.js'
import {championsPage, championForm} from './src/champions.js'

const pageName = document.querySelector('#page')
const routes = {
    '/': enter,
    '/champions': championsPage
}

function router(event){
    const path = window.location.hash.split("#")[1] || "/"

    const page = routes[path]

    pageReset()
    pageName.innerHTML = page()
}

function pageReset(){
    const championCardContainer = document.querySelector('#card-container')
    championCardContainer.innerHTML = `<div id="card-container"></div>`

    championForm.style.display = 'none'
    sortingButton.style.display = 'none'

}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export {router} 

// function fetchUsers() {
//     fetch(`${BASE_URL}/users`)
//     .then(resp => resp.json())
//     .then(users => {
//         for (const user of users) {
//             let u = new User(user.id, user.name, user.email, user.username)
//             u.renderUser();
//         }
//     } )
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
//         if (response.id) {
//             mainContainer.id="main-container"
//             startMainPage()
//         }
//     })
// }

// function logOut() {
//     fetch(`${BASE_URL}/users/${userId}`, {
//         method: 'DELETE'
//     })

//     window.location.reload()

// }
