const BASE_URL = "http://127.0.0.1:3000/"
let giantChampionsArray=[]
let listFormLogin = () => {
    mainContainer.innerHTML=""

    fetch(`${BASE_URL}/users`)
    .then(resp=>resp.json())
    .then(userArray => {
        console.log(userArray)

        let lists=[]
        userArray.forEach((user) => {
            if(user.id===currentUser.id) {
                lists.push(user.list)
                currentUser.id=user.id
          
      
          }             
      })

      userLists.push(lists)

      console.log(lists)
      console.log(userLists)
      lists[0].forEach((userList)=> {
     
       console.log(userList)
    
        let sideCard=document.createElement('div')
            sideCard.id="side-bar"
            sideCard.className="container"
            let button=document.createElement('div')
            button.className="button"
       
            rightSide.append(button)
            let sideLabel=document.createElement('h2')
            sideLabel.className="champ-name"
            
            sideLabel.innerText=list.name
            button.append(sideLabel)
            rightSide.append(button)

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
            

 
            findChampionsInList(userList.id)
     
            let delayed=()=>{
                for(let i=0; i<giantChampionsArray.length; i++){
                    if(giantChampionsArray[i]["list"]["id"]===userList.id){
                            
                        let champName=document.createElement('h5')
                        champName.className="champ-name"
                        champName.innerHTML=giantChampionsArray[i]["name"]
                        button.append(champName)
                        console.log("hello")
                        rightSide.append(button)
                    }
               
                } 
            }

            setTimeout(delayed,200)
      

         
        })
        console.log(giantChampionsArray)

        let buttonsDelay = () => {

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
            deleteButton.addEventListener('click', (evt) => {
                fetch(`${BASE_URL}/lists/${list.id}`, {
                    method: 'DELETE'
                })
                button.remove()
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

