import app from "./src/helper/app";
import db from "./src/helper/db";
import { DBCONNECTIONURI, PORT } from "./src/config";
import express from "express";
import path from "path";

app.use(express.static("public"));
// Initialize routes
import "./src/routes/index.route";

// function to start application
const run = async () => {
  await db.connect(DBCONNECTIONURI);

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
};

// fire up application
run();
