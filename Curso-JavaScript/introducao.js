console.log(
    document.getElementById("fruta") //captura somente a id
)

console.log(
    document.getElementsByClassName("carro") //captura todas as classes
)

console.log(
    document.getElementsByClassName("carro")[0].innerHTML  //com a inseção do [0] consigo acessar a primeira classe do documento
)

console.log(
    document.getElementsByClassName("carro")[1].innerHTML 
)

console.log(
    document.getElementsByTagName("div")  //ele captura todas as tags independente das classes e ids
)

console.log(
    document.querySelector("div")  //ele seleciona a primeira tag
)

console.log(
    document.querySelector(".carro")  //ele seleciona a primeira classe
)