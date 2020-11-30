// The adapter talks to the API
class ChampionsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/champions'
    }

    getChampions() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    createChampion(titleValue, consoleValue, imageValue) {
        const champion = {
            title: titleValue,
            console: consoleValue,
            image: imageValue
    
        };
        return fetch(this.baseUrl, {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(champion)
        })
        .then(res => (res.json()))
        .catch(error => console.log("Error: " + error))
    }
}