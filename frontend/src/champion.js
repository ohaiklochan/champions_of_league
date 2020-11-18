class Champion {
  constructor(name, title, image, type) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.type = type;
  }
}

const BASE_URL = "http://127.0.0.1:8887/"
const championForm = document.getElementById('champion-form')

function championsPage() {
    championForm.style.display = 'block'
    championForm.innerHTML = `
            <form id="champion-form">
                <label>Name</label>
                <input type="text" name="name">
                <label>Photo</label>
                <input name="image">
                <label>Title</label>
                <input type="text" name="title">
                <label>Type</label>
                <select name="type">
                    <option value="Juggernaut">Juggernaut</option>
                    <option value="Burst">Burst</option>
                    <option value="Assassin">Assassin</option>
                    <option value="Vanguard">Vanguard</option>
                    <option value="Battlemage">Battlemage</option>
                    <option value="Marksman">Marksman</option>
                    <option value="Specialist">Specialist</option>
                    <option value="Catcher">Catcher</option>
                    <option value="Warden">Warden</option>
                    <option value="Diver">Diver</option>
                    <option value="Skirmisher">Skirmisher</option>
                    <option value="Artillery">Artillery</option>
                    <option value="Enchanter">Enchanter</option>
                    <option value="None">No Type Known</option>
                </select>
                <input id="submit" type="submit" value="Add Champion!">
            </form>
    `
championForm.addEventListener('submit', (event) => {
  event.preventDefault()
  championFormData(championForm)
})

renderChampions()
return (
  `
  <h3 id="name-of-page">All Champions</h3>
  `
  )
}

const championCardContainer = document.querySelector('#card-container')


function renderChampions() {
    fetch(`${BASE_URL}/champions`)
        .then(response => response.json())
        .then(champions => 
          champions.forEach(champion => createChampionCards(champion)))
}

function createChampionCards(champion) {
  // champions.forEach(champion => {
      const card = document.createElement('card')
      const name = document.createElement('h2')
      const picture = document.createElement('img')
      const title = document.createElement('h3')
      const type = document.createElement('p')
      const deleteButton = document.createElement('button')
  
      card.className = 'champion-cards'
      card.id = champion.id
      picture.className = 'pictures'
      name.innerText = champion.name
      picture.src = champion.image
      title.innerText = champion.title
      type.innerText = champion.type
      deleteButton.innerText = "X"
      deleteButton.id = 'delete-button'

      deleteButton.addEventListener('click', (event) => deleteChampion(event, champion.id))

      card.append(deleteButton, name, picture, title, type)
      championCardContainer.appendChild(card)
  }
// }

function deleteChampion(event, id){
  event.target.parentNode.remove()

  fetch(`${BASE_URL}/champions/${id}`, {
      method: 'DELETE'
  })
}

function championFormData(form) {
  const formData = new FormData(form)
  const championName = formData.get('name')
  const championTitle = formData.get('title')
  const championImage = formData.get('image')
  const championType = formData.get('type')
  const body = {
      name: championName,
      title: championTitle,
      image: championImage,
      type: championType
  }
  createChampionCards(body)
  fetch(`${BASE_URL}/champions`, {
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' },

      body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .then(champion => {
    let c = new Champion(champion.id, champion.name, champion.title, champion.image, champion.type)
    c.renderChampions();
  })

  alert("Champion has been added!")
  form.reset()
}

export {championsPage, championForm}