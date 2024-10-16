<?php
$servername = "localhost";
$servername = "localhost";
$username = "root";  // Default XAMPP MySQL username
$dbname = "ecommerce_db";
$password = "";     

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}



// Create `contacts` table
$contacts_table = "
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $contacts_table)) {
    echo "Table 'contacts' created successfully.<br>";
} else {
    echo "Error creating 'contacts' table: " . mysqli_error($conn);
}
mysqli_close($conn);
?>