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
function subtrairMatrizes(){
    let arrayA = new Array(20)
    arrayA[0] = parseInt(document.getElementById("num1").value);
    arrayA[1] = parseInt(document.getElementById("num2").value);
    arrayA[2] = parseInt(document.getElementById("num3").value);
    arrayA[3] = parseInt(document.getElementById("num4").value);
    arrayA[4] = parseInt(document.getElementById("num5").value);
    arrayA[5] = parseInt(document.getElementById("num6").value);
    arrayA[6] = parseInt(document.getElementById("num7").value);
    arrayA[7] = parseInt(document.getElementById("num8").value);
    arrayA[8] = parseInt(document.getElementById("num9").value);
    arrayA[9] = parseInt(document.getElementById("num10").value);
    arrayA[10] = parseInt(document.getElementById("num11").value);
    arrayA[11] = parseInt(document.getElementById("num12").value);
    arrayA[12] = parseInt(document.getElementById("num13").value);
    arrayA[13] = parseInt(document.getElementById("num14").value);
    arrayA[14] = parseInt(document.getElementById("num15").value);
    arrayA[15] = parseInt(document.getElementById("num16").value);
    arrayA[16] = parseInt(document.getElementById("num17").value);
    arrayA[17] = parseInt(document.getElementById("num18").value);
    arrayA[18] = parseInt(document.getElementById("num19").value);
    arrayA[19] = parseInt(document.getElementById("num20").value);

    let arrayB = new Array(20)
    arrayB[0] = parseInt(document.getElementById("numero1").value);
    arrayB[1] = parseInt(document.getElementById("numero2").value);
    arrayB[2] = parseInt(document.getElementById("numero3").value);
    arrayB[3] = parseInt(document.getElementById("numero4").value);
    arrayB[4] = parseInt(document.getElementById("numero5").value);
    arrayB[5] = parseInt(document.getElementById("numero6").value);
    arrayB[6] = parseInt(document.getElementById("numero7").value);
    arrayB[7] = parseInt(document.getElementById("numero8").value);
    arrayB[8] = parseInt(document.getElementById("numero9").value);
    arrayB[9] = parseInt(document.getElementById("numero10").value);
    arrayB[10] = parseInt(document.getElementById("numero11").value);
    arrayB[11] = parseInt(document.getElementById("numero12").value);
    arrayB[12] = parseInt(document.getElementById("numero13").value);
    arrayB[13] = parseInt(document.getElementById("numero14").value);
    arrayB[14] = parseInt(document.getElementById("numero15").value);
    arrayB[15] = parseInt(document.getElementById("numero16").value);
    arrayB[16] = parseInt(document.getElementById("numero17").value);
    arrayB[17] = parseInt(document.getElementById("numero18").value);
    arrayB[18] = parseInt(document.getElementById("numero19").value);
    arrayB[19] = parseInt(document.getElementById("numero20").value);

    let arrayC = new Array(20)
    arrayC[0]  = arrayA[0]  - arrayB[0]
    arrayC[1]  = arrayA[1]  - arrayB[1]
    arrayC[2]  = arrayA[2]  - arrayB[2]
    arrayC[3]  = arrayA[3]  - arrayB[3]
    arrayC[4]  = arrayA[4]  - arrayB[4]
    arrayC[5]  = arrayA[5]  - arrayB[5]
    arrayC[6]  = arrayA[6]  - arrayB[6]
    arrayC[7]  = arrayA[7]  - arrayB[7]
    arrayC[8]  = arrayA[8]  - arrayB[8]
    arrayC[9]  = arrayA[9]  - arrayB[9]
    arrayC[10] = arrayA[10] - arrayB[10]
    arrayC[11] = arrayA[11] - arrayB[11]
    arrayC[12] = arrayA[12] - arrayB[12]
    arrayC[13] = arrayA[13] - arrayB[13]
    arrayC[14] = arrayA[14] - arrayB[14]
    arrayC[15] = arrayA[15] - arrayB[15]
    arrayC[16] = arrayA[16] - arrayB[16]
    arrayC[17] = arrayA[17] - arrayB[17]
    arrayC[18] = arrayA[18] - arrayB[18]
    arrayC[19] = arrayA[19] - arrayB[19]

    document.getElementById("resultados1").value  = arrayC[0];
    document.getElementById("resultados2").value  = arrayC[1];
    document.getElementById("resultados3").value  = arrayC[2];
    document.getElementById("resultados4").value  = arrayC[3];
    document.getElementById("resultados5").value  = arrayC[4];
    document.getElementById("resultados6").value  = arrayC[5];
    document.getElementById("resultados7").value  = arrayC[6];
    document.getElementById("resultados8").value  = arrayC[7];
    document.getElementById("resultados9").value  = arrayC[8];
    document.getElementById("resultados10").value  = arrayC[9];
    document.getElementById("resultados11").value  = arrayC[10];
    document.getElementById("resultados12").value  = arrayC[11];
    document.getElementById("resultados13").value  = arrayC[12];
    document.getElementById("resultados14").value  = arrayC[13];
    document.getElementById("resultados15").value  = arrayC[14];
    document.getElementById("resultados16").value  = arrayC[15];
    document.getElementById("resultados17").value  = arrayC[16];
    document.getElementById("resultados18").value  = arrayC[17];
    document.getElementById("resultados19").value  = arrayC[18];
    document.getElementById("resultados20").value  = arrayC[19];
}