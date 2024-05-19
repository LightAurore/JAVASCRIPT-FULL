-- Exercice 2.7.2 – Donner la liste des étudiants (nom, prénom et résultat) de l’ensemble des
-- étudiants ayant obtenu un résultat annuel supérieur au double du résultat moyen pour l’ensemble
-- des étudiants

SELECT
	last_name, first_name, year_result
FROM student
WHERE year_result > 2 * ( SELECT AVG(year_result) FROM student );

-- Exercice 2.7.3 – Donner la liste de toutes les sections qui n’ont pas de professeur

SELECT
	section_id, section_name
FROM section
WHERE section_id NOT IN ( SELECT DISTINCT section_id FROM professor );

-- Exercice 2.7.4 – Donner la liste des étudiants qui ont comme mois de naissance le mois
-- correspondant à la date d’engagement du professeur « Giot ». Classer les étudiants par ordre de
-- résultat annuel décroissant

SELECT DATE_PART('month', professor_hire_date) FROM professor WHERE professor_name = 'giot';

SELECT
	last_name, first_name, TO_CHAR(birth_date, 'dd/mm/yyyy') "Date de naissance", year_result
FROM student
WHERE DATE_PART('month', birth_date) = (
	SELECT DATE_PART('month', professor_hire_date) 
	FROM professor 
	WHERE professor_name = 'giot'
)
ORDER BY year_result DESC;

-- Exercice 2.7.5 – Donner la liste des étudiants qui ont obtenu le grade « TB » pour leur résultat
-- Sans sous requete
SELECT
	last_name, first_name, year_result, grade
FROM student st
	JOIN grade g ON st.year_result BETWEEN lower_bound AND upper_bound
WHERE grade = 'TB';
-- Avec sous requete
SELECT 
	last_name, first_name, year_result
FROM student
WHERE EXISTS (
	SELECT lower_bound, upper_bound
	FROM grade
	WHERE year_result BETWEEN lower_bound AND upper_bound
		AND grade = 'TB'
);


-- Exercice 2.7.6 – Donner la liste des étudiants qui appartienne à la section pour laquelle
-- Mademoiselle « Marceau » est déléguée

SELECT
	last_name,
	first_name,
	section_id
FROM student
WHERE section_id = (
	SELECT section_id 
	FROM section 
	WHERE delegate_id = (
		SELECT student_id 
		FROM student 
		WHERE last_name = 'Marceau'
	)
);

-- Exercice 2.7.7 – Donner la liste des sections qui se composent de plus de quatre étudiants



-- Exercice 2.7.8 – Donner la liste des étudiants premiers de leur section en terme de résultat
-- annuel et qui n’appartiennent pas aux sections dont le résultat moyen est inférieure à 10



-- Exercice 2.7.9 – Donner la section qui possède la moyenne la plus élevée. Le résultat présente
-- le numéro de section ainsi que sa moyenne