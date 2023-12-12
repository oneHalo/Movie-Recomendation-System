import express from "express";

import {
    createReview,
    getReviewsOnShow
} from "../controllers/reviewControllers/reviewController.js"

const reviewRouter = express.Router();

//create review
reviewRouter
    .route("/")
        .post((req, res) => {
            if(
                req.body.UserID === null
                ||
                req.body.ShowID === null
            ){
                res.status(400).json({succcess: false});
            }
            else{
                createReview(
                    req,
                    res
                );
            }
        })

//get reviews for show
reviewRouter
    .route("/:showID")
        .get((req, res) => {
            getReviewsOnShow(
                req,
                res,
                req.params.showID
            )
        })


export {
    reviewRouter
}