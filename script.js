let square = document.querySelector('.square');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');

let errMes1 = document.querySelector('.error-wrapper-1');
let errMes2 = document.querySelector('.error-wrapper-2');

let btnWrapper = document.querySelectorAll('.btn-wrapper');

function isHex(hexColor) {
    return /^([0-9A-F]{3}){1,2}$/i.test(hexColor);
}

function changeColor() {
    color1Val = color1.value;
    color2Val = color2.value;

    if(!isHex(color1Val)) {
        color1.classList.add('color1-err');
        color1.classList.remove('color1');
        errMes1.style.display = "inline-block";
    }else{
        square.style.background = 'linear-gradient(to right, #'+color1Val+', blue)';
        errMes1.style.display = "none"
        color1.classList.remove('color-err');
        color1.classList.add('color1')
        if(!isHex(color2Val)) {
            color2.classList.add('color2-err');
            color2.classList.remove('color2');
            errMes2.style.display = "inline-block";
        }else{
            square.style.background = 'linear-gradient(to right, #'+color1Val+', #'+color2Val+')';
            errMes2.style.display = "none"
            color2.classList.remove('color-err');
            color2.classList.add('color2')
        }
    }

    console.log(color1Val)
}

function getRandomColor() {
    let letter = '0123456789ABCDEF';
    let hash = '#';
    let color;

    for(let i=0;i<6;i++) {
        color = hash+=letter[Math.floor(Math.random()*16)];
    }
    return color;
}

function setRandomColor(wrapper) {
    let btnRandoms = wrapper.querySelectorAll('.random-color');

    btnRandoms.forEach((btn, i) => {
        let randomColor = getRandomColor();
        btn.style.background = randomColor;
        btn.setAttribute('data-value', randomColor);

        // btn.addEventListener('click', function() {
        //     let curColor = this.getAttribute('data-value');
        //     // console.log(curColor);

        // })

        // console.log(btn.getAttribute('data-value'));
    })
}

setRandomColor(btnWrapper[0]);
setRandomColor(btnWrapper[1]);

let wrapper1 = btnWrapper[0];
let btnWrapper1 = wrapper1.querySelectorAll('.random-color');

btnWrapper1.forEach((btn,i) => {
    btn.addEventListener('click', function() {
        let curColor = this.getAttribute('data-value');
        curColor = curColor.substr(1);
        // console.log(curColor)
        square.style.background = `linear-gradient(to right, #${curColor}, #${color2.value})`
        color1.value = curColor;
    })
})
let wrapper2 = btnWrapper[1];
let btnWrapper2 = wrapper2.querySelectorAll('.random-color');

btnWrapper2.forEach((btn, i) => {
    btn.addEventListener('click', function() {
        let curColor = this.getAttribute('data-value');
        curColor = curColor.substr(1);

        square.style.background = `linear-gradient(to right, #${color1.value}, #${curColor})`
        color2.value = curColor;
    })
})