import express from "express";

import {
    createPlanToWatchList,
    createWatchedList,
    createWatchingList
} from "../controllers/showListControllers/showListController.js"

import {
    getPlanToWatchByID,
    getWatchedByID,
    getWatchingByID
} from "../controllers/showListControllers/showListIDController.js"

import {
    getShowsFromListByID,
    addShowToList
} from "../controllers/showListControllers/listHasController.js"

const showListRouter = express.Router();


//watched list 
showListRouter
    .route("/watched/:userID")
        .get((req,res) => {
            getWatchedByID(
                req,
                res,
                req.params.userID
            );
        })
        .post((req, res) => {
            createWatchedList(
                req,
                res,
                req.params.userID
            );
        })     
        
//watching list 
showListRouter
    .route("/watching/:userID")
        .get((req,res) => {
            getWatchingByID(
                req,
                res,
                req.params.userID
            );
        })
        .post((req, res) => {
            createWatchingList(
                req,
                res,
                req.params.userID
            );
        })       

//plan to watch list 
showListRouter
    .route("/planToWatch/:userID")
        .get((req,res) => {
            getPlanToWatchByID(
                req,
                res,
                req.params.userID
            );
        })
        .post((req, res) => {
            createPlanToWatchList(
                req,
                res,
                req.params.userID
            );
        })   
        
//listHas
showListRouter
    .route("/listHas/:userID")
        .get((req, res) => {
            if(req.body.type === null){
                res.status(400).send("need to include list type");
            } else {
                // return all show id's that are in the list
                getShowsFromListByID(
                    req,
                    res,
                    req.params.userID
                )
            }
        })
        .post((req, res) => {
            if(
                req.body.type === null
                ||
                req.body.showID === null
            ){
                res.status(400).send("need to include list type and showID");
            } else {
                // add to listHas the the showID
                addShowToList(
                    req,
                    res,
                    req.params.userID
                );
            }
        })

        





export {
    showListRouter
}