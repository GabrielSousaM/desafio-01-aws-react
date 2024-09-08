const dataContainer = document.querySelector("#registeredData")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const root = document.querySelector(":root")
let index = 0

function adjustFontSize(text) {
    const maxWidth = text.clientWidth;
    let fontSize = 16;
  
    text.style.fontSize = `${fontSize}px`;
  
    while (text.scrollWidth > maxWidth && fontSize > 0) {
      fontSize--;
      text.style.fontSize = `${fontSize}px`;
    }
  }

function dataAnimation() {
    let usernameText = `Name: ${localStorage.getItem("username")}`
    let emailText = `Email: ${localStorage.getItem("email")}`
    let passwordText = `Password: ${localStorage.getItem("password")}`
    root.style.setProperty("--underlineAnimation", "underlineAnimation 1s ease-out forwards")
    root.style.setProperty("--underlineDisplay", "block")
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