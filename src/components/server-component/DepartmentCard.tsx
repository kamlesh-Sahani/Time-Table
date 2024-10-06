"use client";
import { DepartmentType } from "@/models/department.model";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TbEdit } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
const DepartmentCard = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [departmentCourseCardOpen, setDepartmentCourseCardOpen] =
    useState<boolean>(false);
  const [subjectCardOpen, setSubjectCardOpen] = useState<boolean>(false);
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/department/all", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setDepartments(data.departments);
    })();
  }, []);

  const toggeleCard = (departmentId: any) => {
    setDepartmentCourseCardOpen((prev) => !prev);
  };
  const toggeleSubjectCard = (departmentId: any) => {
    setSubjectCardOpen((prev) => !prev);
  };

  const subjectHandler = () => {};
  return (
    <div className="flex flex-wrap gap-2 mt-10">
      {departments &&
        departments.length > 0 &&
        departments.map((department) => (
          <DepartCard
            department={department}
            toggeleCard={toggeleCard}
            toggeleSubjectCard={toggeleSubjectCard}
          />
        ))}

      {departmentCourseCardOpen && (
        <div className=" absolute top-0 left-0 flex justify-center items-center bg-back/55 w-full h-full">
          <DepartmentCourseEditCard
            setDepartmentCourseCardOpen={setDepartmentCourseCardOpen}
          
          />
        </div>
      )}

      {subjectCardOpen && (
        <div className=" absolute top-0 left-0 flex justify-center items-center bg-back/55 w-full h-full">
        <SubjectEditCard setSubjectCardOpen={setSubjectCardOpen} />
        </div>
      )}
    </div>
  );
};

const DepartCard = ({
  department,
  toggeleCard,
  toggeleSubjectCard,
}: {
  department: DepartmentType;
  toggeleCard: (departmentId: any) => void;
  toggeleSubjectCard: (departmentId: any) => void;
}) => {
  return (
    <div className="p-10   rounded-md border border-[#535353] flex flex-col gap-2">
      <h1 className="text-white font-bold text-4xl capitalize">
        {department?.departmentName}
      </h1>
      <p className="text-[#b0b0b0] font-semibold text-2xl">
        Teachers : {department?.teachers?.length || 0}
      </p>

      <div>
        <h1 className="text-[#b0b0b0] font-semibold text-2xl">Courses </h1>
        <div className="flex  gap-3 mt-3 ">
          {department.courses.map((course) => (
            <div className="flex flex-col bg-[#2c2c2c] p-3 gap-2 rounded-sm w-[20vw]">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <h1 className="font-bold text-2xl ">{course.courseName}</h1>
                  <p className="text-[#b0b0b0]  font-semibold ">
                    Sections : {course.noOfSections}
                  </p>
                </div>

                <TbEdit
                  className=" font-bold text-2xl cursor-pointer"
                  onClick={() => toggeleCard(department._id)}
                />
              </div>

              {course?.semisters?.map((semister) => (
                <div>
                  <div className="flex gap-3">
                    <p className="font-semibold text-[#b0b0b0]">
                      Semister: {semister?.semister}
                    </p>
                    <TbEdit
                      className=" font-bold text-md cursor-pointer"
                      onClick={() => toggeleSubjectCard(department._id)}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {semister?.subjects.length > 0 ? (
                      semister?.subjects.map((subject) => (
                        <button className="px-4  py-2 rounded-md font-bold border border-[#535353] bg-back cursor-pointer">
                          {subject}
                        </button>
                      ))
                    ) : (
                      <button className="px-4  py-2 rounded-md font-bold border border-[#535353] bg-back cursor-pointer">
                        No subject Added
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DepartmentCourseEditCard = ({
  setDepartmentCourseCardOpen,

}: {
  setDepartmentCourseCardOpen: Dispatch<SetStateAction<boolean>>;
 
}) => {
  const [departmentData, setDepartmentData] = useState<{
    courseName: string;
    noOfSemister: number;
    noOfSection: number;
  }>({
    courseName: "",
    noOfSemister: 0,
    noOfSection: 0,
  });

  const valueHadler = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDepartmentData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="flex flex-col gap-4 bg-back p-10 rounded-md shadow-xl">
      <RxCross2
        className=" text-2xl font-bold cursor-pointer"
        onClick={() => setDepartmentCourseCardOpen(false)}
      />
      <div className="flex flex-col gap-1 w-[20vw]">
        <label htmlFor="courseName" className="text-[#b0b0b0] font-medium">
          Course Name
        </label>
        <input
          type="text"
          id="courseName"
          placeholder="computer science"
          required
          name="courseName"
          onChange={valueHadler}
          value={departmentData.courseName}
          className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="noOfSemister" className="text-[#b0b0b0] font-medium">
          Number of Semister
        </label>
        <input
          type="number"
          id="noOfSemister"
          placeholder="6"
          required
          onChange={valueHadler}
          value={departmentData.noOfSemister}
          name="noOfSemister"
          className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="noOfSection" className="text-[#b0b0b0] font-medium">
          Number of Section
        </label>
        <input
          type="number"
          id="noOfSection"
          placeholder="1"
          required
          name="noOfSection"
          onChange={valueHadler}
          value={departmentData.noOfSemister}
          className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 text-black rounded-md   mt-3 cursor-pointer font-semibold"
      >
        Edit Course
      </button>
    </form>
  );
};

const SubjectEditCard = ({
  setSubjectCardOpen,
}: {
  setSubjectCardOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [subjects, setSubjects] = useState<Array<string>>([]);
  const [subject,setSubject] = useState<string>("")
  const subjectAddHanlder = ()=>{
    if(subjects.find(sub=>sub===subject) || !subject){ 
      toast.error("subjet is already added");
    }else{
      setSubjects((prev)=>([...prev,subject]))
    }
  }

  const subjectEditHandler =(subject:string)=>{
    const newSubjects = subjects.filter(sub=>sub!=subject);
    setSubjects(newSubjects);
  }
  return (
    <form className="flex flex-col gap-4 bg-back p-10 rounded-md shadow-xl w-[30vw]">
      <RxCross2
        className=" text-2xl font-bold cursor-pointer"
        onClick={() => setSubjectCardOpen(false)}
      />
      <div className="flex flex-col gap-1 w-full">
        <h1>Semister : 1</h1>
        <label htmlFor="courseName" className="text-[#b0b0b0] font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="computer graphics"
          required
          name="subject"
          onChange={(e)=>setSubject(e.target.value)}
          className="pl-3 h-[40px] bg-back text-white border border-white rounded-md"
        />
      </div>

      <button
        type="button"
        className="px-4 py-2 bg-blue-400 text-black rounded-md   mt-3 cursor-pointer font-semibold"
        onClick={subjectAddHanlder}
      >
        Add More Subject
      </button>
      <h1>All Subjects</h1>
      <div className="flex flex-wrap gap-1">
       
        <br />
        {subjects?.length > 0 ? (
          subjects.map((subject) => (
            <div className="flex gap-1 items-center">
            <button
              type="button"
              className="px-4  py-2 rounded-md font-bold border border-[#535353] bg-back cursor-pointer"
            >
              {subject}
            </button>
            <MdDelete className=" font-semibold text-xl cursor-pointer" onClick={()=>subjectEditHandler(subject)}/>

            </div>
          ))
        ) : (
          <p
            className=" text-gray-600"
          >
            <br />
            No subject Added
          </p>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 text-black rounded-md   mt-3 cursor-pointer font-semibold"
      >
          Update Semister 1
      </button>
    </form>
  );
};
export default DepartmentCard;
