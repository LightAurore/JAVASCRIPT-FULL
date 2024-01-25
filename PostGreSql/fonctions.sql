-- Les fonctions

-- Exercice 2.3.7 – Donner le résultat annuel moyen pour l’ensemble des étudiants

SELECT
	AVG(year_result) "Résultat moyen"
FROM
	student;

-- Exercice 2.3.8 – Donner le plus haut résultat annuel obtenu par un étudiant

SELECT
	MAX(year_result) "Plus haut résultat"
FROM
	student;

-- Exercice 2.3.9 – Donner la somme des résultats annuels

SELECT
	SUM(year_result) "Somme des résultats"
FROM
	student;

-- Exercice 2.3.10 – Donner le résultat annuel le plus faible

SELECT
	MIN(year_result) "Plus faible résultat"
FROM
	student;

-- Exercice 2.3.11 – Donner le nombre de lignes qui composent la table « STUDENT »

SELECT
	COUNT(student_id) "Nombre étudiants"
FROM
	student;

-- Exercice 2.3.12 – Donner la liste des étudiants (login et année de naissance) nés après 1970

SELECT
	login,
	DATE_PART('year', birth_date) "Année de naissance"
FROM
	student
WHERE
	TO_CHAR(birth_date, 'YYYY')::INT > 1970;

-- Exercice 2.3.13 – Donner le login et le nom de tous les étudiants qui ont un nom composé d’au
-- moins 8 lettres

SELECT
	login,
	last_name
FROM 
	student
WHERE
	LENGTH(last_name) >= 8;

-- Exercice 2.3.14 – Donner la liste des étudiants ayant obtenu un résultat annuel supérieur ou
-- égal à 16. La liste présente le nom de l’étudiant en majuscules (nommer la colonne « Nom de
-- Famille ») et le prénom de l’étudiant dans l’ordre décroissant des résultats annuels obtenus

SELECT
	UPPER(last_name) "Nom de Famille",
	first_name,
	year_result
FROM
	student
WHERE
	year_result >= 16
ORDER BY
	year_result DESC;
	
-- Exercice 2.3.15 – Donner un nouveau login à chacun des étudiants ayant obtenu un résultat
-- annuel compris entre 6 et 10. Le login se compose des deux premières lettres du prénom de
-- l’étudiant suivi par les quatre premières lettres de son nom le tout en minuscule. Le résultat
-- reprend pour chaque étudiant, son nom, son prénom l’ancien et le nouveau login (colonne «
-- Nouveau login »)

SELECT
	last_name,
	first_name,
	login,
	LOWER( 
		CONCAT( 
			LEFT(first_name, 2), 
			SUBSTRING(last_name, 1, 4) 
		) 
	) "Nouveau login"
FROM
	student
WHERE
	year_result BETWEEN 6 AND 10;

-- Exercice 2.3.16 – Donner un nouveau login à chacun des étudiants ayant obtenu un résultat
-- annuel égal à 10, 12 ou 14. Le login se compose des trois dernières lettres de son prénom 
-- suivi du chiffre obtenu en faisant la différence entre l’année en cours et l’année de leur 
-- naissance.
-- Le résultat reprend pour chaque étudiant, son nom, son prénom l’ancien et le nouveau login
-- (colonne« Nouveau login »)

SELECT 
	last_name,
	first_name,
	login,
	CONCAT(
		RIGHT(first_name, 3), 
		( DATE_PART('year', NOW()) - DATE_PART('year', birth_date) ) 
	)"Nouveau login"
FROM
	student
WHERE
	year_result IN (10, 12, 14);

-- Exercice 2.3.17 – Donner la liste des étudiants (nom, login, résultat annuel) qui ont un nom
-- commençant par « D », « M » ou « S ». La liste doit présenter les données dans l’ordre
-- croissant dates de naissance des étudiants

SELECT
	last_name,
	login,
	year_result,
	birth_date
FROM
	student
WHERE
	LEFT(last_name, 1) IN ('D', 'M', 'S')
ORDER BY
	birth_date ASC;
	
-- Exercice 2.3.18 – Donner la liste des étudiants (nom, login, résultat annuel) qui ont obtenu un
-- résultat impair supérieur à 10. La liste doit être triée du plus grand résultat au plus petit

SELECT
	last_name,
	login,
	year_result
FROM
	student
WHERE
	year_result > 10
	AND (year_result % 2) <> 0;

-- Exercice 2.3.19 – Donner le nombre d’étudiants qui ont au moins 7 lettres dans leur nom de
-- famille

SELECT
	COUNT(student_id)
FROM
	student
WHERE
	LENGTH(last_name) >= 7;
	
-- Exercice 2.3.20 – Pour chaque étudiant né avant 1955, donner le nom, le résultat annuel et le
-- statut. Le statut prend la valeur « OK » si l’étudiant à obtenu au moins 12 comme résultat annuel et « KO » dans le cas contraire

SELECT
	last_name,
	year_result,
	CASE
		WHEN year_result >= 12 THEN 'OK'
		ELSE 'KO'
	END "Status"
FROM
	student
WHERE
	DATE_PART('year', birth_date) < 1955;

-- Exercice 2.3.21 – Donner pour chaque étudiant né entre 1955 et 1965 le nom, le résultat annuel
-- et la catégorie à laquelle il appartient. La catégorie est fonction du résultat annuel obtenu 
-- : un résultat inférieur à 10 appartient à la catégorie « inférieure », un résultat égal à 10
-- appartient à la catégorie « neutre », un résultat autre appartient à la catégorie « supérieure »

SELECT
	last_name,
	year_result,
	CASE
		WHEN year_result < 10 THEN 'Inférieur'
		WHEN year_result = 10 THEN 'Neutre'
		ELSE 'Supérieur'
	END "Catégorie"
FROM
	student
WHERE
	DATE_PART('year', birth_date) BETWEEN 1955 AND 1965;

-- Exercice 2.3.22 – Donner pour chaque étudiant né entre 1975 et 1985, son nom, son résultat
-- annuel et sa date de naissance sous la forme: jours en chiffre, mois en lettre et années en quatre chiffres (ex : 11 juin 2005)

SELECT 
	last_name,
	year_result,
	CONCAT(
		DATE_PART('day', birth_date), ' ',
		CASE DATE_PART('month', birth_date)
			WHEN 1 THEN 'janvier'
			WHEN 2 THEN 'février'
			WHEN 3 THEN 'mars'
			WHEN 4 THEN 'avril'
			WHEN 5 THEN 'mai'
			WHEN 6 THEN 'juin'
			WHEN 7 THEN 'juillet'
			WHEN 8 THEN 'aout'
			WHEN 9 THEN 'septembre'
			WHEN 10 THEN 'octobre'
			WHEN 11 THEN 'novembre'
			WHEN 12 THEN 'décembre'
		END, ' ',
		DATE_PART('year', birth_date)
	)
	"Date de naissance"
FROM
	student
WHERE
	DATE_PART('year', birth_date) BETWEEN 1975 AND 1985;

-- Exercice 2.3.23 – Donner pour chaque étudiant né en dehors des mois d’hiver et ayant obtenu
-- un résultat inférieur à 7, son nom, le mois de sa naissance (en chiffre) son résultat annuel 
-- et son résultat annuel corrigé (« Nouveau résultat ») tel que si le résultat annuel est
-- égal à 4, la valeur proposée est « NULL »

SELECT 
	last_name,
	DATE_PART('month', birth_date),
	year_result,
	-- Version 1
	CASE
		WHEN year_result = 4 THEN NULL
		ELSE year_result
	END "Nouveau résultat",
	-- Version simplifiée
	NULLIF(year_result, 4) "Nouveau résultat"
FROM
	student
WHERE 
	DATE_PART('month', birth_date) NOT IN (12, 1, 2, 3) 
	AND year_result < 7;


