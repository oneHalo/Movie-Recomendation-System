import express from "express";

const actorRouter = express.Router();


actorRouter
    .route("/:actorID")
        .get((req, res) => {
            res.send(
                `get actor with id ${req.params.actorID}`
            )
        })
        .delete((req, res) => {
            res.send(
                `delete actor with id ${req.params.actorID}`
            )
        })
        .put((req, res) => {
            res.send(
                `update actor with id ${req.params.actorID}`
            )
        })

actorRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all actors"
            )
        })
        .post((req, res) => {
            res.send(
                "create new actor"
            )
        })





export {
    actorRouter
}