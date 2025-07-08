import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes"
import streamRoutes from "./routes/streamRoutes";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/streams" , streamRoutes)


app.get("/", (req , res) => {
	res.send("Streamino backend api is runnning");
});


export default app;



