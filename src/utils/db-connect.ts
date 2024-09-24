import mongoose from "mongoose";

const isConnected: {
  connect?: number | null;
} = {};

async function dbConnect() {
  console.log(process.env.MONGO_URI, "mongouri");

  if (isConnected.connect) {
    console.log("database is already connected");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!,{
        dbName:"Time-Table"
    });
    console.log("database is connected successfuly", conn.connection.host);
    isConnected.connect = conn.connection.readyState;
  } catch (error: any) {
    console.log("database connection error ", error.message);
  }
}

export default dbConnect;
