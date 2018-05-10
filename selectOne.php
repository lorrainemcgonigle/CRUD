<?php
	include 'conn.php';
	$record = file_get_contents('php://input');
	$decodedjson = json_decode($record);
	$id = $decodedjson->id;
	$getData = "select * from readingListInfo WHERE id = '$id'";
	$qur = $conn->query($getData);

	while ($r = mysqli_fetch_assoc($qur)){

		$msg[] = array("id" => $r['id'], "name" => $r['name'], "description" => $r['description'], "url" => $r['url'], "theDate" => $r['theDate']);
	}
	$json = $msg;

	header('content-type: application/json');
	echo json_encode($json);

	@mysqli_close($conn);
?>