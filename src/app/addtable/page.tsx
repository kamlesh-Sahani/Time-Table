// "use client";
// import { useState } from "react";
// import { FaPlus, FaTrash } from "react-icons/fa";

// type TimetableEntry = {
//   teacher: string;
//   subject: string;
//   course: string;
//   semester: string;
//   time: string;
// };

// const AddTimetable = () => {
//   const [entries, setEntries] = useState<TimetableEntry[]>([]);
//   const [form, setForm] = useState<TimetableEntry>({
//     teacher: "",
//     subject: "",
//     course: "",
//     semester: "",
//     time: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const addEntry = () => {
//     if (Object.values(form).every((field) => field.trim())) {
//       setEntries((prev) => [...prev, form]);
//       setForm({ teacher: "", subject: "", course: "", semester: "", time: "" });
//     }
//   };

//   const handleSubmit = () => {
//     // Handle form submission
//     console.log("Submitted Entries:", entries);
//   };

//   const handleRemoveEntry = (index: number) => {
//     setEntries((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Add Timetable</h1>
//       <div className="bg-white shadow-md text-black rounded-lg p-6 mb-4">
//         <label
//           htmlFor="teacher"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Teacher
//         </label>
//         <input
//           id="teacher"
//           name="teacher"
//           value={form.teacher}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full mb-4"
//           type="text"
//         />
//         <label
//           htmlFor="subject"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Subject
//         </label>
//         <input
//           id="subject"
//           name="subject"
//           value={form.subject}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full mb-4"
//           type="text"
//         />
//         <label
//           htmlFor="course"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Course
//         </label>
//         <input
//           id="course"
//           name="course"
//           value={form.course}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full mb-4"
//           type="text"
//         />
//         <label
//           htmlFor="semester"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Semester
//         </label>
//         <input
//           id="semester"
//           name="semester"
//           value={form.semester}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full mb-4"
//           type="text"
//         />
//         <label
//           htmlFor="time"
//           className="block text-gray-700 font-semibold mb-2"
//         >
//           Time
//         </label>
//         <input
//           id="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full mb-4"
//           type="text"
//         />
//         <button
//           onClick={addEntry}
//           className="bg-blue-500 text-white py-2 px-4 flex justify-center items-center rounded hover:bg-blue-600"
//         >
//           <FaPlus className="mr-2 " /> Add
//         </button>
//       </div>
//       <div className="bg-white text-black shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold mb-4">Timetable Entries</h2>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 p-2">Teacher</th>
//               <th className="border border-gray-300 p-2">Subject</th>
//               <th className="border border-gray-300 p-2">Course</th>
//               <th className="border border-gray-300 p-2">Semester</th>
//               <th className="border border-gray-300 p-2">Time</th>
//               <th className="border border-gray-300 p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {entries.map((entry, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 p-2">{entry.teacher}</td>
//                 <td className="border border-gray-300 p-2">{entry.subject}</td>
//                 <td className="border border-gray-300 p-2">{entry.course}</td>
//                 <td className="border border-gray-300 p-2">{entry.semester}</td>
//                 <td className="border border-gray-300 p-2">{entry.time}</td>
//                 <td className="border border-gray-300 p-2">
//                   <button
//                     onClick={() => handleRemoveEntry(index)}
//                     className="text-red-500"
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button
//           onClick={handleSubmit}
//           className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddTimetable;

// pages/AddTimetable.tsx
"use client"
import { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

type TimetableEntry = {
  teacher: string;
  subject: string;
  course: string;
  semester: string;
  time: string;
};

// Static data for dropdowns (replace with dynamic data as needed)
const teachers = ['Teacher A', 'Teacher B', 'Teacher C'];
const subjects = ['Subject X', 'Subject Y', 'Subject Z'];
const courses = ['Course 1', 'Course 2', 'Course 3'];
const semesters = ['Semester 1', 'Semester 2', 'Semester 3'];

const AddTimetable = () => {
  const [entries, setEntries] = useState<TimetableEntry[]>([]);
  const [form, setForm] = useState<TimetableEntry>({
    teacher: '',
    subject: '',
    course: '',
    semester: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addEntry = () => {
    if (Object.values(form).every((field) => field.trim())) {
      setEntries((prev) => [...prev, form]);
      setForm({ teacher: '', subject: '', course: '', semester: '', time: '' });
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Submitted Entries:', entries);
  };

  const handleRemoveEntry = (index: number) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Add Timetable</h1>
      <div className=" text-black shadow-md rounded-lg p-6 mb-4">
        <label htmlFor="teacher" className="block text-white font-semibold mb-2">Teacher</label>
        <select
          id="teacher"
          name="teacher"
          value={form.teacher}
          onChange={handleChange}
          className="border bg-gray-600 text-gray-400 border-gray-300 rounded p-2 w-full mb-4"
        >
          <option value="">Select a teacher</option>
          {teachers.map((teacher, index) => (
            <option key={index} value={teacher}>{teacher}</option>
          ))}
        </select>

        <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject</label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="border bg-gray-600 text-gray-400 border-gray-300 rounded p-2 w-full mb-4"
        >
          <option value="">Select a subject</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>{subject}</option>
          ))}
        </select>

        <label htmlFor="course" className="block text-white font-semibold mb-2">Course</label>
        <select
          id="course"
          name="course"
          value={form.course}
          onChange={handleChange}
          className="border border-gray-300 text-gray-400 bg-gray-600 rounded p-2 w-full mb-4"
        >
          <option value="">Select a course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>

        <label htmlFor="semester" className="block text-white  font-semibold mb-2">Semester</label>
        <select
          id="semester"
          name="semester"
          value={form.semester}
          onChange={handleChange}
          className="border border-gray-300 text-gray-400 bg-gray-600 rounded p-2 w-full mb-4"
        >
          <option value="">Select a semester</option>
          {semesters.map((semester, index) => (
            <option key={index} value={semester}>{semester}</option>
          ))}
        </select>

        <label htmlFor="time" className="block text-white font-semibold mb-2">Time</label>
        <input
          id="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border border-gray-300 text-gray-400 bg-gray-600 rounded p-2 w-full mb-4"
          type="text"
        />

        <button
          onClick={addEntry}
          className="bg-blue-500 flex gap-2 justify-center items-center text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          <FaPlus className="mr-2" /> Add
        </button>
      </div>

      <div className=" text-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Timetable Entries</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Teacher</th>
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Course</th>
              <th className="border border-gray-300 p-2">Semester</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody className='text-gray-400 text-center'>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{entry.teacher}</td>
                <td className="border border-gray-300 p-2">{entry.subject}</td>
                <td className="border border-gray-300 p-2">{entry.course}</td>
                <td className="border border-gray-300 p-2">{entry.semester}</td>
                <td className="border border-gray-300 p-2">{entry.time}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleRemoveEntry(index)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTimetable;
