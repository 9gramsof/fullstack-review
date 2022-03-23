import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repos from './components/Repos.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    axios.get('/repos')
    // .then((res) => {console.log(res)})
    .then((res) => {this.setState({repos: res.data})})
    .catch((err) => console.log(err))
  }


  search (term) {
    console.log(`${term} was searched`);

    axios({
      method: 'post',
      url: '/repos',
      data: {
        name: `${term}`
      }
    })
    .then((res) => {console.log(res);
      axios.get('/repos')
      .then((res) => {this.setState({repos: res.data})})
      .catch((err) => console.log(err))
    })
    .catch((err) => {console.log(err)})
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <Repos repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));