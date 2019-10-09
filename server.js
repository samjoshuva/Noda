import app from "./server/app";
import { connect } from "./server/db";
import { DBCONNECTIONURI, PORT } from "./src/config";

// Initialize routes
import "./src/urls";

// Function to start application
const run = async () => {
  require("./server/db");

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
};

// Fire up application
run();
