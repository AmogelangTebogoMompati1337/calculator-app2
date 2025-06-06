//reference display element
const display = document.getElementById('display'); 

// track 
 let justcalculate = false;

 function appendtoDisplay(value){
    console.log('button pressed:' , value);
    alert('you pressed:' + value);
 }

 function clearDisplay(){
  console.log('clear button pressed');
  alert('clear button was clicked');
 }

 function deletelast() {
    console.log('backspace button pressed');
  alert('backspace button was clicked');
    
 }
 function calculator(){
    console.log('Equals button pressed');
  alert('equals button was clicked');
 }