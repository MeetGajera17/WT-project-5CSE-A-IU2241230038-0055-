<?php
// Connection parameters
$servername = "localhost";
$username = "root";  // Default XAMPP MySQL username
$password = "";      // Default XAMPP MySQL password is blank

// Create connection to MySQL
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create the database if it doesn't exist
$sql = "CREATE DATABASE IF NOT EXISTS ecommerce_db";
if (mysqli_query($conn, $sql)) {
    echo "Database 'ecommerce_db' created successfully or already exists.<br>";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);
?>




