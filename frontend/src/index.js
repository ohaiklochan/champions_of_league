// const BASE_URL = "http://127.0.0.1:3000/"
let navContainer=document.getElementById('top-container')
let navBarSection=document.getElementById('nav-bar')
let navBarUl=document.getElementById('nav-ul')
let mainContainer=document.getElementById('main-container')

let body=document.querySelector('body')
body.className="main"
let mainHeading=document.createElement('h2')
mainHeading.className="side-label"
let leftCard=document.createElement('div')
leftCard.className="card-info"

let rightSide=document.getElementById('side-bar')

let mainObj={}
let mainCatg={}
let globalNav=undefined
let championId={}
let globalListId={}
let currentUser={}
let userLists=[]


let signUpAction = () => {
    rightSide.style.display="none"
    body.className="login"
    mainContainer.innerHTML=""
    navContainer.style.visibility="false"
    mainContainer.id="main-container"
    body.className="login"
    let signUpPopup=document.createElement('div')
    signUpPopup.className="signup-form-popup"
    let signupForm=document.createElement('form')
    signupForm.className="form-container"
    signupForm.id="signup-form"
    let label=document.createElement('h2')
    label.innerText="Sign Up"
    let nameInput=document.createElement('input')
    nameInput.placeholder="Name"
    nameInput.name="name"
    nameInput.type="text"
    let emailInput=document.createElement('input')
    emailInput.placeholder="Email"
    emailInput.name="email"
    emailInput.type="text"
    let usernameInput=document.createElement('input')
    usernameInput.placeholder="User Name"
    usernameInput.name="username"
    usernameInput.type="text"
    let createAcct=document.createElement("BUTTON")
    createAcct.type="submit"
    createAcct.class="btn"
    createAcct.innerText="Create Account!"
 
    mainContainer.innerHTML=""
    navContainer.style.visibility="false"
    mainContainer.id="main-container-3"
    body.className="login"
    let logInPopup=document.createElement('div')
    logInPopup.className="login-form-popup"
    let logInForm=document.createElement('form')
      
    logInForm.className="form-container"
    logInForm.id="signup-form"
    let labelLogin=document.createElement('h2')
    labelLogin.innerText="Login"
    let nameInputLogin=document.createElement('input')
    nameInputLogin.placeholder="Name"
    nameInputLogin.name="name"
    nameInputLogin.type="text"
    let emailInputLogin=document.createElement('input')
    emailInputLogin.placeholder="Email"
    emailInputLogin.name="email"
    emailInputLogin.type="text"
    let nameInputLoginF=document.createElement('input')
    nameInputLoginF.placeholder="User Name"
    nameInputLoginF.name="username"
    nameInputLoginF.type="text"
    let login=document.createElement("BUTTON")
    login.type="submit"
    login.class="btn"
    login.innerText="Login!"

    logInForm.append(labelLogin, nameInputLogin, emailInputLogin, nameInputLoginF, login)
    logInPopup.append(logInForm)
    mainContainer.append(logInPopup)

   signupForm.append(label, nameInput, emailInput, usernameInput, createAcct)
   signUpPopup.append(signupForm)
   mainContainer.append(signUpPopup)

 
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault()
        body.className="main"
        let name=e.target.name.value
        let email=e.target.email.value
        let username=e.target.username.value
        fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                username: username
            })
        })
        .then(resp => resp.json())
        .then(response => {
           currentUser = response  
            if(response.id) {
                mainContainer.id="main-container"
                startMainPage()
            }
        })
        
    })


    logInForm.addEventListener("submit", (evt) => {
        evt.preventDefault()
        console.log("click")
    
        let userName=evt.target.username.value
        fetch(`${BASE_URL}/login/${userName}`)
        .then(resp => resp.json())
        .then(foundUser => {
            currentUser = foundUser
            if (foundUser.username===userName) {
                console.log(foundUser) 
                console.log(currentUser)
                listFormLogin()
            }
    
        })
    })
}
signUpAction()
console.log(currentUser)


function startMainPage(){
    mainContainer.innerHTML=""
   
    if (!userLists.length===0) {
        mainContainer.id="main-container-2"
    }
    else {
        mainContainer.id="main-container"
    }

    fetch(`${BASE_URL}/users/${currentUser.id}`)
    .then(resp=> resp.json())
    .then(user => {
        currentUser = user
        if (user.lists.length===0) {
            rightSide.style.display="none"
        }
        else {
           
        }
    
        displayList(currentUser.lists)
    })

}  

let displayList = () => {
    fetch(`${BASE_URL}/champions`)
   .then(resp => resp.json())
   .then(champsArray => {
       
       //display champions on the main section
       mainChamps(champsArray[0])
       mainObj=champsArray
       champsArray.forEach((cat)=> {
           renderChampList(cat)
       })

       let logOut=document.createElement('li')
       logOut.innerText="Logout"
       navBarUl.append(logOut)
        logOut.addEventListener(("click"), (evt) => {
            logOutUser(currentUser)
        })
    })

    let renderChampsList= (champ) => {
        mainChamp=champ
        let navButton=document.createElement('li')
        navButton.innerText=champ.name
        navBarUl.append(navButton)
        navBarSection.append(navBarUl)
        globalNav=navButton
        navBarSection.append(navBarUl)
        navButton.addEventListener("click",(evt) => {
            mainChamps(champ)
         
        })
    }
}

    let mainChamps = (champs) => {
  
        mainContainer.innerHTML=""
    
        title=document.createElement("h2")
        champs.champions.forEach(champion => {
            championId=champion.id
            mainContainer.HTML=""
            let cardDiv=document.createElement('div')
            cardDiv.className="card"
            title=document.createElement("h4")
            descrip=document.createElement('p')
            image=document.createElement('img')
            image.className="image-top"
            image.src=champion.image
            image.width=120
            image.height=120
            title.innerText=champion.name
            descrip.innerText=champion.description
            cardDiv.append(image)
            mainContainer.append(cardDiv)
            cardDiv.append(title)
            mainContainer.append(cardDiv)
            cardDiv.append(descrip)
            mainContainer.append(cardDiv)
            
        
            let button=document.createElement('span')
            button.innerText="Like This Champion!"
            cardDiv.append(button)
            cardDiv.addEventListener("click", (e) =>{
                seeIfListIsEmpty(champion)  
            })
             
        })
    }

    let checkForExistingList=() => {
        fetch(`${BASE_URL}/users/${currentUser.id}`)
        .then(resp => resp.json())
        .then(userArray => {
            userLists=userArray.list
 
            console.log(userLists)
        })  
    }

    let seeIfListIsEmpty = (champion) => {
        if(userList.length===0) {
            renderForm(champion)
        }  
        else {
            renderSelectForm(champion)
        }
    }

    let renderSelectForm = (champion) => {
        mainContainer.innerHTML=""
        let form=document.createElement('form')
        form.className="form-container"

        let heading=document.createElement('h3')
        heading.innerText="Choose A Collection"
        let submitButton=document.createElement('BUTTON')           
        submitButton.className="btn"
        submitButton.type="submit"
        submitButton.innerText="Add to this List!"

        let newNameBtn=document.createElement('SPAN')

        newNameBtn.innerText="Create New Name!"
        newNameBtn.id="createName"

        let formSelect=document.createElement('SELECT')

        for(let i=0; i<userLists.length; i++) {
            let options=document.createElement('option')
            options.setAttribute("value",userLists[i]["name"])
            value=document.createTextNode(userLists[i]["name"])
            options.append(value)
            globalListId=userLists[i]["id"]
            formSelect.insertBefore(options, formSelect.lastChild)
        }

        form.append(heading, formSelect, submitButton,newNameBtn)
        mainContainer.append(form)

        newNameBtn.addEventListener("click", (evt) => {
            evt.preventDefault()
            championId=champion.id
            mainContainer.innerHTML=""
            renderForm(champion)
        })

        form.addEventListener("submit", (evt) => {
            evt.preventDefault()

            let selectElement=document.querySelector('select')
            let name= selectElement.options[selectElement.selectedIndex].value
        
            fetch(`${BASE_URL}/lists`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify ({
                    id: globalListId,
                    name: name,
                    champion_id: championId,
                    user_id: currentUser.id
                })
            })
            .then(resp => resp.json())
            .then(list => {
            
                let newp=document.createElement('h5')
                newp.className="champion-name"
                let tags=document.querySelectorAll('h2.champion-name')
   
                let searchText=name;
                let found; 
        
                console.log(searchText)
                for(let i=0; i< tags.length; i++) {
                    if(tags[i].textContent==searchText) {
                    found=tags[i]
                    let button=document.querySelector('button')
                    let selectedCard=found.parentNode
                    newp.innerText=champion.name
                    let findh5Element=document.querySelector('h5').insertAdjacentElement('beforebegin', newp)
                    selectedCard.appendChild(findh5Element)
                    break;
                }
            }

        
            mainChampion(mainChamp)
        })
  
    })


    let renderForm = (champion) => {
        mainContainer.innerHTML=""
        championId=champion.id
        mainContainer.innerHTML=""
        let form=document.createElement('form')
        form.className="form-container"

        let heading=document.createElement('h3')
        heading.innerText="Create New List"

        let inputField=document.createElement('input')
        inputField.placeholder="Name Your List"
        inputField.type="text"


        let submitButton=document.createElement('BUTTON')           
        submitButton.className="btn"
        submitButton.type="submit"
        submitButton.innerText="Create!"

        form.append(heading, inputField, submitButton)
        mainContainer.append(form)

      

        form.addEventListener("submit", (evt) => {
            evt.preventDefault()

            let name=document.querySelector('input').value

            fetch(`${BASE_URL}/lists`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify( {
                    name: name,
                    champion_id: championId,
                    user_id: currentUser.id
                })
            })
            .then(resp => resp.json())
            .then(list => {

                if(list.id) {
                    userList.push(list)

                    let button=document.createElement('div')
                    button.className="form-bttn"

                    rightSide.append(button)

                    mainChampion(mainObj[0])
                    let sideLabel=document.createElement('h2')
                    sideLabel.className="champ-name"

                    sideLabel.innerText=list.name
                    button.append(sideLabel)
                    rightSide.append(button)

                    item.list_board_id=list.id

                    list.items.forEach(item => {
                        let champName=document.createElement('h5')
                        champName.className="champ-name"
    
                        champName.innerText=item.name
                        button.append(champName)
                        rightSide.append(button)

                        console.log(rightSide)
                        let deleteButton=document.createElement('BUTTON')
                        deleteButton.type="submit"
                        deleteButton.innerText="Remove"
                        deleteButton.className="deleteButton"
                        button.append(deleteButton)
                        rightSide.append(button)

                        let updateButton=document.createElement("BUTTON")
                        updateButton.type="submit"
                        updateButton.className="submitButton"
                        updateButton.innerHTML="Update Name"
                        button.append(updateButton)
                        rightSide.append(button)


                        let getCard=document.getElementsByClassName('card')
                        mainContainer.id="main-container-2"
                        rightSide.style.display="block"
                        getCard.className="card-2"
                        console.log(userLists)

                        deleteButton.addEventListener('click', (evt) => {
                            fetch(`${BASE_URL}/lists/${list.id}`, {
                                method: 'DELETE'
                            })
                
                            button.remove()
                            userLists.pop(list)
                    
                        })

                        updateButton.addEventListener("click", (evt) => {
                            evt.preventDefault()
                            userSists.pop(list)
                            globalListId=list.id
                            mainContainer.innerHTML=""
                            let updateform=document.createElement('form')

                            updateform.className="form-container"
                            let heading=document.createElement('h3')
                            heading.innerText="Update List Name!"
                            let inputField=document.createElement('input')
                            inputField.placeholder="Update List Name"
                            inputField.type="text"
              
                            let updateButton=document.createElement('BUTTON')           
                            updateButton.className="btn"
                            updateButton.type="submit"
                            updateButton.innerText="Update!"
                            updateform.append(heading, inputField, updateButton)
                            mainContainer.append(updateform)
                     
                            updateform.addEventListener("submit", (evt) => {
                                evt.preventDefault()
                                let newName=document.querySelector('input').value
                                console.log(newName)
                                fetch(`${BASE_URL}/lists/${list.id}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                    },
                                    body: JSON.stringify ({
                                        name: newName,
                                        id: list.id,
                                        champion_id: renderChampionId(list)
        
                                    })

                                })
                                .then(resp => resp.json())
                                .then(list => {
                                    userList.push(list)
                                    mainCategory(mainObj[0])
                                    sideLabel.innerText=list.name
                                })
    
                            })
              
                        })
                    })
                                      
                }
            })
              
        })
    }
}

let logOutUser = (currentUser) => {
    fetch(`${BASE_URL}/users/${currentUser.id}`, {
        method: "DELETE"
    })
     
     window.location.reload()
      
}

     let renderChampionId = (collection) => {
         collection.champions.forEach (champion => {
             champion.id
        })
    }

