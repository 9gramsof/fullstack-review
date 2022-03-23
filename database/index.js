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


//save each repo
let save = (repo) => {

  let id = repo.id;
  let name = repo.name;
  let html_url = repo["html_url"];
  let owner = repo.owner.login;
  let most_recent = repo["updated_at"];

  //instantiate a new repo
  let savedRepo = new Repo({
    id: id,
    name: name,
    html_url: html_url,
    owner: owner,
    most_recent: most_recent
  });
  //save repo
  savedRepo.save();
};



module.exports.save = save;
module.exports.Repo = Repo;