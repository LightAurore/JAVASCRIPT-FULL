/*
    LES JOINTURES
*/

---  Jointures horizontales
SELECT table1.col1, table1.col2, table2.col1,
table2.col2
FROM table1 JOIN table2 ON table1.col1 =
table2.col2
WHERE … GROUP BY … ORDER BY 


---------------------------------------------
---  Jointures verticales
SELECT … FROM … WHERE …
GROUP BY …
opérateur_comparaison_requêtes
SELECT … FROM … WHERE …
GROUP BY

-------  Jointures horizontales -------------
---------------------------------------------
SELECT * FROM student;
---  Jointures : cross join
SELECT T1.col1, T1.col2, T2.col1, T2.col2
FROM table1 T1 CROSS JOIN table2 T2
---


---------------------------------------------
---  Jointures : inner join
SELECT *
FROM table1 T1 JOIN table2 T2 ON T1.col1 = T2.col1
---
SELECT T1.section_id
FROM section T1 JOIN professor T2 ON T1.section_id = T2.section_id;

---------------------------------------------
SELECT s.section_id, s.section_name, p.professor_name
FROM section s
JOIN professor p ON s.section_id = p.section_id

---------------------------------------------
SELECT s.section_id, s.section_name, p.professor_name
FROM section s, professor p
WHERE s.section_id = p.section_id
---------------------------------------------
SELECT s.section_id, s.section_name, p.professor_name
FROM section s
JOIN professor p ON s.section_id = p.section_id

---------------------------------------------
---  Jointures left outer join
SELECT *
FROM table1 T1 LEFT JOIN table2 T2 ON T1.col1 =
T2.col1

---------------------------------------------
SELECT s.section_id, s.section_name, p.professor_name
FROM section s
LEFT JOIN professor p ON s.section_id = p.section_id

---------------------------------------------
---  Jointures : right outer join
SELECT *
FROM table1 T1 RIGHT JOIN table2 T2 ON T1.col1 =
T2.col1
---------------------------------------------
SELECT CONCAT(first_name, ' ' , last_name), section_name,
course_name
FROM course c
RIGHT JOIN student st ON st.course_id = c.course_id
LEFT JOIN section s ON st.student_id = s.delegate_id


---------------------------------------------
---  Jointures : full outer join
SELECT *
FROM table1 T1 FULL JOIN table2 T2 ON T1.col1 =
T2.col1

---------------------------------------------
---  Jointures : equi-join
SELECT c.course_name, p.professor_name, s.section_name
FROM course c, professor p, section s
WHERE c.professor_id = p.professor_id
AND p.section_id = s.section_id

---------------------------------------------
SELECT c.course_name, p.professor_name, s.section_name
FROM course c
JOIN professor p ON c.professor_id = p.professor_id
JOIN section s ON p.section_id = s.section_id

---------------------------------------------
---  Jointures : non equi-join
SELECT s.last_name, s.year_result, g.grade
FROM grade g, student s
WHERE s.year_result BETWEEN g.lower_bound AND g.upper_bound

---------------------------------------------
SELECT s.last_name, s.year_result, g.grade
FROM grade g JOIN student s
ON s.year_result BETWEEN g.lower_bound AND g.upper_bound

---------------------------------------------
SELECT s.last_name, s.year_result, g.grade
FROM grade g JOIN student s
ON s.year_result BETWEEN g.lower_bound AND g.upper_bound

---------------------------------------------
---  Jointures : self join
SELECT *
FROM table1 T1 JOIN table1 T2 ON T1.col1 = T2.col1
---------------------------------------------
SELECT pv1.productId, pv1.businessEntityId
FROM purchasing.productVendor pv1
INNER JOIN purchasing.productVendor pv2
ON pv1.productId = pv2.productId
AND pv1.businessEntityId <> pv2.businessEntityId

---------------------------------------------
/* -------  Jointures verticales --------- */
SELECT … FROM … WHERE …
GROUP BY …
opérateur_comparaison_requêtes
SELECT … FROM … WHERE …
GROUP BY …
ORDER BY …
---------------------------------------------
---  Jointures : union [all]
SELECT col1 AS "colonne1_table1", col2 AS "colonne2_table1"
FROM table1
UNION
SELECT col1 AS "colonne1_table2", col2 AS "colonne2_table2"
FROM table2
ORDER BY "colonne2_table1"

---------------------------------------------
---  Jointures : intersect
SELECT * FROM table1
INTERSECT
SELECT * FROM table2

---------------------------------------------
---  Jointures : except
SELECT * FROM table1
EXCEPT
SELECT * FROM table2

---------------------------------------------
