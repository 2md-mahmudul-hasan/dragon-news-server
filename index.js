const express = require ('express')
const app = express()
const cors = require('cors')
const port = 5000;

const catagories = require('./data/catagories.json')

app.use(cors())
app.get('/catagories', (req, res)=>{
  res.send(catagories)
})
app.get('/', (req, res)=>{
  res.send('send from server')
})

app.listen(5000, ()=>{
  console.log('listen in  port 5000')
})