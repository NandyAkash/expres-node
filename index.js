const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
const port = 8080;
app.get('/',(req,res) => {
    res.send('I am Learning Node and Express.')
})

const users =[
    {
        "id": 0,
        "name": "Akash Nandy",
        "username": "Akash",
        "email": "akash.nandy81@gmail.com",
        "address": {
          "street": "Sarif Colony",
          "suite": "Yusuf Building",
          "city": "Chattogram",
          "zipcode": "4000"
        },
        "phone": "+8801829321973"
      },
    {
        "id": 1,
        "name": "Biswajit Das",
        "username": "Bishu",
        "email": "bishu131@gmail.com",
        "address": {
          "street": "Sarif Colony",
          "suite": "Sarif Building",
          "city": "Chattogram",
          "zipcode": "4000"
        },
        "phone": "+8801815572434"
      },
    {
        "id": 2,
        "name": "Anik Barua",
        "username": "Anik",
        "email": "anik@gmail.com",
        "address": {
          "street": "Sarif Colony",
          "suite": "kasem building",
          "city": "Chattogram",
          "zipcode": "4000"
        },
        "phone": "+88018745645654"
      },
    {
        "id": 3,
        "name": "Rajarshi Das",
        "username": "Babu",
        "email": "Babu@gmail.com",
        "address": {
          "street": "Alkaran",
          "suite": "building",
          "city": "Chattogram",
          "zipcode": "4000"
        },
        "phone": "+8801936236547"
      },
    {
        "id": 4,
        "name": "Apu Das",
        "username": "Apu",
        "email": "apu@gmail.com",
        "address": {
          "street": "Gangabari",
          "suite": "Patharghata",
          "city": "Chattogram",
          "zipcode": "4000"
        },
        "phone": "+8801695446455"
      },
    {
        "id": 5,
        "name": "Dibayndu Das",
        "username": "Debu",
        "email": "Debu@gmail.com",
        "address": {
          "street": "Hazari golli",
          "suite": "Building",
          "city": "Chattogram",
          "zipcode": "4000"
        },
        "phone": "+8801679074818"
      },
];

// app.get('/users', (req,res) => {
//     res.send(users);
// })
//use query parameter
app.get('/users', (req,res) => {
  const search = req.query.search;
  if(search) {
    const searchResult = users.filter(user => 
      user.name.toLocaleLowerCase().includes(search));
      res.send(searchResult);
    
  }
  else {
    res.send(users);
  }
})

//app Method
app.post('/users',(req,res) => {
  const newUser = req.body;
  newUser.id = users.leghth;
  users.push(newUser);
  res.send(JSON.stringify(newUser));
})



//Dynamic Api
app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
})