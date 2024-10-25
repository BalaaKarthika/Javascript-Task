// Object oriented Programming - (Oops)


/*let  name = 'karthika';
let Age = 21;
let Intrest = ['creating','code developing'];
let address = {
    city : 'chennai',
    state :'Tamil nadu',
}
function greeting(){
    console.log("my name is" + name + "i like" + Intrest);
    console.log('msg')

}
greeting();
*/


let person = {
    Name: 'karthika',
    Age : 21,
    Intrest : ['creating','code developing'],
    isAlive : true,
    address : {
        city : 'Chennai',
        state : 'Tamil nadu',
    },
    greeting : function (){
        let msg = `My name is ${this.Name},I like ${this.Intrest}`;
        console.log (msg);
    }
  

};
person.greeting();

