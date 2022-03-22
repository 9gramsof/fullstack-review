const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  html_url: String,
  owner: String,
  most_recent: String
});

let Repo = mongoose.model('Repo', repoSchema);

//pseudocode
  //check if name is already in DB
  //if not,
  //make a repo instance
  //save repo into the DB
let save = (repo) => {

  //repo.findOne().updateOne()

  let id = repo.id;
  let name = repo.name;
  let html_url = repo["html_url"];
  let owner = repo.owner.login;
  let most_recent = repo["updated_at"];

  // console.log("these will be in the mongood DB", id, name, html_url, owner, most_recent);

  // db.Repo.find({owner: owner}).
  // let newRepo = new Repo({
  //   id: id,
  //   name: name,
  //   html_url: html_url,
  //   owner: owner,
  //   most_recent: most_recent
  // })
  // if (!Repo.find({ name: `${name}` })) {
  //   let name = new Repo({name});
  //   name.save();
  // }
}

// let repoExample = {
//   id: 12345,
//   name: "reponame",
//   html_url: "https://github.com/user/repo",
//   owner: {login: 'Minggui'},
//   updated_at: "2021-10-13T19:33:11Z"
// }

// save(repoExample);

module.exports.save = save;