import express from "express";

const tvShowRouter = express.Router();


//update averageRating for a show
tvShowRouter
    .route("/averageRating/:showID")
        .put((req, res) => {
            res.send(
                `update average rating for tvshow with id ${req.params.showID}`
            );
        });

//crud for a specific show by id
tvShowRouter
    .route("/:showID")
        .get((req, res) => {
            res.send(
                `get tvshow with id ${req.params.showID}`
            )
        })
        .delete((req, res) => {
            res.send(
                `delete tvshow with id ${req.params.showID}`
            )
        })
        .put((req, res) => {
            res.send(
                `update tvshow with id ${req.params.showID}`
            )
        });


//get all shows / create show
tvShowRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all tvshows"
            );
        })
        .post((req,res) => {
            res.send(
                "create new tvshow"
            );
        });

//


export {
    tvShowRouter
}