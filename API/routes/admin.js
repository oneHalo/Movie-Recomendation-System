import express from "express";
import {
    getAllAdmins,
    createNewAdmin
} from "../controllers/adminControllers/adminController.js"
import {
    getAdminByID,
    updateAdminByID,
    deleteAdminByID
} from "../controllers/adminControllers/adminIDController.js";

const adminRouter = express.Router();

//get, update and delete for /user/id
adminRouter
    .route("/:adminID")
        .get((req,res) => {
            getAdminByID(
                req,
                res,
                req.params.adminID
            );             
        })
        .put((req,res) => {
            updateAdminByID(
                req,
                res,
                req.params.adminID
            ); 
        })
        .delete((req,res) => {
            deleteAdminByID(
                req,
                res,
                req.params.adminID
            );
        })

//get all admins / create admin
adminRouter
    .route("/")
        .get((req, res) => {
            getAllAdmins(
                req,
                res
            );
        })
        .post((req, res) => {
            createNewAdmin(
                req,
                res
            ); 
        })


export {
    adminRouter
}