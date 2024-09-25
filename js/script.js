const reponse = await fetch('http://localhost:3000/pieces')
const pieces = await reponse.json()

function genererPizza(pieces) {

    for(let i =0; i < pieces.length; i++) {

const pizza = pieces[i]

//recup de l'element du DOM qui accueillera les fiches pizza
const sectionPizza = document.querySelector(".fiches")
//Création d'une balise dédiée à une pizza
const pizzaElement = document.createElement("article")
//Créationn des balises
//image
const imagePizza = document.createElement("img")
imagePizza.src = pizza.image
//nom pizza
const nomPizza = document.createElement("h2")
nomPizza.innerText = pizza.nom
//prix pizza
const prixPizza = document.createElement("p")
prixPizza.innerText = `Prix: ${pizza.prix} €`
//description pizza
const descriptionPizza = document.createElement("p")
descriptionPizza.innerText = pizza.description


sectionPizza.appendChild(pizzaElement)
//On rattache l'image à la balise article
pizzaElement.appendChild(imagePizza)
pizzaElement.appendChild(nomPizza)
pizzaElement.appendChild(prixPizza)
pizzaElement.appendChild(descriptionPizza)

    }

}
genererPizza(pieces);