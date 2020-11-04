document.addEventListener("DOMContentLoaded", () => {
    fetchUsers()
})

// fetch requests:
// read - fetch users index

function fetchUsers() {
    fetch(`${BASE_URL}/users`)
    .then(resp ==> resp)
    .then()
}
// create - create a new user
// delete - delete a user