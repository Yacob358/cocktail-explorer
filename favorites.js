const list = document.getElementById("list")

const favs = JSON.parse(localStorage.getItem("favs")) || []

favs.forEach(drink => {

const div = document.createElement("div")

div.className = "mb-4"

div.innerHTML = `
<h4>${drink.strDrink}</h4>
<img src="${drink.strDrinkThumb}" width="200">
`

list.appendChild(div)

})