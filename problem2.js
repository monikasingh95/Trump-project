import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/monikasingh95/Trump-project/master/data.json');
const body = await response.text();

const tweets = JSON.parse(body);


/*------------------------------------ROUGH WORK-------------------------------------*/
// Max, Min operator

// let a = (67, 59, 99, 134);
// let array =[34, 78, 99, 4567, 490];
//
// console.log(Math.max(a));
// console.log(Math.min(...array));
// console.log(Math.min.apply(null, array));
//
// let maxNo = Math.max.apply(array);
//
// console.log(maxNo);
/*------------------------------------ROUGH WORK END-------------------------------------*/

//Q3 What tweet got the most likes?

let maxNumTweet = Math.max.apply(Math, tweets.map(favTweet => {
    return favTweet.favorite_count;
}
))

let favCountArr = tweets.map(favTweetList => {
    return favTweetList.favorite_count;
})

//console.log(favCountArr);
console.log(maxNumTweet);

let indexOfFavTweet = favCountArr.indexOf(maxNumTweet);

console.log(indexOfFavTweet);

let mostFavTweet = tweets[indexOfFavTweet].text;

console.log("The most favorite tweet is " + mostFavTweet)