// var inputsContainer = document.getElementById("inputsContainer");
let inputTag = document.getElementById("inputTag");
let radioTag = document.getElementById("radioTag");
let paragrafoTag = document.getElementById("paragrafoTag");

function criarElementos(){
    // Criando input 
    for (var i = 1; i <= 20; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input" + i);
        inputTag.appendChild(input);
    }
    
    // Criando input radio
    for (var i = 1; i <= 20; i++) {
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", "radio" + i);
        radioTag.appendChild(radio);
    }
    
    // Criando os parágrafos
    for (var i = 1; i <= 30; i++) {
        var paragrafo = document.createElement("p");
        paragrafo.setAttribute("class", "texto");
        paragrafo.setAttribute("id", "paragrafo" + i);
        paragrafo.textContent = "Parágrafo " + i;
        paragrafoTag.appendChild(paragrafo);
    }
}
