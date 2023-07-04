var teste = document.querySelector(".teste");

teste.innerHTML = "<p>O innerHTML serve para incluir uma propriedade de HTML, ja o innerTEXT é para modificar o texto.<br>Para mudar o estilo se seleciona a variavel da tag que quer modificar e depois indica a variavel.style e a popriedade, exemplo estilo.style.backgroundColor = 'red', lembrando que no JS tem que se escrever com camelCase</p>";

let estilo = document.querySelector("body")

estilo.style.backgroundImage = "linear-gradient(to right, red, blue)";
estilo.style.color = "white";

let container = document.querySelector("#teste");

container.style.backgroundColor = "gray";
//estilo.removeChild(container); removendo uma tag filha, primeiro chama a variavel que ta a pai e depois remove a filho

//Adicionando uma imagem
let imag = document.createElement("img");// colocando o elemento criado na memoria
    imag.src = "https://avatars.githubusercontent.com/u/101151286?s=400&u=ffcfdd7ba2452c8299b7b52df30fa1fec5aa22d2&v=4"; // pegando a url da imagem
    imag.width = "500px";// ajustando css, largura
    imag.height = "500px";//css altura
    estilo.appendChild(imag);

document.write("<br><p>Link adicionado utilizando o DOM<p>")

///adicionando um link

let link = document.createElement("a");//colocando o elemento criado na memoria
    link.innerText = "Meu link";
    link.href = "https://twitter.com/home";
    link.target = "blank";
    link.style.textDecoration = "none";
    link.style.fontSize = "25px"
    estilo.appendChild(link);

//isertBefore

var depois = document.createElement("p")

var filho = document.querySelector("#filho1")

var pai = filho.parentNode;

pai.insertBefore(depois, filho);

depois.innerHTML = "Texto antes da span filho"

// colocando atributo

link.setAttribute("id", "twitter");// coloca o atributo que quer e depois o nome
//link.getAttribute("id") verificar qual o atributo colocado

//removendo atributo

link.removeAttribute("id");




