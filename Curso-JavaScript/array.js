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

function mostrarNumeros(){
    
 var arrayG = new Array(5)
 arrayG[0] = parseInt(document.getElementById("numero1").value);
 arrayG[1] = parseInt(document.getElementById("numero2").value);
 arrayG[2] = parseInt(document.getElementById("numero3").value);
 arrayG[3] = parseInt(document.getElementById("numero4").value); 
 arrayG[4] = parseInt(document.getElementById("numero5").value); 

 var arrayH = new Array (6)
 arrayH[0] = parseInt(document.getElementById("numero6").value);
 arrayH[1] = parseInt(document.getElementById("numero7").value);
 arrayH[2] = parseInt(document.getElementById("numero8").value);
 arrayH[3] = parseInt(document.getElementById("numero9").value);
 arrayH[4] = parseInt(document.getElementById("numero10").value);
 arrayH[5] = parseInt(document.getElementById("numero11").value);

 var arrayI = new Array (11)
  arrayI[0] = arrayG[0];
  arrayI[1] = arrayG[1];
  arrayI[2] = arrayG[2];
  arrayI[3] = arrayG[3];
  arrayI[4] = arrayG[4];
  arrayI[5] = arrayH[0];
  arrayI[6] = arrayH[1];
  arrayI[7] = arrayH[2];
  arrayI[8] = arrayH[3];
  arrayI[9] = arrayH[4];
  arrayI[10] = arrayH[5];

  
    document.getElementById("resultados1").value  = arrayI[0];
    document.getElementById("resultados2").value  = arrayI[1];
    document.getElementById("resultados3").value  = arrayI[2];
    document.getElementById("resultados4").value  = arrayI[3];
    document.getElementById("resultados5").value  = arrayI[4];
    document.getElementById("resultados6").value  = arrayI[5];
    document.getElementById("resultados7").value  = arrayI[6];
    document.getElementById("resultados8").value  = arrayI[7];
    document.getElementById("resultados9").value  = arrayI[8];
    document.getElementById("resultados10").value = arrayI[9];
    document.getElementById("resultados11").value = arrayI[10];
  }