const express=require("express");
const router=express.Router();
const Department=require("../../db/schemas/departmentSchema");

router.get("/",async(req,res)=>{
    const departments = await Department.find();
    res.json(departments);
});

router.post("/",async (req,res) => {
    try{
        const departmentsData = req.body;
        const newDepartment = new Movie(departmentsData);
        await newDepartment.save();
        res.json(
            {
                message : 'Departments Added successfully',
            }
        );
    } catch(error){
        console.log(error);
        res.statusMessage(500).json({
            message : "Internal server error",
        });
    }
});
router.put("/:id",async(req,res)=>
    {
        try{
            const departmentId=req.params.id;
            const updatedepartmentData=req.body;
            await Department.findByIdAndUpdate(departmentId,updatedepartmentData);
            res.json({
                message : "Department Updated successfully",
            });
        } catch(error)
        {
            console.log(error);
            res.status(500).json
    ({
        message : "Internal server error",
    });    }
    });
    router.delete("/:id",async(req,res)=>
        {
            try{
                const departmentId=req.params.id;
                const deleteDepartmentData=req.body;
                await Department.findByIdAndDelete(movieId,deleteDepartmentData);
                res.json({
                    message : "Department deleted successfully",
                });
            } catch(error)
            {
                console.log(error);
                res.status(500).json
        ({
            message : "Internal server error",
        });    }
        });

module.exports=router;