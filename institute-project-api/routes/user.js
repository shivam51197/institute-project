// const express = require('express')
// const router = express.Router()
// const cloudinary = require('cloudinary').v2;
// require('dotenv').config();
// const User = require('../model/User');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')

// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.API_KEY,
//     api_secret:process.env.API_SECRET
// })

// //signup
// router.post('/signup',(req,res)=>{
//     User.find({email:req.body.email})
//     .then(users=>{
//         if(users.length>0)
//         {
//             return res.status(500).json({
//                 error:'email already registered...'
//             })
//         }
//         cloudinary.uploader.upload(req.files.image.tempFilePath,(err,result)=>{
//             // console.log(result)
//             bcrypt.hash(req.body.password,10,(err,hash)=>{
//                 if(err)
//                 {
//                     return res.status(500).json({
//                         error:err
//                     })
//                 }
//                 const newUser = new User({
//               _id: new mongoose.Types.ObjectId,
//               firstName:req.body.firstName,
//               lastName:req.body.lastName,
//               email:req.body.email,
//               password:hash,
//               imageUrl:result.secure_url,
//               imageId:result.public_id
//             })
//              newUser.save()
//              .then(result=>{
//                 res.status(200).json({
//                     newStudent:result
//                 })
//              })
//              .catch(err=>{
//                 console.log(err);
//                 res.status(500).json({
//                     error:err
//                 })
//              })
//             })

//          })
//     })
// })

// //login
// router.post('/login',(req,res)=>{
//   User.find({email:req.body.email})
//   .then(users=>{
//    if(users.length==0)
//    {
//     return res.status(500).json({
//         msg:'email not registered... '
//     })
//    }
//    bcrypt.compare(req.body.password,users[0].password,(err,result)=>{
//       if(!result)
//       {
//         return res.status(500).json({
//             err:'password not match... '
//         })
//       }

//       const token = jwt.sign({
//             email:users[0].email,
//             firstName:users[0].firstName,
//             lastName:users[0].lastName,
//             uId:users[0]._uid
//       },
//       'sbs online classes 123',
//       {
//         expiresIn:'365d'
//       }
//     );
//     res.status(200).json({
//         _id:users[0]._id, 
//         firstName:users[0].firstName,
//         lastName:users[0].lastName,
//         email:users[0].email,
//         imageUrl:users[0].imageUrl,
//         imageId:users[0].imageId,
//         token:token
//     })
//    })
//   })
// })
// module.exports = router;   


const express = require('express')
const router = express.Router()
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const User = require('../model/User');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

//signup
router.post('/signup', (req, res) => {
    User.find({ email: req.body.email })
        .then(users => {
            if (users.length > 0) {
                return res.status(500).json({
                    error: 'email already registered..'
                })
            }
            cloudinary.uploader.upload(req.files.image.tempFilePath, (err, result) => {
                // console.log(result)
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        imageUrl: result.secure_url,
                        imageId: result.public_id
                    })
                    newUser.save()
                        .then(result => {
                            res.status(200).json({
                                newStudent: result
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        })
                })
            })
        })
})

// login
router.post('/login',(req,res)=>{
    User.find({email:req.body.email})
    .then(users=>{
        if(users.length == 0)
        {
            return res.status(500).json({
                msg:'email not registered..'
            })
        }

    // User.findOne({ email: req.body.email })
    // .then(user => {
    //     if (!user) {
    //         return res.status(400).json({ msg: 'Email not registered' });
    //     } else {
    //         return res.status(200).json({ msg: 'Login successful' });
    //     }
    // })
    // .catch(err => {
    //     return res.status(500).json({ msg: 'Server error', error: err });
    // });

        bcrypt.compare(req.body.password,users[0].password,(err,result)=>{
            if(!result)
            {
                return result.status(500).json({
                    error:'Password incorrect..'
                })
            }
            const token = jwt.sign({
                email:users[0].email,
                firstName:users[0].firstName,
                lastName:users[0].lastName,
                uId:users[0]._uid
            },
            'TnBZ8d6vdtY0eFCBwhIOBoSCa7g',
            {
                expiresIn:'24h'
            }
          );
          res.status(200).json({
            _id:users[0]._id,
            firstName:users[0].firstName,
            lastName:users[0].lastName,
            email:users[0].email,
            imageUrl:users[0].imageUrl,
            imageId:users[0].imageId,
            token:token
          })
        })
    })
})



module.exports = router;