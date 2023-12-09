import { db } from "../../conector/db.js"


//GET {id}
const 
    getUserByID = (req, res, userID) => {
        const 
            q = "SELECT * FROM UserClient WHERE UserID = ?";
        
        db.query(
            q,
            [
                userID
            ],
            (err, data) => {
                if(err){
                    res.status(400).send(
                        `unable to find user with id = ${userID}`
                    );
                }
                else {
                    res.status(200).json(data);
                }
            }
        );

    };

//PUT {id}
const
    updateUserByID = (req, res, userID) => {
        if(
            req.body
            &&
            req.body.firstName
            &&
            req.body.lastName
            &&
            req.body.password
        ) 
        {
            const
                q = `UPDATE UserClient
                SET firstName = ?, lastName = ?, password = ?
                WHERE UserID = ?;`;
            
            db.query(
                q, 
                [
                    req.body.firstName,
                    req.body.lastName,
                    req.body.password,
                    userID
                ],
                (err, data) => {
                    if(err){
                        res.status(400).json({success: false, UserID: userID})
                    } else {
                        res.status(200).json({success: true, UserID: userID});
                    }
                }
            )
        } else {
            res.status(400).send("Missing params for update");
        }
    };

//DELETE {id}
const
    deleteUserByID = (req, res, userID) => {
        const 
            q = `DELETE FROM UserClient WHERE UserID = ?`

        db.query(
            q,
            [
                userID
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false, UserID: userID});
                } else {
                    res.status(200).json({success: true, UserID: userID});
                }
            }
        )
    }


export {
    getUserByID,
    updateUserByID,
    deleteUserByID
}