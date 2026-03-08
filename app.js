const input = document.getElementById("search")
const button = document.getElementById("btn")
const title = document.querySelector("h3")
const image = document.querySelector("img")
const save = document.getElementById("save")

let currentDrink = null

button.addEventListener("click", function () {

const name = input.value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

.then(res => res.json())

.then(data => {

const drink = data.drinks[0]

currentDrink = drink

title.textContent = drink.strDrink + " (" + drink.strCategory + ")"

image.src = drink.strDrinkThumb

})

})

save.addEventListener("click", function(){

if(!currentDrink) return

let favs = JSON.parse(localStorage.getItem("favs")) || []

const exists = favs.find(d => d.idDrink === currentDrink.idDrink)

if(exists){
alert("Already in favorites!")
return
}

favs.push(currentDrink)

localStorage.setItem("favs", JSON.stringify(favs))

alert("Saved to favorites!")

})