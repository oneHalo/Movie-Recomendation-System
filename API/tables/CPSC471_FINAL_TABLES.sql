-- client user table declaration
CREATE TABLE UserClient(
    UserID      int NOT NULL AUTO_INCREMENT,
    email       VARCHAR(30) NOT NULL,
    password    VARCHAR(30) NOT NULL,
    firstName   VARCHAR(30) NULL,
    lastName    VARCHAR(30) NULL,
    CONSTRAINT pk_UserClient PRIMARY KEY(UserID),
    UNIQUE(email) 
);

-- admin user table declaration
CREATE TABLE Admin(
    AdminID     INT NOT NULL AUTO_INCREMENT,
    email       VARCHAR(30) NOT NULL,
    password    VARCHAR(30) NOT NULL,
    firstName   VARCHAR(30) NULL,
    lastName    VARCHAR(30) NULL,
    permissions INT NOT NULL,
    CONSTRAINT pk_Admin PRIMARY KEY(AdminID),
    UNIQUE(email)
);

-- production company table declaration
-- CREATE TABLE ProductionCompany(
--     Name            VARCHAR(50) NOT NULL,
--     CreationDate    DATE    NULL,
--     numMovies       INT     NULL,
--     numTvShows      INT     NULL,
--     CONSTRAINT pk_ProductionCompany PRIMARY KEY(Name),
--     -- checking if creation date is before the current date
--     -- check(CreationDate <= (
--     --     SELECT GETDATE()
--     -- ))
-- );

-- actual one that went into db
CREATE TABLE ProductionCompany(
    Name            VARCHAR(50) NOT NULL,
    CreationDate    DATE    NULL,
    numMovies       INT     NULL,
    numTvShows      INT     NULL,
    CONSTRAINT pk_ProductionCompany PRIMARY KEY(Name)
);

-- show table declaration
CREATE TABLE Shows(
    ShowID  INT NOT NULL AUTO_INCREMENT,
    Title   VARCHAR(30) NOT NULL,
    ReleaseDate     DATE NULL,
    AverageRating   FLOAT NULL,
    Descript     VARCHAR(250)    NULL,
    CompanyName     VARCHAR(50)     NOT NULL,
    CONSTRAINT pk_ShowID PRIMARY KEY (ShowID),
    CONSTRAINT fk_Show_CompanyName
        FOREIGN KEY(CompanyName) REFERENCES ProductionCompany(Name) 
        ON DELETE CASCADE
);




-- review table declaration
CREATE TABLE Review(
    UserID          INT NOT NULL,
    ShowID          INT NOT NULL,
    Title           VARCHAR(30) NOT NULL,
    Rating          FLOAT   NULL,
    Comments        VARCHAR(250)    NULL,
    Consensus       VARCHAR(16)     NULL, 
    ApprovedBy      INT NULL,
    ApproveStatus   INT NULL,
    CONSTRAINT  pk_Review PRIMARY KEY(UserID, ShowID),
    CONSTRAINT  fk_UserID
        FOREIGN KEY(UserID) REFERENCES UserClient(UserID)
        ON DELETE CASCADE,
    CONSTRAINT  fk_ShowID
        FOREIGN KEY(ShowID) REFERENCES Shows(ShowID)
        ON DELETE CASCADE,
    CONSTRAINT  fk_ApprovedBy
        FOREIGN KEY(ApprovedBy) REFERENCES Admin(AdminID)
        ON DELETE SET NULL
);

-- Tv Show table declaration
CREATE TABLE TvShow(
    ShowID          INT NOT NULL,
    SeasonNum       INT NOT NULL,
    NumEpisodes     INT NULL,
    CONSTRAINT pk_TvShow PRIMARY KEY(ShowID),
    CONSTRAINT fk_TvShow_ShowID
        FOREIGN KEY(ShowID) REFERENCES Shows(ShowID)
        ON DELETE CASCADE,
    CHECK(SeasonNum > 0),
    CHECK(NumEpisodes >= 0)
);

-- Movie Table declaration
CREATE TABLE Movie(
    ShowID          INT NOT NULL,
    Length          INT NULL,
    CONSTRAINT pk_Movie PRIMARY KEY(ShowID),
    CONSTRAINT fk_Movie_ShowID 
        FOREIGN KEY(ShowID) REFERENCES Shows(ShowID)
        ON DELETE CASCADE,
    CHECK(Length > 0)
);

-- Actor table declaration
CREATE TABLE Actor(
    ActorID         INT NOT NULL,
    -- may not know age of actor so allow null
    -- need to know name
    Age             INT NULL,
    firstName       VARCHAR(30) NOT NULL,
    lastName        VARCHAR(30) NOT NULL,
    CONSTRAINT pk_Actor PRIMARY KEY(ActorID)
);

-- director table declaration
CREATE TABLE Director(
    DirectorID      INT NOT NULL,
    -- may not know age so allow null
    -- need to know name
    Age             INT NULL,
    firstName       VARCHAR(30) NOT NULL,
    lastName        VARCHAR(30) NOT NULL,
    CONSTRAINT pk_Director PRIMARY KEY(DirectorID)
);

-- Acts in table declaration
CREATE TABLE ActsIn(
    ActorID         INT NOT NULL,
    ShowID          INT NOT NULL,
    CONSTRAINT pk_ActsIn PRIMARY KEY(ActorID, ShowID),
    CONSTRAINT fk_ActsIn_Actor_ActorID
        FOREIGN KEY(ActorID) REFERENCES Actor(ActorID)
        ON DELETE CASCADE,
    CONSTRAINT fk_ActsIn_Show_ShowID
        FOREIGN KEY(ShowID) REFERENCES Shows(ShowID)
        ON DELETE CASCADE
);

-- Directs table declaration
CREATE TABLE Directs(
    DirectorID      INT NOT NULL,
    ShowID          INT NOT NULL,
    CONSTRAINT pk_Directs 
        PRIMARY KEY(DirectorID, ShowID),
    CONSTRAINT fk_Directs_Director_DirectorID
        FOREIGN KEY(DirectorID) REFERENCES Director(DirectorID)
        ON DELETE CASCADE,
    CONSTRAINT fk_Directs_Show_SHowID
        FOREIGN KEY(ShowID) REFERENCES Shows(ShowID)
        ON DELETE CASCADE
);

-- showList table declaration
CREATE TABLE ShowList(
    UserID          INT NOT NULL,
    ListName        VARCHAR(50) NOT NULL,
    ListSize        INT,
    CONSTRAINT pk_ShowList
        PRIMARY KEY(UserID, ListName),
    CONSTRAINT fk_ShowList_UserClient_UserID
        FOREIGN KEY(UserID) REFERENCES UserClient(UserID)
        ON DELETE CASCADE,
    CHECK(ListSize > 0)
);


-- listHas table declaration
CREATE TABLE ListHas(
    UserID          INT NOT NULL,
    ListName        VARCHAR(50) NULL,
    ShowID          INT NOT NULL,
    CONSTRAINT pk_ListHas
        PRIMARY KEY(UserID, ListName, ShowID),
    CONSTRAINT fk_ListHas_ShowList_UserID_ListName
        FOREIGN KEY(UserID, ListName) REFERENCES ShowList(UserID, ListName)
        ON DELETE CASCADE,
    CONSTRAINT fk_ListHas_Show_ShowID
        FOREIGN KEY(ShowID) REFERENCES Shows(ShowID)
        ON DELETE CASCADE
);

-- watched table declaration
CREATE TABLE Watched(
    UserID          INT NOT NULL,
    ListName        VARCHAR(50) NOT NULL,
    TitleOfFavourite VARCHAR(30) NULL,
    CONSTRAINT pk_Watched
        PRIMARY KEY(UserID, ListName),
    CONSTRAINT fk_Watched_ShowList_UserID_ListName
        FOREIGN KEY(UserID, ListName) REFERENCES ShowList(UserID, ListName)
        ON DELETE CASCADE
);

-- watching table declaration
CREATE TABLE Watching(
    UserID          INT NOT NULL,
    ListName        VARCHAR(50) NOT NULL,
    TitleOfBestCurrent VARCHAR(30) NULL,
    CONSTRAINT pk_Watching
        PRIMARY KEY(UserID, ListName),
    CONSTRAINT fk_Watching_ShowList_UserID_ListName
        FOREIGN KEY(UserID, ListName) REFERENCES ShowList(UserID, ListName)
        ON DELETE CASCADE
);

CREATE TABLE PlanToWatch(
    UserID          INT NOT NULL,
    ListName        VARCHAR(50) NOT NULL,
    TitleOfMostExcited VARCHAR(30) NULL,
    CONSTRAINT pk_PlatToWatch
        PRIMARY KEY(UserID, ListName),
    CONSTRAINT fk_PlanToWatch_ShowList_UserID_ListName
        FOREIGN KEY(UserID, ListName) REFERENCES ShowList(UserID, ListName)
        ON DELETE CASCADE
);
