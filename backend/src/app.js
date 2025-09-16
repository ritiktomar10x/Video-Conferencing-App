import express from "express";
import "dotenv/config";
import {createServer} from "node:http";
import {Server} from "socket.io";
import { connectToSocket } from "./controllers/socketManager.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);
import userRoute from "./routes/user.route.js";

app.set("port",(process.env.PORT || 8080));
app.use(cors());

app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoute);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URL);

}

server.listen(app.get("port"),()=>{
    console.log("Listening to port: 8080");
});


