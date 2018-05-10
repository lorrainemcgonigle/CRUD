<?php
	include 'conn.php';
	$record = file_get_contents('php://input');
	$decodedjson = json_decode($record);
	$name = $decodedjson->name;
	$url = $decodedjson->url;
	$description = $decodedjson->description;
	$id = $decodedjson->id;
	$query = "UPDATE readinglistinfo SET  `name`= '$name', `url` = '$url', `description` = '$description' WHERE  `id` = '$id'";
	if ($conn->query($query)) {
	       $msg = array("status" =>1 , "msg" => "Record Updated successfully");
	}else {
	    echo "Error: " . $query . "<br>" . mysqli_error($conn);
	}
	$json = $msg;

	header('content-type: application/json');
	echo json_encode($json);

	@mysqli_close($conn);

?>