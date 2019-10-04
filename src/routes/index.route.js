const app = require("../helper/app");

// Initialize all your routes here
app.use("/admin", require("./admin.route"));
