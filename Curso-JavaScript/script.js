// teste = "Isto é um teste";

// teste = new String("Isto é um teste")

// teste1 = "Isto é um teste. ";
// teste2 = "Somente um teste";
// teste3 = teste1 + teste2;
// // alert(teste3);

// var frase = "Este é o meu Brasil."
// document.write(frase.length)

// frase1 = "Ouvindo você esquece. Lendo você aprende. Fazendo, você sabe!";
// alert(frase1.toUpperCase());
// alert(frase1.toLowerCase());

// frase3 = "Brasil, meu Brasil brasileiro...";
// ind = frase3.indexOf("Brasil");
// document.write(ind);

// frase3 = "Brasil, meu Brasil brasileiro..."
// document.write(frase3.indexOf("Brasil",1));

// var a = prompt("Digite um numero") ;
// if(a>2) {
//     alert("a é maior que 2");
// }
// else{
//     alert("a é menor ou igual a 2");
//     a=5;
// }

// var x = 2;
// var y = 4;
// if (x == 2  && y ==3);
// var z = x + y ;
// alert("O valor de Z= "+z);
// else{
//     alert("Alguma informação deu como false!!")
// }

var diaDaSemana = 5 ;
switch(diaDaSemana) {
    case 0 : document.write("Domingo");
    break;
    case 1 : document.write("Segunda-feira");
    break;
    case 2 : document.write("Terça-feira");
    break;
    case 3 : document.write("Quarta-feira");
    break;
    case 4 : document.write("Quinta-feira");
    break;
    case 5 : document.write("Sexta-feira");
    break;
    case 6 : document.write("Sábado");
    break;
    default : alert("Dia da semana inválido!");
}