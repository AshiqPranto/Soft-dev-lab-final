const express = require('express');
const bodyParser = require('body-parser');

const cats = require('../models/cat');

const catRouter = express.Router();

catRouter.use(bodyParser.json());

catRouter.route('/')
.get((req,res,next) => {
    cats.find({})
    .then((cats)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(cats);
    })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    cats.create(req.body)
    .then((cats) => {
        res.json(cats);
    })
    .catch((err) => next(err));
})
.put((req,res,next) => {
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) => {
    cats.remove({})
    .then((resp) => {
        res.json(resp);
    })
    .catch((err) => next(err));
});

catRouter.route('/:catId')
.get((req,res,next) => {

    

    console.log(req.params.catId);
    console.log(typeof req.params.catId);
    cats.findById(req.params.catId)
    .then((cats)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(cats);
    })
    .catch((err) => next(err));
})
.post((req,res,next) => {
    res.end("post operation not supported in this endpoint");
})
.put((req,res,next)=>{
    cats.findByIdAndUpdate(req.params.catId,{$set: req.body})
    .then((cats) => {
        res.json(cats);
    },(err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next) => {
    cats.findByIdAndRemove(req.params.catId)
    .then((resp) => {
        res.json(resp);
    },(err) => next(err))
    .catch((err) => next(err));
})

module.exports = catRouter;
