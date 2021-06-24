<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


$mysqli = new mysqli('localhost', 'root', '', 'bd_lacc');
if($mysqli->connect_error){
   echo "Desconectado! Erro: " . $mysqli->connect_error;
}else{

    $sql ="Select latitude, longitude, nome, idade, descricao, contactoUSer from interacao where State=1";
    $result = $mysqli -> query($sql);

    $location = array();

    if(mysqli_num_rows($result)>0){
         while($row =mysqli_fetch_assoc($result)){
             array_push($location, $row);
         }
    }

    echo json_encode($location);
}

    mysqli_close($mysqli);


?>
