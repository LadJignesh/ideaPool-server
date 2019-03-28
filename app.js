const express = require('express');
const app = express();
var port = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
const url="mongodb://jerry:test123@ds239055.mlab.com:39055/";


MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
	if (err) throw err;
	var dbo = db.db("jl-oauth-test");
	dbo.collection("ideaPool").find({}).toArray(function(err, result) {
	  if (err) throw err;
	  console.log(result);
	  db.close();
	});
  }); 

app.listen(port,()=>{
	console.log('app now listening for request on port 8080');
});