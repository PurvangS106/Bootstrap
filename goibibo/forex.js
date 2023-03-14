function forex(){
    var num1 = document.getElementById("forexamount").value;
    var num2 = document.getElementById("forexrate").value;
    var multiply = num1 * num2;
    document.getElementById("result").innerHTML = multiply;
}