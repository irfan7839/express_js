import express from 'express';
// const app = express()
const router = express.Router()

// All Students Routes
router.get('/all',(req,res)=>{
    res.send('All Student')
})

router.post('/create',(req,res)=>{
    res.send('New Student Create')
})

router.put('/update',(req,res)=>{
    res.send('Student Update')
})

router.delete('/delete',(req,res)=>{
    res.send('Student deleted')
})

// module.exports = router
export default router