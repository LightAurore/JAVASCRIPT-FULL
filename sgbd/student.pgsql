SELECT
    first_name, last_name, birth_date
FROM
    student
---  
SELECT
    first_name AS "Prenom", last_name AS "Nom de famille", birth_date
FROM
    student

---  
SELECT
    student_id AS "id étudiant"
FROM
    student

---- Operations Arithmetiques
SELECT
    first_name,
    last_name,
    year_result * 5 AS "Résultat sur 100"  -- pas de nom associé à la colonne
     -- birth_date * 2 "Date de naissance x 2"
    -- les operateur que sur les numeric
    , 5 /2. "decimal"
FROM
    student


---- Operations Concatenation
SELECT
    last_name || ' ' || first_name "Nom complet",
    CONCAT(last_name, ' ', first_name) "Nom complet"
FROM
    student

---  
SELECT DISTINCT
    first_name
FROM
    student

---   SELECT sans FROM
SELECT
    NOW() AS "Date du jour", "Vive le SQL";

----
SELECT 'Vive';

---
SELECT
    last_name, first_name, 'ok' "Appreciation"
FROM
    student

---     exo DDL     -----
--- Exo 2.1.1
SELECT last_name, first_name AS "F name" FROM student;


SELECT last_name "lname", first_name AS "fname" FROM student;


SELECT last_name || ' _ ' || first_name AS "name" FROM student;


-- concatenation avec ||
SELECT last_name || first_name AS "name", year_result * 10 "result" FROM student;

--- Exo 2.1.2
SELECT last_name, birth_date, login, year_result FROM student;

--- Exo 2.1.3
SELECT
    CONCAT(last_name, ' ', first_name) "Nom complet",
    student_id,
    birth_date
FROM
    student

--- Exo 2.1.4
SELECT
    CONCAT_WS(' | ', student_id, first_name, last_name, birth_date, login, section_id, year_result, course_id) "Info étudiant"
FROM
    student;
------
SELECT
    CONVERT(varchar, student_id || ' | '|| first_name || ' | '|| last_name || ' | '|| birth_date || ' | '|| login || ' | '|| section_id || ' | '|| year_result || ' | '|| course_id) "Info étudiant"
FROM
    student;

-----
SELECT
    CONVERT(varchar, student_id || first_name  || last_name  || birth_date  || login  || section_id  || year_result  || course_id) "Info étudiant"
FROM
    student;

--- Exo 2.2.1
SELECT 
    login, year_result
FROM 
    student
WHERE 
    (year_result > 16) ;

--- Exo 2.2.2
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    first_name = 'Georges' ;

--- Exo 2.2.3





--- course
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    year_result BETWEEN 10 AND 16 ;

--- course
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    year_result IN(10, 15, 17) ;

--- course
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    first_name LIKE '%e';

--- course
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    first_name LIKE '%a%';

--- course
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    first_name LIKE '%o_';
--- course
SELECT 
    last_name, section_id
FROM 
    student
WHERE 
    first_name LIKE '%o_%';

--- course
SELECT 
    first_name, section_id
FROM 
    student
WHERE 
    last_name LIKE '%oo_';




SELECT * FROM student;