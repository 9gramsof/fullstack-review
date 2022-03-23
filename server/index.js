const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let {getReposByUsername} = require('../helpers/github.js');
let {save} = require('../database');
let {Repo} = require('../database');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

//use the helper github -> name of user, cb[store into the db]
//pass the repos into database
//send a response
app.post('/repos', function (req, res) {

  let username = req.body.name;
  getReposByUsername(username, (err, arrData) => {

    arrData.forEach((repo) => {
      save(repo);
    })
    res.end();
  });
});


app.get('/repos', function (req, res) {
  let repos = Repo.find({}).sort({most_recent: -1})

  repos.exec((err, docs) => {
    if (err) {
      console.log(err);
      return;
    }
    let top = docs.slice(0, 25);
    // console.log('successfully got top 25 docs!');
    res.json(top);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

