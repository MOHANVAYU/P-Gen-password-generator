//html elements
const button = document.querySelector('.btn') as HTMLButtonElement;
const input=document.querySelector('#pwd-size') as HTMLInputElement;
const output=document.querySelector('#pwd') as HTMLParagraphElement;

let str:string="MlPf$%&_;:ijkghEQRSTUtuvw345NO8VWXYZabcdeFGHqrs9!@#67mnIJKL012opxyzABCD?";


let flag:boolean=true;

button.addEventListener("click",()=>{
    let password:string='';
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
            output.innerHTML=password;
        }
    }
});
