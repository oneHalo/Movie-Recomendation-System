import { db } from "../../conector/db.js";


const   
    getActorsInShowByID = (req, res, showID) => {
        const 
            q = `SELECT A.ActorID, A.FirstName, A.LastName
            FROM Actor AS A, ActsIn as I
            WHERE     I.ActorID = A.ActorID
            AND     I.ShowID = ?; `

        db.query(
            q,
            [
                showID
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false});
                    console.log(err);
                } else {
                    res.status(200).json(data);
                }
            }
        )
    }

export{
    getActorsInShowByID
};