import { db } from "../../conector/db.js";


//get all show id's for list
const
    getShowsFromListByID = (req, res, userID) =>{
        const
            q = `SELECT * FROM ListHas as L, Shows as S
                WHERE   L.UserID = ?
                AND     L.ShowID = S.ShowID
                AND     L.ListName = ?;` 

        db.query(
            q,
            [
                userID,
                req.body.type
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false});
                    console.log(err);
                } else {
                    console.log("successs")
                    console.log(req.body.type);
                    console.log(userID);
                    res.status(200).json(data);
                }
            }
        )
        
    };

const
    addShowToList = (req, res, userID) => {
        const
            q = `INSERT INTO ListHas(UserID, ListName, ShowID)
            VALUES (?, ?, ?);`
        
        db.query(
            q,
            [
                userID,
                req.body.type,
                req.body.showID
            ],
            (err, data) => {
                if(err) {
                    res.status(400).json({success: false});
                    console.log(err);
                } else {
                    res.status(200).json({success: true});
                }
            }
        )
    };

export{
    getShowsFromListByID,
    addShowToList
}
