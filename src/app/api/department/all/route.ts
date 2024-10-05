import DepartmentModel from "@/models/department.model";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const departments  = await DepartmentModel.find({});
        return NextResponse.json({
            message:"successfuly get deprtment",
            success:false,
            departments
        })
    } catch (error:any) {
        return NextResponse.json({
            message:error.message,
            success:false
        })
    }
}