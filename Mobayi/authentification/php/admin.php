<?php
session_start();

// Vérifiez si l'utilisateur est connecté
if (!isset($_SESSION['username'])) {
    header("Location: login.php"); // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
    exit;
}

// Affichez le contenu de la page d'administration ici
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Page d'administration</title>
    <!-- Incluez vos fichiers CSS et JavaScript ici -->
</head>
<body>
    <h1>Bienvenue dans l'espace d'administration, <?php echo $_SESSION['username']; ?> !</h1>
    <!-- Ajoutez vos fonctionnalités d'administration ici -->
    <a href="logout.php">Déconnexion</a> <!-- Lien pour se déconnecter -->
</body>
</html>
