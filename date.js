const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');
const dateTime = Date.parse('Thu Jan 01 00:00:00 +0000 1970');

console.log(unixTimeZero);
// expected output: 0

console.log(javaScriptRelease);
// expected output: 818035920000

console.log(dateTime);

// console.log(dateTime.getDay());

const newDate = new Date('Thu Jan 29 00:00:00 +0000 2017');
console.log(newDate.getDate() + " okay");

const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// expected output: 2
