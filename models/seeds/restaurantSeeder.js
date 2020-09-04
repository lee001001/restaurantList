const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入 restaurant model
const restaurantList = require('../../restaurant.json').results

mongoose.connect('mongodb://localhost/restaurant-list',
  { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < restaurantList.length; i++) {
    Restaurant.create({ ...restaurantList[i] }) // creat seeds arrays
  }
  console.log('done')
})