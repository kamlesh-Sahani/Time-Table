"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"; // Use a plus icon from react-icons
import { CiEdit } from "react-icons/ci";
import { CiViewTable } from "react-icons/ci";
import { FaTable } from "react-icons/fa";
import Link from "next/link";
// Define types for timetable data
type ScheduleSlot = {
  subject: string;
  teacher: string;
};

type TimeTableDay = {
  day: string;
  schedule: ScheduleSlot[];
};

const TimeTableCard: React.FC = () => {
  // Timetable state
  const [selectedIcon, setSelectedIcon] = useState(false);
  const [timeTableData, setTimeTableData] = useState<TimeTableDay[]>([
    {
      day: "Monday",
      schedule: [
        { subject: "Math", teacher: "Mr. John" },
        { subject: "C++", teacher: "Ms. Smith" },
        { subject: "Break", teacher: "—" },
        { subject: "Python", teacher: "Dr. Brown" },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        { subject: "Physics", teacher: "Mr. Johnson" },
        { subject: "Chemistry", teacher: "Ms. Davis" },
        { subject: "Break", teacher: "—" },
        { subject: "Biology", teacher: "Dr. Wilson" },
      ],
    },
    {
      day: "Wednesday",
      schedule: [
        { subject: "English", teacher: "Mr. Clark" },
        { subject: "History", teacher: "Ms. White" },
        { subject: "Break", teacher: "—" },
        { subject: "Geography", teacher: "Dr. Harris" },
      ],
    },
  ]);

  // State to track editing of cells
  const [editCell, setEditCell] = useState<{
    row: number | null;
    col: number | null;
  }>({
    row: null,
    col: null,
  });

  // State for storing the temporary input value during editing
  const [tempValue, setTempValue] = useState<ScheduleSlot>({
    subject: "",
    teacher: "",
  });

  // Editable headings (time slots)
  const [headings, setHeadings] = useState<string[]>([
    "9:00 to 9:50",
    "10:00 to 10:50",
    "11:00 to 11:50",
    "12:00 to 12:50",
  ]);

  // State for editing heading
  const [editHeadingIndex, setEditHeadingIndex] = useState<number | null>(null);
  const [tempHeadingValue, setTempHeadingValue] = useState<string>("");

  // Add a new row
  const addRow = () => {
    setTimeTableData([
      ...timeTableData,
      {
        day: "New Day",
        schedule: Array(timeTableData[0].schedule.length).fill({
          subject: "New Subject",
          teacher: "New Teacher",
        }),
      },
    ]);
  };

  // Add a new column
  const addColumn = () => {
    setHeadings([...headings, "New Time Slot"]);
    setTimeTableData(
      timeTableData.map((dayData) => ({
        ...dayData,
        schedule: [
          ...dayData.schedule,
          { subject: "New Subject", teacher: "New Teacher" },
        ],
      }))
    );
  };

  // Handle double-click to make the cell editable
  const handleDoubleClick = (rowIndex: number, colIndex: number) => {
    setEditCell({ row: rowIndex, col: colIndex });
    setTempValue({
      subject: timeTableData[rowIndex].schedule[colIndex].subject,
      teacher: timeTableData[rowIndex].schedule[colIndex].teacher,
    });
  };

  // Handle input change for cells
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ScheduleSlot
  ) => {
    setTempValue({ ...tempValue, [field]: e.target.value });
  };

  // Handle save after editing cells
  const handleSave = (rowIndex: number, colIndex: number) => {
    const updatedData = [...timeTableData];
    updatedData[rowIndex].schedule[colIndex] = {
      subject: tempValue.subject,
      teacher: tempValue.teacher,
    };
    setTimeTableData(updatedData);
    setEditCell({ row: null, col: null }); // Exit edit mode
  };

  // Handle double-click to edit heading
  const handleHeadingDoubleClick = (colIndex: number) => {
    setEditHeadingIndex(colIndex);
    setTempHeadingValue(headings[colIndex]);
  };

  // Handle input change for heading
  const handleHeadingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempHeadingValue(e.target.value);
  };

  // Handle save after editing heading
  const handleHeadingSave = (colIndex: number) => {
    const updatedHeadings = [...headings];
    updatedHeadings[colIndex] = tempHeadingValue;
    setHeadings(updatedHeadings);
    setEditHeadingIndex(null); // Exit edit mode
  };

  return (
    <div className="mx-auto p-8 w-full">
      <div className="sm:mx-3 max-sm:ml-3 flex justify-between">
        <div className="flex gap-2 sm:gap-4 justify-center items-center">
          <p className="text-xl">Change View:</p>

          <CiViewTable onClick={() => setSelectedIcon(true)} size={24} />
          <FaTable onClick={() => setSelectedIcon(false)} size={24} />
        </div>
        <div className="flex justify-end">
          <Link href="/addtable">
            <button className="bg-white text-black sm:p-3 max-sm:hidden mb-3 rounded-md">
              Add New Timetable
            </button>
            <button className="bg-white text-black py-1 px-4 rounded-md sm:hidden"><span className="text-xl p-1">+</span>Table</button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
      <table
        className={`${
          selectedIcon
            ? "min-w-full border-collapse  border border-gray-300"
            : "border-separate border-spacing-2 w-full"
        }`}
      >
        <thead className="bg-blue-600 text-white">
          <tr>
            <th
              className={`${
                selectedIcon
                  ? "border border-gray-300 px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                  : "px-10 py-5 rounded text-left text-sm font-semibold uppercase tracking-wider"
              }`}
            >
              Day/Time
            </th>
            {headings.map((heading, colIndex) => (
              <th
                key={colIndex}
                className={`${
                  selectedIcon
                    ? "border border-gray-300 px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                    : "px-6 py-3  text-left text-sm font-semibold uppercase tracking-wider"
                }`}
              >
                {editHeadingIndex === colIndex ? (
                  <div className={`${selectedIcon ? "flex items-center" : ""}`}>
                    <input
                      type="text"
                      value={tempHeadingValue}
                      onChange={handleHeadingInputChange}
                      className={`${
                        selectedIcon
                          ? "mb-1 px-2 py-1 text-black w-full rounded"
                          : "mb-1 px-2 py-1 text-black w-full rounded"
                      }`}
                    />
                    <button
                      onClick={() => handleHeadingSave(colIndex)}
                      className={`${
                        selectedIcon
                          ? "ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                          : "mt-1 px-3 py-1 bg-black w-full text-white rounded"
                      }`}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div
                    className={`${
                      selectedIcon
                        ? "flex items-center"
                        : "flex justify-between"
                    }`}
                  >
                    <span>{heading}</span>
                    <CiEdit
                      onClick={() => handleHeadingDoubleClick(colIndex)}
                      size={24}
                    />
                  </div>
                )}
                {colIndex === headings.length - 1 && (
                  <button
                    className={`${
                      selectedIcon
                        ? "w-full text-white flex justify-start hover:text-green-500"
                        : " w-full text-white flex justify-start hover:text-green-500"
                    }`}
                    onClick={addColumn}
                  >
                    <AiOutlinePlus size={24} />
                  </button>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={`${
            selectedIcon
              ? "bg-gray-100 divide-y divide-gray-200"
              : "bg-gray-100 divide-y divide-gray-200"
          }`}
        >
          {timeTableData.map((dayData, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-blue-100">
              <td
                className={`${
                  selectedIcon
                    ? "border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-900 bg-[#D8EDF8]"
                    : "px-10 py-6 whitespace-nowrap text-sm text-gray-900 bg-[#D8EDF8] rounded border-spacing-5 text-[19px] font-semibold cursor-pointer"
                }`}
              >
                {dayData.day}
                {/* Row Add Icon */}
                {rowIndex === timeTableData.length - 1 && (
                  <button
                    className={`${
                      selectedIcon
                        ? "flex justify-start mt-2 text-blue-500 hover:text-green-500"
                        : " flex justify-start mt-3 w-full text-blue-500 hover:text-green-500"
                    }`}
                    onClick={addRow}
                  >
                    <AiOutlinePlus size={24} />
                  </button>
                )}
              </td>
              {dayData.schedule.map((slot, colIndex) => (
                <td
                  key={colIndex}
                  className={`${
                    selectedIcon
                      ? "border border-gray-300 px-6 py-4 text-sm text-gray-900 bg-[#D8EDF8]"
                      : "px-10 py-4 whitespace-nowrap text-sm text-gray-900 bg-[#D8EDF8] rounded border-spacing-5 text-[19px] font-medium cursor-pointer hover:shadow-md hover:bg-blue-200 transition-all duration-300"
                  }`}
                >
                  <div className="flex justify-between gap-4">
                    {editCell.row === rowIndex && editCell.col === colIndex ? (
                      <div className="flex w-[90%] flex-col">
                        <input
                          type="text"
                          value={tempValue.subject}
                          onChange={(e) => handleInputChange(e, "subject")}
                          className={`${
                            selectedIcon
                              ? "px-2 py-1 rounded"
                              : "mb-1 px-2 py-1 w-full rounded"
                          }`}
                        />
                        <input
                          type="text"
                          value={tempValue.teacher}
                          onChange={(e) => handleInputChange(e, "teacher")}
                          className={`${
                            selectedIcon
                              ? "px-2 py-1 rounded"
                              : "px-2 py-1 w-full rounded"
                          }`}
                        />
                        <button
                          onClick={() => handleSave(rowIndex, colIndex)}
                          className={`${
                            selectedIcon
                              ? "mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                              : "mt-1 px-3 py-1 bg-blue-500 w-full text-white rounded"
                          }`}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div
                          className={`${
                            selectedIcon
                              ? "text-base font-semibold"
                              : "text-base font-semibold"
                          }`}
                        >
                          {slot.subject}
                        </div>
                        <div
                          className={`${
                            selectedIcon
                              ? "text-sm text-gray-600 italic"
                              : "text-sm text-gray-600 italic"
                          }`}
                        >
                          {slot.teacher}
                        </div>
                      </div>
                    )}
                    <CiEdit
                      size={24}
                      onClick={() => handleDoubleClick(rowIndex, colIndex)}
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TimeTableCard;
