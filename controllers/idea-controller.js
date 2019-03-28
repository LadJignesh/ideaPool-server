const Idea = require('../models/idea');

exports.fndAllIdeas = function(req, res) {
    res.send("Listing All Idea...");
}

exports.createIdea = function(req, res) {
    const idea = new Idea({
        title: req.body.title || "Untitled idea",
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
        path: req.body.path
    });
    console.log(idea);
    res.send(idea);
}

exports.findIdeaByID = function(req,res){
    res.send("Finding ID "+req.params.id)
}

exports.updateIdeaByID = function(req,res){
    res.send("I am in update function and u want to update ID "+req.params.id);
}

exports.deleteIdeaByID = function(req,res){
    res.send("Deleting Idea with ID "+req.params.id);
}