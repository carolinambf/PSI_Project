<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');



    $name = $_POST['name'];
    $age = $_POST['age'];
    $story = $_POST['story'];
    $contact = $_POST['contact'];
    $anexo = $_POST['anexo'];
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    
if($contact == "")$contact = "null";

$mysqli = new mysqli('localhost', 'root', '', 'bd_lacc');
if($mysqli->connect_error){
   echo "Desconectado! Erro: " . $mysqli->connect_error;
}else{
        $sql = "INSERT INTO interacao (latitude, nome, idade, descricao, contactoUSer, longitude, state) 
VALUES ($latitude, '$name', $age, '$story', '$contact', $longitude, 0)";
    if ($mysqli->query($sql) === TRUE) {
  header("Location: http://localhost:3000/");
exit();
} else {
  echo "Error: " . $sql . "<br>" . $mysqli ->error;
}
    
    }

    mysqli_close($mysqli);

 
?>