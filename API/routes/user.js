import express from "express";

const userRouter = express.Router();

//get all users
userRouter.get("/", (req,res) => {
    res.send("list of all users placeholder");
})





export {
    userRouter
}