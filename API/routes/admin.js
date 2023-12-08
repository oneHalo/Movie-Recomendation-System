import express from "express";

const adminRouter = express.Router();

//get, update and delete for /user/id
adminRouter
    .route("/:adminID")
        .get((req,res) => {
            res.send(
                `get admin with id ${req.params.adminID} `
            );
        })
        .put((req,res) => {
            res.send(`update admin with id ${req.params.adminID} `)
        })
        .delete((req,res) => {
            res.send(`delete admin with id ${req.params.adminID} `)
        })

//get all admins / create admin
adminRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all admin"
            );
        })
        .post((req, res) => {
            res.send(
                "createNewAdmin"
            )
        })


export {
    adminRouter
}