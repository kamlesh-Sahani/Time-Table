"use client";
import { FormEvent, FormEventHandler, useState } from "react";
import toast from "react-hot-toast";
import { addDepartment } from "../actions/department";
import DepartmentCard from "@/components/server-component/DepartmentCard";
interface CourseType {
  courseName: string;
  courseSections: number;
  courseSemister: number;
}
const DepartmentPage = () => {
  const [departmentCardOpen, setDepartmentCardOpen] = useState<boolean>(false);
  const [allCourses, setAllCourses] = useState<CourseType[]>([]);
  const [departmentName,setDepartmentName] = useState<string>("")

  const [course, setCourse] = useState<CourseType>({
    courseName: "",
    courseSections: 1,
    courseSemister: 6,
  });

  const courseHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };
  const setCourseHandler = () => {
    if (
      !course ||
      !course?.courseName ||
      !course?.courseSections ||
      !course?.courseSemister
    ) {
      toast.error("Please fill all course fields");
    } else {
      if (allCourses.find((c) => c.courseName === course.courseName)) {
        toast.error(`${course.courseName} is already selected `);
      } else {
        setAllCourses((prev) => [...prev, course]);
        setCourse({
          courseName: "",
          courseSections: 1,
          courseSemister: 6,
        });
      }
    }
  };

  const courseDeleteHandler = (cName: string) => {
    const newCourse = allCourses.filter((c) => c.courseName !== cName);
    setAllCourses(newCourse);
  };

  const formSubmitHandler = async(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const  response= await addDepartment({departmentName,courses:allCourses})
    if(response.success){
        toast.success(response.message);
        setDepartmentCardOpen(false);
        setAllCourses([]);
        setCourse({
          courseName: "",
          courseSections: 1,
          courseSemister: 6,
        });
    }else{
        toast.error(response.message || "something went wrong")
    }
  }
  return (
    <div className="mt-20">
      <div className="flex items-center gap-10">
        <h1 className="text-4xl text-center text-blue-700 font-bold">
          Departments 😃
        </h1>

        <button
          className="px-10 py-2 bg-blue-700 text-back rounded font-semibold cursor-pointer"
          onClick={() => setDepartmentCardOpen((prev) => !prev)}
        >
       Create Department
        </button>
      </div>

      <DepartmentCard />
 

      {departmentCardOpen && (
        <div className=" absolute top-0 left-0 bg-black/70 h-full w-full flex justify-center items-center">
          <div className="flex flex-col gap-2  w-[40%] bg-black   border border-[#535353] p-4 rounded-md">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-3xl">Create Department</h1>
              <button
                className=" text-3xl text-[#535353] p-2 cursor-pointer "
                onClick={() => setDepartmentCardOpen(false)}
              >
                X
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="departementName"
                  className="text-[#b0b0b0] font-medium"
                >
                  Departement Name
                </label>
                <input
                  type="text"
                  id="departementName"
                  placeholder="computer science"
                  required
                  name="departmentName"
                  onChange={(e)=>setDepartmentName(e.target.value)}
                  className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">Courses</h1>

                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="courseName"
                      className="text-[#b0b0b0] font-medium"
                    >
                      Course name
                    </label>
                    <input
                      type="text"
                      name="courseName"
                      value={course.courseName}
                      id="courseName"
                      placeholder="BCA.."
                      className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
                      onChange={courseHandler}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="courseSections"
                      className="text-[#b0b0b0] font-medium"
                    >
                      Number of sections
                    </label>
                    <input
                      type="text"
                      name="courseSections"
                      id="courseSections"
                      value={course.courseSections}
                      placeholder="2"
                      className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
                      onChange={courseHandler}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="courseSemister"
                      className="text-[#b0b0b0] font-medium"
                    >
                      Number of Semister
                    </label>
                    <input
                      type="text"
                      name="courseSemister"
                      value={course.courseSemister}
                      id="courseSemister"
                      placeholder="6"
                      className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
                      onChange={courseHandler}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-300 text-black rounded-md font-bold  mt-3 cursor-pointer"
                  onClick={setCourseHandler}
                >
                  Add More Course
                </button>

                {/* Display Added Courses */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold">All Courses</h2>
                  {allCourses.length > 0 ? (
                    <ul className="mt-4 space-y-3">
                      {allCourses.map((course, index) => (
                        <li
                          key={index}
                          className="p-4  rounded-md flex justify-between items-center"
                        >
                          <div>
                            <h3 className="text-xl font-bold text-white uppercase">
                              {course.courseName}
                            </h3>
                            <p className="text-gray-300">
                              Sections: {course.courseSections}
                            </p>
                            <p className="text-gray-300">
                              Semester: {course.courseSemister}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="w-[140px] h-[40px] bg-blue-700 text-back font-semibold rounded"
                            onClick={() =>
                              courseDeleteHandler(course.courseName)
                            }
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No courses added yet.</p>
                  )}
                </div>
              </div>

              <button type="submit"  className="px-4 py-2 bg-blue-700 text-black rounded-md   mt-3 cursor-pointer font-semibold">Create</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentPage;
