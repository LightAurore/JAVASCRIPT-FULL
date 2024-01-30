DROP TABLE IF EXISTS todo;

CREATE TABLE todo(
    id int PRIMARY KEY,
    todo VARCHAR(100),
    date DATE
);

SELECT * FROM todo;

INSERT INTO todo VALUES(
    1,'Faire le sport', '2024-01-26'
);

-- mysql
CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);

-- sql Server
CREATE TABLE Persons (
    Personid int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);

-- access
CREATE TABLE Persons (
    Personid int AUTOINCREMENT PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);

-- oracle
CREATE SEQUENCE seq_person
MINVALUE 1
START WITH 1
INCREMENT BY 1
CACHE 10;

----  abbrev
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT first_name FROM student);
----  abbrev
SELECT Count(*) AS "Nombre d'éléves ayant réussi leur année"
FROM (
    SELECT DISTINCT first_name FROM student WHERE year_result > 10
);

---- 
SELECT
FROM
WHERE
ORDER BY
---- 
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY

-- WHERE nom_col (=|<|<=|>|>=|<>|BETWEEN x AND y|LIKE '__s%'|IN())

