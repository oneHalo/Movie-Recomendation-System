import { db } from "../../conector/db.js";

//create a watchedList for the user
const
    createWatchedList = (req, res, userID) => {
        const q 
            = `INSERT INTO ShowList (UserID, ListName, ListSize)
            VALUES (?, "watched", 1);`

        db.query(
            q,
            [
                userID
            ],
            (err, data) =>{
                if(err){
                    res.status(400).send("error making watchedList");
                    console.log(err);
                }
                else {
                    const 
                        insertIntoWatched =
                            `INSERT INTO Watched (UserID, ListName)
                            VALUES (?, "watched");`
                    
                    db.query(
                        insertIntoWatched,
                        [
                            userID
                        ],
                        (err, data) => {
                            if(err){
                                res.status(400).json({success: false});
                            }
                            else{
                                res.status(200).json({success: true})
                            }
                        }
                    )

                }
            }
        )
    };

const
    createWatchingList = (req, res, userID) => {
        const q 
            = `INSERT INTO ShowList (UserID, ListName, ListSize)
            VALUES (?, "watching", 1);`

        db.query(
            q,
            [
                userID
            ],
            (err, data) =>{
                if(err){
                    res.status(400).send("error making watchedList");
                }
                else {
                    const 
                        insertIntoWatched =
                            `INSERT INTO Watching (UserID, ListName)
                            VALUES (?, "watching");`
                    
                    db.query(
                        insertIntoWatched,
                        [
                            userID
                        ],
                        (err, data) => {
                            if(err){
                                res.status(400).json({success: false});
                            }
                            else {
                                res.status(200).json({success: true});
                            }
                        }
                    )

                }
            }
        )
    };

const
    createPlanToWatchList = (req, res, userID) => {
        const q 
            = `INSERT INTO ShowList (UserID, ListName, ListSize)
            VALUES (?, "planToWatch", 1);`

        db.query(
            q,
            [
                userID
            ],
            (err, data) =>{
                if(err){
                    res.status(400).send("error making watchedList");
                }
                else {
                    const 
                        insertIntoWatched =
                            `INSERT INTO PlanToWatch (UserID, ListName)
                            VALUES (?, "planToWatch");`
                    
                    db.query(
                        insertIntoWatched,
                        [
                            userID
                        ],
                        (err, data) => {
                            if(err){
                                res.status(400).json({success: false});
                            }
                            else{
                                res.status(200).json({success: true});
                            }
                        }
                    )

                }
            }
        )
    };


export{
    createPlanToWatchList,
    createWatchingList,
    createWatchedList
}