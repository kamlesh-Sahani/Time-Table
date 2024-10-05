"use server";
import DepartmentModel from "@/models/department.model";
import mongoose from "mongoose";
interface DepartmemtType{
    departmentName:string;
    courses:{
        courseName: string;
        courseSections: number;
        courseSemister: number;
    }[]
}
export const addDepartment = async(departmentData:DepartmemtType)=>{
    try {
        console.log(departmentData)
        const {departmentName,courses} = departmentData;
        if(!departmentName || courses.length<=0){
            return{
                message:"please fill the all fields",
                success:false
            }
        }
        const isExist = await DepartmentModel.findOne({departmentName:departmentName.toLowerCase()});
        if(isExist){
            return{
                message:"department is already is exist ",
                success:false
            }
        }
        const department = await DepartmentModel.create({
            departmentName:departmentName.trim().toLowerCase()
        });
        if(!department){
            return{
                message:"something went error",
                success:false
            }
        }
        
        courses.forEach(course=>{
            const semisters =[];
            for(let i=1;i<course.courseSemister+1;i++){
                semisters.push({
                    semister:i,
                    subjects:[]
                })
            };
            department.courses.push({
                courseName:course.courseName.toUpperCase(),
                noOfSemister:course.courseSemister,
                noOfSections:course.courseSections,
                semisters
              })
        })
      

      await department.save();
        return{
            message:"successfuly created",
            success:true
        }
    } catch (error:any) {
        return{
            message:error.message,
            success:false
        }
    }
}