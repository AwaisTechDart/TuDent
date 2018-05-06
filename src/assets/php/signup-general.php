<?php
    $con = mysqli_connect("localhost","root","","tudent");
	$data = json_decode(file_get_contents('php://input'));
	$arr=array();
	$sql = "INSERT INTO generalacc (Name,userName,Password,Email,Cell,emgNo,CNIC,Address)" 
	."VALUES('".$data->fname."','".$data->uname."','".$data->pass."','".$data->email."','".$data->cell."','".$data->emgno."','".$data->cnic."','".$data->address."')";
	if(!$con)
	{
		$arr[0]='connection';
		echo json_encode($arr);
	}
	else if(mysqli_query($con,$sql)){
		$sql1 = "SELECT accID FROM generalacc WHERE cnic='".$data->cnic."'";
		$result = mysqli_query($con,$sql1);
		$row = mysqli_fetch_array($result);
		$arr[0]='success';
		$arr[1]=$row['accID'];
		echo json_encode($arr);
	}
	else
	{
		$arr[0]='fail';
		echo json_encode($arr);
	}