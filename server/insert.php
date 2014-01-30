<?php
$data = json_decode(file_get_contents('php://input'), true);
$user = $data[name];
$pass = $data[pass];
$con = mysql_connect("mastersoftwaresoluti.fatcowmysql.com","angularjs","Admin123#");
if(!$con){
die("couldn't connect to database".mysql_error());
}
mysql_select_db("angularjs", $con);
if($user == "angularjsdemo@gmail.com" && $pass == "angularjsdemo") {
$sql = mysql_query("insert into users(Username, Password) values('$user', '$pass')");
	if($sql){
	 echo "Login Successfully.";
	}
	echo "success";
}else {
  echo "error";
}
?>