<?php
	include 'conn.php';
	$record = file_get_contents('php://input');
	$decodedjson = json_decode($record);
	$id = $decodedjson->id;
	$sql = "DELETE FROM readinglistinfo WHERE `id` = '$id'";

	if ($conn->query($sql)) {
    $msg = array("status" =>1 , "msg" => "Record Deleted successfully");
	} else {
	    echo "Error: " . $query . "<br>" . mysqli_error($conn);
	} 

	$json = $msg;

	header('content-type: application/json');
	echo json_encode($json);

	$conn->close();

?>