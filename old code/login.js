function validateForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "tim" && password == "password"){
    alert ("Login successfully");
    window.location = "admin.php"; // Redirecting to other page.
    return false;
    }
    if ( username == "client" && password == "password"){
        alert ("Login successfully");
        window.location = "client.php"; // Redirecting to other page.
        return false;
        }
     if ( username == "contractor" && password == "password"){
        alert ("Login successfully");
        window.location = "contractor.php"; // Redirecting to other page.
        return false;
        }
    
       
    else{
    attempt --;
    alert("You have left "+attempt+" attempt;");
    
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
    }