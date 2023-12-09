import { db } from "../../conector/db.js";

//GET methods

//GET ALL SHOWS
const
    getAllShows = (req, res) => {
        const 
            q = `SELECT * FROM Shows`

        db.query(
            q,
            [],
            (err, data) =>{
                if(err){
                    res.status(400).json({success: false})
                } else {
                    res.status(200).json(data);
                }
            }
        )
    };

const
    createNewShow = (req, res) => {
        if(
            req.body
            &&
            req.body.title
            &&
            req.body.releaseData
            &&
            req.body.description
            &&
            req.body.companyName
        ) {
            const 
                q = `INSERT INTO Shows (Title, ReleaseDate, AverageRating, Description, CompanyName)
                        VALUES (?, ?, 0.0, ?, ?);`
        }
    };

export{
    getAllShows
}