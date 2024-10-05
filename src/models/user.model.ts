import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"please entert the email"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

// hashing the password 
userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next()
});

// generate auth token ;
userSchema.methods.generateJwtToken = function (){
    return jwt.sign({_id:this._id,email:this._id,isverified:this.isverified},process.env.JWT_SECRET!,{expiresIn:"7d"})
}
// check password;
userSchema.methods.isPasswordMatch=function (password:string){
return bcrypt.compare(password,this.password);
}

const UserModel = mongoose.models.Userk || mongoose.model("Userk",userSchema);
export default UserModel;