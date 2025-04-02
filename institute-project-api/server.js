// const http = require('http'); 
// const mongoose = require("mongoose");
// const port = 4000;
// const app = require("./app");

 
// const server = http.createServer(app);

// server.listen(port, ()=>{
//      console.log('app is running...');
// })


const http = require('http')
const port =3000||process.env.PORT;
const app = require('./app')


const server = http.createServer(app);
server.listen(port, ()=>{
 console.log('app is running...')
})

