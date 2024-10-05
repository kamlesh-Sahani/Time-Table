import TeacherModel from "@/models/teacher.model";

const teacherData = {
  teacher: {
    name: 'John Doe',
    subjects: ['Mathematics', 'Physics'],
    classCount: 4,
  },
  timetable: [
    { course: 'MATH101', semester: 'Fall 2024', subject: 'Mathematics', time: '9:00 AM - 10:30 AM' },
    { course: 'PHYS101', semester: 'Fall 2024', subject: 'Physics', time: '11:00 AM - 12:30 PM' },
  ],
};

const TeacherDetail = async({params}:{params:{id:string}}) => {
  const teacher = await TeacherModel.findById(params.id);
  return (
    <div className="p-4 max-2xl:p-10 bg-back">
      <h1 className="text-3xl font-bold text-[#ffffff] mb-4">Teacher Details</h1>
      <div className="bg-[#0e0d0d] p-4 rounded-lg border border-[#535353] mb-6">
        <h2 className="text-2xl font-bold text-[#ffffff] mb-2">{teacher?.teacherName}</h2>
        <p className="text-lg text-[#b0b0b0]">Subjects: {teacher?.subjects.join(', ')}</p>
        <p className="text-lg text-[#b0b0b0]">Classes Assigned: {teacher?.classAssigned.length}</p>
      </div>
      
      <h2 className="text-2xl font-bold text-[#ffffff] mb-4">Timetable</h2>
      <div className="bg-[#2c2c2c] p-4 rounded-lg border border-[#535353]">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#2b2b2b] text-[#e0e0e0] border border-[#535353]">
            <thead className='bg-black'>
              <tr>
                <th className="p-3 border-b">Course</th>
                <th className="p-3 border-b">Semester</th>
                <th className="p-3 border-b">Subject</th>
                <th className="p-3 border-b">Time</th>
              </tr>
            </thead>
            <tbody >
              {teacher?.classAssigned?.map((teacherCls:any) => (
                <tr key={teacherCls.courseName} className="hover:bg-[#3a3a3a]">
                  <td className="p-3 border-b text-center">{teacherCls.courseName}</td>
                  <td className="p-3 border-b text-center">{teacherCls?.semester}</td>
                  <td className="p-3 border-b text-center">{teacherCls?.subject}</td>
                  <td className="p-3 border-b text-center">{teacherCls?.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;