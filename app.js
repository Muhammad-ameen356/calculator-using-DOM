function hogya(){
    var firstNum = Number(document.getElementById("firsttext").value);
    var secondNum = Number(document.getElementById("secondtext").value);
    var plus = document.getElementById("plus").checked;
    var minus = document.getElementById("minus").checked;
    var multiply = document.getElementById("multiply").checked;
    var divide = document.getElementById("divide").checked;
    var modulus = document.getElementById("modulus").checked;
    if(plus){
        document.getElementById("print").innerHTML = firstNum + secondNum
    } else if(minus){
        document.getElementById("print").innerHTML = firstNum - secondNum
    } else if(multiply){
        document.getElementById("print").innerHTML = firstNum * secondNum
    } else if(divide){
        document.getElementById("print").innerHTML = firstNum / secondNum
    } else if(modulus){
        document.getElementById("print").innerHTML = firstNum % secondNum
    }
}
