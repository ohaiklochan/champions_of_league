const BASE_URL = "http://127.0.0.1:8887/"
const championForm = document.getElementById('champion-form')

function championsPage(){
    championForm.style.display = 'block'
    championForm.innerHTML = `
            <form id="champion-form">
                <label>Name</label>
                <input type="text" name="name">
                <label>Photo</label>
                <input name="image">
                <label>Title</label>
                <input type="text" name="title">
                <input id="submit" type="submit" value="Add Character!">
            </form>
    `
championForm.addEventListener('submit', (event) => {
  event.preventDefault()
  championFormData(championForm)
})

renderChampions()
return (
  `
  <h1 id="name-of-page">All Champions</h1>
  `
  )
}

const championCardContainer = document.querySelector('#card-container')
const championsUrl = `${BASE_URL}/champions`

function renderChampions(){
    fetch(championsUrl)
        .then(response => response.json())
        .then(champions => 
          champions.forEach(champion => createChampionCards(champion)))
}

function createChampionCards(champion){
  // champions.forEach(champion => {
      const card = document.createElement('card')
      const name = document.createElement('h2')
      const picture = document.createElement('img')
      const title = document.createElement('h3')
      const deleteButton = document.createElement('button')
  
      card.className = 'champion-cards'
      card.id = champion.id
      picture.className = 'pictures'
      name.innerText = champion.name
      picture.src = champion.image
      title.innerText = `Title: ${champion.title}`
      deleteButton.innerText = "X"
      deleteButton.id = 'delete-button'

      deleteButton.addEventListener('click', (event) => deleteChampion(event, champion.id))

      card.append(deleteButton, name,  picture, title)
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
  const body = {
      name: championName,
      title: championTitle,
      image: championImage
  }
  createChampionCards(body)
  fetch(championsUrl, {
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' },

      body: JSON.stringify(body)
  })

  alert("Champion has been added!")
  form.reset()
}

export {championsPage, championForm}