import { db } from "../../conector/db.js";


const   
    getDirectorsOfShowByID = (req, res, showID) => {
        const 
            q = `SELECT D.DirectorID, D.FirstName, D.LastName
            FROM Director AS D, Directs as I
            WHERE     I.DirectorID = D.DirectorID
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
    getDirectorsOfShowByID
};