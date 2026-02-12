/* Task 1 – forEach() Practice
let subjects = ["Maths", "Science", "English", "History"]
Requirements:
• Use forEach()
• Print Subject 1: Maths ... Subject 4: History
• Store result in a variable
• Question: Why does forEach() return undefined?
 */

let subjects = ["Maths", "Science", "English", "History"]

subjects.forEach((currentitem,index)=>{
    console.log(`subject ${index+1}:`,currentitem);
})
//forEach() returns undefined because it is designed only to execute a function for each element, 
// not to create or return a new array.

/* let prices = [100, 200, 300, 400]
Requirements:
• Use map()
• Add 10% GST
• Return new array
• Expected Output: [110, 220, 330, 440 */

let prices = [100, 200, 300, 400]

let newprices= prices.map((price)=>{
    return price+(price*0.10);
});
console.log(newprices)


/* Task 3 – filter() Practice
let students = [
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
]
Requirements:
• Use filter()
• Get students scoring above 50
• Print filtered array */

let students = [
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
]

let filteredStudents=students.filter(students=>students.marks>50);
console.log(filteredStudents);

/* Task 4 – find() Practice
Use same students array
Requirements:
• Use find()
• Find first student scoring above 50
• Print that object
• Question: Difference between filter() and find()? */

let students1 = [
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
]
let result=students1.find(students1=>students1.marks>50)
console.log(result)
//find() returns the first match, while filter() returns all matches as an array.


/* Task 5 – reduce() Practice
let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
]
Requirements:
• Use reduce()
• Calculate total price
• Bonus: Add 5% tax inside reduce()
 */

let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
]

let finalcart=cart.reduce((acc,curr)=> {
    return acc+curr.price
},0);
console.log(finalcart)

/* Task 6 – some() Practice
let numbers = [1, 3, 5, 7, 8]
Requirement:
• Check if at least one number is even
• Output: true */

let numbers = [1, 3, 5, 7, 8]

let result1=numbers.some(currentitem=>currentitem%2===0);
console.log(result1)

/* Task 7 – every() Practice
let ages = [22, 25, 19, 30]
Requirement:
• Check if all ages are above 18 */
let ages = [22, 25, 19, 30]

let Check=ages.every(age=>age>18)
console.log(Check)

/* Task 8 – sort() Practice
let salaries = [50000, 10000, 70000, 30000]
Requirements:
• Sort ascending
• Sort descending
• Explain why normal sort() fails for numbers */

let salaries = [50000, 10000, 70000, 30000]

let ascending = salaries.sort((a, b) => a - b);
console.log(ascending);


let descending=salaries.sort((a,b)=>b-a);
console.log(descending)

/* Task 9 – Array Conversion Methods
let arr = [10, 20, 30, 40]
Requirements:
• Convert using toString()
• Convert using join("-")
• Expected Output: 10-20-30-40 */

let arr = [10, 20, 30, 40]

let toString=arr.toString("-")

let join=arr.join("-");
console.log(join);

/* Task 10 – charAt() & charCodeAt()
let word = "Developer"
Requirements:
• Get character at index 4
• Get ASCII value of character at index 4
 */
let word = "Developer"

let char=word.charAt(4);
console.log(char);
 
let ascii=word.charCodeAt(4)
console.log(ascii);

/* Task 11 – slice()
let company = "StacklyCompany"
Extract: Company */

let company = "StacklyCompany"

let slice=company.slice(0,7)
console.log(slice);

/* Task 12 – Case Conversion
let userInput = "javaScript"
• Convert to uppercase
• Convert to lowercase */
let userInput = "javaScript"

let uppercase=userInput.toUpperCase()
console.log(uppercase);

let lowercase=userInput.toLowerCase()
console.log(lowercase);

/* Task 13 – trim()
let email = " naveen@gmail.com "
Remove unwanted spaces */

let email = " naveen@gmail.com "
let trim=email.trim()
console.log(trim)


/* Task 14 – includes()
let message = "Welcome to JavaScript Training"
Check if "JavaScript" exists */

let message = "Welcome to JavaScript Training"
let includes=message.includes("JavaScript")
console.log(includes);

/* 
Task 15 – split()
let movie = "spider-man-no-way-home"
Convert into array */

let movie = "spider-man-no-way-home"
let result3=movie.split("-");
console.log(result3);

/* Task 16 – indexOf() & lastIndexOf()
let text = "programming"
• Find first index of 'm'
• Find last index of 'm' */

let text = "programming"
let indexOf=text.indexOf('m')
let lastIndexOf=text.lastIndexOf('m')
console.log(indexOf);
console.log(lastIndexOf);
/* 
Task 17 – replace()
let tech = "I love python"
Replace python with javascript */

let tech="I love Python"
let replace=tech.replace("Python","Javascript")
console.log(replace)

/* Task 18 – startsWith() & endsWith()
let filename = "report.pdf"
• Check if starts with "report"
• Check if ends with ".pdf"
 */

let filename = "report.pdf"
let startsWith=filename.startsWith("report")
console.log(startsWith);

let endsWith=filename.endsWith(".pdf")
console.log(endsWith);

/* Task 19 – repeat()
let star = "*"
Print 10 stars using repeat() */

let star="*"
let repeat=star.repeat(10)
console.log(repeat);

/* FINAL TEAM CHALLENGE – Employee Report System
let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
]
Requirements:
• Convert names to uppercase using map()
• Filter salary > 40000
• Find first salary > 60000
• Calculate total salary using reduce()
• Sort salaries descending */

let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
]

let uppernames=employees.map(emp=>({
    ...emp,name:emp.name.toUpperCase()
}));
console.log("Uppercase",uppernames);

let highsalary=employees.filter(emp =>emp.salary>40000);
console.log("high salary:",highsalary);

let firssalary=employees.find(emp =>emp.salary>60000);
console.log("First salary:",firssalary);

let TotalSalary=employees.reduce((acc,currentitem)=>{
    return acc+currentitem.salary;
},0);

console.log(TotalSalary);

let descendingSalary=employees.sort((a,b)=>b.salary-a.salary);
console.log(descendingSalary);















