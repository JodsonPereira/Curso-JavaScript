var area = document.getElementById('area');

function entrar(){
var nome = prompt("Qual o seu nome?");
var sobrenome = prompt("Qual é o seu sobrenome?");

if(nome === "" || nome === null ){
    alert ("Ops, algo deu errado !!!")
    area.innerHTML = "Clique no botão para acessar ...";
}else{
    area.innerHTML = "Bem vindo "+nome+" "+sobrenome+"<br>";
}

let botaoSair = document.createElement("button");
botaoSair.innerText = "Logout";
botaoSair.onclick = sair;
area.appendChild(botaoSair);
}

function sair(){
    alert("Até mais !!");
    area.innerHTML = "Você saiu!!" ;
}

