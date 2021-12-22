var express = require('express');
var productRouter= express.Router();
var mongodb= require('mongodb').MongoClient;
var url= process.env.mongoUrl;

function router(menu){
    productRouter.route('/')
    .get(function(req,res){
        mongodb.connect(url,function(err,dc){
if (err) {
    res.status(501).send('Error while connection')
} else {
    var dbObj= dc.db('decnode');
    dbObj.collection('products').find().toArray(function(err,response){
        if (err) {
            res.status(501).send('Error while fetching')
        } else {
            res.send(response)
        }
    })
}
        })
        res.send(products)
    })
    
    productRouter.route('/category/:id')
    .get(function(req,res){
        var {id}= req.params
        var name= req.query.name
        res.render('product',{title:'products page', products,menu})
    })
    
    productRouter.route('/details')
    .get(function(req,res){
        res.send('product detail')
    })

    return productRouter
}
module.exports= router