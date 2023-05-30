let area = document.getElementById('area');
let botao = document.getElementById("botao");

let novoCadastro = []; // Declarar array novoCadastro fora de qualquer função

function entrar() {
    let encontrou = false; //colocado pelo chat para caso nao encontre
    let nome = prompt("Digite o seu nome"); // insirindo o nome para o login

    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i < novoCadastro.length; i++) {//length verifica os caracteres digitados no prompt
            if (novoCadastro[i] === nome) { //para poder acessar o conteudo preciso alterar o if
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
                return;
            }
        }
    }

    if (!encontrou) {
        alert("Nome não cadastrado!");
    }
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu";
    botao.removeAttribute("hidden");
}

function cadastrarUsuario() {
    let novoUsuario = prompt("Digite qual será o novo usuário a ser cadastrado:");

    if (novoUsuario === '' || novoUsuario === null) {
        alert("Ops, usuário inválido para cadastro!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        novoCadastro.push(novoUsuario); // Empurre o novoUsuario para o array novoCadastro
    }
}