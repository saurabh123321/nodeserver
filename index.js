const express = require('express'); 
require('dotenv').config();

const app = express(); 
const saurabhData = {
    "login": "saurabh123321",
    "id": 60282343,
    "node_id": "MDQ6VXNlcjYwMjgyMzQz",
    "avatar_url": "https://avatars.githubusercontent.com/u/60282343?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/saurabh123321",
    "html_url": "https://github.com/saurabh123321",
    "followers_url": "https://api.github.com/users/saurabh123321/followers",
    "following_url": "https://api.github.com/users/saurabh123321/following{/other_user}",
    "gists_url": "https://api.github.com/users/saurabh123321/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/saurabh123321/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/saurabh123321/subscriptions",
    "organizations_url": "https://api.github.com/users/saurabh123321/orgs",
    "repos_url": "https://api.github.com/users/saurabh123321/repos",
    "events_url": "https://api.github.com/users/saurabh123321/events{/privacy}",
    "received_events_url": "https://api.github.com/users/saurabh123321/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "tech_savvy \r\n",
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 3,
    "following": 1,
    "created_at": "2020-01-25T05:08:44Z",
    "updated_at": "2024-05-11T11:17:12Z"
  }; 
app.get('/', (req, res) => {
    res.send("Hellow World");
})

app.get('/login', (req, res)=>{
    res.send('<h1>login successful</h1>');
})

app.get('/github' ,(req, res)=>{
    res.json(saurabhData);
})

app.get('/twitter', (req, res)=>{
    res.send('saurabhkhule143');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening at port ${process.env.PORT}`);
})