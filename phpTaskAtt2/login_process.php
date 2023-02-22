<?php
   
    function validate_input($input) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input);
        return $input;
    }

    if(isset($_POST['submit'])) {
        $username = validate_input($_POST['username']);
        $password = validate_input($_POST['password']);
        
        
        if($username === 'admin' && $password === 'admin'){
            session_start();
            $_SESSION['username'] = $username;
            $_SESSION['logged_in'] = true;
            setcookie('USER', '0', time()-3600);
            setcookie($_SESSION['username'], $_SESSION['logged_in'], time()+3600);
            
                echo htmlspecialchars($username);

            header('Location: /phpTaskAtt2/dashboard.html'); 
        }else{
            $_SESSION['logged_in'] = false;
            setcookie('USER', 'DENIED', time()+3600);
            header('Location: /phpTaskAtt2/index.html');
        }
    }

?>