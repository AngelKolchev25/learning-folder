<?php
    
    session_start();

    setcookie($_SESSION['username'],$_SESSION['logged_in'], time(), -3600);
    session_destroy();
    header('Location: /phpTaskAtt2/index.html');