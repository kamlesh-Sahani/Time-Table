import mongoose from "mongoose";

interface ClassAssignedType{
    courseName:string;
    semister:string;
    subject:string;
    time:string;
}
export interface TeacherType{
    _id:string;
    teacherName:string;
    subjects:string[];
    classAssigned:ClassAssignedType[];

}
const teacherSchema = new mongoose.Schema<TeacherType>({
    teacherName:{
        type:String,
        required:[true,"please eneter the teacher name"],
        trim:true
    },
    subjects:{
        type:[String]
    },
    classAssigned:[
        {
            courseName:{
                type:String
            },
            semister:{
                type:String
            },
            subject:{
                type:String
            },
            time:{
                type:String
            }
        }
    ]
},{timestamps:true});


const TeacherModel = mongoose.models?.Teacher as mongoose.Model<TeacherType> || mongoose.model<TeacherType>("Teacher",teacherSchema);
export default TeacherModel;