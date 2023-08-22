const mongoose = require('mongoose');
const url = 'mongodb+srv://ayaansingh6748:Lcckuw2q7nrNL7Ab@cluster0.wszmiu1.mongodb.net/IssueTraker?retryWrites=true&w=majority';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db