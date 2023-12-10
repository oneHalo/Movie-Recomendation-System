import { db } from "../../conector/db.js";

//create a watchedList for the user
const
    createWatchedList = (req, res, userID) => {
        const q 
            = `INSERT INTO ShowList (UserID, ListName, ListSize)
            VALUES (?, "watched", 0);`

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
                            `INSERT INTO Watched (UserID, ListName)
                            VALUES (?, "watched");`
                    
                    db.query(
                        insertIntoWatched,
                        [
                            userID
                        ],
                        (err, data) => {
                            if(err){
                                res.status(400).send("error adding list to watched");
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
            VALUES (?, "watching", 0);`

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
                            `INSERT INTO Watched (UserID, ListName)
                            VALUES (?, "watching");`
                    
                    db.query(
                        insertIntoWatched,
                        [
                            userID
                        ],
                        (err, data) => {
                            if(err){
                                res.status(400).send("error adding list to watching");
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
            VALUES (?, "planToWatch", 0);`

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
                                res.status(400).send("error adding list to watched");
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