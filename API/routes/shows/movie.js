import express from "express";

const movieRouter = express.Router();


//update averageRating for a show
movieRouter
    .route("/averageRating/:showID")
        .put((req, res) => {
            res.send(
                `update average rating for movie with id ${req.params.showID}`
            );
        });

//crud for a specific show by id
movieRouter
    .route("/:showID")
        .get((req, res) => {
            res.send(
                `get movie with id ${req.params.showID}`
            )
        })
        .delete((req, res) => {
            res.send(
                `delete movie with id ${req.params.showID}`
            )
        })
        .put((req, res) => {
            res.send(
                `update movie with id ${req.params.showID}`
            )
        });


//get all shows / create show
movieRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all movies"
            );
        })
        .post((req,res) => {
            res.send(
                "create new movie"
            );
        });

//


export {
    movieRouter
}