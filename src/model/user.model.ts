import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"please entert the user name"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        select:false
    }
},{timestamps:true})


userSchema.methods.isPasswordMatch=function (password:string){
return bcrypt.verify(this.password,password);
}
const UserModel = mongoose.models.User || mongoose.model("User",userSchema);

export default UserModel;