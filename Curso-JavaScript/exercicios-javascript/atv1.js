var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite seu nome:");
    if(nome==""|| nome == null){
        alert("Por favor preencher o campo de nome !!");
        area.innerHTML = "Clique no butão para acessar..."

    }else{
        area.innerHTML = "Bem vindo "+nome;
    }
}


function somar(array){

    let resultado = array[0] + array[1];

    document.getElementById("resultado").value = resultado;
}

function subtrair(array){

    let resultado = array[0] - array[1];

    document.getElementById("resultado").value = resultado;
}   

function multiplicar(array){
   
    let resultado = array[0] * array[1];

    document.getElementById("resultado").value = resultado;
}

function dividir(array){

    let resultado = array[0] / array[1];

    document.getElementById("resultado").value = resultado;
}

function calcular(qualquerNome){
    let array = new Array
    array[0] = parseInt(document.getElementById("num1").value);
    array[1] = parseInt(document.getElementById("num2").value);
    if(qualquerNome=="somar"){

        somar(array);
    }

    if(qualquerNome=="subtrair"){

        subtrair(array);
    }

    if(qualquerNome=="multiplicar"){

        multiplicar(array);
    }

    if(qualquerNome=="dividir"){

        dividir(array);
    }
}
