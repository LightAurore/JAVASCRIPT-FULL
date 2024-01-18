### Exercice 1

CREATE TABLE T_office (
office_id INTEGER,

-- Entity 'composite'?
office_addresse VARCHAR(30),

-- pas necessaire de mettre 'CONSTRAINT PK_office' ?
(CONSTRAINT PK_office )PRIMARY KEY (office_id)
);

CREATE TABLE T_course (
-- PRIMARY = NOT NULL AND UNIQUE ?
crs_code CHAR(8) NOT NULL PRIMARY KEY,

-- il y a un espace entre deux mots
crs?(\_)name VARCHAR(30),

-- un nom pas très explicite
CONSTRAINT UK_crs?(\_name) UNIQUE (crs_name)
);

CREATE TABLE T_professor (
prf_id INTEGER NOT NULL PRIMARY KEY,
prf_name VARCHAR(30),
prf_course CHAR(8),

-- c'est plutot une clé étrangère qu'il faudrait définir ici!
-- ? CONSTRAINT PK_course REFERENCES T_course (crs_code),
CONSTRAINT FK_professeur_course FOREIGN KEY (prf_course) REFERENCES T_course (crs_code)?(,)
-- il ne faut pas de virgule
ON DELETE SET NULL,

-- une clé étrangère, integer not a char(2)
(office_id CHAR(2) REFERENCES T_office,)
FOREIGN KEY (office_id) REFERENCES T_office (office_id),

--
?(CONSTRAINT prf_name )UNIQUE (prf_name)

);

### Exercice 2

CREATE TABLE t_maintenance_mtn (
maintenance_id,
);

CREATE TABLE machine(
num_machine,
nom_machine,
vitesse,
temperature
);

CREATE TABLE cause_maintenance(
jour,
heure,
evenement
);

##

CREATE TABLE machine(
num_machine VARCHAR(50),
nom VARCHAR(50),
vitesse VARCHAR(50),
temperature VARCHAR(50),
PRIMARY KEY(num_machine)
);

CREATE TABLE evenement(
panne_id VARCHAR(50),
panne VARCHAR(50),
jour DATE,
heure TIME,
PRIMARY KEY(panne_id)
);

CREATE TABLE t_maintenance_mtn(
num_machine VARCHAR(50),
panne_id VARCHAR(50),
PRIMARY KEY(num_machine, panne_id),
FOREIGN KEY(num_machine) REFERENCES machine(num_machine),
FOREIGN KEY(panne_id) REFERENCES evenement(panne_id)
);

##

### Exercice 3

CREATE TABLE T_fabriquant_fbq(
ref_fabriquant,
nom_fbq
);

CREATE TABLE T_taux_tva(
categorie,
);

CREATE TABLE T_rayon_ryn(
num_rayon,
categorie_rayon
);

CREATE TABLE T_magasin_mgs(
magasin_id,
nom_magasin,
);

CREATE TABLE T_produit_pdt(
EAN13,
id_mgn,
prix_vente,
ref_tva,
ref_fabriquant,
ref_magasin,
ref_rayon
);

##

CREATE TABLE T_rayon_ryn(
num_ryn VARCHAR(50),
categorie_ryn VARCHAR(50),
PRIMARY KEY(num_ryn)
);

CREATE TABLE T_magasin_mgs(
mgs_id VARCHAR(50),
nom_mgs VARCHAR(50),
num_ryn VARCHAR(50) NOT NULL,
PRIMARY KEY(mgs_id),
FOREIGN KEY(num_ryn) REFERENCES T_rayon_ryn(num_ryn)
);

CREATE TABLE T_produit_pdt(
EAN13 VARCHAR(50),
nom_produit VARCHAR(50),
prix_vente DECIMAL(15,2),
id VARCHAR(50) NOT NULL,
PRIMARY KEY(EAN13),
UNIQUE(id)
);

CREATE TABLE T_fabriquant_fbq(
fbq_id VARCHAR(50),
nom_fbq VARCHAR(50),
EAN13 VARCHAR(50) NOT NULL,
PRIMARY KEY(fbq_id),
FOREIGN KEY(EAN13) REFERENCES T_produit_pdt(EAN13)
);

CREATE TABLE vend(
mgs_id VARCHAR(50),
EAN13 VARCHAR(50),
tva VARCHAR(50),
PRIMARY KEY(mgs_id, EAN13),
FOREIGN KEY(mgs_id) REFERENCES T_magasin_mgs(mgs_id),
FOREIGN KEY(EAN13) REFERENCES T_produit_pdt(EAN13)
);

##

### Exercice 4

CREATE TABLE t_voiture_vtr(
vtr_id INTEGER NOT NULL PRIMARY KEY, -- ? L9 L10
vtr_immatricul CHAR(10) NOT NULL UNIQUE, -- ? L8 L10
vtr_carburant CHAR(2) NOT NULL DEFAULT 'ES' CHECK(vtr_carburant IN ('ES', 'GO', 'PL')), -- ? L6, L9, L10
vtr_puissance_fisc INTEGER NOT NULL CHECK(vtr_puissance_fisc BETWEEN 1 AND 20), -- ? L2
vtr_nb_places INTEGER NOT NULL CHECK(vtr_nb_places BETWEEN 1 AND 7), -- ? ok
vtr_modele VARCHAR(20) CHECK(RTRIM(LTRIM(vtr_model)) NOT LIKE ''), -- ? L2, L4, L9 ???
vtr_constructeur VARCHAR(16) CHECK(RTRIM(LTRIM(vtr_constructeur)) NOT LIKE ''), -- ? L4
vtr_numero_serie VARCHAR(25) NOT NULL CHECK(RTRIM(LTRIM(vtr_numero_serie)) NOT LIKE ''), -- ? ok

CONSTRAINT CK_immatriculation  
 CHECK((
(CONVERT(INTEGER,SUBSTRING(vtr_immatricul, 9, 1)) BETWEEN 0 AND 9)
AND
(SUBSTRING(vtr_immatricul, 10, 1) BETWEEN '0' AND '9')
AND
(SUBSTRING(vtr_immatricul, 9, 2) < '96')
)
OR
(
(CONVERT(INTEGER,SUBSTRING(vtr_immatricul, 9, 1)) = 2)
AND
(SUBSTRING(vtr_immatricul, 10, 1) IN ('A','B'))
)
) ?

CONSTRAINT CK_puiss_place CHECK(vtr_nb_places - 1 < vtr_puissance_fisc), -- ? L2,

CONSTRAINT UK_mdl_ctr_nsr UNIQUE (vtr_modele, vtr_constructeur, vtr_numero_serie) -- ? L5, L7, L8

);

Li 9 mm id
Li 10 mm id !=

### Exercice 5, 6, 7, 8

### Exercice 9
