let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("buton");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxzwyABCDEFGHIJKLMNOPQRDTUVXZ0123456789#*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    /*alert("VAMOS GERAR A SENHA")*/
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }
    /*console.log(pass);*/
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}


