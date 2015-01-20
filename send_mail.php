<?php

require_once 'mcapi/inc/MCAPI.class.php';
require_once 'mcapi/inc/config.inc.php'; //contains apikey

$errors = array();

if ($_POST['email'] != "") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Please enter a valid email address.";
    }
} else {
    $errors["email"] = 'Please enter your email address.';
}

if (count($errors)==0) {


    $api = new MCAPI($apikey);

    $merge_vars = array('FNAME'=>'Test', 'LNAME'=>'Account', 
                      'GROUPINGS'=>array(
                            )
                        );

    // By default this sends a confirmation email - you will not see new members
    // until the link contained in it is clicked!
    $retval = $api->listSubscribe( $listId, $email, $merge_vars ,"html", false);

    if ($api->errorCode){
        error_log("Error Code : ".$api->errorCode);
        error_log("Error Msg : ".$api->errorMessage);
        echo false;
    } else {
        echo true;
    }
} else {
    echo json_encode($errors);
}