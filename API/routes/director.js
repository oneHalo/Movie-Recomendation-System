import express from "express";

const directorRouter = express.Router();

//get all users
directorRouter.get("/", (req,res) => {
    res.send("list of all users placeholder");
})





export {
    directorRouter
}