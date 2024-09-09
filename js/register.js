const submitButton = document.getElementById("createAccountButton")
const goBackButton = document.getElementById("goBackButton")
const userName = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const errorText = document.getElementById("errorText")

/* Volta para a página anterior */
function previousPage() {
    window.location.replace("../pages/login.html")
}

/* Valida se existem informações escritas no formulário e se elas estão corretas */
function validateInformation() {
    errorText.innerHTML = ""
    userName.style.borderColor = "black"
    email.style.borderColor = "black"
    password.style.borderColor = "black"
    confirmPassword.style.borderColor = "black"
    
    if (userName.value == "") {
        errorText.innerHTML = "Write a name!"
        userName.style.borderColor = "red"
        return false
    } 
    else if (email.value == ""){
        errorText.innerHTML = "Write an E-mail!"
        email.style.borderColor = "red"
        return false
    } 
    else if (password.value == "") {
        errorText.innerHTML = "Write a password!"
        password.style.borderColor = "red"
        return false
    } 
    else if (confirmPassword.value == "") {
        errorText.innerHTML = "Confirm your password!"
        confirmPassword.style.borderColor = "red"
        return false
    } 
    else if (!/\w+@\w+\.\w+/.test(email.value)) {
        errorText.innerHTML = "Write a valid E-mail!"
        email.style.borderColor = "red"
        return false
    } 
    else if (password.value != confirmPassword.value) {
        errorText.innerHTML = "The passwords are different!"
        password.style.borderColor = "red"
        confirmPassword.style.borderColor = "red"
        return false
    } 
    else return true
}

/* Salva os dados no localStorage e passa para a próxima página */
function getData() {
    if (validateInformation()) {
        localStorage.setItem("username", userName.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        window.location.replace("../pages/registered.html")
    }
}

goBackButton.addEventListener("click", previousPage)
submitButton.addEventListener("click", getData)