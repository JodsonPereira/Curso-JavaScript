function somar(){
    let numero1 = parseInt(document.getElementById("num1").value);

    let numero2 = parseInt(document.getElementById("num2").value);

    let resultado = (numero1 + numero2) /2;

    document.getElementById("media").value = resultado;

    if(resultado>=6){
        document.getElementById("final").value = "Você foi aprovado"
    }else{
        document.getElementById("final").value = "Você foi reprovado"
    }
}