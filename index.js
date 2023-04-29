const express = require ('express')
const app = express()
const cors = require('cors')
const port = 5000;

const catagories = require('./data/catagories.json')
const news = require('./data/news.json')
console.log(news)

app.use(cors())
app.get('/catagories', (req, res)=>{
  res.send(catagories)
})

app.get('/news', (req, res)=>{
  res.send(news)
})


app.get('/news/:id', (req, res)=>{
  const id = req.params.id;
  const selectedNews = news.find(n=>n._id == id)
  res.send(selectedNews)
  
})

app.get('/categories/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  if(id===0){
    res.send(news)
  }else{
    const categoriesNews = news.filter(n=>parseInt(n.category_id) === id)
    res.send(categoriesNews)
  }
  
})


app.get('/', (req, res)=>{
  res.send('send from  server')
})

app.listen(5000, ()=>{
  console.log('listen in   port 5000')
})