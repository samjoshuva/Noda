import app from "../helper/app";
import { render } from "../controllers/index.ctrl";

// Initialize all your routes here
app.use("/admin", require("./admin.route").default);

app.get("/", render);
