import express from 'express';
// const app = express()
const router = express.Router()

// All Teacher Routes
router.get('/all',(req,res)=>{
    res.send('All Teacher')
})

router.post('/create',(req,res)=>{
    res.send('New Teacher Create')
})

router.put('/update',(req,res)=>{
    res.send('Teacher Update')
})

router.delete('/delete',(req,res)=>{
    res.send('Teacher deleted')
})

// module.exports = router
export default router