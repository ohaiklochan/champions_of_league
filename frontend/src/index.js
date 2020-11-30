// The index.js will run our js
const app = new App();


// These function will open and close the backstory Form
function openForm(){
    document.getElementById('new-backstory-container').style.display = "block";
}
function closeForm() {
    document.getElementById('new-backstory-container').style.display = "none";
}