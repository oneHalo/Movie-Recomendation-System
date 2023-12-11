import { db } from "../../conector/db.js";

//GET methods

//GET ALL SHOWS
const
    getShowByID = (req, res, ShowID) => {
        const 
            q = `SELECT * FROM Shows WHERE ShowID = ?`

        db.query(
            q,
            [ShowID],
            (err, data) =>{
                if(err){
                    res.status(400).json({success: false})
                } else {
                    res.status(200).json(data);
                }
            }
        )
    };


export{
    getShowByID
}