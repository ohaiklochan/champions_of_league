class Champion {
    constructor(championJSON) {
        this.id = championJSON.id
        this.title = championJSON.title
        this.console = championJSON.console
        this.image = championJSON.image
        this.reviews = championJSON.reviews
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

        const reviewButton = document.createElement("BUTTON")
        reviewButton.setAttribute("id", `review-button-${this.id}`)
        reviewButton.setAttribute("onclick", "openForm()")
        reviewButton.innerHTML = "Add Champion Review"
        championBlock.appendChild(reviewButton)

        reviewButton.addEventListener('click', this.newReviewForm.bind(this))

        const image = document.createElement('img')
        image.setAttribute("class", "image")
        image.src = this.image
        championBlock.appendChild(image)

        // Creates the champion Info Element Container
        const championInfo = document.createElement('div')
        championInfo.className  = 'champion-info'
        championBlock.appendChild(championInfo)

        this.createInfo(championInfo)

        // Create the Review Element
        const reviewInfo = document.createElement('div')
        reviewInfo.className = "review-info"
        championBlock.appendChild(reviewInfo)

        this.infoReview(reviewInfo)

    }

    newReviewForm(e) {
        e.preventDefault();

        const newReviewForm = document.getElementById('new-review-form')
        const submitButton = document.createElement("button")
        submitButton.innerHTML = "Add"
        submitButton.id = "review-submit"
        submitButton.type = "submit"
        const buttonDiv = document.getElementById("buttons")
        buttonDiv.appendChild(submitButton)
        submitButton.addEventListener('click', this.submitReviewInputs.bind(this))
    }

    submitReviewInputs(e) {
        e.preventDefault();

        const buttonDiv = document.getElementById("buttons")
        const submitButton = document.getElementById("review-submit")
        const form = document.getElementById('new-review-form')

        const newReviewBody = document.getElementById('new-review-body')
        const reviewBox = document.getElementById(`review-${this.id}`)
        const pDiv = document.createElement('p')
        reviewBox.appendChild(pDiv)

        const reviewAddition = {
            book_id: this.id ,
            content: newReviewBody.value,
        }

        fetch('http://localhost:3000/reviews', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(reviewAddition)
        })
        .then(res => res.json())
        .then(review => {
        // console.log(review)
        // console.log(review.body)

        pDiv.innerHTML = review.content
        newReviewBody.value = ' '
        buttonDiv.removeChild(submitButton)
        closeForm()
        })

    }

    // Creates the current Review
    createInfo(championElement) {
        const title = document.createElement('h3')
        title.setAttribute("class", 'champion-title')
        title.innerHTML = this.title
        championElement.appendChild(title)

        const console = document.createElement('h3')
        console.setAttribute("class", 'champion-console')
        console.innerHTML = `Console: ${this.console}`
        championElement.appendChild(console)
    }

    infoReview(element) {
        const reviewTitle = document.createElement('h4')
        reviewTitle.setAttribute("class", 'review-header')
        reviewTitle.innerHTML = 'What I think:'
        element.appendChild(reviewTitle)

        const reviews = document.createElement('div')
        reviews.setAttribute("id", `review-${this.id}`)
        element.appendChild(reviews)

        // This will map through the champions reviews and add to the review elements
        reviews.innerHTML = this.reviews.map(review => this.reviewBody(review)).join('')
    }

    reviewBody(review){
        // console.log(review)
        return `<p>${review.content}</p>`
    }

    deleteChampion(id){
        console.log(id)
        return fetch('http://localhost:3000/games' + '/' + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        })
    }
}