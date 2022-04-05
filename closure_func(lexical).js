let name='jhon';
function g1(){
    let msg='hello everyone';
    console.log(msg+' '+ name);
}
function greet(){
    let msg='hi';
    function sayHi(){   //its a inner function this can acxces outerfunction variable (greet func)
        console.log(msg);
    }
    return sayHi;
}
let hi=greet();
hi(); //sayhHi is closure function