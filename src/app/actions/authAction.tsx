"use server";
import UserModel from "@/model/user.model";
import dbConnect from "@/utils/db-connect";
export const userLogin = async(formData:FormData)=>{
    try {
        await dbConnect();
        const email = formData.get("email");
        const password = formData.get("password");
        if(!email || !password){
            return {
                message:"please fill the all fields",
                success:false
            }
        } 
        
        const user = await UserModel.findOne({email})
        if(!user){
            return {
                message:"User is not found",
            success:false
            }
        }

        // checking the password  if they correct or not;
        const isMatched = await user.isPasswordMatch(password);
        if(!isMatched){
            return {
                message:"password is not matched",
                success:false
            }
        }

        return {
            message:"successfuly login ",
            success:true,
            user
        }

    } catch (error:any) {
        return {
            message:error.message,
            success:false
        }
    }
}