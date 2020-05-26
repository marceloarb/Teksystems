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
    const fn = (y)=>{
        return(x,y);
    }
    return fn(x);
}

let triple;
triple = multiple(3);
console.log(triple);
triple = multiple(9);
console.log(triple);



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------



// PROBLEM 4: