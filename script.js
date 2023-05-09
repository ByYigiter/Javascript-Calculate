let inputScreen = document.querySelector(".calculator-input");
function tekIslem(val){
    //console.log(val)
    inputScreen.value=val;
}
function cokluIslem(val){
    inputScreen.value+=val;
}
function hesapla() {
    tekIslem(eval(inputScreen.value))
}
function karekok(){
   tekIslem(Math.sqrt(inputScreen.value));
}

  function removeFirstLast(){ 
    // let filter= inputScreen.value; 
    // filter= filter.substring(0, filter.length - 1);
    // tekIslem(inputScreen.value=filter); 
    let currentValue = inputScreen.value;
  inputScreen.value = currentValue.slice(0, -1);
  tekIslem(inputScreen.value); 
}

function yuzdeAl() {
    // let currentValue = inputScreen.value;
    // let yuzdeDegeri = parseFloat(currentValue) / 100;
    // inputScreen.value = yuzdeDegeri.toString();


    let currentValue = inputScreen.value;
    let operator = currentValue.match(/[+\-*/%]/)[0];
    let numbers = currentValue.split(/[+\-*/%]/);
    let number1 = parseFloat(numbers[0]);
    let number2 = parseFloat(numbers[1]);
    let percentage = parseFloat(currentValue.split(" ")[2]) / 100;
  
    switch (operator) {
      case "+":
        inputScreen.value = number1 + number2;
        break;
      case "-":
        inputScreen.value = number1 - number2;
        break;
      case "*":
        inputScreen.value = number1 * number2;
        break;
      case "/":
        inputScreen.value = number1 / number2;
        break;
      case "%":
        inputScreen.value = number1 * percentage;
        break;
      default:
        inputScreen.value = "Invalid operator";
    }
  
  }

