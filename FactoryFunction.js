function createPerson(firstName,lastName){
    return{
        firstName:firstName,
        lastName:lastName,
        getfullName(){
            return firstName+''+lastName;
        },
    };
}

var person1 = createPerson('JOhn'+ 'Doe');
var person2 = createPerson('Jane'+'Doe');
console.log(person1.firstName);
console.log(person2.firstName);
