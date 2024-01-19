SELECT
    last_name, year_result
FROM
    student
-- WHERE year_result <= 3
-- AND 
ORDER BY year_result DESC;


--- 2.2.8
SELECT
    last_name|| ' ' || first_name "Nom complet", year_result
FROM
    student
WHERE  section_id IN(1010)
ORDER BY last_name ASC 

