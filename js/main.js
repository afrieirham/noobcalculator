function calculate(){
    var a = parseInt(document.querySelector('#value1').value);
    var b = parseInt(document.querySelector('#value2').value);
    
    var operator = document.querySelector('#operation').value;
    var calculate;

    if(operator == 'add'){
        calculate = a + b;
    } else if(operator == 'minus'){
        calculate = a - b;
    } else if(operator == 'multiply'){
        calculate = a * b;
    } else if(operator == 'divide'){
        calculate = a / b;
    }

    document.querySelector('#result').innerHTML = calculate
}