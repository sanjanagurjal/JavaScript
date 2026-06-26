//--Conditions--
//Basic if/else
let age=16;
if (age>=18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}

// if / else if / else
let marks=60;
if(marks>=90){
    console.log("Grade:A");
}else if(marks>=75){
    console.log("Grade:B");
}else if(marks>=60){
    console.log("Grade:C");
}else if(marks>=40){
    console.log("Grade:D");
}else{
    console.log("Fail");
}

//Ternary operator ~ shortcut for simple if/else
let isRaining = false;
let weather = isRaining? "Take Umbrella":"No Umbrella needed";
console.log(weather);

//Switch statement
let day="Saturday";
switch (day){
    case"Monday":
      console.log("Start of work week");
      break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek");
}

//--Loops--
//for loop
console.log("---For Loop---");
for (let i=10; i>=4; i--){
    console.log("Number: " + i);
}

//while loop
console.log("---While loop---");
let count= 10;
while(count>=5){
    console.log("Count: "+count);
    count--;
}

//--User Input--
//prompt ~ gets input from user
let userName= prompt("What is your Name?");
let userAge= prompt("What is your age?");

console.log("Name Entered:"+ userName);
console.log("Age entered:" + userAge);

//Convert string to number
let ageNumber =Number(userAge);

if(ageNumber >=18){
    console.log(userName +" is an adult");
}else{
    console.log(userName+" is a minor");
}

//alert ~ shows popup message
alert("Welcome "+ userName +"! You are "+ userAge + " years old.");
