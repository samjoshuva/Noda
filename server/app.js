import express from "express";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());

app.use((req, res, next) => {
  console.log(
    `${req.method}  ${req.originalUrl}   ${new Date().toISOString()}`
  );
  next();
});

export default app;
