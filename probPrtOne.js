import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/monikasingh95/Trump-project/master/data.json');
const body = await response.text();

const tweets = JSON.parse(body); // This will convert "body" from a string to a JavaScript object


let activeHours = new Map();

for(let tweet of tweets){
    const newTime = new Date(tweet.created_at);
    const timeData = newTime.getHours();
    if(activeHours.has(timeData)){
        activeHours.set(timeData, activeHours.get(timeData) +1);
    } else {
        activeHours.set(timeData, 0);
    }
}
console.log(activeHours);

let mostActiveHour;
let maxHourCount = 0;
for(let[key, value] of activeHours) {
    if(value > maxHourCount){
        maxHourCount = value;
        mostActiveHour = key;
    }
}
console.log("Most active Hour: " + mostActiveHour);
console.log("Number of Tweets: " + maxHourCount);