var rEmail = document.getElementById('rEmail');
var rFirstName = document.getElementById('rFirstName');
var rPass = document.getElementById('rPass');
var rPhoneNo = document.getElementById('rPhoneNo');
var rLastName = document.getElementById('rLastName');

var lEmail = document.getElementById('lEmail');
var lPass = document.getElementById('lPass');

var regEmail,regPass,storedEmail,storedPass;

storedEmail = localStorage.getItem('regEmail');
storedPass = localStorage.getItem('regPass');

///console.log("Stored Email and pass:"+storedEmail+" "+storedPass);
function valEmail(email){
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

//Registration Code

function btnRegister(){
    if(rFirstName.value == ""){
        window.alert("Please Enter Firstname");
        rFirstName.focus();
        return false;
    }

    if(rLastName.value == ""){
        window.alert("Please Enter Lastname");
        rLastName.focus();
        return false;
    }

    if(rEmail.value != ""){        
        if(valEmail(rEmail.value)){
            regEmail = rEmail.value;
        }else{
            alert("Incorrect Email");
            rEmail.focus();
            return false;
        }
    }else{
        window.alert("Please Enter Email");
        rEmail.focus();
        return false;
    }
    
    /**if(rPhoneNo.value == ""){
        window.alert("Please Enter PhoneNo");
        rPhoneNo.focus();
        return false;
    }**/

    if(rPhoneNo.value != ""){
        var phone = rPhoneNo.value;
        if(phone.length!=10){
            alert("Phone Number must be of length 10");
            rPhoneNo.focus();
            return false;
        }
    }else{
        alert("Please Enter Phone No");
        rPhoneNo.focus();
        return false;
    }

    if(rPass.value == ""){
        window.alert("Please Enter Password");
        rPass.focus();
        return false;
    }else{
        regPass = rPass.value;
    }

    if(rEmail.value == storedEmail){
        alert("Email Already Exists");
        rEmail.focus();
        return false;
    }else{
        localStorage.setItem('regEmail',rEmail.value);
        localStorage.setItem('regPass',rPass.value);   
        location.reload(); 
    }
   
   // console.log("From local storage---"+localStorage.getItem('regEmail'));
console.log("-------------------Registration Details-------------------");
console.log(rEmail.value+" "+rPass.value+" "+rPhoneNo.value+" "+rFirstName.value+" "+rLastName.value);


}


//Login Code
function btnLogin(){

    
    if(lEmail.value != ""){

        if(lPass.value != ""){
            if(valEmail(lEmail.value)){
                if(storedEmail == lEmail.value && storedPass == lPass.value){
                    alert("Login Successfull");
                    console.log("-------------------Login Details-------------------");
                    console.log(lEmail.value+" "+lPass.value);
                }else{
                    alert("Incorrect Login Details");
                }
            }else{
                alert("Incorrect Email");
            }
        }else{
            alert("Please Enter Password");
        }
    }else{
        alert("Please Enter Email");
        lEmail.focus();
        return false;
    }

   
    
}