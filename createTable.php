<?php

	$servername = "localhost";
	$username = "root";
	$password = "lorraine";
	$dbname = "readingList";
	//create the connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn -> connect_error){
		die("connection failed");
	}
	//create the table in the database
	$sql = "CREATE TABLE readingListInfo (
		id int UNSIGNED AUTO_INCREMENT Primary Key,
		theDate date NOT Null,
		name VARCHAR(30) NOT NULL,
		url VARCHAR(30) NOT NULL,
		description VARCHAR(200)
	)";

	if($conn -> query($sql) === TRUE){
		echo ("eBook table created successfully");
	}
	else{
		echo ("error occurred" .$conn -> error);
	}
	//Jump to the index page
	header("location: App.html");
	$conn -> close();
?>