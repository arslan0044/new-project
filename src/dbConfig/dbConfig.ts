import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB Connected SucessFully");
    });
    connection.on("error", (err) => {
      console.log("MongoDB Connection Error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Somthing is Wrong");
    console.log(error);
  }
}
