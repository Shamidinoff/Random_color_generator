const block = document.querySelector('.js-block');
const color = document.querySelector('.js-color');
const btn = document.querySelector('.js-btn');
const hex = '0123456789ABCDEF';

let randomColor = '#';

const getRandomColor = () => {
    randomColor = '#';
    // console.log(Math.random());
    // console.log(Math.floor(Math.random()*hex.length));

    for (let i = 0; i < 6; i++) {
        // randomColor = randomColor + hex[Math.floor(Math.random()*hex.length)];
        randomColor += hex[Math.floor(Math.random()*hex.length)];
    }
}

btn.addEventListener('click', () => {
    getRandomColor();
    block.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
})