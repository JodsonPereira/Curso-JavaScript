var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o prarágrafo...");
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var corpoPagina = document.querySelector("body");
console.log(corpoPagina);
corpoPagina.appendChild(novoParagrafo);

//inserindo em uma tag com um id criado no corpo da página
var divContainer = document.getElementById("container");
console.log(divContainer);

elementSpan = document.createElement("span");
elementSpan.appendChild(document.createTextNode("Inserindo um texto dentro do Span"));
console.log(elementSpan);
divContainer.appendChild(elementSpan);