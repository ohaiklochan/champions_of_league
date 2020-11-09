const BASE_URL = "http://127.0.0.1:3000/"
let giantChampionsArray=[]
let listFormLogin = () => {
    mainContainer.innerHTML=""

    fetch(`${BASE_URL}/users`)
    .then(resp=>resp.json())
    .then(userArray => {
        console.log(userArray)

        let championLists=[]
        userArray.forEach((user) => {
            if(user.id===currentUser.id) {
                championLists.push(user.lists)
                currentUser.id=user.id
          
      
          }             
      })

      userLists.push(championLists)

      console.log(championLists)
      console.log(userLists)
      championLists[0].forEach((champList) => {
     
       console.log(champList)
    
        let sideCard=document.createElement('div')
            sideCard.id="side-bar"
            sideCard.className="container"
            let buttonX=document.createElement('div')
            buttonX.className="buttonX"
       
            rightSide.append(buttonX)
            let sideLabel=document.createElement('h2')
            sideLabel.className="champList-name"
            
            sideLabel.innerText=list.name
            buttonX.append(sideLabel)
            rightSide.append(buttonX)

            let deleteButton=document.createElement('BUTTON')
            deleteButton.type="submit"
            deleteButton.innerText="Remove"
            deleteButton.className="deleteButton"
            buttonX.append(deleteButton)
            rightSide.append(buttonX)


            let updateButton=document.createElement("BUTTON")
            updateButton.type="submit"
            updateButton.className="submitButton"
            updateButton.innerHTML="Update Name"
            buttonX.append(updateButton)
            rightSide.append(buttonX)
            let getCard=document.getElementsByClassName('card')
            mainContainer.id="main-container-2"
            rightSide.style.display="block"
            getCard.className="card-2"
            

 
            findChampionsInList(championLists.id)
     
            let delayed=()=>{
                for(let i=0; i<giantChampionsArray.length; i++){
                    if(giantChampionsArray[i]["list"]["id"]===championLists.id){
                            
                        let champName=document.createElement('h5')
                        champName.className="champ-name"
                        champName.innerHTML=giantChampionsArray[i]["name"]
                        buttonX.append(champName)
                        console.log("hello")
                        rightSide.append(buttonX)
                    }
               
                } 
            }

            setTimeout(delayed,200)
      

         
        })
        console.log(giantChampionsArray)

        let buttonsDelay = () => {
            
            let buttonX=document.createElement('div')
            buttonX.className="buttonX"
            let deleteButton=document.createElement('BUTTON')
            deleteButton.type="submit"
            deleteButton.innerText="Remove"
            deleteButton.className="deleteButton"
            buttonX.append(deleteButton)
            rightSide.append(buttonX)


            let updateButton=document.createElement("BUTTON")
            updateButton.type="submit"
            updateButton.className="submitButton"
            updateButton.innerHTML="Update Name"
            buttonX.append(updateButton)
            rightSide.append(buttonX)
            let getCard=document.getElementsByClassName('card')
            mainContainer.id="main-container-2"
            rightSide.style.display="block"
            getCard.className="card-2"
            deleteButton.addEventListener('click', (evt) => {
                fetch(`${BASE_URL}/lists/${list.id}`, {
                    method: 'DELETE'
                })
                buttonX.remove()
                userLists.pop(list)

            })


            updateButton.addEventListener("click", (evt) => {
                evt.preventDefault()
                userLists.pop(list)
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
                        body: JSON.stringify({
                            name: newName,
                            id: list.id,
                            champion_id: renderChampionId(list)


                        })

                    })
                    .then(resp => resp.json())
                    .then(list => {
                        userLists.push(list)
                        mainChampion(mainObj[0])
                        sideLabel.innerText=list.name
                    })

                })

            })
        }


      

        setTimeout(buttonsDelay,300)
    })

    rightSide.style.display="block"
    mainContainer.id='main-container-2'
    body.className="main"
    startMainPage()
}


let findChampionsInLists=(id)=> {
    fetch(`${BASE_URL}/lists/${id}`)
    .then(resp=>resp.json())
    .then((Champions)=> {
   
    giantChampionsArray.push(champion.champion[0])
  
    return giantChampionsArray

    })
  


}

