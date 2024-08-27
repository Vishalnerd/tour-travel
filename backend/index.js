import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


//database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      
    });
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log("Failed to connect to Mongodb", error);
  }
};

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent and received
}));
app.use(cookieParser());
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users",userRoute);
app.use("/api/v1/review",reviewRoute);
app.use("/api/v1/booking",bookingRoute);

app.listen(port, () => {
  connect();
  console.log("server running on port", port);
});
