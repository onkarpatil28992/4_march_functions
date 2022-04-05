//creating an object 

let person ={
    firstName='onkar',
    lastname = 'patil',
    occupation = 'student',
    address = 'mumbai'
};
//dot notaion
console.log(person.firstname);
console.log(person.lastname);
 
//array like notaion 
console.log(person['firstName']);
console.log(person['lastname']);

let address={
    'building no': 3333,
    street: 'north high',
    country: 'india'
};
address.building no //error
address['building no'];
