
  
  const firstName =document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const age = document.querySelector('#age');
  const button = document.getElementById('button');
  const element = document.createElement('h2');

  class Person{
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    
    get fullName(){
        return `${this.firstName.value} ${this.lastName.value}`;
        }
    
    get yearsOld(){
        return this.age.value;
      }
 }
 
button.addEventListener('click', ()=>{
    
    const person = new Person(firstName, lastName, age);
        
    element.innerHTML ='';
    if(person.fullName && person.yearsOld){
        element.innerHTML = `Hello, ${person.fullName}! You are ${person.yearsOld} years old.`
    } else {
        element.innerHTML = 'Please enter your full name and age.'
    }
    document.body.appendChild(element);
   
});