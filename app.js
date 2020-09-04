// require packages used in the project
const express = require('express')
const mongoose = require('mongoose')  //loading mongoose
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const Restaurant = require('./models/restaurant') //載入 Restaurant model

const app = express()

//const restaurantList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

// setting static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


// routes setting
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))

})

//新增new的路由
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

//新增new POST 路由接住新增資料
app.post('/restaurants', (req, res) => {
  const name = req.body.name       // 從 req.body 拿出表單裡的 name 資料
  const phone = req.body.phone       // 從 req.body 拿出表單裡的 name 資料
  const image = req.body.image       // 從 req.body 拿出表單裡的 name 資料

  return Restaurant.create({ name })     // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})



/*
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