import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

// Define types for timetable data
type ScheduleSlot = {
  subject: string;
  teacher: string;
};

type TimeTableDay = {
  day: string;
  schedule: ScheduleSlot[];
};

const TimeTableTabular: React.FC = () => {
  // Timetable state
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
        schedule: Array(headings.length).fill({
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
    <div className="p-8 w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                Day/Time
              </th>
              {headings.map((heading, colIndex) => (
                <th
                  key={colIndex}
                  className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
                >
                  {editHeadingIndex === colIndex ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={tempHeadingValue}
                        onChange={handleHeadingInputChange}
                        className="mb-1 px-2 py-1 text-black w-full rounded"
                      />
                      <button
                        onClick={() => handleHeadingSave(colIndex)}
                        className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>{heading}</span>
                      <CiEdit
                        onClick={() => handleHeadingDoubleClick(colIndex)}
                        size={20}
                        className="ml-2 cursor-pointer"
                      />
                    </div>
                  )}
                  {colIndex === headings.length - 1 && (
                    <button
                      className="w-full text-white flex justify-start hover:text-green-500"
                      onClick={addColumn}
                    >
                      <AiOutlinePlus size={20} />
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-100 divide-y divide-gray-200">
            {timeTableData.map((dayData, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-900 bg-[#D8EDF8]">
                  {dayData.day}
                  {rowIndex === timeTableData.length - 1 && (
                    <button
                      className="flex justify-start mt-2 text-blue-500 hover:text-green-500"
                      onClick={addRow}
                    >
                      <AiOutlinePlus size={20} />
                    </button>
                  )}
                </td>
                {dayData.schedule.map((slot, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-300 px-6 py-4 text-sm text-gray-900 bg-[#D8EDF8]"
                    onDoubleClick={() => handleDoubleClick(rowIndex, colIndex)}
                  >
                    {editCell.row === rowIndex && editCell.col === colIndex ? (
                      <div className="flex flex-col w-[90%]">
                        <input
                          type="text"
                          value={tempValue.subject}
                          onChange={(e) => handleInputChange(e, "subject")}
                          className="mb-1 px-2 py-1 rounded"
                        />
                        <input
                          type="text"
                          value={tempValue.teacher}
                          onChange={(e) => handleInputChange(e, "teacher")}
                          className="px-2 py-1 rounded"
                        />
                        <button
                          onClick={() => handleSave(rowIndex, colIndex)}
                          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="text-base font-semibold">
                          {slot.subject}
                        </div>
                        <div className="text-sm text-gray-600 italic">
                          {slot.teacher}
                        </div>
                      </div>
                    )}
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

export default TimeTableTabular;
