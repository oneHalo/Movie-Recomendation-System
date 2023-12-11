import express from "express";

import {
    getDirectorById
} from "../controllers/directorControllers/directorController.js";

import {
    getDirectorsOfShowByID
} from "../controllers/directorControllers/directsController.js";

const directorRouter = express.Router();


directorRouter
    .route("/directsShow/:directorID")
        .get((req, res) => {
            getDirectorsOfShowByID(
                req,
                res,
                req.params.directorID
            );
        })

directorRouter
    .route("/:directorID")
        .get((req, res) => {
            getDirectorById(
                req,
                res,
                req.params.directorID
            ) ;
        })
        

// directorRouter
//     .route("/")
//         .post((req, res) => {
//             res.send(
//                 "create new directors"
//             )
//         })





export {
    directorRouter
}