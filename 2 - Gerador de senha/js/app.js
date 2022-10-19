let amount = document.querySelector('#amount');
let amountSpan = document.querySelector('#amountSpan');
let generatedPassword = document.querySelector('#generatedPassword');
let warningSpan = document.querySelector('#warning');

amountSpan.textContent = amount.value
warningSpan.textContent = 'Clique em para gerar para começar'

let pass = '';

let charset = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%*';

function range() {
    amountSpan.textContent = amount.value;
}

function generatPassword() {
    pass = '';
     for(let i = 0 ; i < amount.value; i++){
        pass += charset[Math.floor(Math.random() * 58)]
     };
     generatedPassword.textContent = pass;
     updatePassWarning(1)
}


function copyPass() {
    navigator.clipboard.writeText(pass);
    updatePassWarning()
}

function updatePassWarning(value) {
    
    if (value == 1) {
        warningSpan.textContent = 'Clique para copiar a Senha';
        warningSpan.style.color = 'white'; 
    } else {
        warningSpan.textContent = 'Senha copiada';
        warningSpan.style.color = 'green'; 
    }

}