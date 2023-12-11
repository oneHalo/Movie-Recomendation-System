import express from "express";
import { 
    getAllUsers,
    createNewUser,
    checkCredentials
} from "../controllers/userController/userController.js";
import{
    getUserByID, 
    updateUserByID,
    deleteUserByID
} from "../controllers/userController/userIDController.js"


const userRouter = express.Router();

userRouter
    .route("/login")
        .post((req, res) => {
            checkCredentials(req, res);
        });

//get, update and delete for /user/id
userRouter
    .route("/:userID")
        .get((req,res) => {
            getUserByID(
                req,
                res,
                req.params.userID
            );
            res.status(400);
        })
        //not sure if these belong here or with / according to best practices
        .put((req,res) => {
            updateUserByID(
                req,
                res, 
                req.params.userID
            );
        })
        .delete((req,res) => {
            deleteUserByID(
                req,
                res,
                req.params.userID
            );
        })

//get all users / create new user
//CREATE USER requires :
/*
firstName
lastName
email
password
*/
userRouter
    .route("/")
        .get((req, res) => {
            getAllUsers(req, res);
        })
        .post((req, res) => {
            createNewUser(req, res);
        })


export {
    userRouter
}