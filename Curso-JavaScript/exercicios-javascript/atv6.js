function tabuada(){
    let numero = parseInt(document.getElementById("numero").value);
    document.getElementById("fonte").value = numero;

    arrayA = new Array(10);
    arrayA[0] = numero*1;
    arrayA[1] = numero*2;
    arrayA[2] = numero*3;
    arrayA[3] = numero*4;
    arrayA[4] = numero*5;
    arrayA[5] = numero*6;
    arrayA[6] = numero*7;
    arrayA[7] = numero*8;
    arrayA[8] = numero*9;
    arrayA[9] = numero*10;

    document.getElementById("resultado1").value = arrayA[0];
    document.getElementById("resultado2").value = arrayA[1];
    document.getElementById("resultado3").value = arrayA[2];
    document.getElementById("resultado4").value = arrayA[3];
    document.getElementById("resultado5").value = arrayA[4];
    document.getElementById("resultado6").value = arrayA[5];
    document.getElementById("resultado7").value = arrayA[6];
    document.getElementById("resultado8").value = arrayA[7];
    document.getElementById("resultado9").value = arrayA[8];
    document.getElementById("resultado10").value = arrayA[9];
}