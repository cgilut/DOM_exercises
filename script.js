const container = document.querySelector("#container")

const p = document.createElement("p")
const h3 = document.createElement("h3")

p.classList.add("p")
h3.classList.add("h3")

p.textContent = "Hey I'm red!"
h3.textContent = "Im a blue h3!"
p.style.color = "red"
h3.style.color = "blue"

container.appendChild(p);
container.appendChild(h3);

const div = document.createElement("div")
div.classList.add("div")

const h1 = document.createElement("h1")
h1.classList.add("h1")
h1.textContent = "I'm in a div!"

const pdiv = document.createElement("pdiv")
pdiv.classList.add("pdiv")
pdiv.textContent = "Me too!"

div.appendChild(h1);
div.appendChild(pdiv);

div.style.border = "2px black solid"
div.style.backgroundColor = "pink"

container.appendChild(div);