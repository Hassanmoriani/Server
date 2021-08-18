import express from 'express'; 
import mongoose from'mongoose';
import  route  from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

//initailize express with app variable as functiom
const app = express()

//bodyparser works as midlware also helps urlencoded
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
//enable cros for cross origin 
app.use(cors());
//use app to install routes inside it
app.use('/users',route);
//Define port
const PORT=8000;
 const URl='mongodb+srv://hassan:12345@cluster0.pezoa.mongodb.net/MERN-STACK?retryWrites=true&w=majority';

mongoose.connect(URl,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{

    //initailize to check the port
app.listen(PORT, ()=>{
    console.log(`server is runing sucessfully on Port ${PORT}`);
});

}).catch(error=>{
    console.log('Error:',error.message);
})

