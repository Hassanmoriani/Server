import  express from "express";
import { getEmployees,AddEmployee,getEmployeesByid,EditEmployee,DeleteEmployee } from "../Controller/Employee.controller.js";

//function to check connecttion sucessfully or not
const route= express.Router();

// Define router for api
route.get('/',getEmployees);
route.post('/add',AddEmployee)
route.get('/:id',getEmployeesByid);
route.put('/:id',EditEmployee);
route.delete('/:id',DeleteEmployee);

export default route;