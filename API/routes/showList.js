import express from "express";

const showListRouter = express.Router();

//get all show lists
showListRouter.get("/", (req,res) => {
    res.send("list of all users placeholder");
})





export {
    showListRouter
}