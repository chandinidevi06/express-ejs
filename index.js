var express = require("express")
var app = express()
app.use(express.json())

var products = [
    {
        id : 1,
        name : "apple"
    },
    {
        id : 2,
        name : "banana"
    },
    {
        id : 3,
        name : "mango"
        
    },
    {
        id : 4,
        name : "orange"
    }
]

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/products",(req,res)=>{
    res.json(products)
})

app.get("/products/:id",(req,res)=>{
    var productId = parseInt(req.params.id)
    var result = products.find(item=>item.id == productId)
    res.json(result)

})
app.post("/products",(req,res)=>{
    var newProduct = {
        id : products.length+1,
        name : req.body.name 
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})
app.put("/products/:id",(req,res)=>{
    var productId = parseInt(req.params.id)
    var result = products.find(item=>item.id == productId)
    if(result){
        result.name = req.body.name
        res.json(result)
    }else{
        res.status(401).json({message : "unable to update the prouduct"})
    }
})
app.delete("/products/:id",(req,res)=>{
    var productId = parseInt(req.params.id)
    var result = products.find(item=>item.id == productId)
    if(result){
        products = products.filter(item=>item.id != productId)
        res.json(products)
    }else{
        res.status(401).json({message : "unable to delete the product"})
    }
})
var port = 5010
app.listen(port,()=>{
    console.log("The server is running");
})

