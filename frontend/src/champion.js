// const BASE_URL = "http://127.0.0.1:3000"
class Champion {
  constructor(champion){
      this.id = champion.id;
      this.name = champion.name;
      this.image = champion.image;
      this.title = champion.title;
      this.tags = champion.tags;
  }
  static newChampionForm(user_id) {
      let body = document.getElementById('container');
      let form = 
      ` <form id="champion-form">
        <label>Name</label>
        <input type="text" name="name">
        <label>Photo</label>
        <input name="image">
        <label>Title</label>
        <input type="text" name="title">
        <label>Tags</label>
        <select name="tags">
          <option value="Tank">Tank</option>
          <option value="Mage">Mage</option>
          <option value="Assassin">Assassin</option>
          <option value="Support">Support</option>
          <option value="Marksman">Marksman</option>
          <option value="Fighter">Fighter</option>
          <option value="None">No Type Known</option>
        </select>
      <input id="submit" type="submit" value="Add Champion!">
      </form>
       `

      body.insertAdjacentHTML('beforeend', form)
      Champion.postChampion(user_id)
  }

  static postChampion(user_id) {
      let newForm = document.getElementById('new-champion-form')
      newForm.addEventListener('submit', function(e) {
          e.preventDefault()
          fetch(`${BASE_URL}/champions`,{
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json',
                  'Accept' : 'application/json'
              },
              body: JSON.stringify({
                  champion: {
                      name: name,
                      image: image,
                      title: title,
                      tags: tags,
                      user_id: user_id
                  }
              })
          })
          .then(resp => {
              if (!resp.ok) {
                  throw new Error(); 
              }
              return resp.json();
          })
          .then(json => {
              let newChampion = new Champion(json);
              console.log(newChampion)
              newChampion.appendChampion()
          })
          .catch(error => {
              console.error('Champion Class Error', error)
          })
      })
  }

  
  appendChampion() {
      let champsContainer = document.getElementsByClassName('champions-container')
      let p = document.createElement('p')
      p.setAttribute('data-id', this.id)
      p.innerHTML = `${this.name}</br>${this.image}</br>${this.title}</br>${this.tags}`
      let deleteButton = `<button type="button" id="${this.id}">X</button>`
      p.insertAdjacentHTML('beforeend', deleteButton)
      champsContainer[0].appendChild(p)
      let button = document.getElementById(`${this.id}`)
      this.deleteChampion(button)
  }

  deleteChampion(button) {
      button.addEventListener('click', function(e){
          e.preventDefault()
          fetch(`${BASE_URL}/champions/${e.target.parentNode.dataset.id}`, {
              method: 'DELETE'
          })
          e.target.parentElement.remove();
      })
  }

}