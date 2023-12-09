import { db } from "../../conector/db.js"

// GET ALL
const
    getAllCompanies = (req, res) => {
        const 
            q = `SELECT * FROM ProductionCompany;`

        db.query(
            q,
            [],
            (err, data) => {
                if(err){
                    res.status(400).json({succes: false});
                    console.log(err);
                } else {
                    res.status(200).json(data);
                }           
            }
        )
    }


// POST 
const
    createNewCompany = (req, res) => {
        if(
            req.body
            &&
            req.body.Name
            &&
            req.body.CreationDate
            &&
            req.body.numMovies
            &&
            req.body.numTvShows 
        ) {
            const
                q = `INSERT INTO ProductionCompany (Name, CreationDate, numMovies, numTvShows)
                VALUES (?, ?, ?, ?);`    
            
            db.query(
                q,
                [
                    req.body.Name,
                    req.body.CreationDate,
                    req.body.numMovies,
                    req.body.numTvShows 
                ],
                (err, data) => {
                    if(err){
                        res.status(400).json({succes: false});
                        console.log(err);
                    } else {
                        res.status(200).json({success: true});
                    }
                }
            )
        } else {
            res.status(400).send("Improper arguments for createNewCompnay");
            console.log(
                req.body
            )
        }
    }

export {
    createNewCompany,
    getAllCompanies
}