
--- 7.1
SELECT  last_name, first_name, section_id
FROM student
WHERE section_id = (
    SELECT section_id 
    FROM student
    WHERE last_name = 'Roberts'
)
ORDER BY last_name
;

--- 7.2
SELECT last_name, first_name, year_result
FROM student
WHERE year_result > (
    SELECT
    FROM
    WHERE 
)


--- 7.1
--- 7.1
--- 7.1
--- 7.1
--- 7.1

SELECT
FROM
WHERE 
AND