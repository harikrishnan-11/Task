/* 1. Welcome Program
- Ask user name using prompt().
- Show alert: Hi , Welcome to JavaScript Training.
- Print the same message in console. */

let UserName= prompt("Enter your name");
alert("Hi" +UserName+ ",Wlecome to JavaScript Training");
console.log(UserName);

/* 2. Console Methods Practice
- Print 500 using console.log(), console.warn(), console.error().
- Use console.clear(). */

console.log(500); 
console.warn(500);
console.error(500);
console.clear();

/* 3. Data Type Identification
- Create string, number, boolean, undefined, and null variables.
- Print value and type using typeof. */

// String
let Name="Hari krishnan";
console.log(Name);
console.log(typeof(Name)); 

// Number
let number=1212; 
console.log(typeof(number),number);

// Boolean
let boolean=true;
console.log(typeof(boolean),boolean); 

// Undefined
let c;
console.log(c);
console.log(typeof(c));

// Null variables
let age= prompt("What is your age");
console.log(age);
console.log(typeof(age));

/* 4. Arithmetic Operations
- Use let a = 20 and let b = 5.
- Perform +, -, *, /, %, ** and print results. */

let a=10;
let b=2;
console.log(a+b); 
console.log(a-b); 
console.log(a*b); 
console.log(a/b); 
console.log(a%b); 
console.log(a**b);

/* 5. Increment & Decrement
- Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
- Print variables clearly. */

// Post-increment
let a=10;
let b=a++;
console.log("a:",a); //11
console.log("b:",b); //10

// Pre-increment
let c=10;
let d=++c;
console.log("c:",c); //11
console.log("d:",d); //11

// Post-decrement
let x=10;
let y=x--;
console.log("x:",x); //9
console.log("y:",y); //10

// Pre-decrement
let num1=10;
let num2= --num1;
console.log(num1); //9
console.log(num2); //9

/* 6. Assignment Operators
- Use let num = 10.
- Perform +=, -=, *=, /=, %= and print results. */

let num=10;
num+=5;
console.log(num) //15

num-=5;
console.log(num) //10

num*=2
console.log(num) //20

num/=5
console.log(num) //4

num%=2
console.log(num) //0

/* 7. Array Access
- Create array ['HTML','CSS','JavaScript','React'].
- Print first element, second element, last element (using length), and total elements. */

let language=['HTML','CSS','JavaScript','React']

//first element
console.log("First element:",language[0]); //First element: HTML

//Second element
console.log("Second element:",language[1]);// Second element: CSS

//Last element
console.log("Last element:",language[language.length-1]); //Last element: React

//Total elements.
console.log("Last element:",language.length); //Last element: 4

/* 8. Modify Array
- Add one element at end.
- Remove last element.
- Print updated array. */
language.push('Boostrap');
console.log(language); // [ 'HTML', 'CSS', 'JavaScript', 'React', 'Boostrap' ]

language.pop();
console.log(language); //['HTML','CSS','JavaScript','React']

console.log("updated array:"language) //['HTML','CSS','JavaScript','React']

/* 9. Student Object
- Create object with name, age, course, city.
- Print values using dot notation. */

let Student={
    Name:"Harikrishnan",
    Age:22,
    Cource:"Front-end Developer"
    City:"Karur"
};

console.log("Student Name:",(Student.Name));        //Harikrishnan
console.log("Student Age:",(Student.Age));          //22
console.log("Student Course:",(Student.Course));    //Frontend Developer
console.log("Student City:",(Student.City));        //Karur

/* 10. Nested Object Practice
- Create company object with nested trainer object.
- Print company name, trainer name, trainer subject. */

let company={
    company_name:"Stackly Company",
    trainer:{
        name:"Naveen",
        subject:"JavaScript"
    }
};
console.log("Company Name:",company.company_name);  //Stackly Company
console.log("Trainer Name:",company.trainer.name);  //Naveen
console.log("Trainer Subject:",company.trainer.subject); //Javascript




























