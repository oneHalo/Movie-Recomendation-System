import express from "express";

import {
    getActorById
} from "../controllers/actorControllers/actorController.js"

import {
    getActorsInShowByID
} from "../controllers/actorControllers/actsInController.js"

const actorRouter = express.Router();

actorRouter
    .route("/actsInShow/:showID")
        .get((req, res) => {
            getActorsInShowByID(
                req,
                res,
                req.params.showID
            );
        });


actorRouter
    .route("/:actorID")
        .get((req, res) => {
            getActorById(
                req,
                res,
                req.params.actorID
            );
        })


// actorRouter
//     .route("/")
//         .post((req, res) => {
//             res.send(
//                 "create new actor"
//             )
//         })





export {
    actorRouter
}