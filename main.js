/*
lesson => 159
Data And Time
    Data constructor

Static Methods
    Data.now()

    To Track Time YOu Need Starting point
    Epoch time or unix time in computer science is the number of seconds since january 1,1970.
    why 1970 [829 Days To 136 Years]

    Search for 
    year 2038 problem in computer science.
*/

let dateNow = new Date();

console.log(dateNow);

console.log(`Millsecond ${Date.now()}`); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; //Number of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number of Days
console.log(`days ${days}`);

let years = days / 365; // Number of Years
console.log(`years ${years}`);

/*
lesson => 160
Data And Time
    getTime() => NUmber Of MIllseocnds
    getDate() => Day of the month
    getFulYear()
    getMonth() => Zero Based
    getDay() => Day of The Week
    getHours()
    getMinutes()
    getSeconds()
*/

let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime()); // time by millsecond form start of time until now
console.log(dateNow.getDate()); // day of the month
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth()); // strat form 0 beacuse it take index now it is month 9 but it will appear 8
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

/*
lesson => 161
Data And Time
    setTime(Milliseconds)
    setDate() => Day of the month [Negative and postitive]
    setFullYear(year,month => optional [0-11] , day=> Optional [1-31])
    setMOnth(Month [0-11], Day => Opitonal [1-31]) [Negative And Positive]
    setHoures(Hours [0-23] , Minutes => Optional [0-59] , Seconds => Optional [0-59] , Ms => Optional [0-99])
    setMinutes(Minutes [0-59] , seconds => Optional [0-59] , MS => Optional [0-99])
    setSeconds(Seconds => [0-59] , MS =>Optiona [0-999])
*/

console.log(dateNow);

console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(35);
// console.log(dateNow);

dateNow.setFullYear(2025, 3, 11);
console.log(dateNow);

dateNow.setMonth(3, 11);
console.log(dateNow);

/*
lesson => 162
Data And Time

new Date(timestamp) // عدد الملي سكند
new Date(Date String)
new Date(Numeric Values)

Format
    "Oct 25 1982"
    "10/25/1982"
    "1982-10-25 => ISO International Standard"
    "1982 10"
    "1982 10"
    "1982"
    "82"
    1982, 9 , 25 , 2 , 10 , 0
    1982, 9 , 25
    "1982-10-25T06:10:00Z"

    Date.parse("String") // Read Date From A String
*/
console.log("#".repeat(66));

console.log(Date.parse("Apr 11 2000"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(955404000000);
console.log(date2);

let date3 = new Date("10/25/1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982 10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00");
console.log(date9);

/*
lesson => 163
Date And Time
    Track Operations Time

    Search 
        Performance.now()
        performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 50; i++) {
  //   document.write(`<div>${i}</div>`);
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}
// End Time
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

/*
lesson => 164
Generators
    Generator Function Run Its Code When Required.
    Generator Funcion Return Special Object [Generator Object]
    Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}

/*
lesson => 165
Generators
    Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generator2 = generateAll();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.return("Z"));
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

/*
lesson => 166
Generators
    Generate Infinite Numbers
    Use Return Inside Generators
*/

function* generateNumbers2() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator3 = generateNumbers2();

console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());

/*
lesson => 167
Modules
    Import And Export
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Somthing`;
}

/*
Modules
    Export Alias // its like rename اسم مستعار
    Named Export
    Default Export
    Import All
*/

export { a as myNumber, arr, saySomething };

export default function sayHello(){
  return `Hello`;
}

