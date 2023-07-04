var teste = document.querySelector(".teste");

teste.innerHTML = "<p>O innerHTML serve para incluir uma propriedade de HTML, ja o innerTEXT é para modificar o texto.<br>Para mudar o estilo se seleciona a variavel da tag que quer modificar e depois indica a variavel.style e a popriedade, exemplo estilo.style.backgroundColor = 'red', lembrando que no JS tem que se escrever com camelCase</p>";

let estilo = document.querySelector("body")

estilo.style.backgroundImage = "linear-gradient(to right, red, blue)";
estilo.style.color = "white";

let container = document.querySelector("#teste");

container.style.backgroundColor = "gray";

let img = document.createElement("img");// colocando o elemento criado na memoria

img.src = "img/meninas.jpeg"; // pegando o link do video
img.width = "500px";// ajustando css, largura
img.height = "500px";//css altura

estilo.appendChild(img);

let link = document.createElement("a");

link.innerText = "Meu link"
link.href = "https://twitter.com/home";
link.target = "blank"

estilo.appendChild(link);





//estilo.removeChild(container); removendo uma tag filha, primeiro chama a variavel que ta a pai e depois remove a filho