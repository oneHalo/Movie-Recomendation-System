import express from "express";

const showListRouter = express.Router();

//get all show lists
showListRouter
    .route("/")
        .get((req, res) => {
            res.send("getALLSHowLists");
        })

//watched list 
showListRouter
    .route("/watched/:userID")
        .get((req,res) => {
            res.send("get watched for user " + req.params.userID);
        })
        .put((req,res) => {
            res.send("get watched for user " + req.params.userID);
        })
        .delete((req,res) => {
            res.send("get watched for user " + req.params.userID);
        })
        .post((req,res) => {
            res.send("get watched for user " + req.params.userID);
        })
    
// get show list by id
showListRouter
    .route("/:userID")
        .get((req, res) => {
            res.send("getShow list for user " + req.params.userID);
        })
        .put((req, res) => {
            res.send("getShow list for user " + req.params.userID);
        })
        .delete((req, res) => {
            res.send("getShow list for user " + req.params.userID);
        })
        





export {
    showListRouter
}