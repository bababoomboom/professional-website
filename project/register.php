<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $email = $_POST['email'];
    $name = $_POST['first_name'];        
    $surname = $_POST['last_name'];      
    $grade = $_POST['grade'];
    $adno = $_POST['admission_no'];      
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, name, surname, grade, adno, password) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $username, $email, $name, $surname, $grade, $adno, $password);

    if ($stmt->execute()) {
        header("Location: http://localhost/project/sign-in.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>