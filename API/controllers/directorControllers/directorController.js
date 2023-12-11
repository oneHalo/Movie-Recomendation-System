import { db } from "../../conector/db.js"


const
    getDirectorById = (req, res, directorID) => {
        const 
            q = `SELECT * FROM Director WHERE DirectorID = ?`;

        db.query(
            q,
            [
                directorID
            ],
            (err, data) => {
                if(err) {
                    res.status(400).json({success: false});
                    console.log(err);
                } else {
                    res.status(200).json(data);
                }
            }
        )
    }

export {
    getDirectorById
};