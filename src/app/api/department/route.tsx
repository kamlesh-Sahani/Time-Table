import DepartmentModel from "@/models/department.model";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest){
    try {
        const params = req.nextUrl.searchParams;
        const departmentId = params.get("id")
        console.log(departmentId)
        const departments  = await DepartmentModel.findById(departmentId);
        return NextResponse.json({
            message:"successfuly get deprtment",
            success:true,
            departments
        })
    } catch (error:any) {
        return NextResponse.json({
            message:error.message,
            success:false
        })
    }
}