import mongoose, { Model } from "mongoose";
export interface DepartmentType {
  _id: mongoose.Schema.Types.ObjectId;
  departmentName: string;
  teachers: mongoose.Schema.Types.ObjectId[];
  courses: {
    courseName: string;
    semisters: {
      semister: number;
      subjects: Array<string>;
    }[];
    noOfSections: number;
    noOfSemister: number;
  }[];
}
const departmentSchema = new mongoose.Schema<DepartmentType>(
  {
    departmentName: {
      type: String,
      required: [true, "please enter the department name"],
      unique: true,
    },
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      }
    ],
    courses: [
      {
        courseName: {
          type: String,
          required: [true, "please enter the course name"],
          unique: true,
        },
        noOfSemister: {
          type: Number,
          required: [true, "please eneter the number of semister"],
        },
        semisters: [
          {
            semister: Number,
            subjects: [String],
          },
        ],
        noOfSections: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const DepartmentModel =
  (mongoose.models?.Department as Model<DepartmentType>) ||
  mongoose.model("Department", departmentSchema);

export default DepartmentModel;
