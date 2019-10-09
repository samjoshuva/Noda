import app from "../server/app";

// Initialize all your routes here
app.use("/admin", require("./admin/route").default);
