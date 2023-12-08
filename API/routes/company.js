import express from "express";

const companyRouter = express.Router();


//basic crud for production companies
companyRouter
    .route("/:companyID")
        .get((req, res) => {
            res.send(
                `get company with ID ${
                    req.params.companyID
                }`
            )
        })
        .delete((req, res) => {
            res.send(
               `delete company with ID ${
                    req.params.companyID
               } `
            )
        })
        .put((req, res) => {
            res.send(
                `update company with ID ${
                    req.params.companyID
                }`
            )
        })


//get shows
companyRouter
    .route("/:companyID/shows")
        .get((req, res) => {
            res.send(`get all shows for ${
                req.params.companyID
            }`)
        })
        

//get tv shows
companyRouter 
    .route("/:companyid/tvShows")
        .get((req, res) => {
            res.send(
                `get all tv shows for ${
                    req.params.companyid
                }`
            )
        })


//get movies
companyRouter 
    .route("/:companyid/movies")
        .get((req, res) => {
            res.send(
                `get all movies for ${
                    req.params.companyid
                }`
            )
        })


// get all / create
companyRouter
    .route("/")
        .get((req, res) => {
            res.send(
                "get all companies"
            );
        })
        .post((req, res) => {
            res.send(
                "create new comapny"
            );
        })


export {
    companyRouter
}