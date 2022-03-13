const Btn = document.querySelector('button')
const colorEl = document.querySelector('#color')



const changeBackground = () => {
const randomColor = Math.floor(Math.random()* 16777216).toString(16);
document.body.style.backgroundColor = "#" + randomColor;
colorEl.innerHTML = "#" + randomColor;
};

Btn.addEventListener("click", changeBackground);
changeBackground()