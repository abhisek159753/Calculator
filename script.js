//Online Calculator

window.onload = function(){
    var clearOnAdd = false;
    //replace string
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    //adds two numbers together
    function add(numOne, numTwo){
        return (parseInt(numOne) + parseInt(numTwo));
    }

    //subtracts the second number from first
    function subtract(numOne, numTwo){
        return (parseInt(numOne) - parseInt(numTwo));
    }

    //multiplies the first number by the second
    function multiply(numOne, numTwo){
        return (parseInt(numOne) * parseInt(numTwo));
    }

    //divides the first number by the second
    function divide(numOne, numTwo){
        return (parseInt(numOne) / parseInt(numTwo));
    }

    //seperates numbers and operators and calls operate
    function calc(){
        var str = document.getElementById("scrn").innerHTML;
        var strArr = [];
        var oprt = [];
        var index = 0;
        str = str.replace(/\s+/g,'');
        for(var i = 0; i < str.length; i++){
            if(str[i] == "+" || str[i] == "-" || str[i] == "*" || str[i] == "/"){
                oprt.push(str[i]);

                strArr.push(str.substring(index, i));
                index = i+1;

                /*strArr = str.replaceAt(i, " ");*/
            }
        }
        strArr.push(str.substring(index));
        /*strArr = str.split(" ");*/
        /*if(str.indexOf("+") != -1){
            strArr = str.split("+");
            oprt = "+";
        }
        else if(str.indexOf("-") != -1){
            strArr = str.split("-");
            oprt = "-";
        }
        else if(str.indexOf("*") != -1){
            strArr = str.split("*");
            oprt = "*";
        }
        else if(str.indexOf("/") != -1){
            strArr = str.split("/");
            oprt = "/";
        }*/
        var sum = strArr[0];
        for(var i = 0; i < oprt.length; i++){
            sum = operate(oprt[i], sum, strArr[i+1])
        }
        document.getElementById("scrn").innerHTML = sum;
    }
    //Calls one of the operators with the two numbers
    function operate(operator, numOne, numTwo){
        let result = 0;
        if (operator == "+"){
            result = add(numOne, numTwo);
        }
        if(operator == "-"){
            result = subtract(numOne, numTwo);
        }
        if(operator == "*"){
            result = multiply(numOne, numTwo)
        }
        if (operator == "/") {
            result = divide(numOne, numTwo)
        }
        return result;
    }

    function addScreen(num){
        var str = document.getElementById("scrn").innerHTML;
        if(clearOnAdd == true){
            str = "";
            clearOnAdd = false;
        }
        document.getElementById("scrn").innerHTML = str +" "+ num;
    }

    //watches elements being clicked
    function calculator(){
        document.getElementById("one").addEventListener("click", function(){
            addScreen("1");
        })
        document.getElementById("two").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("2");
        })
        document.getElementById("three").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("3");
        })
        document.getElementById("four").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("4");
        })
        document.getElementById("five").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("5");
        })
        document.getElementById("six").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("6");
        })
        document.getElementById("seven").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("7");
        })
        document.getElementById("eight").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("8");
        })
        document.getElementById("nine").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("9");
        })
        document.getElementById("zero").addEventListener("click", function(){
            //add to screen and keep tab
            addScreen("0");
        })
        document.getElementById("add").addEventListener("click", function(){
            addScreen("+")
        })
        document.getElementById("subtract").addEventListener("click", function(){
            addScreen("-")
        })
        document.getElementById("multiply").addEventListener("click", function(){
            addScreen("*")
        })
        document.getElementById("divide").addEventListener("click", function(){
            addScreen("/")
        })
        document.getElementById("enter").addEventListener("click", function(){
            calc()
            clearOnAdd = true;
        })
        document.getElementById("clear").addEventListener("click", function(){
            document.getElementById("scrn").innerHTML = "";
        })

    }
    calculator();
}