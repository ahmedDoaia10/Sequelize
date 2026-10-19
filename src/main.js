import express from "express";
import { PORT } from "./config/config.service.js";
import { connect } from "./db/connection.js";
import { userModel } from "./db/model/user.model.js";
import { blogModel } from "./db/model/blog.model.js";
import { userRouter , blogRouter } from "./module/index.js";
import { globalErrorHandler } from "./common/index.js";


const app = express();

await connect();
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);



app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

