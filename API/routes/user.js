import express from "express";

const userRouter = express.Router();

//get, update and delete for /user/id
userRouter
    .route("/:userID")
        .get((req,res) => {
            res.send(
                `get user with id ${req.params.userID} `
            );
        })
        //not sure if these belong here or with / according to best practices
        .put((req,res) => {
            res.send(`update user with id ${req.params.userID} `)
        })
        .delete((req,res) => {
            res.send(`delete user with id ${req.params.userID} `)
        })

//get all users / create new user
userRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all users"
            );
        })
        .post((req, res) => {
            res.send(
                "createNewUser"
            )
        })


export {
    userRouter
}