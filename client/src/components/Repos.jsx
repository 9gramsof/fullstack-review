import React from 'react';

const Repos = ({repos}) => (

    <ul>{repos.map((repo) => <li>this repo: <a href={repo['html_url']}> {repo['html_url']} </a> belongs to {repo.owner}</li>)}</ul>
)

export default Repos;