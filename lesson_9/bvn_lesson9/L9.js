// // b1
// //biến thể 1 (toán tử dấu chấm hỏi '?')
// function checkAge(age){
//     return (age > 18) ? true : confirm('Did parents allow you?')
// }
// // return (điều kiện đề bài hỏi) ? <trả về giá trị trong đây nếu đúng> : <trả về giá trị trogn đây nếu sai>
// var n = Number(prompt())
// checkAge(n)
// //biến thể 2 (OR ||)
// function checkAge(age){
//     return (a > 18) || confirm('Did parents allow you?')
// }
// var n = Number(prompt())
// checkAge(n)





//--------------------------------------------
// // b2
// let a=Number(prompt()), b=Number(prompt());
// function minNumber(a,b){
//     console.log(Math.min(a,b)); 
// }
// minNumber(a,b)



//--------------------------------------------
// // b3
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
// "Do you agree?",
// function() { alert("You agreed."); },
// function() { alert("You canceled the execution."); }
// );
// // chuyển biểu thức hàm bên trên sang hàm mũi tên.
// var ask = (question, yes, no) => {
//     if(confirm(question)) yes()
//     else no()
// }
// ask(
//     "Do you agree?",
//     () => {alert("You agreed.")},
//     () => {alert("You canceled the execution.")}
// )

//--------------------------------------------
//b4
var login = (title, yes, no) => {
    let a = prompt()
    if(a==='admin'){
        if(confirm(title)) yes()
        else no()
    } else alert('Bạn không phải admin.')
}
login(
    'Hãy nhập mật khẩu!!!',
    () => {
        var b = prompt()
        while(b!==0){
            if(b !== 'MindX'){
                alert('Mật khẩu sai.')
                b = prompt()
            } else if(b === 'MindX'){
                alert('Chào mừng!')
                break;
            }
        }
    },
    () => {
        alert('Đã huỷ.')
    }
)



