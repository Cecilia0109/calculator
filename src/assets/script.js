const body = document.querySelector('body')
const btn = document.querySelector('.btn')

// note onclick 和addevent listen 有什么差别： onclick 只能有一次，add event listener 可以添加多次
btn.onclick = () =>{
    body.classList.toggle('light')
}