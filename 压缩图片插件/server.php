<?php
	//解码
	$tmp = base64_decode($_POST['imgOne']);
	//写文件
var_dump($_POST['imgOne'],"---------------",$tmp);exit;
	file_put_contents("D://img.jpg", $tmp);
	echo '{"Msg":"上传成功!"}';
?>