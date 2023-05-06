const display=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-buttons");

let displayValue="0";

updateDisplay();
function updateDisplay(){
    display.value=displayValue;
}


keys.addEventListener("click",(e)=>{
  
    const input=e.target;

    if(!input.matches('button')) return;

    if(input.classList.contains('operator')){
        console.log("operator pressed");
        input.value="";
        return;
    }
    if(input.classList.contains('decimal')){
        //console.log("decimal pressed");
        inputDecimal(input.value)
        updateDisplay();
        return;
    }
    
    

   // console.log(input)

   inputNumber(input.value);
   updateDisplay();
  
});

function inputNumber(num){
  displayValue=displayValue==='0'?num:displayValue+num;  
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue +='.';

    }
}
















