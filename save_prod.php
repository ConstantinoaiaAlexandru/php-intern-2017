<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "eshop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Products (name, details, price, image) VALUES( '".$_POST['name']."', '".$_POST['details']."', '".$_POST['price']."', '".$_FILES['image']['name']."' )";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
