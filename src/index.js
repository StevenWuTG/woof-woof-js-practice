// DOM Queries 

const dogBar = document.querySelector("#dog-bar")
const dogContainer = document.querySelector("#dog-summary-container")


function loadPups(){
    fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(dataArr => {
        dataArr.forEach(pup => {
            renderPup(pup)
        })
    })
}

function renderPup(pup){
        const pupSpan = document.createElement("span")
        
        pupSpan.innerText = pup.name
        pupSpan.dataset.id = pup.id

        // debugger
        dogBar.append(pupSpan)
        pupSpan.addEventListener("click", function(){
            showDogCard(pup)
        })
}


function showDogCard(pup){
    const card = document.createElement("div")
    card.setAttribute("id", "dog-info")
    const img = document.createElement("img")
    img.src = pup.image
    const h2 = document.createElement("h2")
    h2.textContent = pup.name
    
    card.append(img, h2)
    dogContainer.append(card)
}


// event listeners 

dogBar.addEventListener("click", function(e) {

    if (e.target.matches("span")){
        const card = document.createElement("div")
        card.setAttribute("id", "dog-card")

    }
})



loadPups()