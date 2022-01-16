import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/monikasingh95/Trump-project/master/data.json');
const body = await response.text();

const tweets = JSON.parse(body); // This will convert "body" from a string to a JavaScript object

// What date did Trump publish most number of tweets?

// const newDate = new Date('Thu Jan 29 00:00:00 +0000 2017');
// console.log(newDate.getDate() + " okay");

// let dateJsonData;
// for (let tweet of tweets) {
//     const newDate = new Date(tweet.created_at);
//     dateJsonData.newDate = 0;
//
// }


let dateJsonData = new Map();

for (let tweet of tweets) {
    const newDate = new Date(tweet.created_at);
    const dateString = newDate.getDate() + "-" + newDate.getMonth() + "-" + newDate.getFullYear();
    if (dateJsonData.has(dateString)) {
        dateJsonData.set(dateString, dateJsonData.get(dateString) + 1);
    } else {
        dateJsonData.set(dateString, 0);
    }
}

console.log(dateJsonData);

let maxDate;
let maxDateCount = 0;
for (let [key, value] of dateJsonData) {
    if (value > maxDateCount) {
        maxDateCount = value;
        maxDate = key;
    }
}

console.log("Date with most tweets: " + maxDate);
console.log("Number of tweets: " + maxDateCount);


//

//testVar
// {
//     "monu": 1,
//     "minu": 2,
//     "papa": 5
// }
//
// testVar.get("monu")
// testVar.has("monu") => true
// testVar.has("mummy") => false
// testVar.set("mummy", 3)
// testVar.set("monu", testVar.get("monu") + 1)