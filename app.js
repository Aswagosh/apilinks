const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/contacts",(req,res)=>{
    res.send("world")
})

app.listen(8083,()=>{
    console.log("service  is running")
})