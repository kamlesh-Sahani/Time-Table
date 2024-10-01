"use server";
import TeacherModel  from "@/model/teacher.model";
import { revalidatePath } from "next/cache";
export const addTeacher = async (formData: FormData) => {
  try {
    const teacherName = formData.get("teacherName");
    const subjects = formData.get("subjects");
    // checking the value are not empty;
    console.log(teacherName, "name", subjects, "subs");
    if (!teacherName || !subjects) {
      return {
        message: "please fill the all fields",
        success: false,
      };
    }

    const isExist = await TeacherModel.findOne({ teacherName });
    if (isExist) {
      return {
        message: "Teacher is already exist",
        success: false,
      };
    }

    const teacher = await TeacherModel.create({
      teacherName,
      subjects,
    });
    if (!teacher) {
      return {
        message: "teacher is faild to create",
        success: false,
      };
    }

    revalidatePath("/time-table");
    return {
      message: "teacher is successfuly ceated",
      success: true,
    };
    
  } catch (error: any) {
    return {
      message: `${error.message}: teacher is faild to create`,
      success: false,
    };
  }
};
export const deleteTeacher = async () => {};

export const updateTeacher = async () => {};
