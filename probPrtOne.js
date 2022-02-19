import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/monikasingh95/Trump-project/master/data.json');
const body =  await response.text();

const tweets = JSON.parse(body); // This will convert "body" from a string to a JavaScript object


let activeHours = new Map();

for(let tweet of tweets){
    const newTime = new Date(tweet["created_at"]);
    const timeData = newTime.getHours();
    if(activeHours.has(parseInt(timeData))){
        activeHours.set(parseInt(timeData), activeHours.get(parseInt(timeData)) +1);
    } else {
        activeHours.set(parseInt(timeData), 0);
    }
}

let mapAsc = Array.from(activeHours.keys()).sort((a,b) => parseInt(a) - parseInt(b));

let sortedMap = new Map();
mapAsc.forEach(i => sortedMap.set(i, activeHours.get(i)));

//console.log(sortedMap);


let mostActiveHour;
let maxHourCount = 0;
let valueData = [];

for(let [key, value] of sortedMap) {
    if(value > maxHourCount){
        maxHourCount = value;
        mostActiveHour = key;
    }
    valueData.push(value);
}
console.log(valueData);
// console.log("Most active Hour: " + mostActiveHour);
// console.log("Number of Tweets: " + maxHourCount);

//return valueData










