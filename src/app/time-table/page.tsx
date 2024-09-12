"use client";
import React, { useState } from 'react';
import TimeTableCard from '@/components/TimeTableCard';
import TeacherSidebar from '@/components/TeacherSidebar';

const TimeTablePage = () => {
  const [timetableData, setTimetableData] = useState([
    {
      day: 'Monday',
      schedule: [
        { subject: 'Math', teacher: 'Mr. John' },
        { subject: 'C++', teacher: 'Ms. Smith' },
        { subject: 'Break', teacher: '—' },
        { subject: 'Python', teacher: 'Dr. Brown' },
      ],
    },
    {
      day: 'Tuesday',
      schedule: [
        { subject: 'Physics', teacher: 'Mr. Johnson' },
        { subject: 'Chemistry', teacher: 'Ms. Davis' },
        { subject: 'Break', teacher: '—' },
        { subject: 'Biology', teacher: 'Dr. Wilson' },
      ],
    },
  ]);

  // Mock teacher data
  const [teachers, setTeachers] = useState([
    { name: 'Mr. John', subjects: ['Math', 'Physics'], classCount: 3 },
    { name: 'Ms. Smith', subjects: ['C++', 'Computer Science'], classCount: 2 },
    { name: 'Dr. Brown', subjects: ['Python', 'AI'], classCount: 4 },
    { name: 'Ms. Davis', subjects: ['Chemistry', 'Biology'], classCount: 2 },
    { name: 'Ms. Davis', subjects: ['Chemistry', 'Biology'], classCount: 2 },
    { name: 'Ms. Davis', subjects: ['Chemistry', 'Biology'], classCount: 2 },
    { name: 'Ms. Davis', subjects: ['Chemistry', 'Biology'], classCount: 2 },
    { name: 'Ms. Davis', subjects: ['Chemistry', 'Biology'], classCount: 2 },
    { name: 'Ms. Davis', subjects: ['Chemistry', 'Biology'], classCount: 2 },
  ]);

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // Function to handle the teacher selection
  const handleTeacherSelect = (teacher) => {
    setSelectedTeacher(teacher);
  };

  // Function to update the timetable with the selected teacher
  const handleAssignTeacher = (dayIndex, slotIndex) => {
    if (!selectedTeacher) return;
    const updatedTimetable = [...timetableData];
    updatedTimetable[dayIndex].schedule[slotIndex].teacher = selectedTeacher.name;
    setTimetableData(updatedTimetable);

    // Update the teacher's class count
    setTeachers((prevTeachers) =>
      prevTeachers.map((t) =>
        t.name === selectedTeacher.name
          ? { ...t, classCount: t.classCount + 1 }
          : t
      )
    );
  };

  return (
    <div className="flex flex-col flex-1 h-full bg-back justify-center">
    
      <TeacherSidebar teachers={teachers} handleTeacherSelect={handleTeacherSelect} />
  
      <div className='flex flex-col justify-center'>
        <h1 className="text-2xl font-bold text-center my-4">Editable Timetable</h1>
        <p className="text-center mb-4">
          Selected Teacher: {selectedTeacher ? selectedTeacher.name : 'None'}
        </p>
        <TimeTableCard />
      </div>
    </div>
  );
};

export default TimeTablePage;
