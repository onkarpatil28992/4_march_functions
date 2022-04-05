function showmsg(name,age){
    //alert('hello ' +name+' '+'your age is :' +age);
    alert('hello' +' '+ arguments[0]+ ' ' +arguments[1]);
}

showmsg('ave',20);
showmsg('xyz',22);
showmsg(100,50); //parameter don't have datatypes
showmsg(); // o/p as undefined

//loop inside a function
function showname(){
    for(var i=0;i<arguments.length;i++){
        alert(arguments[i]);
        
    }
}
showname('geno','cide');
//
function sum(val1,val2){
    return val1+val2;
};
var result = sum(30,50);
document.write(result);

function multi(val1,val2){
    console.log(val1*val2);
};

result=multi(10,20);


//another way to use function by assigninig it to the variable

var sum=function add(val11,val22){
    return val11+val22;

};
var result1=sum(10,20);//valid
var result2=add(10,30);//not valid
console.log(result1);
console.log(result2);

//function call back 
