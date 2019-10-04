import express from "express";
import compression from "compression";

const app = express();

app.use(compression());

export default app;
