const { default: mongoose } = require('mongoose')
const mmongoose=require('mongoose')

// there are three steps to create a database connection
// first 
// creating a connection
mongoose.connect('mongodb+srv://shubham:Shubh@8055@authentication.l9mlkrk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('database connected')
}).catch((err)=>console.log(err))


// second 
// create a schema
const schema = mongoose.Schema({
    name:String,
    username:String,
    password:String,
    login:Boolean
    
})

// third
// create a model 
const user=mongoose.model('students',schema)

// export the file 
module.exports=user
