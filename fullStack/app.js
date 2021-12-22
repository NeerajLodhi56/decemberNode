var express = require('express');
var app = express();
var fs = require('fs')
var dotenv= require('dotenv')
dotenv.config();
var port= process.env.PORT||9700;
var morgan = require('morgan');
const { Router } = require('express');
var menu = [
    {link:'/', name:'Home'},
    {link:'/category', name:'Category'},
    {link:'/products', name:'products'},
    {link:'/restaurents', name:'Restaurents'},
]
var categoryRouter= require('./src/routes/categoryRouter')(menu)
var productRouter= require('./src/routes/productRouter')
var restaurentRouter = require('./src/routes/restaurentRouter')
//static file path
app.use(express.static(__dirname+'/public'));
//html file path
app.set('views','./src/views')
//view engime path
app.set('view engine','ejs')
//log
app.use(morgan('short',{stream:fs.WriteStream('./app.logs')}))

var data = [
    {
        "id":1,
        "name":"Shopping",
        "image":"https://i.ibb.co/56VP0Fn/cloths.jpg",
        "link":"/category"
    },
    {
        "id":2,
        "name":"Restaurants",
        "image":"https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "link":"/restaurants"
    }
]


//default route
app.get('/',function(req,res){
    // res.send('welcome  to the application')
    res.render('index',{title:'Home Page',data:data,menu})
})
app.use('/category',categoryRouter)
app.use('/products',productRouter)
app.use('/restaurants',restaurentRouter)


app.listen(port,function(err){
    if(err) throw err;
    else{
        console.log("server is running on"+port)
    }
})
module.exports=Router