import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router as userRouter } from "./routes/user";
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRouter); 

mongoose.connect('mongodb+srv://monkeyslapzx:akash123@cluster0.ewzdfcp.mongodb.net/',{dbName: "user-foodapp" // Specify the database name here
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
