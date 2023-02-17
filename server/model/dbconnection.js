const mongoose = require('mongoose');
var express = require('express');


const connectDb = async (DATABASE_URL) => {
    
mongoose.set("strictQuery", false);
    try{
        const DB_OPTIONS ={dbName:'management'}
        await mongoose.connect(DATABASE_URL,DB_OPTIONS )
        console.log('connected successfully..');
    }catch(error){

        console.log(error);
    }
}
module.exports = connectDb; 