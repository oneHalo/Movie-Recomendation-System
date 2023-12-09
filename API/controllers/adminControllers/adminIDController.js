import { db } from "../../conector/db.js"


//GET {id}
const 
    getAdminByID = (req, res, adminID) => {
        const 
            q = "SELECT * FROM Admin WHERE AdminID = ?";
        
        db.query(
            q,
            [
                adminID
            ],
            (err, data) => {
                if(err){
                    res.status(400).send(
                        `unable to find admin with id = ${adminID}`
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
    updateAdminByID = (req, res, adminID) => {
        if(
            req.body
            &&
            req.body.firstName
            &&
            req.body.lastName
            &&
            req.body.password
            &&
            req.body.permissions
        ) 
        {
            const
                q = `UPDATE Admin
                SET firstName = ?, lastName = ?, password = ?, permissions = ?
                WHERE AdminID = ?;`;
            
            db.query(
                q, 
                [
                    req.body.firstName,
                    req.body.lastName,
                    req.body.password,
                    req.body.permissions,
                    adminID
                ],
                (err, data) => {
                    if(err){
                        res.status(400).json({success: false, AdminID: adminID})
                    } else {
                        res.status(200).json({success: true, AdminID: adminID});
                    }
                }
            )
        } else {
            res.status(400).send("Missing params for update");
        }
    };

//DELETE {id}
const
    deleteAdminByID = (req, res, adminID) => {
        const 
            q = `DELETE FROM Admin WHERE AdminID = ?`

        db.query(
            q,
            [
                adminID
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false, AdminID: adminID});
                } else {
                    res.status(200).json({success: true, AdminID: adminID});
                }
            }
        )
    }


export {
    getAdminByID,
    updateAdminByID,
    deleteAdminByID
}