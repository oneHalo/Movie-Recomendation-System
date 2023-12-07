import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import { adminRouter } from "./routes/admin.js";
import { showListRouter } from "./routes/showList.js";
import { showRouter } from "./routes/shows/show.js";
import { reviewRouter } from "./routes/review.js";
import { directorRouter } from "./routes/director.js";
import { actorRouter } from "./routes/actor.js";
import { companyRouter } from "./routes/company.js";
import { tvShowRouter } from "./routes/shows/tvShow.js";
import { movieRouter } from "./routes/shows/movie.js";

//boiler plate code
dotenv.config()
const port = process.env.PORT;
const app = express();
console.log(`Running on port number ${port}`)




//user router
app.use("/user", userRouter);

//admin router
app.use("/admin", adminRouter);

//production Company router
app.use("/productionCompany", companyRouter);

//showList router
app.use("/showList", showListRouter);

//show router
app.use("/show", showRouter);

//tvShowRouter
app.use("/show/tvShow", tvShowRouter);

//movie Router
app.use("/show/movie", movieRouter)

//review router
app.use("/review", reviewRouter);

//director router
app.use("/director", directorRouter);

//actor router
app.use("/actor", actorRouter);







app.listen(port);