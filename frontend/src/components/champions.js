class Champions {
    constructor() {
        this.champions = []
        this.adapter = new ChampionsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadChampions()
    }

    bindEventListeners() {
        this.newChampionForm = document.getElementById('new-champion-form')
        this.newChampionTitle = document.getElementById('new-champion-title')
        this.newChampionConsole = document.getElementById('new-champion-console')
        this.newChampionImage = document.getElementById('new-champion-image')
        this.newChampionForm.addEventListener('submit', this.createChampion.bind(this))
        
    }

    createChampion(e) {
        console.log(this)
        e.preventDefault();
        const titleValue = this.newChampionTitle.value
        console.log(titleValue)
        const consoleValue = this.newChampionConsole.value
        const imageValue = this.newChampionImage.value

        this.adapter.createChampion(titleValue, consoleValue, imageValue)
        .then(champion => {
            const newChampion = new Champion(champion)
            this.champions.push(newChampion)
            this.newChampionTitle.value = ' '
            this.newChampionConsole.value = ' '
            this.newChampionImage.value = ' '
            newChampion.renderChampionElement()
        })
    }

    fetchAndLoadChampions() {
        this.adapter.getChampions()
        .then(champions => {champions.forEach(champion => this.champions.push(new Champion(Champion)))
        })
        .then(() => {
            this.renderChampions()
        })
    }

    renderChampions() {
        this.Champions.map(Champion => champion.renderChampionElement())
    }
}