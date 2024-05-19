<!--  -->
CREATE TABLE Personne (
    RegNat VARCHAR(11),
    Prenom VARCHAR(50),
    Nom VARCHAR(50),
    Adresse_Rue VARCHAR(100),
    Adresse_Numero VARCHAR(10),
    Adresse_CodePostal INT,
    Adresse_Ville VARCHAR(100)
);


<!--  -->
INSERT INTO student (student_id, first_name, last_name, birth_date, login, section_id, year_result, course_id)
VALUES (default, 'Aurélien', default, '1996-4-3 23:45:20', 'geerquen', 1010, default, 'EG0142');


<!--  -->
-- Toujours supprimer les dépendances en premier => tables enfants
-- Puis supprimer les tables parents (dans l'ordre que vous voulez)
DROP TABLE IF EXISTS personne_livre;
DROP TABLE IF EXISTS personne;
DROP TABLE IF EXISTS livre;

CREATE TABLE IF NOT EXISTS personne (
    id INT GENERATED ALWAYS AS IDENTITY CONSTRAINT PK_personne PRIMARY KEY, -- Troisème façon
    regnat VARCHAR(11),
    prenom VARCHAR(50),
    nom VARCHAR(50) NOT NULL, -- Troisième façon (non nommée [NOT NULL])
    adresse_rue VARCHAR(100),
    adresse_numero VARCHAR(10),
    adresse_codePostal INT,
    adresse_ville VARCHAR(100),
    
    -- Première façon
    CHECK (Adresse_CodePostal BETWEEN 1000 AND 9999),
    --, CHECK (Adresse_CodePostal >= 1000 AND Adresse_CodePostal <= 9999)
    
    -- Deuxième façon
    CONSTRAINT UK_regnat UNIQUE (regnat)
);

CREATE TABLE IF NOT EXISTS livre (
    isbn VARCHAR(10),
    titre VARCHAR(250),
    date_achat TIMESTAMP,
    
    CONSTRAINT PK_livre PRIMARY KEY (isbn)
);

CREATE TABLE IF NOT EXISTS personne_livre (
    date_depart TIMESTAMP NOT NULL,
    date_retour TIMESTAMP,
    personne_id INT,
    livre_id VARCHAR(10),
    
    -- Convention d'écriture FK_ => foreign key
    -- indiquer les 2 tables références dans le nom
    -- Type de contrainte => foreign key sur la colonne dans la table personne_livre => personne_id
    -- Vient faire référence à la table personne et à la colonne id dans personne
    CONSTRAINT FK_personne_personne_livre FOREIGN KEY (personne_id)
        REFERENCES personne (id),
    
    CONSTRAINT FK_livre_personne_livre FOREIGN KEY (livre_id)
        REFERENCES livre (isbn)
);

<!--  -->
CREATE TABLE IF NOT EXISTS personne_livre (
    date_depart TIMESTAMP NOT NULL,
    date_retour TIMESTAMP,
    personne_id INT,
    livre_id VARCHAR(10),
    
    -- Convention d'écriture FK_ => foreign key
    -- indiquer les 2 tables références dans le nom
    -- Type de contrainte => foreign key sur la colonne dans la table personne_livre => personne_id
    -- Vient faire référence à la table personne et à la colonne id dans personne
    CONSTRAINT FK_personne_personne_livre FOREIGN KEY (personne_id)
        REFERENCES personne (id)
        -- Comportement par défaut    
        -- Lorsqu'on essaie de supprimer le parent, echec de la requête
        -- ON DELETE NO ACTION -- RESTRICT 
        
        -- Lorsqu'on supprime le parent, l'enfant est supprimé également
        -- Répercussion
        -- ON DELETE CASCADE
    
        -- Lorsqu'on supprime le parent, l'enfant prend la référence "null"
        -- ON DELETE SET NULL
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    
    CONSTRAINT FK_livre_personne_livre FOREIGN KEY (livre_id)
        REFERENCES livre (isbn) ON DELETE SET NULL ON UPDATE CASCADE
);

<!--  -->
ALTER TABLE => Modification de la structure de la table
UPDATE => Modification des données contenues dans la table

<!--  -->
ALTER TABLE livre ALTER COLUMN isbn TYPE VARCHAR(14);
ALTER TABLE livre RENAME COLUMN titre TO intitule;
ALTER TABLE livre ADD COLUMN prix MONEY;
ALTER TABLE livre DROP COLUMN prix;

-- Vider une table

DELETE FROM livre;

TRUNCATE TABLE personne RESTART IDENTITY CASCADE;

<!--  -->
CREATE TABLE section (
  section_id int NOT NULL,
  section_name varchar(50),
  delegate_id int,
  CONSTRAINT PK_section PRIMARY KEY (section_id)
);

CREATE TABLE professor (
  professor_id int NOT NULL,
  professor_name varchar(30) NOT NULL,
  professor_surname varchar(30) NOT NULL,
  section_id int NOT NULL,
  professor_office int NOT NULL,
  professor_email varchar(30) NOT NULL,
  professor_hire_date timestamp NOT NULL,
  professor_wage int NOT NULL,
  CONSTRAINT PK_professor PRIMARY KEY (professor_id),
  constraint FK_professor_section foreign key (section_id) references section (section_id)
);

CREATE TABLE course (
  course_id varchar(8) NOT NULL ,
  course_name varchar(200) NOT NULL ,
  course_ects decimal(3,1) NOT NULL,
  professor_id int NOT NULL,
  CONSTRAINT PK_course PRIMARY KEY (course_id),
  constraint FK_course_professor foreign key (professor_id) references professor (professor_id)
);

CREATE TABLE student (
  student_id int NOT NULL,
  first_name varchar(50),
  last_name varchar(50),
  birth_date timestamp,
  login varchar(50),
  section_id int,
  year_result int,
  course_id varchar(6) NOT NULL,
  CONSTRAINT PK_student PRIMARY KEY (student_id),
  constraint FK_student_section foreign key (section_id) references section (section_id)
);

CREATE TABLE grade (
  grade char(2) NOT NULL ,
  lower_bound int NOT NULL,
  upper_bound int NOT NULL,
  CONSTRAINT PK_grade PRIMARY KEY (grade)
);

<!--  -->
-- SELECT ... FROM ...

-- Récupération de tous les étudiants par les colonnes selectionnées
SELECT
    first_name, last_name, birth_date, student_id
FROM
    student
    
-- * : permet de récupérer toutes les colonnes dans l'ordre établit par la table
SELECT
    *
FROM
    student;
    
-- Alias : AS "Nouveau nom"

SELECT
    student_id AS "Id étudiant",
    first_name Prénom,
    last_name "Nom de famille"
FROM 
    student;

-- Opérations arithmétiques

SELECT
    first_name, 
    last_name,
    year_result * 5 "Résultat sur 100",
    5 / 2.0,
    year_result / student_id
FROM 
    student;
    
-- Concaténation : CONCAT() ou ||

SELECT
    last_name || ' ' || first_name "Nom complet",
    CONCAT(last_name, ' ', first_name) "Nom complet"
FROM
    student;

-- DISTINCT : Récupération des lignes sans doublon

SELECT DISTINCT
    first_name, last_name
FROM
    student;

-- SELECT sans FROM

SELECT 'Hello'


SELECT
    last_name, first_name, 'OK' "Appréciation"
FROM 
    student

<!--  -->
-- 1
SELECT last_name, first_name AS "F name"
FROM student;

SELECT last_name lname, first_name AS fname
FROM student;

SELECT last_name || '_' || first_name AS name
FROM student;

SELECT last_name || first_name AS name, year_result * 10 result
FROM student;

-- Exercice 2.1.2 
-- Ecrire une requête pour présenter, pour chaque étudiant, le nom de l’étudiant,
--la date de naissance, le login et le résultat pour l’année de l’ensemble des étudiants.

SELECT
    last_name,
    birth_date,
    login,
    year_result
FROM
    student;
    
-- Exercice 2.1.3 – Ecrire une requête pour présenter, pour chaque étudiant, son nom complet
-- (nom et prénom séparés par un espace), son id et sa date de naissance.

SELECT
    CONCAT(last_name, ' ', first_name) "Nom complet",
    student_id,
    birth_date
FROM
    student;
    
-- Exercice 2.1.4 – Ecrire une requête pour présenter, pour chaque étudiant, dans une seule
-- colonne (nommée « Info Étudiant ») l’ensemble des données relatives à un étudiant séparées par le
-- symbole « | ». 

SELECT    
    CONCAT_WS(
        ' | ', 
        student_id, first_name, last_name, birth_date, login, section_id, year_result, course_id
    ) "Information Étudiant"
FROM student;

<!--  -->
-- Exercice 2.7.1 – Donner la liste des étudiants (nom et prénom) qui font partie de la même
-- section que mademoiselle « Roberts ». La liste doit être classée par ordre alphabétique sur
-- le nom et mademoiselle « Roberts » ne doit pas apparaitre dans la liste

SELECT
    last_name, first_name, section_id
FROM student
WHERE section_id = ( SELECT section_id FROM student WHERE last_name = 'Roberts' )
    AND last_name <> 'Roberts'
ORDER BY last_name;








