const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/server';
const database = mongoose.connect(URI,  { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
	if(error){
		console.log("Error: " + error);
	}else{
		console.log("Đã kết nối đến CSDL");
	}
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = require('bluebird');
module.exports = database;