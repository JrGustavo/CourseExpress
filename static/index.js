import express from "express";

const app = express()

app.get('/products', (req,res) =>{
    res.send('lista de productos')
})

app.get('/products', (req,res) =>{
    res.send('Creando productos')
})

app.get('/products', (req,res) =>{
    res.send('Actualizando la creacion de los  productos')
})


app.listen(3000)
console.log(`Server on port ${3000}`)


