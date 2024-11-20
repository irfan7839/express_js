import {join} from 'path'
const homeController = (req,res)=>{
    // res.send("<h1>Home Page</h1>")
    // res.sendFile('/home/mphs/Desktop/expressjs/ch10/views/home.html')
    console.log(join(process.cwd(),'views','home.html'))
    res.sendFile(join(process.cwd(),'views','home.html'))

    
}

export {homeController}