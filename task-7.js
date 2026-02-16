/* TASK 1 – Custom Digital Clock
Create a live digital clock using:
- new Date()
- getHours()
- getMinutes()
- getSeconds()
- setInterval() */

function showTime(){
    let now= new Date();
        let getHours=now.getHours();
        let getMinutes=now.getMinutes();
        let getSeconds=now.getSeconds();
        if(getHours<10){
            getHours="0"+getHours
        }if(getMinutes<10){
             getMinutes="0"+getMinutes
        }if(getSeconds<10){
            getSeconds="0"+getSeconds
        }
    let currentime=(getHours+":"+getMinutes+":"+getSeconds);
    console.log("Current Time:",currentime);
}setInterval(showTime,1000);
showTime();
 
/* TASK 2 – Find Current Day Name
Use getDay()
Array:
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
Print:
Today is Friday */

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let now2=new Date();
let today=now2.getDay()
console.log(days[today]);
/* 
TASK 3 – Age Calculator (Basic)
let birthYear = 2003
Use getFullYear()
Print:
Your age is 23 */
let birthYear=2003
    let now1=new Date();
    let fullYear=now1.getFullYear();
    let age=(fullYear-birthYear);
    console.log("Your Age is ",age)

/* TASK 4 – Create Specific Date
Create:
15 August 2020
10:30:45 AM
Using:
- new Date()
- setFullYear()
- setMonth()
- setDate()
- setHours()
- setMinutes()
- setSeconds()
Print using:
toLocaleString() */

let date = new Date();
date.setFullYear(2020);
date.setMonth(7);       
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);
console.log(date.toLocaleString());
/* 
SECTION 2 – setTimeout & setInterval
TASK 5 – Delayed Message
Use setTimeout()
After 3 seconds print:
Welcome Naveen ■
 */
function welcome(){
    console.log("Welcome Naveen")
}setTimeout(welcome,3000)

/* TASK 6 – Stop Interval After 5 Seconds
Output:
1
2
3
4
5
Stopped
Use:
- setInterval()
- clearInterval() */

let num=1;
let count=setInterval(()=>{
    console.log(num);
    num++;

    if(num>5){
        clearInterval(count);
        console.log("stopped")
    }
},1000)

/* 
SECTION 3 – Promise Practice

TASK 7 – Simple Promise
If number > 10 → resolve("Valid number")
Else → reject("Invalid number")
Handle using:
.then()
.catch()
.finally()
 */
let number = 15; // Change value to test

let checkNumber = new Promise((resolve, reject) => {

    if (number > 10) {
        resolve("Valid number");
    } else {
        reject("Invalid number");
    }

});

checkNumber
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise execution completed");
    });

/* SECTION 4 – Fetch API Task
TASK 8 – Fetch Product Prices
API:
https://fakestoreapi.com/products
Print only:
Product: <title>
Price: <price>
-----------------
 */

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      console.log("Product:", product.title);
      console.log("Price:", product.price);
      console.log("-----------------");
    });
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });

/* SECTION 5 – Execution Order Task
function one(){
console.log("one");
}
function two(){
console.log("two");
}
function three(){
console.log("three");
}
one()
setTimeout(two,0)
three()
Predict Output and Explain Why.
*/


/* Output:
one
three
two */
/* Because setTimeout() is asynchronous, its callback goes to the callback queue 
and executes only after the synchronous code finishes event loop behavior. */
























