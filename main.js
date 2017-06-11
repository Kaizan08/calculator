var button = document.querySelectorAll('.button');
var output = document.querySelector('.output');
var clearbtn = document.querySelector('.clear');
var viewer="";
var number=[];
var sign="";
for (var i = 0; i < button.length; i++){
    if (button[i].textContent == '/' || button[i].textContent == '*' || button[i].textContent == '+' || 
        button[i].textContent == '-'){
        button[i].style.color = '#000000';
    } 
    button[i].addEventListener('click', function getValue(e){
        // total += parseInt(e.srcElement.innerHTML, 10);
        if (e.srcElement.innerHTML == '='){
            number.push((viewer.split(sign))[1]);
            switch (sign){
                case "+":
                    output.textContent = sum(number);
                    break;
                case "-":
                    output.textContent = subtract(number);
                    break;
                case "*":
                    output.textContent = multiply(number);
                    break;
                case "/":
                    output.textContent = divide(number);
                    break;
                default:
                    console.log(sign);
                    output.textContent = "You did something stupid!";
            }    
            return e;        
        }
        else if (e.srcElement.innerHTML == "+" || e.srcElement.innerHTML == "-" || e.srcElement.innerHTML == "*" || 
                e.srcElement.innerHTML == "/"){
            if (sign == false){
                sign = e.srcElement.innerHTML;   //gets the symbol to determine function
                number.push(viewer);
                viewer += e.srcElement.innerHTML;
                output.textContent = viewer;
                return e; 
            }   else {
                viewer += e.srcElement.innerHTML;
                output.textContent = viewer;
                return e; 
            }    
        } else {
            viewer += e.srcElement.innerHTML;
            output.textContent = viewer;
            return e;
        }
    });
}

clearbtn.addEventListener('click', function clear(e){
    number = [];
    sign = "";
    viewer = "";
    output.textContent = viewer;
    return e;
});

function sum(array){
    return parseInt(array[0], 10)+parseInt(array[1], 10);
}
function subtract(array){
    return parseInt(array[0], 10)-parseInt(array[1], 10);
}
function multiply(array){
    return parseInt(array[0], 10)*parseInt(array[1], 10);
}
function divide(array){
    return parseInt(array[0], 10)/parseInt(array[1], 10);
}