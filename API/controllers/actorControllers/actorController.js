import { db } from "../../conector/db.js"


const
    getActorById = (req, res, actorID) => {
        const 
            q = `SELECT * FROM Actor WHERE ActorID = ?`;

        db.query(
            q,
            [
                actorID
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
    getActorById
};