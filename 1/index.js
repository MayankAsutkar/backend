require('dotenv').config()
const express = require('express')  /// This is one of the method to import express
/// another method is import express from express

const app = express()

const port = 3000 // the description of port tells server where to listen the request

app.get('/',(req,res) => {
    res.send('Hello world!')
})

app.get('/twitter',(req,res) => {
    res.send('mayankdotcom')
})

app.get('/login', (req,res) => {
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT,() => {
    console.log(`Example app listening on port ${port}`)
})

//this is how the server works, here the app.listen ensures that the server keeps accepting the requests.


