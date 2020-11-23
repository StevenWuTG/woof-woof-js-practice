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


}


loadPups()