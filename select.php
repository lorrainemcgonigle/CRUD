<?php
	include 'conn.php';

	$getData = "select * from readingListInfo";
	$qur = $conn->query($getData);

	while ($r = mysqli_fetch_assoc($qur)){

		$msg[] = array("id" => $r['id'], "name" => $r['name'], "description" => $r['description'], "url" => $r['url'], "theDate" => $r['theDate']);
	}
	$json = $msg;

	header('content-type: application/json');
	echo json_encode($json);

	@mysqli_close($conn);
?>