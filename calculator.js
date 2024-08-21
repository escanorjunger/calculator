const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value!= "Error"){
        display.value+=input;
    }else if(display.value="Error"){
        clearDisplay();
        display.value+= input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}