import express from "express";
import mainRouter from "./routes/index.ts";
import jwt from "jsonwebtoken";
const app = express();

app.use(express.json());
app.use("/api/v1/", mainRouter);

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
