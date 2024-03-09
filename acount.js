// Função para verificar se o usuário está conectado ao carregar a página
window.onload = function() {
    var storedUser = localStorage.getItem('user');
    if (storedUser) {
        submitLoginForm(); // login automaticamente se um usuário estiver armazenado localmente
    }
};

// Função para o envio do formulário de inscrição
function submitSignUpForm() {
    // Coletar os dados do formulário
    var username = document.getElementById('usernameInputSignUp').value;
    var password = document.getElementById('passwordInputSignUp').value;

    // Verificar se os campos estão preenchidos
    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos antes de criar a conta.');
        return; //Não envia se os campos não estiverem preenchidos
    }

    // Armazenar os dados localmente no navegador
    localStorage.setItem('user', JSON.stringify({ username: username, password: password }));

    // Mostrar mensagem de sucesso
    var successAcount = document.getElementById('successAcount');
    successAcount.innerHTML = 'Conta criada com sucesso!';

    successAcount.style.display = 'block';

    // Oculta o formulário de inscrição após um tempo
    setTimeout(function() {
        document.getElementById('signUpForm').style.display = 'none';
    }, 1200);  

    // Ocultar a mensagem após um tempo
    setTimeout(function() {
        successAcount.style.display = 'none';
    }, 1200);

    setTimeout(function() {
        submitLoginForm();
    }, 1000); 
}

// Função para lidar com o envio do formulário de login
function submitLoginForm() {

    var storedUser = localStorage.getItem('user');

    if (storedUser) {
        storedUser = JSON.parse(storedUser);
        var username = storedUser.username;
        var password = storedUser.password;

        // Mostrar mensagem de sucesso com o nome de usuário
        var successMessage = document.getElementById("successMessage");
        successMessage.innerHTML = saudacao + ".<br> " + username

        successMessage.style.display = 'block';

        // Ocultar botões de "Inscrever-se" e "Entrar"
        document.getElementById('subscribeBtn').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'none';

        // Mostrar botão de "Sair"
        document.getElementById('logoutBtn').style.display = 'inline-block';

        // Ocultar formulário de login
        setTimeout(function() {
            document.getElementById('loginForm').style.display = 'none';
        }, 1000);

       // Modificar o texto do footer após o login
       var disclaimerTitle = document.querySelector('.disclaimer-premium__title');
       var disclaimerSubtitle = document.querySelector('.disclaimer-premium__subtitle');
       var usernameCapitalized = username.charAt(0).toUpperCase() + username.slice(1);

       disclaimerTitle.textContent = 'Bem-vindo ao Premium!';
       disclaimerSubtitle.textContent = usernameCapitalized + ', Parabéns agora você é um usuário premium.';

        var disclaimerSubtitle = document.querySelector('.disclaimer-premium__subtitle');
        disclaimerSubtitle.removeAttribute('onclick');

       // Ocultar o botão do footer após o login
       var botao = document.querySelector('.button');
       botao.style.display = 'none';

    } else {
        // Lidar com usuário não cadastrado
        alert('Você ainda não possui uma conta. Por favor, inscreva-se primeiro.');
    }
}


// Função para exibir o formulário de inscrição
function showSignUpForm() {
    document.getElementById('signUpForm').style.display = 'block';
}

// Função para exibir o formulário de login
function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

// Função para lidar com o cancelamento da inscrição
function cancelSignUp() {
    // Ocultar o formulário de inscrição
    document.getElementById('signUpForm').style.display = 'none';
}

// Função para lidar com o cancelamento do login
function cancelLogin() {
    // Ocultar o formulário de login
    document.getElementById('loginForm').style.display = 'none';
}

var now = new Date();
var hour = now.getHours();
var username = "usuário"; 

var saudacao;
if (hour < 12) {
    saudacao = "Bom dia";
} else if (hour < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}

// Função para lidar com o logout
function logout() {
    // Limpar os dados de login armazenados localmente
    localStorage.removeItem('user');

    // Ocultar o botão de "Sair"
    document.getElementById('logoutBtn').style.display = 'none';

    // Mostrar os botões de "Inscrever-se" e "Entrar"
    document.getElementById('subscribeBtn').style.display = 'inline-block';
    document.getElementById('loginBtn').style.display = 'inline-block';

    // Limpar campos de entrada
    document.getElementById('usernameInputLogin').value = '';
    document.getElementById('passwordInputLogin').value = '';

    // Atualizar a página
    window.location.reload();
}
