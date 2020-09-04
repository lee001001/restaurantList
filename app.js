// require packages used in the project
const express = require('express')
const mongoose = require('mongoose')  //loading mongoose
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')
//const restaurantList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })


// 取得資料庫的連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


/*
// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results });
})



app.get('/restaurants/:id', (req, res) => {
  console.log('req.params.restaurant_id', req.params.id)
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.id)

  res.render('show', { restaurant: restaurant })
})

//setting search function
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  })
  console.log('req.query', req.query)
  res.render('index', { restaurants: restaurants })
})
*/

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})