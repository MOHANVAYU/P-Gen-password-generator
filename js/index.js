"use strict";
//html elements
const button = document.querySelector('.btn');
const input = document.querySelector('#pwd-size');
const output = document.querySelector('#pwd');
let str = "MlPf$%&_;:ijkghEQRSTUtuvw345NO8VWXYZabcdeFGHqrs9!@#67mnIJKL012opxyzABCD?";
let flag = true;
button.addEventListener("click", () => {
    let password = '';
    let size = input.valueAsNumber;
    if (input.value == '') {
        output.innerHTML = "Enter size to generate password!!";
        flag = false;
    }
    else if (size < 8) {
        output.innerHTML = "Size too short for strong password!!";
        flag = false;
    }
    else if (size > 20) {
        output.innerHTML = "Size too big for password!!";
    }
    else {
        for (let i = 0; i < size; i++) {
            let indexRandom = Math.floor(Math.random() * str.length);
            password += str[indexRandom];
            output.innerHTML = password;
        }
    }
});
