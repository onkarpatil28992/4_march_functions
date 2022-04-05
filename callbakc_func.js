/*    callback function 1
function main(x){
    x(); //x should be a function not any other data type
    }
    function callback(){
    console.log('hi');
    }
    main(callback); 


//another function
function greet(name,callback ){
    console.log('hello' + name);
    callback();
}
function callme(){
    console.log('i am a callback function');
}
function printtime(){
    console.log('i am priting callback');
}


greet('js',callme);
greet('callback', printtime);
*/
//another callbakc function
function work(){
    console.log(' preparing you have to wait working...');

}

function consuming(icecream){
    console.log('is ic ready?');

}
function showtime(x,done){
    console.log('show time is at '+x);
    done();
}
function showend(){
    console.log('show ends');
}
showtime(9, showend);
console.log('done');
setTimeout(work,2000);
consuming('vanila icecream')
