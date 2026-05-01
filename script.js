let div = document.getElementById("Div");
let p = document.createElement("p");
p.textContent = "This is a paragraph";

div.appendChild(p);
p.textContent = "The text has been modified";

p.style.backgroundColor = "lightblue";
p.style.textAlign = "center";

div.addEventListener("click", function () {
     p.textContent = "A click has been detected";
});
