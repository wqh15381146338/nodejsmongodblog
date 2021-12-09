const express = require("express")
const app=express()
app.use('/',express.static('public'))  //此时默认打开的就是html文件
app.get("/input",(req,res)=>{
    res.send(req,query)
    console.log(req,query)
})
// app.get("/",(req,res)=>{
//     res.send("hello")
// })
app.listen(50526)