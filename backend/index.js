const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
app.use(express.json());
app.use("/", mainRouter);
app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
