const BASE_URL = "http://127.0.0.1:8887/"

import {enterPage} from './enter.js'
import {championsPage, championForm} from './champion.js'

const pageName = document.querySelector('#page')
const routes = {
    '/': enterPage,
    '/champions': championsPage
}

function router(event){
    const path = window.location.hash.split("#")[1] || "/"

    const page = routes[path]

    pageReset()
    pageName.innerHTML = page()
}

function pageReset(){
    const championCardContainer = document.querySelector('#card-container')
    championCardContainer.innerHTML = `<div id="card-container"></div>`

    championForm.style.display = 'none'

}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export {router} 
