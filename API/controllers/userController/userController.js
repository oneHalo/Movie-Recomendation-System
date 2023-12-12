import { db } from "../../conector/db.js"

import jwt from "jsonwebtoken";

//GET
const 
    getAllUsers = (req, res) => {
        const q = "SELECT * FROM UserClient";

        db.query(q, (err, data) => {
            if(err){
                console.log("error connecting to db");
            }
            else {
                res.status(200).json(data);
            }
        })
    };

//POST
const 
    createNewUser = (req, res) => {
        //check req for required fields
        
        if(
            req.body
            &&
            req.body.firstName
            &&
            req.body.lastName
            &&
            req.body.email
            &&
            req.body.password
        ){
            //If valid we insert
            const q = `
                INSERT INTO UserClient (email, password, firstName, lastName) 
                VALUES (?, ?, ?, ?);`

            db.query(
                q, 
                [
                    req.body.email,
                    req.body.password,
                    req.body.firstName,
                    req.body.lastName
                ],
                (err, data) => {
                    if(err){
                        res.send(err);
                    }

                }
            );

        }
        else {
            res.status(400).send("invalid arguments for createNewUser");
        }
        console.log(req.body);
    };

const
    checkCredentials = (req, res) => {
        
        if(
            req.body.email
            &&
            req.body.password
        ){
            const q = 
                `SELECT * FROM UserClient WHERE email = ? AND password = ?;`

            db.query(
                q,
                [
                    req.body.email,
                    req.body.password
                ],
                (err, data) => {
                    if(err){
                        console.log(err);
                        res.status(400).send("error logging in user");
                    }
                    else {
                        if(data.length === 0){
                            res.status(400).json({success: false, UserID: -1})
                        }
                        else{
                            res.status(200).json({success: true, UserID: data[0].UserID})
                        }
                    }
                }
            )
        }       
    }

export {
    getAllUsers,
    createNewUser,
    checkCredentials
};