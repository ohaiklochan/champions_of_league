class Champion {
    // constructor(name, image, description) {
    //     this.name = name;
    //     this.image = image;
    //     this.description = description;
    // }

    // instance method thats going to render the object to the DOM goes here
   
   

    

    //create a "Favorites" List
    renderList(champion) {
        let form = document.getElementById("list-container")

        form.innerHTML +=
        `
        <h3>Create New List!</h3>
        <form>
        List Name: <input type="text" id="newlist">
        <input type="submit" value="Create">
        </form>
        `

    }
}


