function send() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    let x = w/(h*h);
    document.getElementById('submit').innerHTML = x.toFixed(2);
    {
        
        document.write('chỉ số bmi của bạn là: ',x.toFixed(2),', và bạn: ');
        if(x>=30){
            document.write('béo đét');
        } else if(x>=25){
            document.write('thừa cân');
        } else if(x>=18.5){
            document.write('bình thường');
        } else {
            document.write('nghiện');
        }
    }
}
// function acp() {
//     document.getElementById('return').p
// }
