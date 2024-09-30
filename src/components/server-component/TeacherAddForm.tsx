import { addTeacher } from "@/app/actions/teacherAction";
import SubmitButton from "./SubmitButton";

const TeacherAddForm = () => {
  return (
    <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
      <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
      <form action={addTeacher}>
        <input
          type="text"
          name="teacherName"
          placeholder="Name"
          className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
        />
        <input
          type="text"
          name="subjects"
          placeholder="Subjects (comma separated)"
          className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
        />
        <div className="flex justify-end">
          <SubmitButton buttonValue="Add Teacher"/>
        </div>
      </form>
    </div>
  );
};

export default TeacherAddForm;
