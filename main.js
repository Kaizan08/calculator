var button = document.querySelectorAll('.button');
var output = document.querySelector('.output');
var clearbtn = document.querySelector('.clear');
var total="";

for (var i = 0; i < button.length; i++){
    if (button[i].textContent == '/' || button[i].textContent == '*' || button[i].textContent == '+' || 
    button[i].textContent == '-'){
        button[i].style.color = '#000000';
    }
    // if button[i].innerHTML 
    button[i].addEventListener('click', function getValue(e){
        // total += parseInt(e.srcElement.innerHTML, 10);
        console.log(e);
        total += e.srcElement.innerHTML;
        output.textContent = total;
        return e;
});
}

clearbtn.addEventListener('click', function clear(e){
    total = "";
    sign = "";
    temp = "";
    output.textContent = total;
    return e;
});
