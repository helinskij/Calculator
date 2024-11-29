let screen = document.querySelector("#screen");

function appendDisplay(number){
    screen.value += number;
}

function cal(){
    let done = eval(screen.value);
    screen.value = done;
}

function empty(){
    screen.value = "";
}