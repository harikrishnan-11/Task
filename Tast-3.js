/* Q1: Check whether a number is between 10 and 50 using logical AND.
Input: let num = 25
Output: "Valid Number" or "Invalid Number" */
let num=25;
if(10<num<50){
    console.log("Valid Number")
}else{
    console.log("invalid number")
}

/* Q2: Check if a user is eligible to log in.
Condition:
username must be "admin"
password must be "1234"
Use logical AND */

let username=prompt("User name:");
let pwd=prompt("Password");

if(username=="admin"&&pwd==1234){
        console.log("Valid")
}else{
    console.log("invalid")
}

/* Q3: Using ternary operator:
Check if a number is even or odd */

let Num1=Number(prompt("Enter the number:"));
let result=(Num1%2==0)? 'even':'odd';
console.log(result)

/* Q4: What is the output?
console.log((10 === "10") || (5 > 2) && !(3 < 1));
Explain step by step.
 */
console.log((10 === "10") || (5 > 2) && !(3 < 1));
//Explain
/* // ((10 === "10")) is false, || (5>2) is true
//false||true - if anyone true is "true" OR operator.
//2.(3<1) is false then !(false) is "true".
// so the final conclusion true && true is true. */

/* Q5: Find the output and explain: */

console.log("5" + 2); //"52", because of  String + Number. The + operator make Concatenation.

console.log("5" - 2); //3 ,String cannot support - operator. so "5" consider as number .That's why ouptut is 3.

console.log("5" * 2); //3 ,String cannot support * operator. so "5" consider as number .That's why ouptut is 10.

console.log("5" / 2); //2.5, String cannot support / operator. so "5" consider as number .That's why ouptut is 2.5.


/* Q6: Convert the following using explicit conversion:
let value = "100";
- Convert to Number
- Convert to Boolean
 */

let value="100";

console.log(Number(value));

console.log(Boolean(value));

/* Q7: What will be the output? */

console.log(Boolean("")); //false- empty string values are false 

console.log(Boolean(" "));//true- it have 1 space so consider 1 character. so output is true.

console.log(Boolean(0));//false -0 is a false value.

console.log(Boolean([]));//true -premitive data types value is 1 so the output is true. 

/* Q8: Write a program:
If marks >= 90 → Grade A
If marks >= 75 → Grade B
If marks >= 50 → Grade C
Else → Fail
Use if else if. */

let marks=Number(prompt("enter the mark:"));

if( marks>=90){
    console.log("Grade A")
}else if(marks>=75){
    console.log("Grade B")
}else if(marks>=50){
    console.log("Grade C")
}else{
    console.log("Fail")
}

/* Q9: Traffic Signal Program using switch case:
"red" → Stop
"yellow" → Ready
"green" → Go
Default → Invalid Signal */

let TrafficSignal=prompt("enter the color:");

switch(TrafficSignal){
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go")
        break;

    default:
        console.log("Invalid Signal");
}


/* Q10 (Nested If): Check eligibility:
Age >= 18
Height >= 160
Weight >= 50
If all true → "Selected"
Else → show which condition failed.
 */

let age=Number(prompt("enter you age:"));
let height=Number(prompt("enter you height in numbers:"));
let weight=parseFloat(prompt("Enter your weight:"));

if(age>=18){
    if(height>=160){
        if(weight>=50){
            console.log("You are Selected");
        }else{
            console.log("Weight must be at least 50kg");
        }
    }else{
        console.log("Height mut be at least 160cm");
    }
}else{
    console.log("age must be at leaset 18");
}

/* Q11: Print numbers from 1 to 20 using for loop
 */

for(let i=1;i<=20;i++){
    console.log(i);
}

/* Q12: Print only odd numbers from 1 to 20. */

for(let odd=1;odd<=20;odd++){
    if(odd%2===1){
        console.log(odd);
    }
}

/* Q13: Using while loop:
Print numbers from 10 to 1. */

let Wloop=10;
while(Wloop>=1){
    console.log(Wloop);
    Wloop--;
}

/* Q14: Using do-while loop:
Print numbers from 1 to 5. */

let dowhile=1;
do {
    console.log(i);
    i++;
} while (i<=5);

/* Q15: Using for-of loop:
Print each character from:
let word = "STACKLY" */

let company="STACKLY"

for (let char of company){
    console.log(char);
}

/* Q16: Using for-in loop:
Print both key and value from:
let student = {
name: "Arun",
course: "MERN",
duration: "6 months"
} */

let student={
    name:"Arun",
    course:"MERN",
    duration:"6 months"
}
for( let data in student){
    console.log(data+":"+student[data]);
}


/* RT-1: Login System
If username = "admin" AND password = "1234" → "Login Success"
Else → "Invalid Credentials"
Use logical operator + ternary. */

let username1=String(prompt("Username:"));
let pwd1=prompt("Password:");

let Result =(username1==="admin" && pwd1 ==="1234")? "Login Success":"Invalid Credentials";
console.log(Result);

/* RT-2: Salary Bonus System
If employee salary > 50000 AND experience > 3 years
→ Eligible for bonus
Else → Not eligible */

let salary=Number(prompt("Enter your salary:"));
let experience=prompt("How many years of experience:")

if(salary>=50000 && experience>3){
    console.log("Eligble for bonus")
}else{
    console.log("Not Eligible")
}

/* RT-3: Shopping Discount
If cart amount:
>= 5000 → 20% discount
>= 2000 → 10% discount
< 2000 → No discount
Use if-else if */

let CartAmount=prompt("Enter Number:");

if(CartAmount>=5000){
    console.log("You got 20% Discount",CartAmount*0.20,"and Final price",CartAmount-(CartAmount*0.20));
}else if(CartAmount>=2000){
    console.log("You got 10% Discount",CartAmount*0.10 ,"and Final price",CartAmount-(CartAmount*0.10));
}else{
    console.log("No discount");
}
/* 
RT-4: Even/Odd Counter
Count how many even numbers between 1 to 50 */

let count=0;

for( let even=1;even<=50; even++){
    if(even%2===0){
        count++;
    }
}
console.log("Even numbers count betweent 1 to 50:",count);

/* RT-5: Dynamic Greeting System
If hour between:
1–6 → Good Morning
7–12 → Morning
13–16 → Good Afternoon
17–19 → Good Evening
Else → Good Night */

let hour=Number(prompt("Enter Current Hour:"));
if (hour >=1 && hour <=6){
    console.log("Good Morning");
}else if(hour>=7 && hour<=12){
    console.log("Monrning");
}else if(hour>13 && hour <=16){
    console.log("Good Afternoon")
}else if(hour>=17 && hour<=19){
    console.log("good evening");
}else{
    console.log("Good Night");
}

