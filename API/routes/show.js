import express from "express";

const showRouter = express.Router();


//update averageRating for a show
showRouter
    .route("/averageRating/:showID")
        .put((req, res) => {
            res.send(
                `update average rating for show with id ${req.params.showID}`
            );
        });

//crud for a specific show by id
showRouter
    .route("/:showID")
        .get((req, res) => {
            res.send(
                `get show with id ${req.params.showID}`
            )
        })
        .delete((req, res) => {
            res.send(
                `delete show with id ${req.params.showID}`
            )
        })
        .put((req, res) => {
            res.send(
                `update show with id ${req.params.showID}`
            )
        });


//get all shows / create show
showRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all shows"
            );
        })
        .post((req,res) => {
            res.send(
                "create new show"
            );
        });

//


export {
    showRouter
}