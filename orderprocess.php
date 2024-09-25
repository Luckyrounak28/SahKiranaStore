<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $product = htmlspecialchars($_POST['product']);
    $price = htmlspecialchars($_POST['price']);
    $address = htmlspecialchars($_POST['address']);
    $payment = htmlspecialchars($_POST['payment']);
    
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
        <p>Product: $product</p>
        <p>Price: $price</p>
        <p>Address: $address</p>
        <p>Payment Method: $payment</p>
        <p><a href='index.html'>Return to Home</a></p>
    </body>
    </html>";
}
?>
