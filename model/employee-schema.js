import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"
 
const empSchema = mongoose.Schema({ 
    name:String,
    employeeid:String,
    email:String,
    phone:Number

});
//initialize auto-increment with our connect
autoIncrement.initialize(mongoose.connection)
//syn your schema with auto-increment using plugin
empSchema.plugin(autoIncrement.plugin,'emp')
const emp= mongoose.model('emp',empSchema);

export default emp;
