const validateEmail = (email) => {
// định dạng email
        return email.match(
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{3})+$/
        )
    // else if() {
    //     return 
    // }
}
const errorEmail = document.getElementById('error-email')
const loginEmail = document.getElementById('email')
loginEmail.addEventListener('change', () => {
    const isEmail = validateEmail(loginEmail.value)
    if(!isEmail){
        errorEmail.innerText = 'không đúng định dạng'
    } else {
        errorEmail.innerText = ''
    }
})
const errorPassword = document.getElementById('error-password')
const loginPassword = document.getElementById('password')
loginPassword.addEventListener('change', () => {
    if(loginPassword.value.length < 8 || loginPassword.value ==='12345678' ){
        errorPassword.innerText = 'Password khong hop le'
    } else {
        errorPassword.innerText = ''
    }

})
const submit = document.querySelector('.submit')
submit.addEventListener('click', () => {
    const logged = document.getElementById('logged')
    if(loginEmail.value === localStorage.username && loginPassword.value === localStorage.password){
        logged.innerText = 'da dang nhap'
        document.getElementById('login').setAttribute("href","https://mindx.vn/course/lo-trinh-hoc-lap-trinh-tu-co-ban-den-nang-cao")
    } else {
        logged.innerText = 'tai khoan hoac mat khau bi nhap sai'
    }
    
})