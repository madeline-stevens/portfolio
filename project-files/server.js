'use strict';

const pg = require('pg'); //page.js
const fs = require('fs'); //
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000; //use either PORT or 3000
const app = express();
const conString = 'postgres://localhost:5432/kilovolt';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('.public'));


//proxyGitHub function. This will provide the route to the token to then give it to the API request. This also keeps the API request withheld from the client. This is a review comment from lab 14.
function proxyGitHub (request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url:`https://api.github.com/${request.params[0]}`,
    headers:{Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}


// app.get('/home', ....) the app.gets in the lab were for new blog postings.
