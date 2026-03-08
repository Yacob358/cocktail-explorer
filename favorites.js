const list = document.getElementById("list")

let favs = JSON.parse(localStorage.getItem("favs")) || []

function render(){

list.innerHTML = ""

favs.forEach((drink,index)=>{

const div = document.createElement("div")

div.className = "mb-4"

div.innerHTML = `
<h4>${drink.strDrink}</h4>
<img src="${drink.strDrinkThumb}" width="200">
<br>
<button class="btn btn-danger mt-2">Delete</button>
`

const btn = div.querySelector("button")

btn.addEventListener("click",function(){

favs.splice(index,1)

localStorage.setItem("favs",JSON.stringify(favs))

render()

})

list.appendChild(div)

})

}

render()