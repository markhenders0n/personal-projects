var context = new AudioContext();
var oscillator = null;
var gain = null;

function playNote(frequency, type) {
    oscillator = context.createOscillator();
    gain = context.createGain();
    oscillator.type = type;
    oscillator.connect(gain);
    oscillator.frequency.value = frequency;
    gain.connect(context.destination);
    oscillator.start(0);
    gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2);
}

function endNote() {
    gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
}

function readKey(event) {
    var code = event.code;
    let clickevent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window
    });
    switch(code) {
        case "KeyQ":
            document.getElementsByClassName("button1")[0].dispatchEvent(clickevent);
            break;
        case "KeyW":
            document.getElementsByClassName("button2")[0].dispatchEvent(clickevent);
            break;
        case "KeyE":
            document.getElementsByClassName("button3")[0].dispatchEvent(clickevent);
            break;
        case "KeyR":
            document.getElementsByClassName("button4")[0].dispatchEvent(clickevent);
            break;
        case "KeyT":
            document.getElementsByClassName("button5")[0].dispatchEvent(clickevent);
            break;
        case "KeyY":
            document.getElementsByClassName("button6")[0].dispatchEvent(clickevent);
            break;
        case "KeyU":
            document.getElementsByClassName("button7")[0].dispatchEvent(clickevent);
            break;
        case "KeyI":
            document.getElementsByClassName("button8")[0].dispatchEvent(clickevent);
            break;
        case "KeyO":
            document.getElementsByClassName("button9")[0].dispatchEvent(clickevent);
            break;
        case "KeyP":
            document.getElementsByClassName("button10")[0].dispatchEvent(clickevent);
            break;
        case "BracketLeft":
            document.getElementsByClassName("button11")[0].dispatchEvent(clickevent);
            break;
        case "BracketRight":
            document.getElementsByClassName("button12")[0].dispatchEvent(clickevent);
            break;
    }
}