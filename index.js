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


// var mostLikedTweets = Math.max.apply(Math, mappingTweet);

// var mostLikedTweets = Math.max.apply(Math, tweets.map(function(favoriteTweet) {
//         return favoriteTweet.favorite_count; }
//         ))


// console.log(mostLikedTweets);

/* First I will check if Math.max.apply works or not. If it works then I will use it.
For this I'll first create a number array and then I'll use Math.max.apply to find the maximum number in the array.
 */

let numberArray = [22, 34, 56, 32, 66, 78, 11, 45, 99];
let maxNumber = Math.max.apply(Math, numberArray);
//console.log("Maximum Number is: " + maxNumber);
// This is the output: Maximum Number is: 99 (So the function is correct, and it works).

/* Now I will check what's wrong with your code.
In your code, I can see that you have applied the same function to the variable "mappingTweet". But, as you can see,
"mappingTweet" is not a number array. Maximum can only and only be applied to a number array, not to an object array.
Math.max.apply can only be applied to an array of numbers, just like the variable "numberArray" as above. So what we
can do is we can try to map tweets to only a number array, and then we can use Math.max.apply to find the maximum number.
Let's try it.
 */

let likesCountArray = tweets.map(favoriteTweet => {
        return favoriteTweet.favorite_count;
});

/* As you can see in the above code, the variable "likesCountArray" is an array of numbers. It will only be in the
format like this: [22, 34, 56, 32, 66, 78, 11, 45, 99]. So, we can use Math.max.apply to find the maximum number.
So let's apply the function now.
 */

let maxLikesCount = Math.max.apply(Math, likesCountArray);
//console.log("The maximum number of likes is: " + maxLikesCount);
// This is the output: The maximum number of likes is: 605098 (So the function is correct and it works).


//Now let's find the index of this item.
let index = likesCountArray.indexOf(maxLikesCount); // This will return the index of the maximum number.
console.log("The index of the maximum number of likes is: " + index); //Answer: 1005

//Now in the original variable "tweets", we will find out the 1005th item.
let tweet = tweets[index]; // This will return the 1005th item.

//Now let's print out the tweet that got the most likes.
//console.log("The tweet that got the most likes is: " + tweet.text);

/*---------------------------------TWO-LINE-SOLUTION--------------------------*/
//Everything that we did above can also be done in two lines:
let likesCountArray2 = tweets.map(t => t.favorite_count);
console.log("The tweet that got the most likes is: " + tweets[likesCountArray2.indexOf(Math.max.apply(Math, likesCountArray2))].text);


//Q4 What is the highest amount of favorites he recieved?
console.log("The highest amount of favorites is: " + maxLikesCount);

//Q5 What is the highest amount of favorites recieved on a retweet?

let retweets = tweets.filter(filterRetweets => {
        return filterRetweets.is_retweet == true;
})

let maxNumOfFav = Math.max.apply(Math, retweets.map(favCount => {
        return favCount.favorite_count;
}))

console.log("The highest amount of favorites on a retweet is: " + maxNumOfFav);

//Q6 What date did Trump publish most number of tweets?

let dates = tweets.map(filterDate => {
        return filterDate.created_at;
})

console.log(dates);




