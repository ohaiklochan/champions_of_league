class Champion {
    constructor(championJSON) {
        this.id = championJSON.id
        this.name = championJSON.name
        this.image = championJSON.image
        this.title = championJSON.title
        this.tags = championJSON.tags
        this.backstories = championJSON.backstories
    }

    renderChampionElement() {
        const championsContainer = document.getElementById('champions-container')
        // console.log(championsContainer)

        const championBlock = document.createElement('div')
        championBlock.className = 'champion-container'
        championsContainer.appendChild(championBlock)

        const deleteButton = document.createElement('BUTTON')
        deleteButton.setAttribute("id", `delete-button-${this.id}`)
        deleteButton.innerHTML = "Delete Champion"
        championBlock.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {
            championBlock.remove()
            this.deleteChampion(`${this.id}`)
        })

        const backstoryButton = document.createElement("BUTTON")
        backstoryButton.setAttribute("id", `backstory-button-${this.id}`)
        backstoryButton.setAttribute("onclick", "openForm()")
        backstoryButton.innerHTML = "Add Champion Backstory"
        championBlock.appendChild(backstoryButton)

        backstoryButton.addEventListener('click', this.newBackstoryForm.bind(this))

        const image = document.createElement('img')
        image.setAttribute("class", "image")
        image.src = this.image
        championBlock.appendChild(image)

        // Creates the champion Info Element Container
        const championInfo = document.createElement('div')
        championInfo.className  = 'champion-info'
        championBlock.appendChild(championInfo)

        this.createInfo(championInfo)

        // Create the Backstory Element
        const backstoryInfo = document.createElement('div')
        backstoryInfo.className = "backstory-info"
        championBlock.appendChild(backstoryInfo)

        this.infoBackstory(backstoryInfo)

    }

    newBackstoryForm(e) {
        e.preventDefault();

        const newBackstoryForm = document.getElementById('new-backstory-form')
        const submitButton = document.createElement("button")
        submitButton.innerHTML = "Add"
        submitButton.id = "backstory-submit"
        submitButton.type = "submit"
        const buttonDiv = document.getElementById("buttons")
        buttonDiv.appendChild(submitButton)
        submitButton.addEventListener('click', this.submitBackstoryInputs.bind(this))
    }

    submitBackstoryInputs(e) {
        e.preventDefault();

        const buttonDiv = document.getElementById("buttons")
        const submitButton = document.getElementById("backstory-submit")
        const form = document.getElementById('new-backstory-form')

        const newBackstoryBody = document.getElementById('new-backstory-body')
        const backstoryBox = document.getElementById(`backstory-${this.id}`)
        const pDiv = document.createElement('p')
        backstoryBox.appendChild(pDiv)

        const backstoryAddition = {
            book_id: this.id ,
            content: newBackstoryBody.value,
        }

        fetch(`${BASE_URL}/backstories`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(backstoryAddition)
        })
        .then(res => res.json())
        .then(backstory => {
        // console.log(backstory)
        // console.log(backstory.body)

        pDiv.innerHTML = backstory.content
        newBackstoryBody.value = ' '
        buttonDiv.removeChild(submitButton)
        closeForm()
        })

    }

    // Creates the current backstory
    createInfo(championElement) {
        const name = document.createElement('h1')
        name.setAttribute("class", 'champion-name')
        name.innerHTML = this.name
        championElement.appendChild(name)

        const title = document.createElement('h3')
        title.setAttribute("class", 'champion-title')
        title.innerHTML = this.title
        championElement.appendChild(title)

        const tags = document.createElement('h3')
        tags.setAttribute("class", 'champion-tags')
        tags.innerHTML = this.tags
        championElement.appendChild(tags)
    }

    infoBackstory(element) {
        const backstoryTitle = document.createElement('h4')
        backstoryTitle.setAttribute("class", 'backstory-header')
        backstoryTitle.innerHTML = 'Backstory:'
        element.appendChild(backstoryTitle)

        const backstories = document.createElement('div')
        backstories.setAttribute("id", `backstory-${this.id}`)
        element.appendChild(backstories)

        // This will map through the champions backstories and add to the backstory elements
        backstories.innerHTML = this.backstories.map(backstory => this.backstoryBody(backstory)).join('')
    }

    backstoryBody(backstory){
        // console.log(backstory)
        return `<p>${backstory.content}</p>`
    }

    deleteChampion(id){
        console.log(id)
        return fetch(`${BASE_URL}/champions` + '/' + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        })
    }
}