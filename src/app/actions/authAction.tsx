"use server";
import UserModel from "@/model/user.model";
import { cookies } from "next/headers";
export const userLogin = async(formData:FormData)=>{
    try {
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
        if(!user.isVerified){
            return {
                message:"user is not verrified, please verify  by admin",
                success:false
            }
        }
        const token = await user.generateJwtToken();
        cookies().set("jwt",token);
        
        return {
            message:"successfuly login ",
            success:true,
        }

    } catch (error:any) {
        return {
            message:error.message,
            success:false
        }
    }
}

export const registerUser = async(userData:FormData)=>{
    try {
        const email = userData.get("email");
        const password = userData.get("password");
        if(!email || !password){
            return {
                message:"please fill the all fields",
                success:false
            }
        }
        const isExist = await UserModel.findOne({email});
        if(isExist){
            return {
                message:"user is already exist",
                success:false
            }
        }


        const user = await UserModel.create({
            email,
            password
        })
        if(!user){
            return {
                message:"faild to register user",
                success:false
            }
        }
        return {
            message:"register successfuly",
            success:true
        }
    } catch (error:any) {
        return {
            message:error.message,
            success:false
        }
    }
}