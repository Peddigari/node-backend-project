// const data=require('../DataStore')
const data=require("../DataStore")
const home=(req,res)=>{
    res.send(data)
}
const bollywood=(req,res)=>{
    const bolldata=data.filter((item)=>item.cat==='Bollywood')
    res.send(bolldata)
}
const hollywood=(req,res)=>{
    const holldata=data.filter((item)=>item.cat==='Hollywood')
    res.send(holldata)
}
const technology=(req,res)=>{
    const techdata=data.filter((item)=>item.cat==='Technology')
    res.send(techdata) 
}
const fitness=(req,res)=>{
    const fitnessdata=data.filter((item)=>item.cat==='Fitness')
    res.send(fitnessdata)
}
const food=(req,res)=>{
    const fdata=data.filter((item)=>item.cat==='Food')
    res.send(fdata)
}
module.exports={home,bollywood,hollywood,technology,fitness,food}