for (let i = 0; i <= 10; i++) {
    document.write("Este numero e igual "+i+"<br>");
    
}

for (let i = 15; i <=200 ; i++) {
    document.write("O quadrado de "+i+" = "+i*i+"<br>");
}

let soma = 0;
for(i=0;i<=500;i++){
    let verifica = i%2;
    if(verifica==0){
        soma = soma + i;
    }
}
document.write("O resultado dos números pares é = "+soma+"<br>")
