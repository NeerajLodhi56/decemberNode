var express = require('express');

var categoryRouter= express.Router();
var mongodb= require('mongodb').MongoClient
var url = process.env.mongoUrl;

function router(menu){
    categoryRouter.route('/')
    .get(function(req,res){
        //mongoDb connection
        mongodb.connect(url,function(err,dc){
            if (err) {
                res.status(500).send('Error while connecting')
            } else {
                var dbObj= dc.db('decnode');
                dbObj.collection('category').find().toArray(function(err,response){
                    if (err) {
                        res.status(500).send('Error while fetching data')
                    } else{
                        res.render('category',{title:'Category Page',data:response,menu})
                    }
                })
            }
        })
       
        // res.send(category) 
    })
    categoryRouter.route('/category/:id')
    .get(function(req,res){
        res.render('category',{title:'categrised page', category})
    })
    categoryRouter.route('/details')
    .get(function(req,res){
        res.send('category details')
    })
    return categoryRouter
}


module.exports= router
