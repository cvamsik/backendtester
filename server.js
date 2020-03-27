var express = require('express')

var app = express()
var cors=require('cors');
var morgan=require('morgan');
var path=require('path');

var handleBars=require('express-handlebars')




var indexRouter = require('./index')




// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


app.engine('handlebars',handleBars({extname:'handleBars',defaultLayout:'layout', layoutsDir:__dirname+'/views/'}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','handlebars');


// app.use(cors({ origin: process.env.ROOT_URL, credentials: true }))

app.use(morgan("default",this.options));




//CORS management

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'http://localhost:3000');
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept, Authorization");

    res.setHeader('Access-Control-Allow-Credentials', true);

    if(req.method==='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
})
app.use('/', indexRouter)

app.listen(3001, function () {
  console.log('Server listening on port 3001')
})


module.exports = app
