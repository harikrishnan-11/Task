//1. Payroll System:
let basicsalary=prompt("enter your basic salary:");
let bonuspercentage=prompt("enter your bonus percentage:")

function calculatesalary(basicsalary,bounspercentage){
    //Bonus
    let bonus=(basicsalary*bounspercentage)/100;
    //Gross
    let gross=basicsalary+bonus;
    //Tax
    let tax=gross*0.05;
    //final salary
    let finalsalary=gross-tax;
    
    //salary breakdown
    console.log("Basic salary:",basicsalary);
    console.log("Bonus percentage:",bounspercentage);
    console.log("Bonus amount:",bonus);
    console.log("Gross salary:",gross);
    console.log("Tax:",tax);
    console.log("final salary:",finalsalary);
    
    return finalsalary;
}
calculatesalary(basicsalary,bonuspercentage);

//2.Student result system.

let name=prompt("Enter Student Name:");
let marks=prompt("Enter marks (ex: 80,70,60):");
let marksArray=marks.split(",").map(Number);
function generateResult(name, marksArray) {
    let total = 0;
    for (let mark of marksArray) {
        total =total+mark;
    }
    let average = total / marksArray.length;
    let grade;
    if (average >= 80) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 40) grade = "C";
    else grade = "Fail";
    return {
        name: name,
        total: total,
        average: average,
        grade: grade
    }
}
 let result1=generateResult(name, marksArray);
 console.log(result1)

/*  3. Debug This Code:
function demo(){
if(true){
var a = 10;
let b = 20;
}
console.log(a);
console.log(b);
}
Questions:
- What will happen?

- Why?
- Fix it properly. */

//What will happen?

//It shows reference error

//2.Why?
/* var is function-scoped,so accessible outside the block.
let is block-scoped,so accessing it outside causes ReferenceError. */

//3.Fix
function demo(){
    if(true){
        var a = 5;
        let b = 10;
        console.log(a);
        console.log(b);
    }
}
demo();

/* 4. Hoisting Analysis:
console.log(x);
var x = 100;
console.log(y);
let y = 200;
Predict output and explain. */

// it show Undefined
// referenceError:Cannot access 'y' before initialization.

//var hoisting gives undefined
//let hoisting gives reference error.

/* 5. Order Processing System:
Create processOrder(orderId, callback)
- Print "Order Processed"
- Call generateInvoice(orderId) */

function generateInvoice(orderId){
    console.log("invoice generated for Order ID:",orderId);
}
function processOrder(orderId,callback){
    console.log("Order Processed");
    callback(orderId);
}
processOrder(101,generateInvoice);

/* 6. Bank Transaction System:
Create transaction(amount, type, callback)
- If deposit → add
- If withdraw → subtract
- Call sendSMS()
*/

function sendSMS(balance){
    console.log("SMS sent: Your current balance is,",balance);
}
function transaction(amount,type,callback){
    let balance=100;
    if(type==="deposit"){
        balance=balance+amount;
        console.log("Amount Deposited:",amount);
    }else if(type==="withdraw"){
        balance=amount-balance
        console.log("Amount Withdrawn:",amount)
    }else{
        console.log("Invalid transaction type")
        return;
    }
    callback(balance);
}
let amount=Number(prompt("Enter amount:"));
let type=prompt("enter transaction type(deposit/withdraw)");
transaction(amount,type,sendSMS)

/* 7. Dynamic Price Builder:
Create priceBuilder(basePrice)(discount)(tax)
Return final price
Example: priceBuilder(2000)(15)(18) */

function priceBuilder(basePrice){
    return function(discount){
        return function(tax){
            let discountAmount = (basePrice*discount)/100;
            let priceAfterDiscount=basePrice-discountAmount;
            let taxAmount = (priceAfterDiscount*tax)/100;
            let finalPrice = priceAfterDiscount+taxAmount;
            return finalPrice;
        };
    };
}
let result =priceBuilder(10000)(10)(18);
console.log("Final Price:",result);

/* 8. Secure Company Module:

- Store private variable companyCode
- Expose getCompanyStatus()
- companyCode should not be directly accessible */

function companyModule(){
    let companyCode="HK-2026";
    function getCompanyStatus(){
        return "company active code:"+companyCode;
    }
    return{
        getCompanyStatus
    };
}
let company=companyModule();
console.log(company.getCompanyStatus());
console.log(company.companyCode);

/* SECTION 6 – Generator (Advanced Logic)
9. Unique Order ID Generator:
Generate ORD1001, ORD1002, ORD1003, etc. */

function* orderIdGenerator() {
  let id = 1001;
  while (true) {
    yield "ORD" + id;
    id++;
  }
}
const orderGen = orderIdGenerator();
console.log(orderGen.next().value); 
console.log(orderGen.next().value); 
console.log(orderGen.next().value);

/* 10. Coupon Spin System:
Yield:
- 10% OFF
- 20% OFF
- 50% OFF
- No Luck
- Jackpot
Simulate multiple spins. */


function*couponSpin(){
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";
}
const spin=couponSpin();

console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);

/* SECTION 7 – Mini Project (Integrated)
Mini E-Commerce Flow:
- addToCart(product, price)
- calculateTotal()
- applyDiscount() using currying
- generateCoupon() using generator
- processPayment() using callback
- Hide config using IIFE
Concept Questions:
1. Difference between function declaration & expression?
2. What is higher order function?
3. Real-time example of generator?
4. Why do we use IIFE?

5. Difference between var, let, const? */

//IIFE -high config
const shop=(function(){
    let cart =[];
    let tax=5;
    function addToCart(product,price){
        cart.push({product,price});
        console.log(product,"added to cart");
    }
    function calculateTotal(){
        return cart.reduce((sum,item)=>sum+item.price,0);
    }
    const applyDiscount=total=>discount=>{
        return total-(total*discount)/100;
    };
    function* generateCoupon(){
        yield "10% off";
        yield "20% off";
        yield "50% off";
    }
    function processPayment(amount,callback){
        console.log("processing payment of RS",amount);
    }
    return{
        addToCart,calculateTotal,applyDiscount,generateCoupon,processPayment
    };
})();

shop.addToCart("Drimmer",1000);
shop.addToCart("charger",550);

let total=shop.calculateTotal();
console.log("total:",total);

let discountedPrice=shop.applyDiscount(total)(10);
console.log("after discount:",discountedPrice);

const coupon=shop.generateCoupon();
console.log("coupon:",coupon.next().value);

shop.processPayment(discountedPrice,
    function(msg){
        console.log(msg)
    });
    
/* 1. Difference between function declaration & expression? */

//function declaration is hoisted.
//function expression is not hoisted.

/* 2. What is higher order function? */
//function that accepts another function.

/* 3. Real-time example of generator? */

/* function* orderId() {
  let id = 1;
  while (true) yield id++;
} */

/*  4. Why do we use IIFE?  */

//to hide varibales ,avoid global pollution,secure config

/* 5. Difference between var, let, const? */

//var is function scope,can redeclare,can reassign.
// let is block scope,no redeclare,can reassign.
//const is block scope,no redeclare,cannot reassign.