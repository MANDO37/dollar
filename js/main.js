function validate (){
var mohamed = document.getElementById('mohamed').value;
var result = document.getElementById('medo');
result.innerHTML =mohamed * 51;
return false

if (mohamed == "" ) {  
        result.innerHTML = "Please Insert Data";
    return false;
} else if (isNaN(value)) {
    result.innerHTML = "Please Insert Number Not String";
    return false;
} else {
    result.innerHTML = value * 30 +" "+"Egyption Pound";
    return false;
}

}