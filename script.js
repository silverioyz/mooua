// script.js
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

document.getElementById("user-login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      window.location.href = "sobre.html"; // redireciona após login
    })
    .catch((error) => {
      document.getElementById("mensagem-erro").innerText = "Erro no login: " + error.message;
    });
});
