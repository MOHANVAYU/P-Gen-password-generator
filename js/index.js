"use strict";
//html elements
const button = document.querySelector('.btn');
const input = document.querySelector('#pwd-size');
const output = document.querySelector('#pwd');
const copy = document.querySelector('#copy-grp');
const pop_up_div = document.querySelector('#pop-up');
const close_pop_up = document.querySelector('#pop-up-btn');
const p = document.querySelector('#p-copy');
let str = "MlHq?/%^hEQRSTj3?uv!@KL0Y:ijkg!@)_+-+={}[#$\"\'<,ZabXgh12opxyUtEQRSTUtzABcdeF45NO8VWC$%&_;>.IJuvw345NO8VWXYZabcdeFGHqrs9!@#67DG#kMw67mnrs9lPf&*(]|:;\"$%&_;:iPfmnIJKL012opxyzABCD?";
let flag = true;
let password = '';
button.addEventListener("click", () => {
    p.innerHTML = "Copy";
    password = '';
    flag = true;
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
        }
        output.innerHTML = password;
    }
});
copy.addEventListener('click', () => {
    if (flag == false) {
        return;
    }
    navigator.clipboard.writeText(password);
    if (password == '') {
        return;
    }
    popUp();
    p.innerHTML = "Copied";
});
function popUp() {
    pop_up_div.style.display = 'flex';
}
close_pop_up.addEventListener('click', () => {
    pop_up_div.style.display = 'none';
});
