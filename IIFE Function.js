//regular function
function regular(){
    console.log('regular fun');

};
regular(); //excetuing a function in regular way

(function (){console.log('this is IIFE');})
(); //immdediatly excute the function as soon as its created

//if function is having parameteer

(function(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);

})
(10,20,30);