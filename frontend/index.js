document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchUsers();
    Champion.showChampion()
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

function deleteUser() {
    let userId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/users/${userId}`, {
        method: 'DELETE'
    })

    // this.location.reload(true);
    //rewrite this in order to delete this from the DOM

}

function startMainPage(){
    mainContainer.innerHTML=""
   
    if (!userCollections.length===0) {
        mainContainer.id="main-container-2"
    }
    else {
        mainContainer.id="main-container"
    }
}
