var operator = "";
var result = 0;
isOP = false;

function CalcBtnInsertText(clicked_id) {
    var txtBox1 = document.getElementById('calcTextBox');
    if ((txtBox1.innerHTML == "0") || isOP == true) {
        txtBox1.innerHTML = "";
    }
    txtBox1.innerHTML = txtBox1.innerHTML + clicked_id;
    isOP = false;
}

function OprBtnInsertText(clicked_id) {
    var txtBox1 = document.getElementById('calcTextBox');
    if (txtBox1.innerHTML == 0) {
        alert("Please choose a number before the operator");
    } else {
        var txtBox1 = document.getElementById('calcTextBox');
        result = parseFloat(txtBox1.innerHTML);
        operator = clicked_id;
        isOP = true;
    }
}

function calcBtn() {
    var txtBox1 = document.getElementById('calcTextBox');
        switch(operator) {
            case "+":
                txtBox1.innerHTML = (parseFloat(result) + parseFloat(txtBox1.innerHTML));
                break;
            case "-":
                txtBox1.innerHTML = (parseFloat(result) - parseFloat(txtBox1.innerHTML));
                break;
            case "*":
                txtBox1.innerHTML = (parseFloat(result) * parseFloat(txtBox1.innerHTML));
                break;
            case "/":
                txtBox1.innerHTML = (parseFloat(result) / parseFloat(txtBox1.innerHTML));
                break;
            case "x(y)":
                txtBox1.innerHTML = Math.pow(parseFloat(result), parseFloat(txtBox1.innerHTML));
                break;
            case "√":
                txtBox1.innerHTML = Math.sqrt(parseFloat(result));
                break;
            case "log":
                txtBox1.innerHTML = Math.log10(parseFloat(result));
                break;
            case "!":
                factorial = 1;
    
                for(i = 1; i <= parseFloat(result); i++) {
                    factorial = factorial * i;
                }
    
                txtBox1.innerHTML = factorial;
                break;
            case "sin":
                txtBox1.innerHTML = Math.sin(parseFloat(result));
                break;
            case "cos":
                txtBox1.innerHTML = Math.cos(parseFloat(result));
                break;
            case "tan":
                txtBox1.innerHTML = Math.tan(parseFloat(result));
                break;
    }
}

function clearBtn() {
    var txtBox1 = document.getElementById('calcTextBox');
    txtBox1.innerHTML = "0";
}