<?php
  // header("allow-control-access-origin: * ");
  $data = json_decode(file_get_contents("php://input"), true);
  
  if($data){
    $dbhost = "localhost:3306";
    $dbuser = "51763_hamish";
    $dbpass = "Jtgh9~49";
    $db = "51763-pepeha-nz_2018";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connect failed: %s\n". $conn -> error);

    $json = json_decode($data['formData'], true);

    $name = $json['fullName'];
    $email = $json['email'];
    $subscribed = $json['subscribed'];
    $jpg = $json['jpg'];
    $pdf = $json['pdf'];
    $browser = $json['browser'];
    $browserVersion = $json['browserVersion'];
    $os = $json['os'];
    $userAgent = $json['userAgent'];
    $trackLines = $json['trackLines'];

    $linesString;

    for($i = 0; $i < count($trackLines); $i++) {
      for($j = 0; $j < count($trackLines[$i]); $j++) {
        $line = $trackLines[$i][$j];

        $linesString .= "y=".$line["y"]."--- line=".$line["line"]."-+- ";
      }
    } 

    $sql = "INSERT INTO subscriptions (fullname, email, subscribed, jpgurl, pdfurl, browser, browserVersion, os, userAgent, trackLines) VALUES ('".$name."', '".$email."', '".$subscribed."', '".$jpg."', '".$pdf."', '".$browser."', '".$browserVersion."', '".$os."', '".$userAgent."', '".$linesString."')";

    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn -> close();

    // var_dump(json_decode($_POST['formData'], true));
  } else {
    echo "didn't get form data";
  }
?>