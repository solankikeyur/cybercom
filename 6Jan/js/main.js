
//



function submitDetails(){
    

    var firstName = document.getElementById('firstName');
    if(firstName.value == ""){
        window.alert("Please Enter Firstname");
        firstName.focus();
        return false;
    }

    var lastName = document.getElementById('lastName');
    if(lastName.value == ""){
        window.alert("Please Enter Lastname");
        lastName.focus();
        return false;
    }

    var email = document.getElementById('email');
    if(email.value == ""){
        window.alert("Please Enter Email");
        email.focus();
        return false;
    }

    var data = {hobbies:[]};

    data.firstName = firstName.value;
    data.lastName = lastName.value;
    data.email = document.getElementById('email').value;
    data.password = document.getElementById('password').value;

    data.birthDate = document.getElementById('birthDate').value;
    
    if(document.getElementById('male').checked){
        data.gender = document.getElementById('male').value;
    }else if(document.getElementById('female').checked){
        data.gender = document.getElementById('female').value;
    }

    data.address = document.getElementById('address').value;
    data.city = document.getElementById('city').value;

  
   for(var i=1;i<=4;i++){
       if(document.getElementById('hobby'+i).checked){
        var h = document.getElementById('hobby'+i).value;
        data.hobbies.push(h);
       }
   }
   
   var pictureUrl = document.getElementById('picture');
   if(pictureUrl.value == ""){
    window.alert("Please Select Image");
    picture.focus();
    return false;
   }

   document.getElementById('detFirstName').innerHTML = data.firstName;
   document.getElementById('detLastName').innerHTML = data.lastName;
   document.getElementById('detGender').innerHTML = data.gender;
   document.getElementById('detEmail').innerHTML = data.email;
   document.getElementById('detAddress').innerHTML = data.address;
   document.getElementById('detPassword').innerHTML = data.password;
   document.getElementById('detHobbies').innerHTML = data.hobbies;
   document.getElementById('detCity').innerHTML = data.city;
   document.getElementById('detBirthDate').innerHTML = data.birthDate;

}


function change(){
    document.getElementById('body').style.backgroundColor = document.getElementById('bColor').value;
}