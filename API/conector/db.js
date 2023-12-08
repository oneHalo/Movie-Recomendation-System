import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"user1",
    password:"iLoveMovies123",
    database:"breakTime"
})