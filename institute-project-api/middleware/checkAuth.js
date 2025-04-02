
const jwt = require('jsonwebtoken')
module.export = (req, res,next)=>{
    try
    {
     const token = req.header.authorization.split(" ")[1]
     const verify = jwt.verify(token,'sbs online classes 123');
     console.log(verify);
     next();    
    }
    catch(err)
    {
        return res.status(401).json({
            msg:'Invalid token'
        })
    }
}