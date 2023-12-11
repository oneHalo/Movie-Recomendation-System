import { db } from "../../conector/db.js"




const
    getWatchedByID = (req, res, userID) => {
        const
            q = `SELECT * FROM Watched WHERE UserID = ?`;
        
        db.query(
            q,
            [
                userID
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false});
                }
                else {
                    res.status(200).json(data);
                }
            }
        )
    }

const
    getWatchingByID = (req, res, userID) => {
        const
            q = `SELECT * FROM Watching WHERE UserID = ?`;

        db.query(
            q,
            [
                userID
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false});
                } else {
                    res.status(200).json(data);
                }
            }
        )
    }

const
    getPlanToWatchByID = (req, res, userID) => {
        const
            q = `SELECT * FROM PlanToWatch WHERE UserID = ?`;

        db.query(
            q,
            [
                userID
            ],
            (err, data) => {
                if(err){
                    res.status(400).json({success: false});
                } else {
                    res.status(200).json(data);
                }
            }
        )
    }

export {
    getWatchedByID,
    getWatchingByID,
    getPlanToWatchByID
}