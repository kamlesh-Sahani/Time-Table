import { TeacherType } from "@/models/teacher.model";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
const TeachersCard =() => {
  const [teachers,setTeachers] = useState<TeacherType[]>();
  useEffect(()=>{
    (
     async function (){
        const response = await fetch("/api/teacher/all",{
          method:"GET"
        })
        const data = await response.json();
        setTeachers(data.teachers);
       }
    
    )()
   
  },[])
  return (
    <div className="overflow-x-auto flex gap-2 scrollbar-thin">
      {teachers && teachers.length > 0 &&
        teachers.map((teacher) => (
          <div  className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out flex justify-between items-center" key={teacher._id.toString()}>
            <div className="flex-1">
              <p className="font-semibold text-[#ffffff]">
                {teacher.teacherName}
              </p>
              <p className="text-sm text-[#b0b0b0]">
                Subjects: {teacher.subjects}
              </p>
              <p className="text-sm text-[#b0b0b0]">
                Classes assigned: {teacher.classAssigned.length}
              </p>
            </div>
            <Link href={`/teacher/${teacher._id}`} passHref>
              <button className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300">
                <AiOutlineEye size={24} />
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TeachersCard;
