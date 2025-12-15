<?php
if (isset($_POST['login'])) 
    {
    $email    = trim($_POST['email']);
    $password = trim($_POST['password']);
    $errors = [];
    if (empty($email)) 
    {
        $errors[] = "Email is required.";
    } 
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
        $errors[] = "Invalid email format.";
    }
    if (empty($password)) 
    {
        $errors[] = "Password is required.";
    } 
    elseif (strlen($password) < 6) 
    {
        $errors[] = "Password must be at least 6 characters long.";
    } 
    elseif (!preg_match('/[A-Z]/', $password))
    {
        $errors[] = "Password must contain at least one uppercase letter.";
    }
    elseif (!preg_match('/[a-z]/', $password)) 
    {
        $errors[] = "Password must contain at least one lowercase letter.";
    } 
    elseif (!preg_match('/[0-9]/', $password)) 
    {
        $errors[] = "Password must contain at least one number.";
    }
    if (!empty($errors)) 
        {
        foreach ($errors as $error) 
        {
            echo "<p style='color:red;'>$error</p>";
        }
    } 
    else 
    {
        echo "<p style='color:green;'>Email and password format are valid ✔</p>";
    }
}
?>
