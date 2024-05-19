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


-- Exercice 2.6.3 – Donner pour chaque section, le nom des professeurs qui en sont membre

SELECT
	s.section_id, s.section_name, p.professor_name
FROM section s
	LEFT JOIN professor p ON s.section_id = p.section_id
ORDER BY s.section_id DESC;

-- Exercice 2.6.4 – Même objectif que la question 3 mais seuls les sections comportant au moins
-- un professeur doivent être reprises

SELECT
	s.section_id, s.section_name, p.professor_name
FROM section s
	JOIN professor p ON s.section_id = p.section_id
ORDER BY s.section_id DESC;

-- Exercice 2.6.5 – Donner à chaque étudiant ayant obtenu un résultat annuel supérieur ou égal à
-- 12 son grade en fonction de son résultat annuel et sur base de la table grade. La liste doit
-- être classée dans l’ordre alphabétique des grades attribués

SELECT
	last_name, year_result, grade
FROM student st
	JOIN grade g ON st.year_result BETWEEN g.lower_bound AND g.upper_bound
WHERE 
	st.year_result >= 12
ORDER BY 
	g.grade;
	
-- Exercice 2.6.6 – Donner la liste des professeurs et la section à laquelle ils se 
-- rapportent ainsi que le(s) cour(s) (nom du cours et crédits) dont le professeur est
-- responsable. La liste est triée par ordre décroissant des crédits attribués à un cours

SELECT
	professor_name, section_name, course_name, course_ects
FROM professor p
	JOIN section s ON p.section_id = s.section_id
	NATURAL LEFT JOIN course c
ORDER BY course_ects DESC;

-- Exercice 2.6.7 – Donner pour chaque professeur son id et le total des crédits ECTS
-- (« ECTS_TOT ») qui lui sont attribués. La liste proposée est triée par ordre décroissant 
-- de la somme des crédits alloués

SELECT
	p.professor_id, SUM(c.course_ects) "ECTS_TOT"
FROM professor p
	LEFT JOIN course c ON p.professor_id = c.professor_id
GROUP BY p.professor_id
ORDER BY "ECTS_TOT" DESC;

-- Exercice 2.6.8 – Donner la liste (nom et prénom) de l’ensemble des professeurs et des étudiants
-- dont le nom est composé de plus de 8 lettres. Ajouter une colonne pour préciser la catégorie (S
-- pour « STUDENT », P pour « PROFESSOR ») à laquelle appartient l’individu

SELECT 
	last_name, first_name, 'S' "Catégorie"
FROM student
WHERE LENGTH(last_name) > 8
UNION
SELECT 
	professor_name, professor_surname, 'P' "Catégorie"
FROM professor
WHERE LENGTH(professor_name) > 8;

-- Exercice 2.6.9 – Donner l’id de chacune des sections qui n’ont pas de professeur attitré

SELECT
	section_id
FROM section
EXCEPT
SELECT
	section_id
FROM professor;

-- OU avec jointure horizontale

SELECT
	s.section_id, p.professor_name
FROM section s
LEFT JOIN professor p ON s.section_id = p.section_id
WHERE professor_name IS NULL;