const mongoose=require('mongoose')
const Employee=require("./models/Employee")

conn=mongoose.connect('mongodb://localhost:27017/Employee')

const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');//key point

const getRandom=(arr)=>{
    let rn=Math.floor(Math.random()*(arr.length-1))
    return arr[rn]
}

app.get('/', (req, res) => {
  res.render('index',{foo:'FOO'})
})

app.get('/generate',async(req,res)=>{
    await Employee.deleteMany({})

    let randomna=["Abhishek","Aditya","Nitin","Avanish"]
    let randomlang=["English","Bhojpuri","Urdu","Panjabi"]
    let randomcity=["Bareilly","Noida","Noida2","Gurugram"]
    for(let i=0;i<10;i++){
        let e=await Employee.create({
            name:getRandom(randomna),
            salary:Math.floor(Math.random()*30000),
            language:getRandom(randomlang),
            city:getRandom(randomcity),
            ismanager:(Math.random()>0.5)?true:false 
        })
        console.log(e)
    }
    res.render("index",{foo:'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
