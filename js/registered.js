const dataContainer = document.querySelector("#registeredData")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const root = document.querySelector(":root")
let index = 0

/* Ajusta o tamanho do texto em caso de passar da borda container */
function adjustFontSize(text) {
    const maxWidth = text.clientWidth;
    let fontSize = 16;
  
    text.style.fontSize = `${fontSize}px`;
  
    while (text.scrollWidth > maxWidth && fontSize > 0) {
      fontSize--;
      text.style.fontSize = `${fontSize}px`;
    }
  }

/* Adiciona uma linha abaixo de onde os dados do usuário serão inseridos, e depois simula a digitação dos dados do usuário acima da linha. */
function dataAnimation() {
    let usernameText = `Name: ${localStorage.getItem("username")}`
    let emailText = `Email: ${localStorage.getItem("email")}`
    let passwordText = `Password: ${localStorage.getItem("password")}`

    /* Animação da linha sendo adicionada em variáveis do CSS */
    root.style.setProperty("--underlineAnimation", "underlineAnimation 1s ease-out forwards")
    root.style.setProperty("--underlineDisplay", "block")

    /* Animação simulando a digitação dos dados do usuário */
    let write = setInterval(() => {
        if (index < usernameText.length) {
            username.innerHTML += usernameText[index]
            adjustFontSize(username)
        }

        if (index < emailText.length) {
            email.innerHTML += emailText[index]
            adjustFontSize(email)
        }

        if (index < passwordText.length) {
            password.innerHTML += passwordText[index]
            adjustFontSize(password)
        }

        if (index >= passwordText.length && index >= usernameText.length && index >= emailText.length) {
            clearInterval(write)
        }

        index++
    }, 50)
}

setTimeout(dataAnimation, 1000)