<?php
$con = mysql_connect("mastersoftwaresoluti.fatcowmysql.com","angularjs","Admin123#");
if(!$con){
die("couldn't connect to database".mysql_error());
}
mysql_select_db("angularjs", $con);
$data = json_decode(file_get_contents('php://input'), true);
$inTime = $data[inTime];
if (isset($inTime) ) {
	$sql = mysql_query("insert into attendence(Employee_Id,InTime) values('1','$inTime')");
	if(!$sql){
	echo "Invalid Login";
	}else{
	 echo "Login Successfully.";
	}
}else { 
  $fetch = mysql_query("select * from attendence where Employee_Id =1");
  $row = mysql_fetch_array($fetch);
   $date_a = new DateTime();
   $date_b = new DateTime($row['InTime']);
   $interval = date_diff($date_a,$date_b);
   echo $interval->format('%h:%i:%s');
  if(isset($row['InTime'])) {
     $update = mysql_query("delete from attendence where Employee_Id =1");
  }
}
?>