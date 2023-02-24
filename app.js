let op;
function func(op) {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let btn = document.getElementById('btn')
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 'choose an operation';
    }
    btn.onclick = () => {
        document.getElementById("result").innerHTML = result;
    }
}