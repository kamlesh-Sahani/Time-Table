const TimeTableCard = () => {
  const TimeTableData = [
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
    {
      day: 'Wednesday',
      schedule: [
        { subject: 'English', teacher: 'Mr. Clark' },
        { subject: 'History', teacher: 'Ms. White' },
        { subject: 'Break', teacher: '—' },
        { subject: 'Geography', teacher: 'Dr. Harris' },
      ],
    },
  ];

  return (
    <div className="mx-auto p-8 w-full">
      <table className="border-separate border-spacing-2 w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-10 py-5 rounded text-left text-sm font-semibold uppercase tracking-wider">
              Day/Time
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              9:00 to 9:50
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              9:50 to 10:40
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Break (10min)
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              10:50 to 11:40
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {TimeTableData.map((dayData, index) => (
            <tr key={index} className="hover:bg-blue-100">
              <td className="px-10 py-6 whitespace-nowrap text-sm text-gray-900 bg-[#D8EDF8] rounded border-spacing-5 text-[19px] font-semibold cursor-pointer">
                {dayData.day}
              </td>
              {dayData.schedule.map((slot, i) => (
                <td key={i} className="px-10 py-4 whitespace-nowrap text-sm text-gray-900 bg-[#D8EDF8] rounded border-spacing-5 text-[19px] font-medium cursor-pointer hover:shadow-md hover:bg-blue-200 transition-all duration-300">
                  <div className="text-base font-semibold">{slot.subject}</div>
                  <div className="text-sm text-gray-600 italic">{slot.teacher}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTableCard;
