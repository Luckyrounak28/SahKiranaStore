<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $cartData = htmlspecialchars($_POST['cart-data']);

    // Decode the JSON cart data
    $cart = json_decode($cartData, true);

    // Here you can process the order, e.g., save it to a database, send an email, etc.

    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Order Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            h1 { color: #28a745; }
        </style>
    </head>
    <body>
        <h1>Thank you for your purchase!</h1>
        <p>Name: $name</p>
        <p>Email: $email</p>
        <p>Order Details:</p>";

    foreach ($cart as $item) {
        echo "<p>{$item['name']} - ₹{$item['price']}</p>";
    }

    echo "<p><a href='index.html'>Return to Home</a></p>
    </body>
    </html>";
}
?>
