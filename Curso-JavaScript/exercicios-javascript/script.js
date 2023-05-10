function calculoAreaTriangulo(){
    let base = parseFloat(document.getElementById("base").value) ;
    let altura = parseFloat(document.getElementById("altura").value);
    let area= (base * altura)/2 ;

    if(area<=100){
        alert("A area do triângulo = "+area+" este triângulo pertence ao grupo 1 ");
    }else if((area>100)&&(area<=400)){
        alert("A area do triângulo = "+area+" este triângulo pertence ao grupo 2 ");
    }else if((area>400)&&(area<=600)){
        alert("A area do triângulo = "+area+" este triângulo pertence ao grupo 3 ");
    }else if((area>600)&&(area<=600)){
        alert("A area do triângulo = "+area+" este triângulo pertence ao grupo 4 ");
    }
    else{
        alert("A area do triângulo = "+area+" este triângulo pertence ao grupo 5 ");
    }
}

function calculoRaioCirculo(){
    let raio = parseFloat(document.getElementById("raio").value) ;
    let resultado = (raio * raio)*3.14 ;
    
    if(resultado<=100){
        alert("A area do circulo = "+resultado+" este circulo pertence ao grupo 1 ");
    }else if((resultado>100)&&(resultado<=400)){
        alert("A area do circulo = "+resultado+" este circulo pertence ao grupo 2 ");
    }else if((resultado>400)&&(resultado<=600)){
        alert("A area do circulo = "+resultado+" este circulo pertence ao grupo 3 ");
    }else if((resultado>600)&&(resultado<=600)){
        alert("A area do circulo = "+resultado+" este circulo pertence ao grupo 4 ");
    }
    else{
        alert("A area do circulo = "+resultado+" este circulo pertence ao grupo 5 ");
    }

}