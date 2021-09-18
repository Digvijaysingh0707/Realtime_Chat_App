const express=require('express');
const app=express()
const http=require('http').createServer(app)
//18:34
const PORT=process.env.PORT||3000

http.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
