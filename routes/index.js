const express = require('express')
const router = express.Router();



/// 
router.get('/',(req,res)=>{
    console.log('ID: '+req.sessionID)
    res.render('login')
})

router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})


module.exports = router
