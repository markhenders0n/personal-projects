var context = new AudioContext();
var oscillator = null;
var gain = null;

function playNote(frequency, type) {
    if (document.getElementById("checkbox1").checked == true) {
        type = "sawtooth"
    }
    oscillator = context.createOscillator();
    gain = context.createGain();
    oscillator.type = type;
    oscillator.connect(gain);
    oscillator.frequency.value = frequency;
    gain.connect(context.destination);
    oscillator.start(0);
    gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 5);
}

function endNote() {
    gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
}

function pressButton(button, press) {
    var buttontopress = document.getElementsByClassName(button)[0];
    
    if (press.type == "mousedown"){
        buttontopress.style.backgroundColor = "darkgray";
    buttontopress.style.boxShadow = "0 5px black";
    buttontopress.style.transform = "translateY(4px)";
    }
    else {
        if (button == "button2" || button == "button4" || button == "button7" || button == "button9" || button == "button11") {
            buttontopress.style.backgroundColor = "#161717";
            buttontopress.style.boxShadow = "0 9px black";
        }
        else {
            buttontopress.style.backgroundColor = "white";
            buttontopress.style.boxShadow = "0 9px darkgray";
        }
        buttontopress.style.transform = "translateY(0px)";
    }
    
    
    buttontopress.dispatchEvent(press);
}

function readKey(event, mousetype) {
    if (event.repeat) return;
    var code = event.code;
    let clickevent = new MouseEvent(mousetype, {
        bubbles: true,
        cancelable: true,
        view: window
    });
    switch(code) {
        case "KeyQ":
            pressButton("button1", clickevent);
            break;
        case "KeyW":
            pressButton("button2", clickevent);
            break;
        case "KeyE":
            pressButton("button3", clickevent);
            break;
        case "KeyR":
            pressButton("button4", clickevent);
            break;
        case "KeyT":
            pressButton("button5", clickevent);
            break;
        case "KeyY":
            pressButton("button6", clickevent);
            break;
        case "KeyU":
            pressButton("button7", clickevent);
            break;
        case "KeyI":
            pressButton("button8", clickevent);
            break;
        case "KeyO":
            pressButton("button9", clickevent);
            break;
        case "KeyP":
            pressButton("button10", clickevent);
            break;
        case "BracketLeft":
            pressButton("button11", clickevent);
            break;
        case "BracketRight":
            pressButton("button12", clickevent);
            break;
    }
}
