-- DDD, définition du Domain Driven Design

/*   Jointure   */
-- 6.1
SELECT c.course_name, s.section_name, p.professor_name
FROM course c 
JOIN professor p ON c.professor_id = p.professor_id
JOIN section s ON p.section_id = s.section_id;

-- 6.2
SELECT s.section_id, s.section_name ,e.last_name 
FROM section s 
JOIN student e ON s.delegate_id = e.student_id;

-- 6.3
SELECT s.section_id, s.section_name, p.professor_name
FROM section s 
FULL JOIN professor p ON s.section_id = p.section_id
ORDER BY s.section_id DESC
;
SELECT s.section_id, s.section_name, p.professor_name
FROM section s 
LEFT JOIN professor p ON s.section_id = p.section_id
ORDER BY s.section_id DESC
;
-- 6.4
SELECT s.section_id, s.section_name, p.professor_name
FROM section s 
JOIN professor p ON s.section_id = p.section_id;

-- 6.5
SELECT e.last_name, e.year_result, g.grade
FROM grade g, student e
WHERE e.year_result BETWEEN g.lower_bound AND g.upper_bound 
AND e.year_result >= 12
ORDER BY g.grade DESC
;
-- 6.6
SELECT p.professor_name, s.section_name, c.course_name, c.course_ects
FROM professor p
JOIN section s
    ON p.section_id = s.section_id
FULL JOIN course c
    ON p.professor_id = c.professor_id
ORDER BY c.course_ects DESC
;
SELECT p.professor_name, s.section_name, c.course_name, c.course_ects
FROM professor p
JOIN section s
    ON p.section_id = s.section_id
LEFT JOIN course c
    ON p.professor_id = c.professor_id
ORDER BY c.course_ects DESC
;
SELECT p.professor_name, s.section_name, c.course_name, c.course_ects
FROM professor p
JOIN section s
    ON p.section_id = s.section_id
NATURAL LEFT JOIN course c
ORDER BY c.course_ects DESC
;

-- 6.7
SELECT p.professor_id, SUM(c.course_ects) "ETCS_TOT"
    FROM professor p
FULL JOIN course c 
    ON p.professor_id = c.professor_id
GROUP BY p.professor_id
ORDER BY "ETCS_TOT"
;
SELECT p.professor_id, SUM(c.course_ects) "ETCS_TOT"
    FROM professor p
LEFT JOIN course c 
    ON p.professor_id = c.professor_id
GROUP BY p.professor_id
ORDER BY "ETCS_TOT"
;

SELECT p.professor_id, c.course_ects "ETCS_TOT"
FROM professor p
FULL JOIN course c 
ON p.professor_id = c.professor_id
ORDER BY p.professor_id
;

-- 6.8
SELECT professor_name, professor_surname, 'P' AS "Catégorie"
FROM professor
WHERE length(professor_name) > 8  
UNION
SELECT first_name, last_name, 'S' AS "Catégorie"
FROM student
WHERE length(last_name) > 8  
ORDER BY "Catégorie"
;

SELECT professor_name, professor_surname, 'P' AS "Catégorie"
FROM professor
WHERE length(professor_name) > 8  
UNION
SELECT first_name, last_name, 'S' AS "Catégorie"
FROM student
WHERE length(last_name) > 8  
;

-- 6.9
SELECT section_id
FROM section
EXCEPT
SELECT section_id
FROM professor
;

SELECT
    s.section_id
FROM
    section s
LEFT JOIN professor p ON s.section_id = p.section_id  
WHERE professor_name IS NULL
;
SELECT
    s.section_id
FROM
    section s
LEFT JOIN professor p ON s.section_id <> p.section_id  
WHERE professor_name IS NULL
;
-- 6.10

select * from section;
select * from course;
select * from professor;
select * from student;


 /*    Correction    */
 -- Exercice 2.6.1 – Donner pour chaque cours le nom du professeur responsable ainsi que la
-- section dont le professeur fait partie

SELECT
    c.course_name, p.professor_name, s.section_name
FROM course c 
    JOIN professor p ON c.professor_id = p.professor_id
    JOIN section s ON s.section_id = p.section_id;

-- Exercice 2.6.2 – Donner pour chaque section, l’id, le nom et le nom de son délégué. Classer les
-- sections dans l’ordre inverse des id de section. Un délégué est un étudiant de la table « STUDENT »

SELECT
    s.section_id, section_name, last_name
FROM section s
    JOIN student st ON s.delegate_id = st.student_id
ORDER BY s.section_id DESC;

-- ou 

SELECT
    s.section_id, section_name, last_name
FROM section s, student st
WHERE s.delegate_id = st.student_id
ORDER BY s.section_id DESC;
