function calcularArray(){
    let arrayA = new Array (5)
    arrayA[0]= parseInt(document.getElementById("num1").value);
    arrayA[1]= parseInt(document.getElementById("num2").value);
    arrayA[2]= parseInt(document.getElementById("num3").value);
    arrayA[3]= parseInt(document.getElementById("num4").value);
    arrayA[4]= parseInt(document.getElementById("num5").value);

    let arrayB = new Array (5)
    arrayB[0]= parseInt(document.getElementById("nume1").value);
    arrayB[1]= parseInt(document.getElementById("nume2").value);
    arrayB[2]= parseInt(document.getElementById("nume3").value);
    arrayB[3]= parseInt(document.getElementById("nume4").value);
    arrayB[4]= parseInt(document.getElementById("nume5").value);

    let arrayC = new Array (5)
    arrayC[0]= parseInt(document.getElementById("numero1").value);
    arrayC[1]= parseInt(document.getElementById("numero2").value);
    arrayC[2]= parseInt(document.getElementById("numero3").value);
    arrayC[3]= parseInt(document.getElementById("numero4").value);
    arrayC[4]= parseInt(document.getElementById("numero5").value);

    let arrayD = new Array (15)
    arrayD[0] = arrayA[0]
    arrayD[1] = arrayA[1]
    arrayD[2] = arrayA[2]
    arrayD[3] = arrayA[3]
    arrayD[4] = arrayA[4]
    arrayD[5] = arrayB[0]
    arrayD[6] = arrayB[1]
    arrayD[7] = arrayB[2]
    arrayD[8] = arrayB[3]
    arrayD[9] = arrayB[4]
    arrayD[10] = arrayC[0]
    arrayD[11] = arrayC[1]
    arrayD[12] = arrayC[2]
    arrayD[13] = arrayC[3]
    arrayD[14] = arrayC[4]

    document.getElementById("resultado1").value = arrayD[0]
    document.getElementById("resultado2").value = arrayD[1]
    document.getElementById("resultado3").value = arrayD[2]
    document.getElementById("resultado4").value = arrayD[3]
    document.getElementById("resultado5").value = arrayD[4]
    document.getElementById("resultado6").value = arrayD[5]
    document.getElementById("resultado7").value = arrayD[6]
    document.getElementById("resultado8").value = arrayD[7]
    document.getElementById("resultado9").value = arrayD[8]
    document.getElementById("resultado10").value = arrayD[9]
    document.getElementById("resultado11").value = arrayD[10]
    document.getElementById("resultado12").value = arrayD[11]
    document.getElementById("resultado13").value = arrayD[12]
    document.getElementById("resultado14").value = arrayD[13]
    document.getElementById("resultado15").value = arrayD[14]
}