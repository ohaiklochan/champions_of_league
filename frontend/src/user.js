document.addEventListener('DOMContentLoaded', () => {

    User.createUser();
})

const BASE_URL = "http://127.0.0.1:3000"
class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.champions = user.champions;
    }

    static createUser(user) {
        let newUserForm = document.getElementById('user-form')
        newUserForm.addEventListener('submit', function(e){
            e.preventDefault();
            fetch(`${BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: e.target.children[1].value
                    }
                })
            })
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error();
                    }
                    return resp.json();
                })
                .then (user => {
                    let newUser = new User(user)
                    console.log(user)
                    newUser.displayUser();
                })
                .catch(error => {
                    console.error('User class Error', error)
                })
            })
    }

    displayUser() {
        let body = document.getElementById('container');
        body.innerHTML = ''
        let div = document.createElement('div');
        div.setAttribute('class', 'user-greeting');
        let champContainer = document.getElementById('champions-container')
        champContainer.classList.remove('hidden')
        let Greeting = document.createElement('p');
        Greeting.innerHTML = `<h1>GLHF ${this.name}!</h1>`
        div.appendChild(Greeting);
        body.appendChild(div);
        this.champions.forEach(function(champion){
            let newChampion = new Champion(champion)
            newChampion.appendChampion()
        })
    

        champion.newChampionForm(this.id)
    }
}