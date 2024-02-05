const exp = require('constants')
const express=require('express')
const app= express()
const user=require('./database')
const { log } = require('console')
path=require('path')
let login=true
phash=require('bcrypt')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// setting css file
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('login')
})

app.post('/register',async(req,res)=>{
   const { name,username, password }=req.body;

   const exist= await user.findOne({username})
   if (exist) {
    res.send("<script>alert('Username already exists')</script>");
   } else{
    pass = await phash.hash(password,11)
    newStudent = new user({
        name:name,
        username:username,
        password:pass})
    console.log(name,username,pass)
    Studentsave = await newStudent.save();
    res.redirect('/')    
   }
   
})
app.get('/register',(req,res)=>{
    res.render('register')
})


app.post('/', async(req, res) => {
    // const { username, password } = req.body
    const checkuser = await user.findOne({username:req.body.username})
    if(checkuser){
        const checkpass = await phash.compare(req.body.password,checkuser.password);
        if(checkpass){res.redirect('/home')}
        else{res.send('<script>alert("wrong password")</script>')}
    }
    else{res.send('<script>alert("wrong username")</script>')}
})
      
app.get('/home',async(req,res)=>{   
       res.render('home')
})
app.listen(3000,()=>console.log(`server running on port no.3000`))


