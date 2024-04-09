"use strict"

const headerNav = document.querySelector('.header'),
      menuBtn = document.querySelector('.menu'),
      close = document.querySelector('.close'),
      btnSignUp = document.querySelector('.btn-signup'),
      signUp = document.querySelector('.signup'),
      signUpForm = document.querySelector('.signup-form'),
      overlay = document.querySelector('.overlay'),
      inputFooter = document.querySelectorAll('.input-footer'),
      modal = document.querySelector('.modal'),
      regEX = /^[a-zA-Z]{2,16}$/,
      regExEmail = /^[a-zA-Z0-9]+@gmail.com$/,
      regExPassword = /^[a-zA-Z0-9]{8,20}$/



// Navigation menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('active')
    headerNav.classList.add('active')
    overlay.classList.remove('hidden')
})
close.addEventListener('click', () => {
    headerNav.classList.remove('active')
    overlay.classList.add('hidden')
})

// SignUp Menu
function showSignUp() {
    signUp.classList.remove('hidden')
    overlay.classList.remove('hidden')
    headerNav.classList.remove('active')
}
function removeSignUp() {
    signUp.classList.add('hidden')
    overlay.classList.add('hidden')
}
btnSignUp.addEventListener('click', () => {
    showSignUp()
})

overlay.addEventListener('click', () => {
    removeSignUp()
    headerNav.classList.remove('active')
    modal.classList.add('hidden')
})



// Sign Up regEX test
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(signUpForm.username.value === "" || signUpForm.lastname.value === "" || signUpForm.password.value === "" || signUpForm.email.value === ""){
        inputFooter.forEach((item) => {
           item.classList.remove('hidden')
        }) 
        e.preventDefault()
    }
    else {
        removeSignUp() 
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }
})
signUpForm.username.addEventListener('keyup', (e) => {
    if(regEX.test(e.target.value))  signUpForm.username.setAttribute('class', 'success')

    else  signUpForm.username.setAttribute('class', 'error')
})

signUpForm.lastname.addEventListener('keyup', (e) => {
    if(regEX.test(e.target.value))  signUpForm.lastname.setAttribute('class', 'success')

    else    signUpForm.lastname.setAttribute('class', 'error')
})

signUpForm.password.addEventListener('keyup', (e) => {
    if(regExPassword.test(e.target.value))  signUpForm.password.setAttribute('class', 'success')

    else    signUpForm.password.setAttribute('class', 'error') 
})

signUpForm.email.addEventListener('keyup', (e) => {
    if(regExEmail.test(e.target.value))     signUpForm.email.setAttribute('class', 'success')
    else    signUpForm.email.setAttribute('class', 'error')
})

