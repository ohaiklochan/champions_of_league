document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
})

// fetch requests:
// read - fetch users index
const BASE_URL = "http://127.0.0.1:3000/"

function fetchUsers() {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of  )
    } )
}
// create - create a new user
// delete - delete a user