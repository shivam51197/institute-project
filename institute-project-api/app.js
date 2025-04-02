// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const fileUpload = require('express-fileupload')
// const cors = require('cors')

// const userRoute = require('./routes/user')
// const studentRoute = require('./routes/student')
// const courseRoute = require('./routes/course')
// const feeRoute = require('./routes/fee')

// mongoose.connect('mongodb+srv://sbs:1234@sbs.t990p.mongodb.net/?retryWrites=true&w=majority&appName=sbs')
// .then(()=>{
//     console.log('connected with database')
// })
// .catch(err =>{
//     console.log('err')
// })

// app.use(bodyParser.json())
// app.use(cors())

// app.use(fileUpload({
//     useTempFiles : true,
//     // tempFileDir : '/tmp/'
// }));


// // baseURL/user
// app.use('/user',userRoute)
// app.use('/student',studentRoute)
// app.use('/course',courseRoute)
// app.use('/fee',feeRoute)


// app.use('*',(req,res)=>{
//     res.status(404).json({
//         msg:'bad request'
//     })
// })
  
// module.exports = app;

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const userRoute = require('./routes/user');
const courseRoute = require('./routes/course');
const studentRoute = require('./routes/student');
const feeRoute = require('./routes/fee');

mongoose.connect('mongodb+srv://institute:8909@institute.vpmrtm4.mongodb.net/?retryWrites=true&w=majority&appName=institute')
.then(()=>{
    console.log('conneted with database.')
})
.catch(err=>{
    console.log('err')
})

app.use(bodyParser.json())

app.use(fileUpload({
  useTempFiles : true
}));

app.use('/user',userRoute)
app.use('/course',courseRoute)
app.use('/student',studentRoute)
app.use('/fee',feeRoute)

app.use('*',(req,res)=>{
    res.status(404).json({
        msg:'bad request'
    })
})

module.exports = app;