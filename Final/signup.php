<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1); // This will show you errors instead of a blank screen

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 1. Match your filename exactly
    require_once 'dbconnect.php'; 

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $password = $_POST['password'] ?? '';
    $userType = $_POST['user_type'] ?? '';

    try {
        // 2. Prepare the SQL
        $stmt = $pdo->prepare("INSERT INTO users (name, email, phone, password, user_type) VALUES (?, ?, ?, ?, ?)");
        
        // 3. Hash password for security
        $hashed = password_hash($password, PASSWORD_DEFAULT);
        
        // 4. Execute
        $stmt->execute([$name, $email, $phone, $hashed, $userType]);

        // 5. Success - Redirect to homepage
        header("Location: homepage.html");
        exit;

    } catch(PDOException $e) {
        die("Database Error: " . $e->getMessage());
    }
}
?>