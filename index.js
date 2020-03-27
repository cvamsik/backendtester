var express = require('express')
var router = express.Router()
var bodyParser=require('body-parser')

var nodeMailer=require('nodemailer')


// router.get('/', function (req, res, next) {
//     console.log('Getting user Details')
//     res.send('respond with a resource')
//   })

router.use(bodyParser.urlencoded({extended:false}))
router.use(bodyParser.json())
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.send('Hello from Backend');
})


router.get('/',(req,res)=>{
    res.render('layout');
});



module.exports = router
