function mostrarSignup() {
    const login = document.querySelector(".login");
    const signup = document.querySelector(".signup");
    login.style.display = "none";
    signup.style.display = "flex";
}

function mostrarLogin() {
    const login = document.querySelector(".login");
    const signup = document.querySelector(".signup");
    signup.style.display = "none";
    login.style.display = "flex";
}

function ValidarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const emailErroEl = document.getElementById("email-error");
    const senhaErroEl = document.getElementById("pass-error");
    const sucessoEl = document.getElementById("Valid-login");

    const erros = [
      "Email incorreto ou inexistente!",
      "Senha incorreta",
      "Dados incorretos!",
      "Login realizado com sucesso!"
    ];

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    const emailValido = emailRegex.test(email);
    const senhaValida = senhaRegex.test(senha);

    sucessoEl.style.display = "none"

    if (!emailValido && !senhaValida) {
        emailErroEl.innerHTML = erros[2];
        emailErroEl.style.display = "block";

        senhaErroEl.innerHTML = "";
        senhaErroEl.style.display = "none";
    } else {
        if (!emailValido) {
            emailErroEl.innerHTML = erros[0];
            emailErroEl.style.display = "block";
        } else {
            emailErroEl.innerHTML = "";
            emailErroEl.style.display = "none";
        }

        if (!senhaValida) {
            senhaErroEl.innerHTML = erros[1];
            senhaErroEl.style.display = "block";
        } else {
            senhaErroEl.innerHTML = "";
            senhaErroEl.style.display = "none";
        }
    }

    if (emailValido && senhaValida) {
        sucessoEl.innerHTML = erros[3];
        sucessoEl.style.display = "block";
    }
}

function ValidarCadastro(event) {
    //! possui um erro no cadastro que não consigo corrigir
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const user = document.getElementById("user").value.trim();

    const emailErroEl = document.getElementById("email-error2");
    const senhaErroEl = document.getElementById("pass-error2");
    const userErrorEl = document.getElementById("user-error2");
    const sucessoEl = document.getElementById("Valid-signup2");

    const erros = [
        "Email inválido!",
        "Senha inválida!",
        "Dados inválidos!",
        "Usuário indisponível!",
        "Cadastro realizado com sucesso!"
    ];

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i;
    const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    const userRegex = /^[a-z0-9]{3,10}$/i;

    const emailValido = emailRegex.test(email);
    const senhaValida = senhaRegex.test(senha);
    const userValido  = userRegex.test(user);

    sucessoEl.style.display = "none";

    const errosInvalidos = [!emailValido, !senhaValida, !userValido].filter(Boolean).length;

    if (errosInvalidos >= 2) {
        emailErroEl.innerHTML = erros[2];
        emailErroEl.style.display = "block";

        senhaErroEl.innerHTML = "";
        senhaErroEl.style.display = "none";

        userErrorEl.innerHTML = "";
        userErrorEl.style.display = "none";
        return;
    }

    if (!emailValido) {
        emailErroEl.innerHTML = erros[0];
        emailErroEl.style.display = "block";
    } else {
        emailErroEl.innerHTML = "";
        emailErroEl.style.display = "none";
    }

    if (!senhaValida) {
        senhaErroEl.innerHTML = erros[1];
        senhaErroEl.style.display = "block";
    } else {
        senhaErroEl.innerHTML = "";
        senhaErroEl.style.display = "none";
    }

    if (!userValido) {
        userErrorEl.innerHTML = erros[3];
        userErrorEl.style.display = "block";
    } else {
        userErrorEl.innerHTML = "";
        userErrorEl.style.display = "none";
    }

    if (emailValido && senhaValida && userValido) {
        sucessoEl.innerHTML = erros[4];
        sucessoEl.style.display = "block";
    }
}