import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/monikasingh95/Trump-project/master/data.json');
const body = await response.text();

const tweets = JSON.parse(body); // This will convert "body" from a string to a JavaScript object

// This will print out all the tweets in the JSON file
for (let tweet of tweets) {
  console.log(tweet['text']);
}

// Thi swill print out the source of all the tweets
for (let tweet of tweets) {
  console.log(tweet['source']);
}

// This is how you can use the data. You can delete above loop and start solving the questions.