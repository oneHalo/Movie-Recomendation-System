import express from "express";

const actorRouter = express.Router();

//get all users
actorRouter.get("/", (req,res) => {
    res.send("list of all actors placeholder");
})





export {
    actorRouter
}