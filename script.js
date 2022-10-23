// Seleção de todos os elementos necessários
const nameForm = document.querySelector("#nameForm");
const containerForm = document.querySelector("#form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

// Função para chegar o userName e a partir dele realizar certas ações
function checkUser() {
     const userName = localStorage.getItem("name");

     if(userName) {
          // Se userName for true será escondido o formulário e o welcome, mensagem de boas vindas, será exibido
          nameForm.style.display = "none";
          containerForm.style.display = "none";
          welcomeContainer.style.display = "block";

          // Pegando o elemento de span que guarda o nome preenchido
          const userNameElement = document.getElementById("username");
          // Adicionando textContent ao span
          userNameElement.textContent = userName;
     } else {
          nameForm.style.display = "block";
          containerForm.style.display = "block";
          welcomeContainer.style.display = "none";
     }
}

// Adionando evento de submit ao nameForm e previnindo o seu padrão
nameForm.addEventListener("submit", (e) => {
     e.preventDefault();

     // Selecionando o valor do campo para nome
     const nameInput = document.querySelector("#name");

     // Enviando para o localStorage o nome preenchido no campo
     localStorage.setItem("name", nameInput.value);

     // Resetando o valor no campo que recebe o nome
     nameInput.value = "";

     checkUser();
});

// A função já inicia juntamente com o primeiro acesso, para chegar se já foi preenchido para fazer as manipulações no DOM
checkUser();

// Quando o botão fpr cliclado, será removido o name e novamente será checado o userName para manipulação do DOM
logoutBtn.addEventListener("click", () => {
     localStorage.removeItem("name");
     checkUser();
})