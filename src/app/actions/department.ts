"use server";
import DepartmentModel from "@/models/department.model";
interface DepartmemtType {
  departmentName: string;
  courses: {
    courseName: string;
    courseSections: number;
    courseSemister: number;
  }[];
}
export const addDepartment = async (departmentData: DepartmemtType) => {
  try {
    console.log(departmentData);
    const { departmentName, courses } = departmentData;
    if (!departmentName || courses.length <= 0) {
      return {
        message: "please fill the all fields",
        success: false,
      };
    }
    const isExist = await DepartmentModel.findOne({
      departmentName: departmentName.toLowerCase(),
    });
    if (isExist) {
      return {
        message: "department is already is exist ",
        success: false,
      };
    }
    const department = await DepartmentModel.create({
      departmentName: departmentName.trim().toUpperCase(),
    });
    if (!department) {
      return {
        message: "something went error",
        success: false,
      };
    }

    courses.forEach((course) => {
      const semisters = [];
      for (let i = 1; i < course.courseSemister + 1; i++) {
        semisters.push({
          semister: i,
          subjects: [],
        });
      }
      department.courses.push({
        courseName: course.courseName.toUpperCase(),
        noOfSemister: course.courseSemister,
        noOfSections: course.courseSections,
        semisters: [],
      });
    });

    await department.save();
    return {
      message: "successfuly created",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const editCourse = async (courseData: any) => {
  try {
    const { _id, courseName, noOfSemister, noOfSection } = courseData;
    console.log(courseData, "courseData");
    if (!_id || !courseName || !noOfSemister || !noOfSection) {
      return {
        message: "please fill the all fields",
        success: false,
      };
    }

    const semisters = [];
    for (let i = 1; i < noOfSemister + 1; i++) {
      semisters.push({
        semister: i,
        subjects: [],
      });
    }

    const department = await DepartmentModel.findOneAndUpdate(
      {
        "courses._id": _id,
      },
      {
        $set: { "courses.$": { semisters, ...courseData } },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!department) {
      return {
        message: "course is not updated ",
        success: false,
      };
    }

    return {
      message: "course is  updated ",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const editSubject = async (subjectData: any,semisterId:any,semister:any) => {
  try {
    if(!semisterId || subjectData.length<=0){
        return {
            message:"please fill the all fields",
            success:false
        }
    }
    console.log({_id:semisterId,subjects:subjectData,semister})
    const department = await DepartmentModel.findOneAndUpdate({"courses.semisters._id":semisterId},
        {
            $set: {
              "courses.$[course].semisters.$[semister].subjects": subjectData,
              "courses.$[course].semisters.$[semister].semister": semister,
            },
          },
        {new:true,runValidators:true,  arrayFilters: [          // Filter to match the specific course and semester
            { "course.semisters._id": semisterId },
            { "semister._id": semisterId },
          ],}
    )
    if(!department){
        return {
            message:"faild to update the semsiter ",
            success:false
        }
    }

    return {
        message:"successfuly update semister",
        success:true
    }
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};
