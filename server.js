const app = require("./src/helper/app");
const db = require("./src/helper/db");
const config = require("./src/config");

// Initialize routes
require("./src/routes/index.route");

// function to start application
const run = async () => {
  await db.connect(config.DBCONNECTIONURI);
  app.listen(config.PORT, () => {
    console.log(`Server running at port ${config.PORT}`);
  });
};

// fire up application
run();
