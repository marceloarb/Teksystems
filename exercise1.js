// PROBLEM 1:
// Part one converting the current temperature from Fahrenheit to Celsius
// let celsius = 0;
// const fahrenheitToCelsius = (temperature) => {
//     temperature = temperature - 32;
//     temperature = temperature * 5;
//     temperature = temperature/9;
//     celsius = temperature;
//     return celsius;
// }
// fahrenheitToCelsius(70);
// console.log(celsius);


 // Part two converting the current temperature Celsius to Fahrenheit
// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// let fahrenheit = 0;
// const celsiusToFahrenheit = (temperature) => {
//     temperature = temperature * (9/5);
//     temperature = temperature + 32;
//     fahrenheit = temperature;
//     return fahrenheit;
// }
// celsiusToFahrenheit(20);
// console.log(fahrenheit);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// PROBLEM 2:
    // let voteAge = 18;
    // const canYouVote = (name,age) =>{
    //     if(age >= voteAge){
    //         console.log("Yes,"+name+" can vote!")
    //     }
    //     else{
    //         console.log("No,"+name+"cannot vote!")
    //     }
    // }

    // canYouVote("Marcelo",26);



// -------------------------------------------------------------------------------------------------------------------------------------------------------------



//  PROBLEM 3:
// let string = "The five boxing wizards jump quickly";
// let array = string.split(" ");
// console.log(array);
// array = array.join(" ");
// console.log(array);



// -------------------------------------------------------------------------------------------------------------------------------------------------------------


// PROBLEM 4:

const reverseNumber = (number) => {
    let stringNumber = number.toString();
    let arrayNumber = stringNumber.split("");
    arrayNumber = arrayNumber.reverse();
    stringNumber = arrayNumber.join("");
    console.log(stringNumber);
    
}
reverseNumber(6173692334);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------




// PROBLEM 5:
const car = class {
    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    carType(){
        console.log(this.year+" "+this.color+" "+this.make+" "+this.model);
    }
    

}

const car1 = new car("Toyota","Tundra",2002,"Gray");
car1.carType();









// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// PROBLEM 6:
    for(let x = 0; x<=15; x++){
        if(x%2 == 0){
            console.log("This is a even number "+ x);
        }
        else{
            console.log("This is a odd number "+ x);
        }
    }









// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// PROBLEM 7:
for(let x = 1; x<=100; x++){
    if(x%3 == 0 & x%5 != 0){
        console.log("Fizz");
    }
    if(x%5 == 0 & x%3 != 0){
        console.log("Buzz");
    }
    if(x%5 == 0 & x%3 == 0){
        console.log("Fizz Buzz");
        console.log(x);
    }
}