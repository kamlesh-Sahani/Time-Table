"use client";
import { addTeacher } from "@/app/actions/teacherAction";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

const TeacherAddForm = () => {
  const formRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
      <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
      <form
        ref={formRef}
        action={async (formData: FormData) => {
          setLoading(true);
          const response = await addTeacher(formData);
          if (response.success) {
            toast.success(response.message);
            formRef.current.reset();
          }
          if (!response.success) {
            toast.error(response.message || "Faild to register teacher");
          }
          setLoading(false);
        }}
      >
        <input
          type="text"
          name="teacherName"
          placeholder="Name"
          className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          required
        />
        <input
          type="text"
          name="subjects"
          placeholder="Subjects (comma separated)"
          className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          required
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-700 text-black px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300 font-semibold"
          >
            {loading ? "loading ..." : "Add Teacher"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherAddForm;
