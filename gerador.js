function gerarSenha() {
    const comprimento = document.getElementById('comprimento').value;
    const temMaiusculas = document.getElementById('temMaiusculas').checked;
    const temMinusculas = document.getElementById('temMinusculas').checked;
    const temNumeros = document.getElementById('temNumeros').checked;
    const temEspeciais = document.getElementById('temEspeciais').checked;

    let maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let numeros = '0123456789';
    let especiais = '!@#$%^&*()_-+=';

    let caracteres = '';
    if (temMaiusculas) caracteres += maiusculas;
    if (temMinusculas) caracteres += minusculas;
    if (temNumeros) caracteres += numeros;
    if (temEspeciais) caracteres += especiais;

    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    //document.getElementById('resultado').innerHTML = 'Sua senha é: ' + senha;
    //console.log(senha);
    document.getElementById('resultado').innerHTML = `
    <p>Sua senha é: <span id="senhaGerada">${senha}</span></p>
    <button class="btn btn-secondary" onclick="copiarSenha()">Copiar</button>
`;
}

function copiarSenha() {
    const senhaGerada = document.getElementById('senhaGerada').innerText;
    navigator.clipboard.writeText(senhaGerada)
        .then(() => {
                let toastEl = document.getElementById('copy');
                let toast = new bootstrap.Toast(toastEl);
                toast.show();
        })
        .catch(err => {
            console.error('Erro ao copiar a senha: ', err);
        });
}