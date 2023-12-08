--tables done: user, admin, show, actor, prodcompany, tv show, movie, director, acts in 
-- tables to go:

-- USER RELATED QUERIES
-- -------------------------
-- we are going to need some queries to insert, delete, and retrieve users
--insert
INSERT INTO UserClient (UserID, email, password, firstName, lastName)
VALUES (uniqueID, uniqueEmail, password, someFirstName, someLastName);
-- get all users and get a user by ID
SELECT * FROM UserClient;
SELECT * FROM UserClient WHERE UserID = someID;
-- remove a users account
DELETE FROM UserClient WHERE UserID = someID;
-- update a users info
UPDATE UserClient
SET firstName = newFirstName, lastName = newLastName, password = newPass
WHERE UserID = someUsersID;



-- ADMIN RELATED QUIERIES
-- -------------------------
-- we are going to need some queries to insert, delete, and retrieve admins aswell as their permissions
--insert
INSERT INTO Admin (AdminID, email, password, firstName, lastName, permissions)
VALUES (uniqueID, uniqueEmail, password, adminFirstName, adminLastName, permissionNumber);
-- get all admins and get admin by id
SELECT * FROM Admin;
SELECT * FROM Admin WHERE AdminID = someID;
-- remove an admin
DELETE FROM Admin WHERE AdminID = someID;
-- update a admins info
UPDATE Admin
SET firstName = newFirstName, lastName = newLastName, password = newPass
WHERE AdminID = someUsersID;


-- SHOW TABLE QUERIES
-- ------------------------------------
-- we are going to need some queries to add, delete and get shows
-- insert
INSERT INTO Show (ShowID, Title, ReleaseDate, AverageRating, Description, CompanyName)
VALUES (newShowID, newTitle, newShowDate, 0, newShowDesc, prodCompany);
-- get all shows
SELECT * FROM Show;
--get a specific show
SELECT * FROM Show WHERE ShowID = someShowID;
-- get all shows from a company
SELECT * FROM Show WHERE CompanyName = someCompanyName;
-- get all tvShows from a company
SELECT * FROM Show as S, TvShow as T
WHERE S.ShowID = T.ShowID
AND S.CompanyName = someCompanyName;
-- get all movies from a company
SELECT * FROM Show as S, Movie as M
WHERE S.ShowID = M.ShowID
AND S.CompanyName = someCompanyName;
-- delete show
DELETE FROM Show WHERE ShowID = showIDtoDelete;
-- update a shows info
UPDATE Show 
SET Title = newTitle, ReleaseDate = newDate, Description = newDesc, CompanyName = newComp
WHERE ShowID = someSHowID;
-- update a shows AverageRating
UPDATE Show 
SET AverageRating = newAverageRating
WHERE ShowID = someSHowID;


-- ACTOR TABLE QUERIES
-- -------------------------------------------
-- we are going to need some queries to add, remove and get actors
-- insert
INSERT INTO Actor (ActorID, Age, firstName, lastName)
VALUES (newUniqueID, ageOfNewAct, firstName, lastName);
-- get a specific actor
SELECT * FROM Actor WHERE ActorID = actorsID;
-- remove an actor
DELETE FROM Actor WHERE ActorID = actorsID;
-- update a actors infro
UPDATE Actor
SET Age = newAge, firstName = newName, lastName = newLastName
WHERE ActorID = someActorsID;


-- DIRECTOR TABLE QUERIES
-- -------------------------------------------
-- we are going to need some queries to add, remove and get Directors
-- insert
INSERT INTO Director (DirectorID, Age, firstName, lastName)
VALUES (uniqueID, ageOfDiretor, firstName, lastName);
-- get a specific direcotr
SELECT * FROM Director WHERE DirectorID = someDirectorsID;
-- remove a director
DELETE FROM Director WHERE DirectorID = someDirectorID;
-- update a directors infro
UPDATE Director
SET Age = newAge, firstName = newName, lastName = newLastName
WHERE DirectorID = someDirectorsID;



-- PRODUCTION COMPANY QUEIRES
-- ----------------------------------
-- we are going to need some queries to insert, delete, and retrieve production companies
--insert
INSERT INTO ProductionCompany (Name, CreationDate, numMovies, numTvShows)
VALUES (newUniqueCompanyName, someCreationDate, numberOfMovies, numberOfTVShows);
-- get a company
SELECT * FROM ProductionCompany WHERE Name = someCompanyName;
-- remove a company
DELETE FROM ProductionCompany WHERE Name = companyNameToRemove;
-- update a companies info
UPDATE ProductionCompany
SET     Name = newName, CreationDate = newDate
WHERE   Name = oldName;
-- update number of movies / shows
UPDATE ProductionCompany
SET     numMovies = newNum, numTvShows = newTvNum
WHERE   Name = prodCompanyName;


--TV SHOW QUERIES
-------------------------------------
-- we are going to need to add, remove, and get tv shows
-- insert
INSERT INTO TvShow (ShowID, SeasonNum, NumEpisodes)
VALUES (uniqueNewShowID, seassonNumber, numberEps);
-- get all tv shows
SELECT * FROM TvShow;
-- get a single show
SELECT * FROM TvShow WHERE ShowID = someShowID;
-- remove a show
DELETE FROM TvShow WHERE ShowID = showIDtoRemove;



-- MOVIE QUERIES
-------------------------------------
-- we are going to need to add, remove, and get movies
-- insert
INSERT INTO Movie (ShowID, Length)
VALUES (uniqueNewShowID, lengthInMinutes);
-- get all tv shows
SELECT * FROM Movie;
-- get a single show
SELECT * FROM Movie WHERE ShowID = someShowID;
-- remove a movie
DELETE FROM Movie WHERE ShowID = showShowID;

-- ACTS IN queries
-------------------------------------
-- we are going to add to, remove from and get from this table
-- insert
INSERT INTO ActsIn (ActorID, ShowID)
VALUES (someActorID, someShowID);
-- delete
DELETE FROM ActsIn WHERE ActorID = someActorID AND ShowID = someShowID;
-- get from table
SELECT ActorID FROM ActsIn WHERE ShowID = someShowID;
-- get all actors in a movie
SELECT * FROM Show AS S, Actor AS A, ActsIn as I
WHERE   S.ShowID = I.ShowID 
AND     I.ActorID = A.ActorID
AND     S.ShowID = idForShow; 


-- DIRECTS Queries
---------------------------------------
-- we are going to add to, remove from and get from this tabel
-- insert into table
INSERT INTO Directs (DirectorID, ShowID)
VALUES (directorID, someShowID);
-- remove from table
DELETE FROM Directs WHERE DirectorID = someDirectorID AND ShowID = someShowID;
-- get from table
SELECT DirectorID FROM Directs WHERE ShowID = showID;
-- get all directors for a show
SELECT * FROM Director as D, Show as S, Directs as I
WHERE   D.DirectorID = I.DirectorID
AND     S.ShowID = I.ShowID
AND     S.ShowID = someShowID;


-- REVIEW QUERIES
--------------------------------------
-- we are going to add to, remove from and get from this table
-- insert into table
INSERT INTO Review (UserID, ShowID, Title, Rating, Comments, Consensus, ApprovedBy)
VALUES (userID, showID, someTitle, someRating, someComments, aConsensus, approvedBy);
-- delete from tabel
DELETE FROM Review WHERE UserID = someUserID AND ShowID = someShowID;
-- get from table
SELECT * FROM Review WHERE UserID = someUserID ANd ShowID = someShowID;
-- get reviews for a show
SELECT * FROM Review Where ShowID = someShowID;
-- get all reviews by a user
SELECT * FROM Review WHERE UserID = someUsersID;
-- update a review
UPDATE Review 
SET     Title = newTitle, Rating = newRate, Comments = newCOmm
WHERE   UserID = someUsersID AND ShowID = someShowID;


-- ShowList QUERIES
---------------------------------------
-- we are going to add, delete and grab from this tbale
-- insert
INSERT INTO ShowList (UserID, ListName, ListSize)
VALUES (someUserID, someListName, listSize);
-- delete
DELETE FROM ShowList WHERE listName = someListName
AND     UserID = someUserID;
-- get all shows belonging to a list
SELECT L.ShowID FROM ShowList as S, ListHas as L
WHERE   S.UserID = L.UserID
AND     S.ListName = L.ListName
AND     S.UserID = someUserID
-- update a showLists Name or size
UPDATE ShowList
SET     ListName = newListName, ListSize = newSize
WHERE   ListName = oldName
AND     UserID = someUsersID;



-- ListHas QUERIES
--------------------------------------
-- we need insert, remove and get from this table
-- insert 
INSERT INTO ListHas(UserID, ListName, ShowID)
VALUES (someUserID, someListName, someShowID);
-- delete a show from list
DELETE FROM ListHas WHERE UserID = someID 
AND ListName = someName
AND ShowID = showToDelete;
-- delete a entire list
-- note shouldnt need to use this but could be useful
DELETE FROM ListHas 
WHERE   ListName = ListName
AND     UserID = someID;
-- get shows in a lsit
SELECT * FROM ListHas as L
WHERE   L.UserID = someUsersID
AND     L.ListName = someListName;


-- Watched QUERIES
---------------------------------------
-- again we need to insert, remove and get
-- insert
INSERT INTO Watched (UserID, ListName, TitleOfFavourite)
VALUES (someUserID, someListName, title);
-- delete
DELETE FROM Watched WHERE UserID = someId 
AND     ListName = listToDelete;
-- get title of favourite
SELECT TitleOfFavourite
FROM Watched 
WHERE UserID = someID ANd ListName = someName; 
-- update title of favourtie
UPDATE Watched
SET TitleOfFavourtie = newTitle 
WHERE UserID = someID AND ListName = someName;



-- Watching Queries
---------------------------------------
-- again we need to insert, remove and get
-- insert
INSERT INTO Watching (UserID, ListName, TitleOfBestCurrent)
VALUES (someUserID, someListName, title);
-- delete
DELETE FROM Watched WHERE UserID = someId 
AND     ListName = listToDelete;
-- get title of best current
SELECT TitleOfBestCurrent
FROM Watched 
WHERE UserID = someID ANd ListName = someName;
-- update title of best current
UPDATE Watching
SET TitleOfBestCurrent = newTitle 
WHERE UserID = someID AND ListName = someName;


-- PlanToWatch Queries
---------------------------------------
-- again we need to insert, remove and get
-- insert
INSERT INTO PlanToWatch (UserID, ListName, TitleOfMostExcited)
VALUES (someUserID, someListName, title);
-- delete
DELETE FROM PlanToWatch WHERE UserID = someId 
AND     ListName = listToDelete;
-- get title of most excited
SELECT TitleOfMostExcited
FROM Watched 
WHERE UserID = someID ANd ListName = someName;
-- update title of most excited
UPDATE PlanToWatch
SET TitlleOfMostExcited = newTitle 
WHERE UserID = someID AND ListName = someName;