import express from "express";
import {
    getAllShows
} from "../../controllers/showControllers/showController.js"
import{
    getShowByID
} from "../../controllers/showControllers/showIDController.js"

const showRouter = express.Router();



//crud for a specific show by id
showRouter
    .route("/:showID")
        .get((req, res) => {
            getShowByID(
                req,
                res,
                req.params.showID
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
            getAllShows(
                req,
                res
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