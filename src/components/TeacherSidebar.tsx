import React, { useState } from 'react';

const TeacherSidebar = ({ teachers, handleTeacherSelect }) => {
  const [filter, setFilter] = useState(''); // Filter state for subjects

  // Filter teachers based on the input
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.subjects.some((subject) => subject.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="w-full p-4 max-2xl:p-10 bg-back flex flex-col">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#ffffff]">Filter Teachers</h2>
        <input
          type="text"
          placeholder="Filter by subject"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 p-2 border text-[#e0e0e0] bg-[#2b2b2b] border-[#535353] rounded w-full focus:outline-none focus:ring-2 focus:ring-[#5a5a5a]"
        />
      </div>


      <h3 className="font-bold text-lg mb-2 text-[#e0e0e0]">Teachers List</h3>
      <div className=" overflow-x-auto flex gap-2 scrollbar-thin">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.name}
            className="p-5 min-w-[300px] h-[100px] bg-[#2c2c2c] rounded-lg cursor-pointer border border-[#535353] hover:bg-[#3a3a3a] transition-all duration-300 ease-in-out"
            onClick={() => handleTeacherSelect(teacher)}
          >
            <p className="font-semibold text-[#ffffff]">{teacher.name}</p>
            <p className="text-sm text-[#b0b0b0]">Subjects: {teacher.subjects.join(', ')}</p>
            <p className="text-sm text-[#b0b0b0]">Classes assigned: {teacher.classCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSidebar;
