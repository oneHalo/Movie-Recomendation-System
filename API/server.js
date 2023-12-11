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
import { searchRouter } from "./routes/search.js";
import { db } from "./conector/db.js";

//boiler plate code
dotenv.config()
const port = process.env.PORT;
const app = express();
console.log(`Running on port number ${port}`)

// allow cross acess
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());

//user router
app.use("/users", userRouter);

//admin router
app.use("/admin", adminRouter);

//production Company router
app.use("/productionCompany", companyRouter);

//showList router
app.use("/showList", showListRouter);

//show router
app.use("/shows", showRouter);

//tvShowRouter
app.use("/shows/tvShow", tvShowRouter);

//movie Router
app.use("/shows/movie", movieRouter)

//review router
app.use("/review", reviewRouter);

//director router
app.use("/director", directorRouter);

//actor router
app.use("/actor", actorRouter);

//search
app.use("/search", searchRouter);







app.listen(port);