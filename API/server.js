import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import { adminRouter } from "./routes/admin.js";
import { showListRouter } from "./routes/showList.js";
import { showRouter } from "./routes/show.js";
import { reviewRouter } from "./routes/review.js";
import { directorRouter } from "./routes/director.js";
import { actorRouter } from "./routes/actor.js";

//boiler plate code
dotenv.config()
const port = process.env.PORT;
const app = express();
console.log(`Running on port number ${port}`)




//user router
app.use("/user", userRouter);

//admin router
app.use("/admin", adminRouter);

//showList router
app.use("/showList", showListRouter);

//show router
app.use("/show", showRouter);

//review router

app.use("/review", reviewRouter);

//director router
app.use("/director", directorRouter);

//actor router
app.use("/actor", actorRouter);







app.listen(port);