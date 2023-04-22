//html elements
const button = document.querySelector('.btn') as HTMLButtonElement;
const input=document.querySelector('#pwd-size') as HTMLInputElement;
const output=document.querySelector('#pwd') as HTMLParagraphElement;
const copy=document.querySelector('#copy-grp') as HTMLButtonElement;
const pop_up_div=document.querySelector('#pop-up') as HTMLDivElement;
const close_pop_up=document.querySelector('#pop-up-btn') as HTMLButtonElement;
const p=document.querySelector('#p-copy') as HTMLParagraphElement;

let str:string="MlHq?/%^hEQRSTj3?uv!@KL0Y:ijkg!@)_+-+={}[#$\"\'<,ZabXgh12opxyUtEQRSTUtzABcdeF45NO8VWC$%&_;>.IJuvw345NO8VWXYZabcdeFGHqrs9!@#67DG#kMw67mnrs9lPf&*(]|:;\"$%&_;:iPfmnIJKL012opxyzABCD?";

let flag:boolean=true;
let password:string='';

button.addEventListener("click",()=>{
    p.innerHTML="Copy"
    password='';
    flag=true;
    let size:number=input.valueAsNumber;
    if(input.value==''){
        output.innerHTML="Enter size to generate password!!";
        flag=false;
    }else if(size<8){
        output.innerHTML="Size too short for strong password!!";
        flag=false;
    }else if(size>20){
        output.innerHTML="Size too big for password!!";
    }else{
        for(let i=0;i<size;i++){
            let indexRandom=Math.floor(Math.random()*str.length);
            password+=str[indexRandom];
        }
        output.innerHTML=password;
    }
});

copy.addEventListener('click',()=>{
    if(flag==false){
        return;
    }
    navigator.clipboard.writeText(password);
    if(password==''){
        return;
    }
    popUp();
    p.innerHTML="Copied";
});

function popUp():void{
    pop_up_div.style.display='flex';

}

close_pop_up.addEventListener('click',()=>{
    pop_up_div.style.display='none';
})
