//Author:Sanjana Gurjal
//Date: June 2026
//Day 3: Functions and Arrow Functions

//*Basic function ~ no parameters, no return
function sayHello(){
    console.log("Hello from a function!");
}
sayHello();
sayHello(); // calling same function twice
sayHello(); // and again ~ reusable!

//*Function with parameters
function greet(name){
    console.log("Hello " + name + "!");
}
greet("Ram");
greet("Urmila");
greet("Mumbai");

//*Function with return value
function add(a,b){
    return a+b;
}
let sum= add(10,5);
console.log("Sum: "+ sum);
console.log("Direct call: "+add(20,30));

//*function with multiple parameters
function calculateGrade(name,marks){
    let grade;
    if (marks>=90){
        grade="A";
    }else if(marks>=75){
        grade="B";
    }else if(marks>=60){
        grade="C";
    }else{
        grade="Fail";
    }
    return name+" scored "+ marks + " marks - Grade: "+grade;
}

console.log(calculateGrade("Bhumi",70));
console.log(calculateGrade("Urmila",92));
console.log(calculateGrade("Priya",55));

//Arrow Functions ~ modern shorter way to write functions
const multiply = (a,b)=>{
    return a*b;
};
console.log("Multiply: " + multiply(4,5));

//Even shorter arrow function for single line return
const square =(n)=> n*n;
console.log("Square of 6: "+ square(6));
console.log("Square of 12: "+ square(12));

//Function calling another function
function double(n){
    return n*2;
}

function doubleAndAdd(a,b){
    return double(a) + double(b);
} 
console.log("Double and add: "+ doubleAndAdd(3,4));

//default Parameters
function welcome(name, role = "Student"){
    console.log("Welcome "+ name +" - "+role);
}
welcome("Priya"); //uses default role
welcome("Urmila", "Developer"); //uses provided role

//real-world example - BMI Calculator
function calculateBMI(weight, height){
    let bmi = weight / (height*height);
    bmi = bmi.toFixed(2); // rounds to 2 decimal places

    let category;
    if (bmi<18.5){
        category = "Underweight";
    }else if (bmi < 25){
        category ="Normal weight";
    }else if(bmi< 30){
        category =" Overweight";
    }else{
        category ="Obese";
    }

    return"BMI: " + bmi+" - "+ category;
}

console.log(calculateBMI(60, 1.65));
console.log(calculateBMI(80, 1.70));
console.log(calculateBMI(50, 1.75));