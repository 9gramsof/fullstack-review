const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let url = 'https://api.github.com/users/' + username + '/repos'

  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  //what does axios return? a promise
  axios(options)
  .then((res) => {cb(null, res)})
  .catch((err) => {cb(err)})

}
getReposByUsername('9gramsof');

module.exports.getReposByUsername = getReposByUsername;