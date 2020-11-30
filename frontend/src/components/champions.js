class Champions {
    constructor() {
        this.champions = []
        this.adapter = new ChampionsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadChampions()
    }

    bindEventListeners() {
        this.newChampionForm = document.getElementById('new-champion-form')
        this.newChampionName = document.getElementById('new-champion-name')
        this.newChampionImage = document.getElementById('new-champion-image')
        this.newChampionTitle = document.getElementById('new-champion-title')
        this.newChampionTags = document.getElementById('new-champion-tags')
        this.newChampionForm.addEventListener('submit', this.createChampion.bind(this))
        
    }

    createChampion(e) {
        console.log(this)
        e.preventDefault();
        const nameValue = this.newChampionName.value
        const imageValue = this.newChampionImage.value
        const titleValue = this.newChampionTitle.value
        const tagsValue = this.newChampionTags.value

        this.adapter.createChampion(nameValue, titleValue, imageValue, tagsValue)
        .then(champion => {
            const newChampion = new Champion(champion)
            this.champions.push(newChampion)
            this.newChampionName.value = ' '
            this.newChampionImage.value = ' '
            this.newChampionTitle.value = ' '
            this.newChampionTags.value = ' '
            newChampion.renderChampionElement()
        })
    }

    fetchAndLoadChampions() {
        this.adapter.getChampions()
        .then(champions => {champions.forEach(champion => this.champions.push(new Champion(champion)))
        })
        .then(() => {
            this.renderChampions()
        })
    }

    renderChampions() {
        this.champions.map(champion => champion.renderChampionElement())
    }
}