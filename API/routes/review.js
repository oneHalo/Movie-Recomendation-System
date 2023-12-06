import express from "express";

const reviewRouter = express.Router();

//get all users
reviewRouter.get("/", (req,res) => {
    res.send("list of all users placeholder");
})





export {
    reviewRouter
}