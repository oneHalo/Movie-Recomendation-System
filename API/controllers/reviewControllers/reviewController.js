import { db } from "../../conector/db.js";


const
    createReview = (req, res) => {
        const
            q = `INSERT INTO Review (UserID, ShowID, Title, Rating, Comments, Consensus)
                VALUES (?, ?, ?, ?, ?, ?);`

            db.query(
                q,
                [
                    req.body.UserID,
                    req.body.ShowID,
                    req.body.Title,
                    req.body.Rating,
                    req.body.Comments,
                    req.body.Conesensus,
                ],
                (err, data) => {
                    if(err){
                        res.status(400).json({success : false});
                        console.log(err); 
                    } else {
                        res.status(200).json({success: true});
                    }
                }
            )
    };

const
    getReviewsOnShow = (req, res, showID) => {
        const
            q = `SELECT * FROM Review WHERE ShowID = showID;`

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
                    res.status(200).json(data)
                }
            }
        )
    }


export {
    createReview,
    getReviewsOnShow
}