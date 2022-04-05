var x=(2*3)+5;
var y=3*4;

var result = myfunction(2,3);
console.log(result);

function myfunction(num1,num2){
    var a=num1*num2;
    var b = num1+num2;
    return(a+b);
}
console.log(myfunction(3,4));

function toCelcius(f){
    return (5/9)*(f-32);
}
console.log('the temp is ' + toCelcius(60));
