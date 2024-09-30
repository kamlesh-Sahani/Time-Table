"use client";
import { AiOutlinePlus } from "react-icons/ai";
import TeacherAddForm from "./server-component/TeacherAddForm";
import { useState } from "react";
import TeachersCard from "./server-component/TeacherCard";
const TeacherSidebar = () => {
  const [addFromOpen, setAddFormOpen] = useState<boolean>(false);
  return (
    <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
        <button className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300">
          <div
            className="flex bg-white text-blue-500 font-bold p-3 rounded-md sm:gap-4 cursor-pointer"
            onClick={() => setAddFormOpen((prev) => !prev)}
          >
            <span className="max-sm:hidden">Add New Teacher</span>
            <AiOutlinePlus size={24} />
            <span className="sm:hidden">Teacher</span>
          </div>
        </button>
      </div>

      <input
        type="text"
        placeholder="Filter by subject"
        className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
      />

      {addFromOpen && <TeacherAddForm />}

      <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
      <TeachersCard />
    </div>
  );
};

export default TeacherSidebar;
