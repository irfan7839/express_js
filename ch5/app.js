// Routing
// const express = require('express')
import express from 'express';
const app = express()
const port = process.env.PORT || '3000'

// Routes
app.get('/',(req,res)=>{
    res.send("Get Method!!")
})

// app.all('*',(req,res)=>{
//     res.send("Page Not Found")
// })
// app.all('/api/*',(req,res)=>{
//     res.send("Page Not Found")
// })

// String path
// app.get('/about',(req,res)=>{
//     res.send("About page!!")
// })

// app.get('/contact',(req,res)=>{
//     res.send("Contact page!!")
// })

// String Pattern
app.get('/ab?cd',(req,res)=>{
    res.send("This route path will match acd and abcd")
})

// Regular expression path
// app.get(/a/,(req,res)=>{
//     res.send("This is a")
// })

// One Callback
// app.get("/cbexample1",(req,res)=>{
//     res.send("One Callback Example")
// })

// More Than One Callback
// app.get("/cbexample2",(req,res,next)=>{
//     console.log("first CallBack logic")
//     next()
// },(req,res)=>{
//     res.send("Two Callback Example")
// }
// )

// Array of Callback
// const cb1= (req,res,next)=>{
//     console.log("One Callback")
//     next()
// }
// const cb2= (req,res,next)=>{
//     console.log("Two Callback")
//     next()
// }
// const cb3= (req,res)=>{
//     console.log("Three Callback")
//     res.send("An Array of Callback example")
// }

// app.get("/cbexample3",[cb1,cb2,cb3])

// Combination of Array of Callback function and individual callback function
const cb1= (req,res,next)=>{
    console.log("One Callback")
    next()
}
const cb2= (req,res,next)=>{
    console.log("Two Callback")
    next()
}
const cb3= (req,res,next)=>{
    console.log("Three Callback")
   next()
}

app.get("/cbexample4",[cb1,cb2,cb3],(req,res,next)=>{
    console.log("Fourth Callback")
    next()
},(req,res)=>{
    res.send("Combination of Array of Callback function and individual callback function")

}
)

// Chained Route Callback
// app.route('/student')
// .all((req,res,next)=>{
//     console.log("First run this for all HTTP Method")
//     next()
// })
// .get((req,res)=>{
//     console.log("GET Method")
//     res.send("All Student")
// })

// .post((req,res)=>{
//     console.log("POST Method")
//     res.send("Add New Student")
// })

// .put((req,res)=>{
//     console.log("PUT Method")
//     res.send("Update Student")
// })

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})