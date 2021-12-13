const express = require("express")
const app=express()
const mongoose = require('mongoose');   //mongoose

mongoose.connect('mongodb://172.21.2.236:27017/190110910526');  //连接数据库
const schema={   
    name:String,
    age:Number,
    health:String,
    hooby:String
}
const mydata = mongoose.model('cat1s',schema );  //schema在这里生效
// const kitty = new mydata({ name: 'testZildjian2' });    将这句话放到下面
// kitty.save()



app.use('/',express.static('public'))  //此时默认打开的就是html文件
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name: req.query.first,health:req.query.second});   
kitty.save()
})
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(50526)