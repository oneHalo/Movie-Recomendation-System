import express from "express";

const showRouter = express.Router();

//get all users
showRouter.get("/", (req,res) => {
    res.send("list of all users placeholder");
})





export {
    showRouter
}