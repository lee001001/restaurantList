# Restaurant_List _crud
A simple restaurant website build with Node.js and Express  

## Features
- Search restaurant by name
- create new restaurant
- read the details of each restaurant
- edit restaurant
- delete restaurant

### Create
user can press "Create" button to add new restaurant

### Read
Click restaurant card to see details

### Edit
user can press "edit" button in index and detail page to edit restaurant

### Delete
user can press "delete" button in index and detail page to delete restaurant

### Search
search the restaurants by name

## Getting Started
## Setup MongoDB
```
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```

Clone repository to your local computer
```
$ git clone https://github.com/lee001001/restaurantList.git
```
Get into the directory
```
cd RestaurantList
```
Install packages
```
$ npm install
```
Execute
```
$ npm run dev seed
$ npm run dev start

```
Terminal show message
```
Express is listening on localhost:3000
```
Now you can browse the website on
```
http://localhost:3000
```

## Built With
* Node.js: 12.16.1
* Express: 4.17.1
* Express-Handlebars: 5.1.0
* nodemon: 2.0.4
* MongoDB 4.2.9

