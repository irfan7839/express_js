import express from 'express';

const app = express()
const port = process.env.PORT || '3000'

// app.get('/student/delete/:id',(req,res)=>{
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

// app.get('/product/:category/:id',(req,res)=>{
//     console.log(req.params)
//     const {category, id} = req.params
//     res.send(`Product ${category} of ID: ${id}`)
// })

// app.get('/product/order/:year/and/:month',(req,res)=>{
//     console.log(req.params)
//     const {year, month} = req.params
//     res.send(`Product ${year} ${month}`)
// })

// app.get('/train/:from-:to',(req,res)=>{
//     console.log(req.params)
//     const {from, to} = req.params
//     res.send(`Travelling from  ${from} to  ${to}`)
// })

// app.get('/location/:state.:city',(req,res)=>{
//     console.log(req.params)
//     const {state, city} = req.params
//     res.send(`Travelling from  ${state} to  ${city}`)
// })


// Route Parameter with Regex 

// app.get('/student/:id([0-9]{2})',(req,res)=>{
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

// app.get('/:type(post|article)/:id([0-9]{2})',(req,res)=>{
//     console.log(req.params)
//     res.send(`${req.params.id}`)
// })

// app.param()
app.param('id',(req,res,next,id)=>{
    console.log(`called only once ID: ${id}`)
    next()
})
app.get('/user/:id',(req,res,next)=>{
    console.log("this is user ID Path 1")
    next()
})

app.get('/user/:id',(req,res)=>{
    console.log("this is user ID Path 2")
    res.send("Response Ok")
})

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})