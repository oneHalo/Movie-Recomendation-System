import { db } from "../../conector/db.js"


//GET
const 
    getAllAdmins = (req, res) => {
        const q = "SELECT * FROM Admin";

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
    createNewAdmin = (req, res) => {
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
            &&
            req.body.permissions
        ){
            //If valid we insert
            const q = `
                INSERT INTO Admin (email, password, firstName, lastName, permissions) 
                VALUES (?, ?, ?, ?, ?);`

            db.query(
                q, 
                [
                    req.body.email,
                    req.body.password,
                    req.body.firstName,
                    req.body.lastName,
                    req.body.permissions
                ],
                (err, data) => {
                    if(err){
                        res.status(400).json({success: false});
                    }
                    else{
                        res.status(200).json({success: true});
                    }
                }
            );
        }
        else {
            res.status(400).send("invalid arguments for createNewUser");
        }
        console.log(req.body);
    };

export {
    getAllAdmins,
    createNewAdmin
};