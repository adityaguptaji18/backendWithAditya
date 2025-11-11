require('dotenv').config() //this is to import dotenv module

const express = require('express') //this is to import express module
const app = express() //this is to create an express app
const port = 3000 //this is to define a port number ,no of ports are available from 0 to 65535


const githubData={
  "login": "adityaguptaji18",
  "id": 169549987,
  "node_id": "U_kgDOChsgow",
  "avatar_url": "https://avatars.githubusercontent.com/u/169549987?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/adityaguptaji18",
  "html_url": "https://github.com/adityaguptaji18",
  "followers_url": "https://api.github.com/users/adityaguptaji18/followers",
  "following_url": "https://api.github.com/users/adityaguptaji18/following{/other_user}",
  "gists_url": "https://api.github.com/users/adityaguptaji18/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/adityaguptaji18/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/adityaguptaji18/subscriptions",
  "organizations_url": "https://api.github.com/users/adityaguptaji18/orgs",
  "repos_url": "https://api.github.com/users/adityaguptaji18/repos",
  "events_url": "https://api.github.com/users/adityaguptaji18/events{/privacy}",
  "received_events_url": "https://api.github.com/users/adityaguptaji18/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-05-11T17:10:35Z",
  "updated_at": "2025-07-27T09:14:25Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/aditya',(req,res)=>{
  res.send('Hello Aditya Gupta!')
})
app.get('/login',(req,res)=>{
 res.send('<h1>This is login page</h1>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.get('/message',(req,res)=>{
  res.send('This is special message for you')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
