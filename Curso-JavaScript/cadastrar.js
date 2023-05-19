function cadastro(){
    let usuario = document.getElementById("usuario").value;
    let senha =  document.getElementById("senha").value;
    if(usuario === "senai" && senha === "1234" ){
        document.write("<h1>Usuário correto, você será redirecionado para a página principal ... <h1>");
    }else{
        alert("Usuario ou senhas incorreto, por favor verifique seus dados !!")
    }
}