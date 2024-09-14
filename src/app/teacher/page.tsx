// // // app/teacher/[name]/page.tsx
// // import React from 'react';
// // import { notFound } from 'next/navigation';
// // import { Metadata } from 'next';

// // interface TimetableEntry {
// //   course: string;
// //   semester: string;
// //   subject: string;
// //   time: string;
// // }

// // interface TeacherDetailProps {
// //   teacher: {
// //     name: string;
// //     subjects: string[];
// //     classCount: number;
// //   };
// //   timetable: TimetableEntry[];
// // }

// // // Fetch data from an API or database
// // const fetchTeacherData = async (name: string) => {
// //   // Example API endpoint - replace with your own API or database call
// //   const response = await fetch(`/teachers/${name}`);
// //   const data = await response.json();

// //   if (!data.teacher) {
// //     return null;
// //   }

// //   return {
// //     teacher: data.teacher,
// //     timetable: data.timetable || [],
// //   };
// // };

// // const TeacherDetail: React.FC<TeacherDetailProps> = async ({ params }) => {
// //   const { name } = params;
// //   const data = await fetchTeacherData(name as string);

// //   if (!data) {
// //     notFound(); // Redirect to 404 page if no data found
// //   }

// //   const { teacher, timetable } = data;

// //   return (
// //     <div className="p-4 max-2xl:p-10 bg-back">
// //       <h1 className="text-3xl font-bold text-[#ffffff] mb-4">Teacher Details</h1>
// //       <div className="bg-[#2c2c2c] p-4 rounded-lg border border-[#535353] mb-6">
// //         <h2 className="text-2xl font-bold text-[#ffffff] mb-2">{teacher.name}</h2>
// //         <p className="text-lg text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
// //         <p className="text-lg text-[#b0b0b0]">Classes Assigned: {teacher.classCount}</p>
// //       </div>
      
// //       <h2 className="text-2xl font-bold text-[#ffffff] mb-4">Timetable</h2>
// //       <div className="bg-[#2c2c2c] p-4 rounded-lg border border-[#535353]">
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-[#2b2b2b] text-[#e0e0e0] border border-[#535353]">
// //             <thead>
// //               <tr>
// //                 <th className="p-3 border-b">Course</th>
// //                 <th className="p-3 border-b">Semester</th>
// //                 <th className="p-3 border-b">Subject</th>
// //                 <th className="p-3 border-b">Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {timetable.map((entry, index) => (
// //                 <tr key={index} className="hover:bg-[#3a3a3a]">
// //                   <td className="p-3 border-b">{entry.course}</td>
// //                   <td className="p-3 border-b">{entry.semester}</td>
// //                   <td className="p-3 border-b">{entry.subject}</td>
// //                   <td className="p-3 border-b">{entry.time}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Generate metadata for the page
// // export const metadata: Metadata = {
// //   title: 'Teacher Detail',
// //   description: 'View details and timetable of the teacher.',
// // };

// // export default TeacherDetail;


// // app/teacher/[name]/page.tsx
// import React from 'react';
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';

// interface TimetableEntry {
//   course: string;
//   semester: string;
//   subject: string;
//   time: string;
// }

// interface TeacherDetailProps {
//   teacher: {
//     name: string;
//     subjects: string[];
//     classCount: number;
//   };
//   timetable: TimetableEntry[];
// }

// // Static data for testing purposes
// const staticData: Record<string, { teacher: TeacherDetailProps['teacher']; timetable: TimetableEntry[] }> = {
//   'john-doe': {
//     teacher: {
//       name: 'John Doe',
//       subjects: ['Math', 'Physics'],
//       classCount: 4,
//     },
//     timetable: [
//       { course: 'MATH101', semester: 'Fall 2024', subject: 'Mathematics', time: '9:00 AM - 10:30 AM' },
//       { course: 'PHYS101', semester: 'Fall 2024', subject: 'Physics', time: '11:00 AM - 12:30 PM' },
//     ],
//   },
//   'jane-smith': {
//     teacher: {
//       name: 'Jane Smith',
//       subjects: ['Biology', 'Chemistry'],
//       classCount: 5,
//     },
//     timetable: [
//       { course: 'BIO101', semester: 'Fall 2024', subject: 'Biology', time: '10:00 AM - 11:30 AM' },
//       { course: 'CHEM101', semester: 'Fall 2024', subject: 'Chemistry', time: '1:00 PM - 2:30 PM' },
//     ],
//   },
// };

// const TeacherDetail: React.FC<{ params: { name: string } }> = ({ params }) => {
//   const { name } = params;

//   // Retrieve static data
//   const data = staticData[name];

//   if (!data) {
//     notFound(); // Redirect to 404 page if no data found
//   }

//   const { teacher, timetable } = data;

//   return (
//     <div className="p-4 max-2xl:p-10 bg-back">
//       <h1 className="text-3xl font-bold text-[#ffffff] mb-4">Teacher Details</h1>
//       <div className="bg-[#2c2c2c] p-4 rounded-lg border border-[#535353] mb-6">
//         <h2 className="text-2xl font-bold text-[#ffffff] mb-2">{teacher.name}</h2>
//         <p className="text-lg text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
//         <p className="text-lg text-[#b0b0b0]">Classes Assigned: {teacher.classCount}</p>
//       </div>
      
//       <h2 className="text-2xl font-bold text-[#ffffff] mb-4">Timetable</h2>
//       <div className="bg-[#2c2c2c] p-4 rounded-lg border border-[#535353]">
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-[#2b2b2b] text-[#e0e0e0] border border-[#535353]">
//             <thead>
//               <tr>
//                 <th className="p-3 border-b">Course</th>
//                 <th className="p-3 border-b">Semester</th>
//                 <th className="p-3 border-b">Subject</th>
//                 <th className="p-3 border-b">Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {timetable.map((entry, index) => (
//                 <tr key={index} className="hover:bg-[#3a3a3a]">
//                   <td className="p-3 border-b">{entry.course}</td>
//                   <td className="p-3 border-b">{entry.semester}</td>
//                   <td className="p-3 border-b">{entry.subject}</td>
//                   <td className="p-3 border-b">{entry.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Generate static paths for testing
// export async function generateStaticParams() {
//   return Object.keys(staticData).map(name => ({ name }));
// }

// // Generate metadata for the page
// export const metadata: Metadata = {
//   title: 'Teacher Detail',
//   description: 'View details and timetable of the teacher.',
// };

// export default TeacherDetail;


import React from 'react';
import { Metadata } from 'next';

interface TimetableEntry {
  course: string;
  semester: string;
  subject: string;
  time: string;
}

interface TeacherDetailProps {
  teacher: {
    name: string;
    subjects: string[];
    classCount: number;
  };
  timetable: TimetableEntry[];
}

// Static data for the teacher and timetable
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

const TeacherDetail: React.FC = () => {
  const { teacher, timetable } = teacherData;

  return (
    <div className="p-4 max-2xl:p-10 bg-back">
      <h1 className="text-3xl font-bold text-[#ffffff] mb-4">Teacher Details</h1>
      <div className="bg-[#2c2c2c] p-4 rounded-lg border border-[#535353] mb-6">
        <h2 className="text-2xl font-bold text-[#ffffff] mb-2">{teacher.name}</h2>
        <p className="text-lg text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
        <p className="text-lg text-[#b0b0b0]">Classes Assigned: {teacher.classCount}</p>
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
              {timetable.map((entry, index) => (
                <tr key={index} className="hover:bg-[#3a3a3a]">
                  <td className="p-3 border-b text-center">{entry.course}</td>
                  <td className="p-3 border-b text-center">{entry.semester}</td>
                  <td className="p-3 border-b text-center">{entry.subject}</td>
                  <td className="p-3 border-b text-center">{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Generate metadata for the page
export const metadata: Metadata = {
  title: 'Teacher Detail',
  description: 'View details and timetable of the teacher.',
};

export default TeacherDetail;
