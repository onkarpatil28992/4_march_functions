function fun1(){
    function fun2(){
        return  'from function fun2'
    }
    return fun2();

}

function g_fun(){
    var x=fun1();
    console.log(x);

}
g_fun();