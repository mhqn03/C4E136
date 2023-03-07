const ul = document.createElement('ul');
const li = document.createElement('li');

// lấy địa chỉ một thẻ có nhiều cách: getElementById, getElementByTagName
const testJS = document.getElementById('test_js');

//khai báo list danh sách ảnh
const listImages = [
    "./assets/image/banner_1.png",
    "./assets/image/banner_2.png",
    "./assets/image/banner_3.png",
];

//appendChild: cú pháp thẻcha.appendChild(thẻcon)
testJS.appendChild(ul);
ul.appendChild(li)

for(let i=0; i<listImages.length; i++){
    const img = document.createElement('img')
    img.src = listImages[i];
    li.appendChild(img);
}
// tương tác với event
testJS.addEventListener('click', function (){
    testJS.style.background = 'red'
});

// const form = document.getElementById('form')
// const htmlInput = document.createElement('input')
// htmlInput.type = 'text'
// form.appendChild(htmlInput)
// htmlInput.addEventListener('', function(event) {
//     // event.preventDefault();
//     console.log(event);
    
// })