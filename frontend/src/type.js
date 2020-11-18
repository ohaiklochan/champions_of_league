class Type {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const BASE_URL = "http://127.0.0.1:3000"

function typesPage(){
    renderChampions()
    return (`
        <h3 id="name-of-page">Types</h1>
    `)
}

const championsUrl = `${BASE_URL}/champions`
const championCardContainer = document.querySelector('#card-container')

function renderChampions(){
fetch(championsUrl)
    .then(response => response.json())
    .then(champions => createChampionCards(champions))
}

function createChampionCards(champions){
    champions.forEach(champion => {
        if (champion.type == true) {

            const card = document.createElement('card')
            const name = document.createElement('h2')
            const picture = document.createElement('img')
            const title = document.createElement('h3')
            const type = document.createElement('p')
        
            card.className = 'champion-cards'
            picture.className = 'pictures'
            name.innerText = champion.name
            picture.src = champion.image
            title.innerText = champion.title
            type.innerText = champion.type
        
            card.append(name, picture, title, type)
            championCardContainer.appendChild(card)
            }
    })
}

export {typesPage}