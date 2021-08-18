import Emp from "../model/employee-schema.js";

export const  getEmployees =async(req,res)=>{
     try{
       let employees = await Emp.find();
       res.json(employees)
     }catch(error){
       res.json({message:error.message}); 
     } 
}

export const AddEmployee = async(req,res)=>{

     const emp = req.body;
     const newEmp = new Emp(emp) 
     
     try{
         await newEmp.save();
         res.json(newEmp);

     }catch(error){
          res.json({message: error.message})
     }

}

export const getEmployeesByid = async (req, res) => {
     //get employee using ID
     try{
          const id = req.params.id
          const employee = await Emp.findById(id);
          res.json(employee);
     }catch(error){
          res.json({message: error.message})
     }
     
}

export const EditEmployee = async (req, res) => {
     //get previous record of employee throught body
     const emp = req.body;
     const editEmp = new Emp(emp);
   
     try {
          // Here we used updateOne function buz we update single record for now and this we take twot arg id to target 2nd decelare the obj
     await Emp.updateOne({ _id:req.params.id},editEmp);
          res.json(Emp);
     }catch(error){
          res.json({message: error.message})
     }
}

export const DeleteEmployee= async(req, res) => {
     try{
          await Emp.deleteOne({ _id:req.params.id}); 
          res.json("Employee Deleted Successfully")
     }catch(error){
          res.json({message: error.message})
     }
}