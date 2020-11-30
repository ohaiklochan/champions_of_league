// The adapter talks to the API
class ChampionsAdapter {
    constructor() {
        this.baseUrl = `${BASE_URL}/champions`
    }

    getChampions() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    createChampion(nameValue, titleValue, imageValue, tagsValue) {
        const champion = {
            name: nameValue,
            image: imageValue,
            title: titleValue,
            tags: tagsValue
            
    
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