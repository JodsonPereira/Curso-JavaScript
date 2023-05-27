let inputTag = document.getElementById("inputTag");
let radioTag = document.getElementById("radioTag");
let paragrafoTag = document.getElementById("paragrafoTag");

function criarElementos(){
    let valor1 = parseInt(document.getElementById("num1").value);
    for (var i = 1; i <valor1; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input" + i);
        inputTag.appendChild(input);
    }
}
    
function criaRadio(){
    let valor2 = parseInt(document.getElementById("num2").value);
    for (var i = 1; i <= valor2; i++) {
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", "radio" + i);
        radioTag.appendChild(radio);
    }
}

    
function criaParagrafos(){
    let valor3 = parseInt(document.getElementById("num3").value);
    for (var i = 1; i <= valor3; i++) {
        var paragrafo = document.createElement("p");
        paragrafo.setAttribute("class", "texto");
        paragrafo.setAttribute("id", "paragrafo" + i);
        paragrafo.textContent = "Parágrafo " + i;
        paragrafoTag.appendChild(paragrafo);
    }
}


function verificaElemento(){
if(document.getElementById('texto').checked) {
    criarElementos()
}
if(document.getElementById('radio').checked){
    criaRadio()
}
if(document.getElementById('paragrafo').checked){
    criaParagrafos()
}
}