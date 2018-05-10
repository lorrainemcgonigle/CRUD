<?php

$servername = "localhost";
	$username = "root";
	$password = "lorraine";
	$dbname = "customers";
	//create the connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn -> connect_error){
		die("connection failed");
	}

?>