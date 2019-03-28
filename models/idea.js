const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
	title: String,
    existing: String,
    area: String,
    category: String,
    ipType: String,
    ipStatus: String,
    keyValueAttributes: String,
    description: String,
    createdBy: String,
    ratings: String,
    itemType: String,
    path: String
});

const Idea = mongoose.model('idea', ideaSchema, 'ideas');

module.exports = Idea;