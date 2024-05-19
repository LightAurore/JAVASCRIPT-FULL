-- 
-- GROUP BY + HAVING 
--

--Exercice 2.4.1 – L’utilisation de « GROUP BY » peut être considérée comme une forme de
-- boucle dans une requête SQL ? (Vrai/Faux)

-- Vrai, il répète l'action pour chaque groupe

-- Exercice 2.4.2 – La répartition en groupe se fait avant de prendre en compte les restrictions
-- imposées par un « WHERE » ? (Vrai/Faux)

-- Faux, l'ordre est le suivant :
-- 1. FROM
-- 2. WHERE
-- 3. GROUP BY
-- 4. HAVING
-- 5. SELECT
-- 6. ORDER BY

-- Exercice 2.4.3 – Un « GROUP BY » doit impérativement porter sur une colonne non alliacée ?

-- Vrai, car il ne connait pas encore le SELECT

-- Exercice 2.4.4 – L’utilisation d’un « GROUP BY » a pour effet de trier les résultats 
-- dans l’ordre croissant de la colonne incluse dans le « GROUP BY » ? (Vrai/Faux)

-- Faux, mais ça dépend du SGBD

-- Exercice 2.4.5 – La colonne sur laquelle porte le « GROUP BY » doit impérativement être
-- présente dans la clause « SELECT » ? (Vrai/Faux)

-- Faux, mais l'inverse est vrai

-- Exercice 2.4.6 – Les requêtes suivantes sont-elles valides ?

SELECT section_id, count(last_name)
FROM student
GROUP BY section_id; -- Règle n°1

SELECT section_id, AVG(year_result)
FROM student
GROUP BY section_id
HAVING AVG(year_result) > 10; -- Condition sur une fonction d'aggrégation => HAVING

SELECT section_id, AVG(year_result)
FROM student
WHERE year_result > 10
GROUP BY section_id;

-- Exercice 2.4.7 – Donner pour chaque section, le résultat maximum (dans une colonne appelée
-- « Résultat maximum ») obtenu par les étudiants

SELECT
	section_id, MAX(year_result)
FROM student
GROUP BY section_id
ORDER BY section_id;

-- Exercice 2.4.8 – Donner pour toutes les sections commençant par 10, le résultat annuel moyen
-- PRÉCIS (dans une colonne appelée « Moyenne ») obtenu par les étudiants

SELECT
	section_id, AVG(year_result) "Moyenne"
FROM
	student
WHERE
	section_id::VARCHAR LIKE '10%'
GROUP BY
	section_id
ORDER BY
	section_id;
	
-- Exercice 2.4.9 – Donner le résultat moyen (dans une colonne appelée « Moyenne ») et le mois
-- en chiffre (dans une colonne appelée « Mois de naissance ») pour les étudiants nés le même mois
-- entre 1970 et 1985

SELECT 
	DATE_PART('month', birth_date) "Mois de naissance",
	AVG(year_result)
FROM student
WHERE DATE_PART('year', birth_date) BETWEEN 1970 AND 1985
GROUP BY "Mois de naissance"; -- Fonctionne en Postgres :o

-- Exercice 2.4.10 – Donner pour toutes les sections qui comptent plus de 3 étudiants, la
-- moyenne PRÉCISE des résultats annuels (dans une colonne appelée « Moyenne »)

SELECT
	section_id,
	AVG(year_result) "Moyenne"
FROM student
GROUP BY section_id
HAVING COUNT(student_id) > 3
ORDER BY section_id;

-- Exercice 2.4.11 – Donner le résultat maximum obtenu par les étudiants appartenant aux
-- sections dont le résultat moyen est supérieur à 8

SELECT
	section_id,
	AVG(year_result),
	MAX(year_result)
FROM student
GROUP BY section_id
HAVING AVG(year_result) > 8
ORDER BY section_id;

-- Partie V : ROLLUP

-- Exercice 2.5.1 – L’utilisation de « ROLLUP » crée des groupes de données en se déplaçant dans
-- une seule direction, partant de la gauche vers la droite par rapport aux colonnes 
-- sélectionnées ? (Vrai/Faux)

-- Vrai

-- Exercice 2.5.2 – Le résultat produit par un « ROLLUP » présente les résultats du plus agrégé au
-- moins agrégé ? (Vrai/Faux)

-- Faux, c'est le SELECT

-- Exercice 2.5.6 – Donner la moyenne exacte des résultats obtenus par les étudiants par section
-- et par cours, ainsi que la moyenne par section uniquement et enfin, la moyenne générale. 
-- La liste ainsi produite reprend l’id de section, de cours le résultat moyen 
-- (dans une colonne appelée « Moyenne »). Se baser uniquement sur les sections 1010 et 1320


SELECT
	section_id, course_id, AVG(year_result) "Moyenne"
FROM student
WHERE section_id IN (1010, 1320)
GROUP BY ROLLUP (section_id, course_id);

