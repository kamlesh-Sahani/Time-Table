import TeacherModel from "@/models/teacher.model";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const teachers = await TeacherModel.find({});
        if(teachers.length<=0){
            return NextResponse.json({
                message:"teachers is not found",
                success:false
            })
        }

        return NextResponse.json({
            message:"teachers is successfuly get",
            success:true,
            teachers
        })
        
    } catch (error:any) {
        return NextResponse.json(
            {
            message:error.message,
            success:false
            }
        )
    }
}