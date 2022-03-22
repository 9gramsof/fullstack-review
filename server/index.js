const express = require('express');
let app = express();
let bodyParser = require('body-parser');
// let getReposByUsername = require('/../helpers/github');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // let username = req;

  //use the helper github -> name of user, cb[store into the db]
  //pass the repos into database
  //send a response
  console.log(req.body.name);
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

