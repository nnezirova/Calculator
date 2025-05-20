const buttonValues = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ",", "="
];

const rightButtons = ["/", "x", "-", "+", "="];
const topButtons = ["AC", "+/-", "%"];

const display  = document.getElementById("display");

let A = 0;
let operator = null;
let B = null;

function clearAll(){
    A = 0;
    operator = null;
    B = null;
}

for (let i = 0; i < buttonValues.length; i++) {
    // button AC
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    if(value == "0"){
        button.style.width = "180px";
        button.style.gridColumn = "span 2";
    }
    if (rightButtons.includes(value)){
        button.style.backgroundColor = "#FF9500";
    }
    else if (topButtons.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    button.addEventListener("click", function() {
        if (rightButtons.includes(value)) {
            if (value == "=") {
                if (A != null){
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);
                    
                    if (operator == "/"){
                        display.value = numA / numB;
                    }
                    else if (operator == "x"){
                        display.value  = numA * numB;
                    }
                    else if (operator == "-"){
                        display.value = numA - numB;
                    }
                    else if(operator == "+"){
                        display.value = numA + numB;
                    }
                    clearAll();
                }
            }
            else {
                operator  = value;
                A = display.value;
                display.value = "";
            }
        }
        else if(topButtons.includes(value)){
            if (value == "AC"){
                clearAll();
                display.value = "";
            }
            else if (value == "+/-") {
                if (display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") {
                        display.value = display.value.slice(1);
                    }
                    else {
                        display.value = "-" + display.value;
                    }
                }
            }
            else if (value == "%") {
                display.value = Number(display.value) / 100;
            }
        }
        else {
            if(value == ",") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }

            }
            else if (display.value == "0") {
                display.value == value;
            }
            else {
                display.value += value;
            }
        }
    });
    // add button to calculator
    document.getElementById("buttons").appendChild(button);

}