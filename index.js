const express=require('express')
const route=require('./Routing/dataRouter')
const cors=require('cors');
const port=8000;
const app=express();
app.use(cors({
    origin:"*"
}))
app.use('/',route);
app.listen(port,()=>{
    console.log(`server is running on port no: ${port}`);
})