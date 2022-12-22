const mongoose = require('mongoose')

const {MONGOURI} = require('../config/Key')

const Database = async ()=>{
  
    try{
        const connection = await mongoose.connect(MONGOURI, { useNewUrlParser: true})
        // mongoose.set('strictQuery', false);
        console.log("Database connected to" + MONGOURI )
    }
    catch(error){
        console.log(`Got a error:  ${error}`)
    }
    
    

}

module.exports = Database