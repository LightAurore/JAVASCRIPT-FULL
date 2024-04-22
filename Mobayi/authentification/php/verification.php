<?php
session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {
    // Connexion à la base de données
    $db_username = 'root';
    $db_password = 'mot_de_passe_bdd';
    $db_name = 'nom_bdd';
    $db_host = 'localhost';

    $db = mysqli_connect($db_host, $db_username, $db_password, $db_name) or die('could not connect to database');

    // Vérification des champs
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);

    // Vérifiez les informations dans la base de données (par exemple, la table 'utilisateur')
    // Si les informations sont correctes, redirigez vers la page principale
    // Sinon, affichez un message d'erreur
}
?>
