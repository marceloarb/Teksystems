// PROBLEM 1:
// const Dog = class{
//     constructor(breed,color,age){
//         this.breed = breed;
//         this.color = color;
//         this.age = age;
//     }
// }

// Dog.prototype.ageInHumanYears = function(){
//     console.log(this.age * 7)
// };
// const dog1 = new Dog("Labrador","Brown",3);
// const dog2 = new Dog("Pitbull", "white", 5);
// dog1.ageInHumanYears();
// dog2.ageInHumanYears();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 2:
// const Dog = {
//     ageInHumanYears: function(){
//         console.log(this.age * 7);
//     }
// };

// const dog1 = Object.create(Dog);
// dog1.breed = "Lab";
// dog1.color = "Brown";
// dog1.age = 4;
// console.log(dog1);
// dog1.ageInHumanYears();




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------



// PROBLEM 3:


const multiple = (x)=>{
    return function fn(y){
        return(x,y);
    };
}

let triple = multiple(3)(3);
console.log(triple);
triple = multiple(3)(6);
console.log(triple);


// I am just playing with call back functions below here:
const learning = (x)=>{
    return function l(y){
        return (y*x);
    }
    
}


let l = learning(3);
console.log(l(3));



function es5(x){
    return function es(y){
        return console.log((x*y));
    }
}


var func = es5(3);
func(6);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------



// PROBLEM 4: