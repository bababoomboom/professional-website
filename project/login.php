<?php
session_start();
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {

        $row = mysqli_fetch_assoc($result);

        // ✅ Password check
	if (password_verify($password, $row['password'])) {

            $_SESSION['username'] = $username;
            $_SESSION['loggedin'] = true;

	    header("Location: index.html");
	    exit();

        } else {

            echo "<div style='text-align:center; padding:50px; background:#f8d7da; color:#721c24; font-size:20px; border-radius:10px;'>";
            echo "❌ Wrong Password!";
            echo "<br><a href='sign-in.html' style='color:#721c24;'>← Try Again</a>";
            echo "</div>";
        }

    } else {

        echo "<div style='text-align:center; padding:50px; background:#f8d7da; color:#721c24; font-size:20px; border-radius:10px;'>";
        echo "❌ Username not found!";
        echo "<br><a href='sign-in.html' style='color:#721c24;'>← Try Again</a>";
        echo "</div>";
    }

    mysqli_close($conn);

} else {

    header("Location: sign-in.html");
}
?>