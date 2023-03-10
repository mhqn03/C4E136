const validateEmail = (email) => {
// định dạng email
    return email.match(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{3})+$/
    )
}
const errorEmail = document.getElementById('error-email')
const inputEmail = document.getElementById('email')
inputEmail.addEventListener('change', () => {
    const isEmail = validateEmail(inputEmail.value)
    if(!isEmail){
        inputEmail.parentElement.classList.add('invalid')
        errorEmail.innerText = 'không đúng định dạng email'
    } else {
        inputEmail.parentElement.classList.remove('invalid')
        errorEmail.innerText = ''
    }
})
const errorPassword = document.getElementById('error-password')
const inputPassword = document.getElementById('password')
inputPassword.addEventListener('change', () => {
    if(inputPassword.value.length < 8 || inputPassword.value ==='12345678' ){
        errorPassword.innerText = 'Password khong hop le'
    } else {
        errorPassword.innerText = ''
    }

})
const errorConfirmPassword = document.getElementById('error-confirm-password')
const inputConfirmPassword = document.getElementById('confirmPassword')
inputConfirmPassword.addEventListener('change', () => {
    if(inputConfirmPassword.value === inputPassword.value){
        errorConfirmPassword.innerText = ''
    } else {
        errorConfirmPassword.innerText = 'Password khong trung khop'
    }
})