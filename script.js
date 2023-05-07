const display=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-buttons");

let displayValue="0";
let firstValue= null;
let operator= null;
let secondValue=false;

updateDisplay();

function updateDisplay(){
    display.value=displayValue;
}


 keys.addEventListener("click",function(e){
  
    const input=e.target;
   //console.log(input)
    if(!input.matches('button')) return;

    //console.log(input)

    if(input.classList.contains('operator')){
       // console.log("operator pressed");
        inputOperator(input.value);
        updateDisplay();
        
        return;
    }
    if(input.classList.contains('decimal')){
       // console.log("decimal pressed");
        inputDecimal(input.value)
        updateDisplay();
        return;
    }
    
    
   // console.log(input)

   inputNumber(input.value);
   updateDisplay();
  
});

function inputNumber(num){
    if(secondValue){
        displayValue=num;
        secondValue=false;
    }
    else{
        displayValue=displayValue==='0'? num: displayValue+num;        
    }
    console.log(displayValue, firstValue, operator,secondValue)

  
}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue +='.';
}
    }

    function inputOperator(nextOperator){
        const value=parseFloat(displayValue);
// //         console.log(nextOperator)

        if(operator&& secondValue){
            operator=nextOperator;
            return
        }
        if(firstValue===null){
            firstValue=value;
        }
        else if(operator){
            const result= calculate(firstValue , value , operator)
            displayValue =`${parseFloat(result.toFixed(5))}`
            firstValue=result;
        }
        secondValue=true;
        operator=nextOperator;
        console.log(displayValue, firstValue, operator,secondValue)

}
function calculate(first, second ,operator){

    if(operator==='+'){
        return first+second;
    }else if(operator==='-'){
        return first-second;
    }
    else if(operator==='*'){
        return first* second
    }
    else if(operator==='/'){
        return first/second;
    }

    return second;
}















