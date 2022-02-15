function getData(){
    // This fuction simulates the request of the information in a DB for example
    return charactersData = {
        "characters":[
            {"name":"Monkey D. Luffy","src":"img/monkeydluffy.svg"},
            {"name":"Portgas D. Ace","src":"img/ace.svg"},
            {"name":"Roronoa Zoro","src":"img/zoro.svg"},
            {"name":"Nico Robin","src":"img/nico.svg"}
        ]
    }
}

function loadCards() {

    // Request the information
    var charactersData = getData();

    // Div where is going to set the cards
    const divCardContainer = document.querySelector(".cards-container");

    charactersData.characters.forEach(character => {
        
        // Div of one card
        const card = document.createElement("div");
        card.className = "card";

        // Creation of the image
        const cardImage = document.createElement("img");
        cardImage.src = character.src;

        // Creation of the lable of the card
        const cardName = document.createElement("div");
        cardName.textContent = character.name;
        cardName.classList.add("image-name");
        cardName.classList.add("font-name");
        
        card.appendChild(cardImage);
        card.appendChild(cardName);
        divCardContainer.appendChild(card);
    })
    
    document.body.appendChild(divCardContainer);
}

window.onload = loadCards();