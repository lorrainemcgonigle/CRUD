<?php
	include 'conn.php';
	$record = file_get_contents('php://input');
	$decodedjson = json_decode($record);
	$name = $decodedjson->name;
	$url = $decodedjson->url;
	$description = $decodedjson->description;
	$theDate = $decodedjson->theDate;

	$sql = "INSERT INTO readingListInfo (name, url, description, theDate) VALUES ('$name', '$url','$description', '$theDate')";

	if ($conn->query($sql)) {
	$msg = array("status" =>1 , "msg" => "Your record inserted successfully");
	} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	$json = $msg;

	header ('content-type: application/json');
	echo json_encode($json);

	@mysqli_close($conn);
?>