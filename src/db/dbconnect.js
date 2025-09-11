import mongoose from "mongoose";

export default async function dbconnect() {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
