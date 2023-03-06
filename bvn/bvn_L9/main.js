// //bài 3
// let a=Number(prompt())
// let b=Number(prompt())
// let c=Number(prompt())
// while(!null){
//     if(a+b+c !== 15){
//         alert('nhap lai')
//         a=Number(prompt())
//         b=Number(prompt())
//         c=Number(prompt())
//     } else if(a+b+c===15){
//         alert('chúc mừng');
//         break;
//     }
// }




// // b1: đếm số lượng số nguyên tố trong khoảng 1-20 và tính tổng của chúng
// var c=0;
// var s=0;
// for(let j=1; j<=20; j++){
//     if(check_snt(j)){
//         continue;
//     }
// }
// function check_snt(n){
//     var check=true;
//     if(n<2){
//         check=false;
//     } else if(n===2){
//         check=true; 
//     } else if(n%2===0){ 
//         check=false; 
//     } else {
//         for(let i=3; i<=Math.sqrt(n); i++){
//             if(n%i===0){
//                 check=false;// false tức là sai. và nó kh phải là snt
//                 break;
//             }
//         }
//     }
//     if(check){
//         c++; // cộng thêm 1 vào c cũ; 
//         s+=n; // cộng thêm số n vào s cũ. 
//     }
// }
// console.log(c,s);




// // b2: Tính tổng của 10 số liên tiếp, số sau
// // bằng tổng 2 số trước. Bắt đầu với 1, 3.
// let n1=1,n2=3,n3;
// let s=0
// for(let i=1;i<=10;i++){
//     s+=n1; // s= 0+1=1
//     n3=n1+n2;// n3 = 1 + 3 = 4, n3 =  3 + 4 =7, n3 = 4 + 7=11,
//     n1=n2;// n1 = 3, n1 = 4 , n1 = 7,
//     n2=n3;// n2 = 4,n2 =7 , n2=11,
// }
// console.log(s); //319


