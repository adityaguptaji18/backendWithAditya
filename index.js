require('dotenv').config() //this is to import dotenv module

const express = require('express') //this is to import express module
const app = express() //this is to create an express app
const port = 3000 //this is to define a port number ,no of ports are available from 0 to 65535

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/aditya',(req,res)=>{
  res.send('Hello Aditya Gupta!')
})
app.get('/login',(req,res)=>{
 res.send('<h1>This is login page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
