import TimeTableCard from "@/components/TimeTableCard";
import TeacherSidebar from "@/components/TeacherSidebar";
const TimeTablePage = () => {
  return (
    <div className="flex flex-col flex-1 h-full bg-back justify-center">
      <TeacherSidebar />
      <div>
      </div>
      <div className="flex flex-col  justify-center">
        <h1 className="text-2xl font-bold text-center my-4">
          Editable Timetable
        </h1>
        <TimeTableCard />
      </div>
    </div>
  );
};

export default TimeTablePage;
