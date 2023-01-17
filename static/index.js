import express from "express";

const app = express()

app.use((req, res, next) => {
    console.log(`Route: ${req.url}Metodo: ${req.method}`);
    next()
})

app.get('/dashboard',(req, res ) => {
    res.send(' Dashboard page')
})


app.get('/profile',(req, res ) => {
    res.send('profile page')
})

app.get('/about',(req, res ) => {
    res.send('about')
})

app.listen(3000)
console.log(`Server on port ${3000}`)


