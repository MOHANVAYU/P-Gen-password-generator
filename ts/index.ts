//html elements
const button = document.querySelector('.btn') as HTMLButtonElement;
const input=document.querySelector('#pwd-size') as HTMLInputElement;
const output=document.querySelector('#pwd') as HTMLParagraphElement;

let str:string="MlPf$%&_;:ijkghEQRSTUtuvw345NO8VWXYZabcdeFGHqrs9!@#67mnIJKL012opxyzABCD?";


let flag:boolean=true;

button.addEventListener("click",()=>{
    if(input.value==''){
        output.innerHTML="Enter size to generate password!!";
        flag=false;
    }else{
        let password:string='';
        let size:number=input.valueAsNumber;
        if(size<8){
            output.innerHTML="size too short for strong password!!";
            flag=false;
        }else{
            for(let i=0;i<size;i++){
                let indexRandom=Math.floor(Math.random()*str.length);
                password+=str[indexRandom];
                output.innerHTML=password;
            }
        }
    }
})
