function Calculate() {
    var selectFromBase = document.getElementById('selectFromBase');
    var selectToBase = document.getElementById('selectToBase');
    var textBox1 = document.getElementById('textBox1');
    var resultLabel = document.getElementById('resultLabel');

    if (selectFromBase.value == "Decimal") {
        if(selectToBase.value == "Decimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value).toString(10);
        } else if(selectToBase.value == "Binary") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value).toString(2);
        } else if(selectToBase.value == "Octal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value).toString(8);
        } else if(selectToBase.value == "Hexadecimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value).toString(16);
        }
    } else if(selectFromBase.value == "Binary") {
        if(selectToBase.value == "Decimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 2).toString(10);
        } else if(selectToBase.value == "Binary") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 2).toString(2);
        } else if(selectToBase.value == "Octal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 2).toString(8);
        } else if(selectToBase.value == "Hexadecimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 2).toString(16);
        }
    } else if(selectFromBase.value == "Octal") {
        if(selectToBase.value == "Decimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 8).toString(10);
        } else if(selectToBase.value == "Binary") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 8).toString(2);
        } else if(selectToBase.value == "Octal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 8).toString(8);
        } else if(selectToBase.value == "Hexadecimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 8).toString(16);
        }
    } else if(selectFromBase.value == "Hexadecimal") {
        if(selectToBase.value == "Decimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 16).toString(10);
        } else if(selectToBase.value == "Binary") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 16).toString(2);
        } else if(selectToBase.value == "Octal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 16).toString(8);
        } else if(selectToBase.value == "Hexadecimal") {
            resultLabel.innerHTML = "Answer: " + parseInt(textBox1.value, 16).toString(16);
        }
    }
}