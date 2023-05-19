let area = document.getElementById('area');
let botao = document.getElementById("botao");
nomeCadastro = ["Jodson", "Gustavo", "Maria", "Jackson", "Vinicius"];
function entrar() {
    let encontrou = false;
    let nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i <= 4; i++) {
            if ((nomeCadastro[i] == nome)) {
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
            }
        }
    }
    if (encontrou == false) {
        alert("Nome não cadastrado, favor realizar cadastro!")
    }



}//final da função entrar

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden", "false");
}