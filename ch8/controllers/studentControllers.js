const allStudent = (req,res)=>{
    res.send('All Student')
}

const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id} =req.params
    if(id == 10){
        res.send(`this is ayan's id ${id} so it won't delete`)
    }
    else{
    res.send(`Student Deleted ID: ${id}`)
    }
}

export {allStudent,deleteStudent}