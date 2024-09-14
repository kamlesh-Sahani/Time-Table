// // // // // // // // import React, { useState } from 'react';

// // // // // // // // const TeacherSidebar = ({ teachers, handleTeacherSelect }) => {
// // // // // // // //   const [filter, setFilter] = useState(''); // Filter state for subjects

// // // // // // // //   // Filter teachers based on the input
// // // // // // // //   const filteredTeachers = teachers.filter((teacher) =>
// // // // // // // //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// // // // // // // //       <div>
// // // // // // // //         <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">Filter Teachers</h2>
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Filter by subject"
// // // // // // // //           value={filter}
// // // // // // // //           onChange={(e) => setFilter(e.target.value)}
// // // // // // // //           className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // // // // //         />
// // // // // // // //       </div>


// // // // // // // //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// // // // // // // //       <div className=" overflow-x-auto flex gap-2 scrollbar-thin">
// // // // // // // //         {filteredTeachers.map((teacher) => (
// // // // // // // //           <div
// // // // // // // //             key={teacher.name}
// // // // // // // //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// // // // // // // //             onClick={() => handleTeacherSelect(teacher)}
// // // // // // // //           >
// // // // // // // //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// // // // // // // //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// // // // // // // //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default TeacherSidebar;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import { AiOutlinePlus } from 'react-icons/ai' // Assuming you're using Lucide icons for the + icon

// // // // // // // // Type for Teacher
// // // // // // // interface Teacher {
// // // // // // //   name: string;
// // // // // // //   subjects: string[];
// // // // // // //   classCount: number;
// // // // // // // }

// // // // // // // // Props type for TeacherSidebar component
// // // // // // // interface TeacherSidebarProps {
// // // // // // //   teachers: Teacher[];
// // // // // // //   handleTeacherSelect: (teacher: Teacher) => void;
// // // // // // // }

// // // // // // // const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
// // // // // // //   const [filter, setFilter] = useState<string>(''); // Filter state for subjects
// // // // // // //   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null); // State for new teacher

// // // // // // //   // Filter teachers based on the input
// // // // // // //   const filteredTeachers = teachers.filter((teacher) =>
// // // // // // //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// // // // // // //   );

// // // // // // //   // Function to add a new teacher (placeholder data for now)
// // // // // // //   const handleAddTeacher = () => {
// // // // // // //     const newTeacherData: Teacher = {
// // // // // // //       name: `New Teacher ${teachers.length + 1}`,
// // // // // // //       subjects: ['Subject 1'],
// // // // // // //       classCount: 0,
// // // // // // //     };
// // // // // // //     setNewTeacher(newTeacherData);
// // // // // // //   };

// // // // // // //   // Combine existing and new teacher if added
// // // // // // //   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

// // // // // // //   return (
// // // // // // //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// // // // // // //       <div className="flex items-center justify-between mb-4">
// // // // // // //         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
// // // // // // //         <button
// // // // // // //           onClick={handleAddTeacher}
// // // // // // //           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
// // // // // // //         >
// // // // // // //           <AiOutlinePlus size={24} />
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       <input
// // // // // // //         type="text"
// // // // // // //         placeholder="Filter by subject"
// // // // // // //         value={filter}
// // // // // // //         onChange={(e) => setFilter(e.target.value)}
// // // // // // //         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // // // //       />

// // // // // // //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// // // // // // //       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
// // // // // // //         {displayedTeachers.map((teacher) => (
// // // // // // //           <div
// // // // // // //             key={teacher.name}
// // // // // // //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// // // // // // //             onClick={() => handleTeacherSelect(teacher)}
// // // // // // //           >
// // // // // // //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// // // // // // //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// // // // // // //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TeacherSidebar;



// // // // // // import React, { useState } from 'react';
// // // // // // import { AiOutlinePlus } from 'react-icons/ai';

// // // // // // // Type for Teacher
// // // // // // interface Teacher {
// // // // // //   name: string;
// // // // // //   subjects: string[];
// // // // // //   classCount: number;
// // // // // // }

// // // // // // // Props type for TeacherSidebar component
// // // // // // interface TeacherSidebarProps {
// // // // // //   teachers: Teacher[];
// // // // // //   handleTeacherSelect: (teacher: Teacher) => void;
// // // // // // }

// // // // // // const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
// // // // // //   const [filter, setFilter] = useState<string>(''); // Filter state for subjects
// // // // // //   const [isFormVisible, setIsFormVisible] = useState<boolean>(false); // State to manage form visibility
// // // // // //   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null); // State for new teacher
// // // // // //   const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
// // // // // //     name: '',
// // // // // //     subjects: '',
// // // // // //     classCount: 0,
// // // // // //   }); // State for form data

// // // // // //   // Filter teachers based on the input
// // // // // //   const filteredTeachers = teachers.filter((teacher) =>
// // // // // //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// // // // // //   );

// // // // // //   // Combine existing and new teacher if added
// // // // // //   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

// // // // // //   // Show form
// // // // // //   const handleShowForm = () => {
// // // // // //     setIsFormVisible(true);
// // // // // //   };

// // // // // //   // Hide form
// // // // // //   const handleHideForm = () => {
// // // // // //     setIsFormVisible(false);
// // // // // //     setFormData({ name: '', subjects: '', classCount: 0 });
// // // // // //   };

// // // // // //   // Handle form data change
// // // // // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // // //   };

// // // // // //   // Handle form submission
// // // // // //   const handleAddTeacher = () => {
// // // // // //     if (formData.name && formData.subjects) {
// // // // // //       const newTeacherData: Teacher = {
// // // // // //         name: formData.name,
// // // // // //         subjects: formData.subjects.split(',').map(subject => subject.trim()), // Convert to array
// // // // // //         classCount: formData.classCount,
// // // // // //       };
// // // // // //       setNewTeacher(newTeacherData);
// // // // // //       handleHideForm(); // Hide form after adding the teacher
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// // // // // //       <div className="flex items-center justify-between mb-4">
// // // // // //         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
// // // // // //         <button
// // // // // //           onClick={handleShowForm}
// // // // // //           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
// // // // // //         >
// // // // // //           <AiOutlinePlus size={24} />
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <input
// // // // // //         type="text"
// // // // // //         placeholder="Filter by subject"
// // // // // //         value={filter}
// // // // // //         onChange={(e) => setFilter(e.target.value)}
// // // // // //         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // // //       />

// // // // // //       {isFormVisible && (
// // // // // //         <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
// // // // // //           <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="name"
// // // // // //             placeholder="Name"
// // // // // //             value={formData.name}
// // // // // //             onChange={handleInputChange}
// // // // // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // // //           />
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             name="subjects"
// // // // // //             placeholder="Subjects (comma separated)"
// // // // // //             value={formData.subjects}
// // // // // //             onChange={handleInputChange}
// // // // // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // // //           />
// // // // // //           <input
// // // // // //             type="number"
// // // // // //             name="classCount"
// // // // // //             placeholder="Classes assigned"
// // // // // //             value={formData.classCount}
// // // // // //             onChange={handleInputChange}
// // // // // //             className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // // //           />
// // // // // //           <div className="flex justify-end">
// // // // // //             <button
// // // // // //               onClick={handleAddTeacher}
// // // // // //               className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
// // // // // //             >
// // // // // //               Add Teacher
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={handleHideForm}
// // // // // //               className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
// // // // // //             >
// // // // // //               Cancel
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// // // // // //       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
// // // // // //         {displayedTeachers.map((teacher) => (
// // // // // //           <div
// // // // // //             key={teacher.name}
// // // // // //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// // // // // //             onClick={() => handleTeacherSelect(teacher)}
// // // // // //           >
// // // // // //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// // // // // //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// // // // // //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TeacherSidebar;



// // // // // import React, { useState } from 'react';
// // // // // import { AiOutlinePlus } from 'react-icons/ai';
// // // // // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // // // // // Type for Teacher
// // // // // interface Teacher {
// // // // //   name: string;
// // // // //   subjects: string[];
// // // // //   classCount: number;
// // // // // }

// // // // // // Props type for TeacherSidebar component
// // // // // interface TeacherSidebarProps {
// // // // //   teachers: Teacher[];
// // // // //   handleTeacherSelect: (teacher: Teacher) => void;
// // // // // }

// // // // // const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
// // // // //   const [filter, setFilter] = useState<string>(''); // Filter state for subjects
// // // // //   const [isFormVisible, setIsFormVisible] = useState<boolean>(false); // State to manage form visibility
// // // // //   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null); // State for new teacher
// // // // //   const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
// // // // //     name: '',
// // // // //     subjects: '',
// // // // //     classCount: 0,
// // // // //   }); // State for form data

// // // // //   const navigate = useNavigate(); // Initialize useNavigate

// // // // //   // Filter teachers based on the input
// // // // //   const filteredTeachers = teachers.filter((teacher) =>
// // // // //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// // // // //   );

// // // // //   // Combine existing and new teacher if added
// // // // //   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

// // // // //   // Show form
// // // // //   const handleShowForm = () => {
// // // // //     setIsFormVisible(true);
// // // // //   };

// // // // //   // Hide form
// // // // //   const handleHideForm = () => {
// // // // //     setIsFormVisible(false);
// // // // //     setFormData({ name: '', subjects: '', classCount: 0 });
// // // // //   };

// // // // //   // Handle form data change
// // // // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   // Handle form submission
// // // // //   const handleAddTeacher = () => {
// // // // //     if (formData.name && formData.subjects) {
// // // // //       const newTeacherData: Teacher = {
// // // // //         name: formData.name,
// // // // //         subjects: formData.subjects.split(',').map(subject => subject.trim()), // Convert to array
// // // // //         classCount: formData.classCount,
// // // // //       };
// // // // //       setNewTeacher(newTeacherData);
// // // // //       handleHideForm(); // Hide form after adding the teacher
// // // // //     }
// // // // //   };

// // // // //   // Handle teacher selection to navigate to timetable page
// // // // //   const handleTeacherClick = (teacher: Teacher) => {
// // // // //     navigate(`/timetable/${teacher.name}`, { state: { teacher } }); // Pass teacher data to the timetable page
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// // // // //       <div className="flex items-center justify-between mb-4">
// // // // //         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
// // // // //         <button
// // // // //           onClick={handleShowForm}
// // // // //           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
// // // // //         >
// // // // //           <AiOutlinePlus size={24} />
// // // // //         </button>
// // // // //       </div>

// // // // //       <input
// // // // //         type="text"
// // // // //         placeholder="Filter by subject"
// // // // //         value={filter}
// // // // //         onChange={(e) => setFilter(e.target.value)}
// // // // //         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // //       />

// // // // //       {isFormVisible && (
// // // // //         <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
// // // // //           <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="name"
// // // // //             placeholder="Name"
// // // // //             value={formData.name}
// // // // //             onChange={handleInputChange}
// // // // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // //           />
// // // // //           <input
// // // // //             type="text"
// // // // //             name="subjects"
// // // // //             placeholder="Subjects (comma separated)"
// // // // //             value={formData.subjects}
// // // // //             onChange={handleInputChange}
// // // // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // //           />
// // // // //           <input
// // // // //             type="number"
// // // // //             name="classCount"
// // // // //             placeholder="Classes assigned"
// // // // //             value={formData.classCount}
// // // // //             onChange={handleInputChange}
// // // // //             className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // // //           />
// // // // //           <div className="flex justify-end">
// // // // //             <button
// // // // //               onClick={handleAddTeacher}
// // // // //               className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
// // // // //             >
// // // // //               Add Teacher
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={handleHideForm}
// // // // //               className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
// // // // //             >
// // // // //               Cancel
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// // // // //       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
// // // // //         {displayedTeachers.map((teacher) => (
// // // // //           <div
// // // // //             key={teacher.name}
// // // // //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// // // // //             onClick={() => handleTeacherClick(teacher)}
// // // // //           >
// // // // //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// // // // //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// // // // //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TeacherSidebar;


// // // // import React, { useState } from 'react';
// // // // import { AiOutlinePlus } from 'react-icons/ai';
// // // // import { useRouter } from 'next/router';

// // // // // Type for Teacher
// // // // interface Teacher {
// // // //   name: string;
// // // //   subjects: string[];
// // // //   classCount: number;
// // // // }

// // // // // Props type for TeacherSidebar component
// // // // interface TeacherSidebarProps {
// // // //   teachers: Teacher[];
// // // //   handleTeacherSelect: (teacher: Teacher) => void;
// // // // }

// // // // const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
// // // //   const [filter, setFilter] = useState<string>(''); // Filter state for subjects
// // // //   const [isFormVisible, setIsFormVisible] = useState<boolean>(false); // State to manage form visibility
// // // //   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null); // State for new teacher
// // // //   const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
// // // //     name: '',
// // // //     subjects: '',
// // // //     classCount: 0,
// // // //   }); // State for form data

// // // //   const router = useRouter(); // Initialize useRouter

// // // //   // Filter teachers based on the input
// // // //   const filteredTeachers = teachers.filter((teacher) =>
// // // //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// // // //   );

// // // //   // Combine existing and new teacher if added
// // // //   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

// // // //   // Show form
// // // //   const handleShowForm = () => {
// // // //     setIsFormVisible(true);
// // // //   };

// // // //   // Hide form
// // // //   const handleHideForm = () => {
// // // //     setIsFormVisible(false);
// // // //     setFormData({ name: '', subjects: '', classCount: 0 });
// // // //   };

// // // //   // Handle form data change
// // // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   // Handle form submission
// // // //   const handleAddTeacher = () => {
// // // //     if (formData.name && formData.subjects) {
// // // //       const newTeacherData: Teacher = {
// // // //         name: formData.name,
// // // //         subjects: formData.subjects.split(',').map(subject => subject.trim()), // Convert to array
// // // //         classCount: formData.classCount,
// // // //       };
// // // //       setNewTeacher(newTeacherData);
// // // //       handleHideForm(); // Hide form after adding the teacher
// // // //     }
// // // //   };

// // // //   // Handle teacher selection to navigate to timetable page
// // // //   const handleTeacherClick = (teacher: Teacher) => {
// // // //     router.push({
// // // //       pathname: '/timetable/[teacherName]',
// // // //       query: { teacherName: teacher.name },
// // // //     }, undefined, { shallow: true });
// // // //     handleTeacherSelect(teacher); // Trigger any parent callback if needed
// // // //   };

// // // //   return (
// // // //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// // // //       <div className="flex items-center justify-between mb-4">
// // // //         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
// // // //         <button
// // // //           onClick={handleShowForm}
// // // //           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
// // // //         >
// // // //           <AiOutlinePlus size={24} />
// // // //         </button>
// // // //       </div>

// // // //       <input
// // // //         type="text"
// // // //         placeholder="Filter by subject"
// // // //         value={filter}
// // // //         onChange={(e) => setFilter(e.target.value)}
// // // //         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // //       />

// // // //       {isFormVisible && (
// // // //         <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
// // // //           <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
// // // //           <input
// // // //             type="text"
// // // //             name="name"
// // // //             placeholder="Name"
// // // //             value={formData.name}
// // // //             onChange={handleInputChange}
// // // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="subjects"
// // // //             placeholder="Subjects (comma separated)"
// // // //             value={formData.subjects}
// // // //             onChange={handleInputChange}
// // // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="classCount"
// // // //             placeholder="Classes assigned"
// // // //             value={formData.classCount}
// // // //             onChange={handleInputChange}
// // // //             className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // // //           />
// // // //           <div className="flex justify-end">
// // // //             <button
// // // //               onClick={handleAddTeacher}
// // // //               className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
// // // //             >
// // // //               Add Teacher
// // // //             </button>
// // // //             <button
// // // //               onClick={handleHideForm}
// // // //               className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// // // //       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
// // // //         {displayedTeachers.map((teacher) => (
// // // //           <div
// // // //             key={teacher.name}
// // // //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// // // //             onClick={() => handleTeacherClick(teacher)}
// // // //           >
// // // //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// // // //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// // // //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TeacherSidebar;

// // // // components/TeacherSidebar.tsx
// // // import React, { useState } from 'react';
// // // import { AiOutlinePlus } from 'react-icons/ai';
// // // import { useRouter } from 'next/router'; // Ensure this is correctly imported

// // // interface Teacher {
// // //   name: string;
// // //   subjects: string[];
// // //   classCount: number;
// // // }

// // // interface TeacherSidebarProps {
// // //   teachers: Teacher[];
// // //   handleTeacherSelect: (teacher: Teacher) => void;
// // // }

// // // const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
// // //   const [filter, setFilter] = useState<string>('');
// // //   const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
// // //   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null);
// // //   const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
// // //     name: '',
// // //     subjects: '',
// // //     classCount: 0,
// // //   });

// // //   const router = useRouter(); // Ensure this is used inside a Next.js page/component

// // //   const filteredTeachers = teachers.filter((teacher) =>
// // //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// // //   );

// // //   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

// // //   const handleShowForm = () => setIsFormVisible(true);
// // //   const handleHideForm = () => {
// // //     setIsFormVisible(false);
// // //     setFormData({ name: '', subjects: '', classCount: 0 });
// // //   };

// // //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleAddTeacher = () => {
// // //     if (formData.name && formData.subjects) {
// // //       const newTeacherData: Teacher = {
// // //         name: formData.name,
// // //         subjects: formData.subjects.split(',').map(subject => subject.trim()),
// // //         classCount: formData.classCount,
// // //       };
// // //       setNewTeacher(newTeacherData);
// // //       handleHideForm();
// // //     }
// // //   };

// // //   const handleTeacherClick = (teacher: Teacher) => {
// // //     router.push({
// // //       pathname: '/timetable/[teacherName]',
// // //       query: { teacherName: teacher.name },
// // //     });
// // //     handleTeacherSelect(teacher);
// // //   };

// // //   return (
// // //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// // //       <div className="flex items-center justify-between mb-4">
// // //         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
// // //         <button
// // //           onClick={handleShowForm}
// // //           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
// // //         >
// // //           <AiOutlinePlus size={24} />
// // //         </button>
// // //       </div>

// // //       <input
// // //         type="text"
// // //         placeholder="Filter by subject"
// // //         value={filter}
// // //         onChange={(e) => setFilter(e.target.value)}
// // //         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // //       />

// // //       {isFormVisible && (
// // //         <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
// // //           <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             placeholder="Name"
// // //             value={formData.name}
// // //             onChange={handleInputChange}
// // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // //           />
// // //           <input
// // //             type="text"
// // //             name="subjects"
// // //             placeholder="Subjects (comma separated)"
// // //             value={formData.subjects}
// // //             onChange={handleInputChange}
// // //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // //           />
// // //           <input
// // //             type="number"
// // //             name="classCount"
// // //             placeholder="Classes assigned"
// // //             value={formData.classCount}
// // //             onChange={handleInputChange}
// // //             className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// // //           />
// // //           <div className="flex justify-end">
// // //             <button
// // //               onClick={handleAddTeacher}
// // //               className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
// // //             >
// // //               Add Teacher
// // //             </button>
// // //             <button
// // //               onClick={handleHideForm}
// // //               className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
// // //             >
// // //               Cancel
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// // //       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
// // //         {displayedTeachers.map((teacher) => (
// // //           <div
// // //             key={teacher.name}
// // //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// // //             onClick={() => handleTeacherClick(teacher)}
// // //           >
// // //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// // //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// // //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TeacherSidebar;



// // // components/TeacherSidebar.tsx
// // import React, { useState } from 'react';
// // import { AiOutlinePlus } from 'react-icons/ai';
// // import { useRouter } from 'next/router'; // Correctly import useRouter

// // interface Teacher {
// //   name: string;
// //   subjects: string[];
// //   classCount: number;
// // }

// // interface TeacherSidebarProps {
// //   teachers: Teacher[];
// //   handleTeacherSelect: (teacher: Teacher) => void;
// // }

// // const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
// //   const [filter, setFilter] = useState<string>('');
// //   const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
// //   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null);
// //   const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
// //     name: '',
// //     subjects: '',
// //     classCount: 0,
// //   });

// //   const router = useRouter(); // Correctly use useRouter

// //   const filteredTeachers = teachers.filter((teacher) =>
// //     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
// //   );

// //   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

// //   const handleShowForm = () => setIsFormVisible(true);
// //   const handleHideForm = () => {
// //     setIsFormVisible(false);
// //     setFormData({ name: '', subjects: '', classCount: 0 });
// //   };

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleAddTeacher = () => {
// //     if (formData.name && formData.subjects) {
// //       const newTeacherData: Teacher = {
// //         name: formData.name,
// //         subjects: formData.subjects.split(',').map(subject => subject.trim()),
// //         classCount: formData.classCount,
// //       };
// //       setNewTeacher(newTeacherData);
// //       handleHideForm();
// //     }
// //   };

// //   const handleTeacherClick = (teacher: Teacher) => {
// //     router.push({
// //       pathname: '/timetable/[teacherName]',
// //       query: { teacherName: teacher.name },
// //     });
// //     handleTeacherSelect(teacher);
// //   };

// //   return (
// //     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
// //       <div className="flex items-center justify-between mb-4">
// //         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
// //         <button
// //           onClick={handleShowForm}
// //           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
// //         >
// //           <AiOutlinePlus size={24} />
// //         </button>
// //       </div>

// //       <input
// //         type="text"
// //         placeholder="Filter by subject"
// //         value={filter}
// //         onChange={(e) => setFilter(e.target.value)}
// //         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// //       />

// //       {isFormVisible && (
// //         <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
// //           <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// //           />
// //           <input
// //             type="text"
// //             name="subjects"
// //             placeholder="Subjects (comma separated)"
// //             value={formData.subjects}
// //             onChange={handleInputChange}
// //             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// //           />
// //           <input
// //             type="number"
// //             name="classCount"
// //             placeholder="Classes assigned"
// //             value={formData.classCount}
// //             onChange={handleInputChange}
// //             className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
// //           />
// //           <div className="flex justify-end">
// //             <button
// //               onClick={handleAddTeacher}
// //               className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
// //             >
// //               Add Teacher
// //             </button>
// //             <button
// //               onClick={handleHideForm}
// //               className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
// //       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
// //         {displayedTeachers.map((teacher) => (
// //           <div
// //             key={teacher.name}
// //             className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
// //             onClick={() => handleTeacherClick(teacher)}
// //           >
// //             <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
// //             <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// //             <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TeacherSidebar;


// // components/TeacherSidebar.tsx
// import React, { useState } from 'react';
// import { AiOutlinePlus } from 'react-icons/ai';
// import Link from 'next/link';

// interface Teacher {
//   name: string;
//   subjects: string[];
//   classCount: number;
// }

// interface TeacherSidebarProps {
//   teachers: Teacher[];
//   handleTeacherSelect: (teacher: Teacher) => void;
// }

// const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
//   const [filter, setFilter] = useState<string>('');
//   const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
//   const [newTeacher, setNewTeacher] = useState<Teacher | null>(null);
//   const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
//     name: '',
//     subjects: '',
//     classCount: 0,
//   });

//   const filteredTeachers = teachers.filter((teacher) =>
//     teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
//   );

//   const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

//   const handleShowForm = () => setIsFormVisible(true);
//   const handleHideForm = () => {
//     setIsFormVisible(false);
//     setFormData({ name: '', subjects: '', classCount: 0 });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddTeacher = () => {
//     if (formData.name && formData.subjects) {
//       const newTeacherData: Teacher = {
//         name: formData.name,
//         subjects: formData.subjects.split(',').map(subject => subject.trim()),
//         classCount: formData.classCount,
//       };
//       setNewTeacher(newTeacherData);
//       handleHideForm();
//     }
//   };

//   return (
//     <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
 
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
//         <button
//           onClick={handleShowForm}
//           className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
//         >
//           <div className='flex bg-white text-blue-500 font-bold p-3 rounded-md gap-4'>
//           <span>Add New Teacher</span>
//           <AiOutlinePlus size={24} />
//           </div>
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Filter by subject"
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
//       />

//       {isFormVisible && (
//         <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
//           <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
//           />
//           <input
//             type="text"
//             name="subjects"
//             placeholder="Subjects (comma separated)"
//             value={formData.subjects}
//             onChange={handleInputChange}
//             className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
//           />
//           <input
//             type="number"
//             name="classCount"
//             placeholder="Classes assigned"
//             value={formData.classCount}
//             onChange={handleInputChange}
//             className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
//           />
//           <div className="flex justify-end">
//             <button
//               onClick={handleAddTeacher}
//               className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
//             >
//               Add Teacher
//             </button>
//             <button
//               onClick={handleHideForm}
//               className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
//       <div className="overflow-x-auto flex gap-2 scrollbar-thin">
//         {displayedTeachers.map((teacher) => (
//           <Link
//             key={teacher.name}
//             href={`/teacher/${teacher.name}`}
//             passHref
//           >
//             <div
//               className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
//               onClick={() => handleTeacherSelect(teacher)}
//             >
//               <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
//               <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
//               <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeacherSidebar;


import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';

interface Teacher {
  name: string;
  subjects: string[];
  classCount: number;
}

interface TeacherSidebarProps {
  teachers: Teacher[];
  handleTeacherSelect: (teacher: Teacher) => void;
}

const TeacherSidebar: React.FC<TeacherSidebarProps> = ({ teachers, handleTeacherSelect }) => {
  const [filter, setFilter] = useState<string>('');
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [newTeacher, setNewTeacher] = useState<Teacher | null>(null);
  const [formData, setFormData] = useState<{ name: string; subjects: string; classCount: number }>({
    name: '',
    subjects: '',
    classCount: 0,
  });

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
  );

  const displayedTeachers = newTeacher ? [newTeacher, ...filteredTeachers] : filteredTeachers;

  const handleShowForm = () => setIsFormVisible(true);
  const handleHideForm = () => {
    setIsFormVisible(false);
    setFormData({ name: '', subjects: '', classCount: 0 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTeacher = () => {
    if (formData.name && formData.subjects) {
      const newTeacherData: Teacher = {
        name: formData.name,
        subjects: formData.subjects.split(',').map(subject => subject.trim()),
        classCount: formData.classCount,
      };
      setNewTeacher(newTeacherData);
      handleHideForm();
    }
  };

  return (
    <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Filter Teachers</h2>
        <button
          onClick={handleShowForm}
          className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300"
        >
          <div className='flex bg-white text-blue-500 font-bold p-3 rounded-md sm:gap-4'>
            <span className='max-sm:hidden'>Add New Teacher</span>
            <AiOutlinePlus size={24} /><span className='sm:hidden'>Teacher</span>
          </div>
        </button>
      </div>

      <input
        type="text"
        placeholder="Filter by subject"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
      />

      {isFormVisible && (
        <div className="mb-4 p-4 bg-[#2c2c2c] rounded-lg border border-[#535353]">
          <h3 className="text-xl font-bold text-[#ffffff] mb-4">Add New Teacher</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          />
          <input
            type="text"
            name="subjects"
            placeholder="Subjects (comma separated)"
            value={formData.subjects}
            onChange={handleInputChange}
            className="mb-2 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          />
          <input
            type="number"
            name="classCount"
            placeholder="Classes assigned"
            value={formData.classCount}
            onChange={handleInputChange}
            className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
          />
          <div className="flex justify-end">
            <button
              onClick={handleAddTeacher}
              className="bg-[#4CAF50] text-white px-4 py-2 rounded hover:bg-[#45a049] transition-all duration-300"
            >
              Add Teacher
            </button>
            <button
              onClick={handleHideForm}
              className="ml-2 bg-[#f44336] text-white px-4 py-2 rounded hover:bg-[#e53935] transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
      <div className="overflow-x-auto flex gap-2 scrollbar-thin">
        {displayedTeachers.map((teacher) => (
          <div
            key={teacher.name}
            className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out flex justify-between items-center"
            onClick={() => handleTeacherSelect(teacher)}
          >
            <div className="flex-1">
              <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
              <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
              <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
            </div>
            <Link href={`/teacher`} passHref>
              <button className="text-[#ffffff] hover:text-[#00ff00] transition-all duration-300">
                <AiOutlineEye size={24} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSidebar;
