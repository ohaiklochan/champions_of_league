class Ability {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

function abilitiesPage() {
    abilityForm.style.display = 'block'
    abilityForm.innerHTML = `
            <form id="ability-form">
                <label>Name</label>
                <input type="text" name="name">
                <label>Description</label>
                <input type="text" name="description"><br>
                <label>Name</label>
                <input type="text" name="name">
                <label>Description</label>
                <input type="text" name="description"><br>
                <label>Name</label>
                <input type="text" name="name">
                <label>Description</label>
                <input type="text" name="description"><br>
                <label>Name</label>
                <input type="text" name="name">
                <label>Description</label>
                <input type="text" name="description"><br>
                <input id="submit" type="submit" value="Add Abilities!">
            </form>
    `
abilityForm.addEventListener('submit', (event) => {
  event.preventDefault()
  abilityFormData(abilityForm)
})
    renderChampions()
    renderAbilities()
    return (`
        <h3 id="name-of-page">Champion Abilities</h1>
    `)
}

const abilityCardContainer = document.querySelector('#card-container')

function renderAbilities() {
    fetch(`${BASE_URL}/abilities`)
        .then(response => response.json())
        .then(abilities => 
          abilities.forEach(ability => createAbilityCards(ability)))
}

function createAbilityCards(ability) {
    champions.forEach(champion => {
        if (champion.name == true) {
            const card = document.createElement('card')
            const name = document.createElement('h2')
            const description = document.createElement('h5')
            const deleteButton = document.createElement('button')
  
            card.className = 'ability-cards'
            card.id = ability.id
            name.innerText = ability.name
            description.innerText = `${ability.description}`
            deleteButton.innerText = "X"
            deleteButton.id = 'delete-button'

            deleteButton.addEventListener('click', (event) => deleteAbility(event, ability.id))

            card.append(deleteButton, name, description)
            abilityCardContainer.appendChild(card)
        }
    })
}

function deleteAbility(event, id){
  event.target.parentNode.remove()

  fetch(`${BASE_URL}/abilities/${id}`, {
      method: 'DELETE'
  })
}

function abilityFormData(form) {
  const formData = new FormData(form)
  const abilityName = formData.get('name')
  const abilityDescription = formData.get('description')
  const body = {
      name: abilityName,
      description: abilityDescription
  }
  createAbilityCards(body)
  fetch(`${BASE_URL}/abilities`, {
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' },

      body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .then(ability => {
    let c = new ability(ability.id, ability.name, ability.title, ability.image)
    c.renderAbilities();
  })

  alert("Abilities have been added!")
  form.reset()
}

export {abilitiesPage, abilityForm}