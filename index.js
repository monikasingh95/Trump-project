import fetch from 'node-fetch';

const response = await fetch('https://raw.githubusercontent.com/prasannjeet/Trump-Tweets-Problem/master/data.js');
const body = await response.text();



