const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
constmessageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

// Verifica se o e-mail está preenchido e se é válido
if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor,preencha o seu email");
    return;
}    

// Verifica se a está preenchida
if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ser no mínimo 8 dígitos. ");
    return;
}

// Verifica se a situação foi selecionada
if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação");
    return;
}

// Verfica se a mensagem está preenchida
if (messageTextarea.value == "") {
    alert("Por favor, escreva uma mensagem")
}

// Se todos os campos estiverem corretamente preenchidos, envie o form
form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp (
        /^[a-zA-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
    
        if (emailRegex.test(email)) {
            return true;
        }

        return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }

    // Senha inválidas
    return false;
}