import express from "express";

const showListRouter = express.Router();

//get all users
showListRouter.get("/", (req,res) => {
    res.send("list of all users placeholder");
})





export {
    showListRouter
}