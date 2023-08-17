import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import connectDB from "./database/connectDB.js";

dotenv.config();
const app = express();
//Url frontend ====>

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));



// wichtiger MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
// app.get("/", (req, res) => {
//     res.send("Hallo von GET");
//   });

app.use("/user", UserRouter);
app.use("/products", productRouter);
app.post("/user/login", UserRouter);
const port = process.env.PORT || 5030;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Verbindung mit MongoDB hat geklappt");
    app.listen(port, () => {
      console.log("Server läuft auf: ", port);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
