import mongoose from "mongoose";
import { DBCONNECTIONURI } from "../src/config";

let db;

const connect = async () => {
  db = await mongoose.connect(DBCONNECTIONURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  console.log("Connected to mongodb");
};

connect();

export default db;
