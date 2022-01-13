import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/monikasingh95/Trump-project/master/data.json');
const body = await response.text();

const tweets = JSON.parse(body); // This will convert "body" from a string to a JavaScript object

// This will print out all the tweets in the JSON file
// for (let tweet of tweets) {
//   console.log(tweet['text']);
// }

// Thi swill print out the source of all the tweets
// for (let tweet of tweets) {
//   console.log(tweet['source']);
//}

// This is how you can use the data. You can delete above loop and start solving the questions.

/*---------------------------------QUESTIONS--------------------------*/

//Q1 How many tweets are in the data set?

console.log("Number of tweets in the data set are: " + tweets.length);

//Q2 How many of the tweets are NOT from an iPhone?


var filteredList = tweets.filter(filterTweet => {
        return filterTweet.source == "Twitter for iPhone";
});
console.log("The number of tweets that are not from an iPhone are: ")
console.log(tweets.length - filteredList.length);

//Q3 What tweet got the most likes?

var mappingTweet =  tweets.map(favoriteTweet => {
        return{
                MostLike: favoriteTweet.text,
                likes: favoriteTweet.favorite_count
        };
})


var mostLikedTweets = Math.max.apply(Math, mappingTweet);

// var mostLikedTweets = Math.max.apply(Math, tweets.map(function(favoriteTweet) {
//         return favoriteTweet.favorite_count; }
//         ))


console.log(mostLikedTweets);
