const Idea = require('../models/idea');
const MongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys');
const mongo = require('mongodb');

exports.fndAllIdeas = function (req, res) {
    try {
        MongoClient.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("jl-oauth-test")
                .collection("ideaPool")
                .find({}).toArray(function (err, result) {
                    if (err) res.status(400).json("Error Connecting DB");
                    res.json(result);
                    db.close();
                });
        });
    } catch (err) {
        res.status(400).send("Error displaying idea.. Please try again later");
    } finally {
        console.log("Ideas Displayed successfully");
    }

}

exports.createIdea = function (req, res) {
    try {
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
        MongoClient.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("jl-oauth-test")
                .collection("ideaPool")
                .insertOne(idea, function (err, result) {
                    if (err) res.status(400).json("Error Connecting DB");
                    res.status(200).json(result);
                    db.close();
                });
        });
    } catch (err) {
        res.status(400).send("Error creating idea.. Please try again later");
    } finally {
        console.log("Ideas created successfully");
    }
}

exports.findIdeaByID = function (req, res) {
    try {
        MongoClient.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("jl-oauth-test")
                .collection("ideaPool")
                .find({ _id: mongo.ObjectID(req.params.id) }).toArray(function (err, result) {
                    if (err) res.status(400).json("Error Connecting DB");
                    res.status(200).json(result);
                    db.close();
                });
        });
    } catch (err) {
        res.status(400).send("Error finding idea.. Please try again later");
    } finally {
        console.log("Ideas with idea " + req.params.id + " found successfully");
    }
}

exports.updateIdeaByID = function (req, res) {
    try {
        MongoClient.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("jl-oauth-test")
                .collection("ideaPool")
                .updateOne({ _id: mongo.ObjectID(req.params.id) },
                    { $set: req.body },
                    function (err, result) {
                        if (err) res.status(400).json("Error Updating Values in DB");
                        res.status(200).json(result);
                        db.close();
                    });
        });
    } catch (err) {
        res.status(400).send("Error updating idea.. Please try again later");
    } finally {
        console.log("Ideas with idea " + req.params.id + " updated successfully");
    }
}

exports.deleteIdeaByID = function (req, res) {
    try {
        MongoClient.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            db.db("jl-oauth-test")
                .collection("ideaPool")
                .deleteOne({ _id: mongo.ObjectID(req.params.id) },
                    function (err, result) {
                        if (err) res.status(400).json("Error Connecting DB");
                        res.status(200).json(result);
                        db.close();
                    });
        });
    } catch (err) {
        res.status(400).send("Error deleting idea.. Please try again later");
    } finally {
        console.log("Ideas with idea " + req.params.id + " deleted successfully");
    }
}