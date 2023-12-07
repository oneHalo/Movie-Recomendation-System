import express from "express";

const directorRouter = express.Router();


directorRouter
    .route("/:directorID")
        .get((req, res) => {
            res.send(
                `get director with id ${req.params.directorID}`
            )
        })
        .delete((req, res) => {
            res.send(
                `delete director with id ${req.params.directorID}`
            )
        })
        .put((req, res) => {
            res.send(
                `update director with id ${req.params.directorID}`
            )
        })

directorRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all directors"
            )
        })
        .post((req, res) => {
            res.send(
                "create new directors"
            )
        })





export {
    directorRouter
}