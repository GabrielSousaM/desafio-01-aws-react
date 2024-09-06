const arrow = document.querySelector(".arrow")
const facebook = document.querySelector(".facebook")
const google = document.querySelector(".google")
const apple = document.querySelector(".apple")

function previousPage() {
    window.location.replace("../pages/presentation3.html")
}

function externalLoginFacebook() {
    window.open("https://www.facebook.com", "_blank")
}

function externalLoginGoogle() {
    window.open("https://www.google.com", "_blank")
}

function externalLoginApple() {
    window.open("https://www.apple.com", "_blank")
}

arrow.addEventListener("click", previousPage)
facebook.addEventListener("click", externalLoginFacebook)
google.addEventListener("click", externalLoginGoogle)
apple.addEventListener("click", externalLoginApple)