function faxiaEtaria(){
    let idade = parseFloat(document.getElementById("idade").value);
    if(idade<=11){
        document.getElementById("resultado").innerHTML = "A pessoa que a idade foi informada, pertence a faixa étaria de criança!!"
    }else if(idade<=20){
        document.getElementById("resultado").innerHTML = "A pessoa que a idade foi informada, pertence a faixa étaria de adolescente!!"
    }else if(idade<=64){
        document.getElementById("resultado").innerHTML = "A pessoa que a idade foi informada, pertence a faixa étaria de adulto!!"
    }else if(idade>65){
        document.getElementById("resultado").innerHTML = "A pessoa que a idade foi informada, pertence a faixa étaria de idoso!!"
    }
}