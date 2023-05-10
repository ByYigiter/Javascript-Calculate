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
  let bol =inputScreen.value;
  console.log( bol)
  let sembol =inputScreen.value.replace(/[0-9]/gi,'')  
  console.log( sembol)
  let arr = bol.split(/[-+/*]/)
  let sayi1=arr[0]
  let sayi2=arr[1]

  let yuzde;

  switch(sembol){
    case  '+' :
       yuzde =Number(sayi1) + Number(sayi1*sayi2/100);
      break;
      case  '-' :
         yuzde =Number(sayi1) - Number(sayi1*sayi2/100);
    break
    case  '*' :
         yuzde =Number(sayi1) * Number(sayi2/100);
    break
    case  '/' :
         yuzde =Number(sayi1) * Number(100/sayi2);
    break
  }
  let  yuzdenew=`${yuzde}`;

  tekIslem(yuzdenew)

  
  
}





