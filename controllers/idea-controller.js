const Idea = require('../models/idea');
var MongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys')

exports.fndAllIdeas = function(req, res) {
    MongoClient.connect(keys.mongodb.dbURI,{useNewUrlParser:true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("jl-oauth-test");
        dbo.collection("ideaPool").find({}).toArray(function(err, result) {
          if (err) res.status(400).json("Error Connecting DB");
          res.json(result);
          db.close();
        });
    }); 
}

exports.createIdea = function(req, res) {
    const idea = new Idea({
        title: req.body.title,
        existing: req.body.existing,
        area: req.body.area,
        category: req.body.category,
        ipType: req.body.ipType,
        ipStatus: req.body.ipStatus,
        keyValueAttributes: req.body.keyValueAttributes,
        description: req.body.description,
        createdBy: req.body.createdBy,
        ratings: req.body.ratings,
        itemType: req.body.itemType,
        path: req.body.path,
        status: "pending"
    });
    console.log(idea);
    MongoClient.connect(keys.mongodb.dbURI,{useNewUrlParser:true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("jl-oauth-test");
        dbo.collection("ideaPool").insertOne(idea,function(err, result) {
          if (err) res.status(400).json("Error Connecting DB");
          res.status(200).json(result);
          db.close();
        });
    });
}

exports.findIdeaByID = function(req,res){
    console.log(req.params.id);
    MongoClient.connect(keys.mongodb.dbURI,{useNewUrlParser:true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("jl-oauth-test");
        dbo.collection("ideaPool").find({_id:req.params.id}).toArray(function(err, result) {
          if (err) res.status(400).json("Error Connecting DB");
          res.json(result);
          db.close();
        });
    }); 
}

exports.updateIdeaByID = function(req,res){
    res.send("I am in update function and u want to update ID "+req.params.id);
}

exports.deleteIdeaByID = function(req,res){
    res.send("Deleting Idea with ID "+req.params.id);
}