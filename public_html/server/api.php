<?php

Header('Content-type:application/json');
// Afficher les erreurs à l'écran
ini_set('display_errors', 1);
// Enregistrer les erreurs dans un fichier de log
ini_set('log_errors', 1);
// Nom du fichier qui enregistre les logs (attention aux droits à l'écriture)
ini_set('error_log', dirname(__file__) . '/log_error_php.txt');

$dsn = 'mysql:host=localhost;dbname=dmdbtest;charset=utf8';
$user = 'adminsql';
$password = 'mdpsql';
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

$db = new PDO($dsn, $user, $password, $options);

echo 'Connect BDD OK';

$req = $db->query("SELECT * FROM jeux_video ORDER BY nom ASC LIMIT 10");

while ($data = $req->fetch(PDO::FETCH_ASSOC)) {
    $json[] = $data;
}
$req->closeCursor();

/* $i = 0;
  foreach ($json as $value) {
  $i++;
  echo $i . ". " . $value['nom'] . "   " . $value['console'] . "   " . $value['commentaires'];
  echo "</br>";
  } */

return $json;
?>
