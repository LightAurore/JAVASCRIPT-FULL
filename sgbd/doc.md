CREATE TABLE personne (
    email VARCHAR(250) CHECK (email LIKE '%__@%__.%__')
);