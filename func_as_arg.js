//function as an argument

function greet(){
    return 'hello';

}
//passing function greet as a parameter
function name1(user, func){
    const message=func();
    console.log(`${message} ${user}`); // when we need to extract js value
}

name1('john', greet);
name1('jack',greet);
name1('bob',greet);

