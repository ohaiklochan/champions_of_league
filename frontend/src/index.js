// document.addEventListener("DOMContentLoaded", () => {
//     createForm();
//     fetchUsers();
//     Champion.showChampion()
// })

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

function logOut() {
    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })

    window.location.reload()

}



