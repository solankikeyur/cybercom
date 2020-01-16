/**function interviewQuestion(job){
    if(job === "designer"){
        return function(name){
            console.log(name+" "+"is a designer.");
        }
    }else if(job === "engineer"){
        return function(name){
            console.log(name+" "+"is an engineer");
        }
    }

}

var designer = interviewQuestion("designer");

designer("Keyur");

interviewQuestion("engineer")("Keyur Solanki");

(function(name){
    console.log("My name is "+name);
})("Keyur");


//let and const

let name = 'Keyur';
const verifyAge = 18;

if(verifyAge == 18){

    let name = "Keyur Solanki";
    console.log("Inside Block "+name);
}

console.log("Outside Block "+name);

//using of let....
function ageVerificationLet(age){
    if(age>=18){
        let result = "Eligible to vote";
        console.log("Inside Block of function "+result);
    }
    //console.log("Outside Block of function "+result);
}
ageVerificationLet(18);

function ageVerificationVar(age){
    if(age>=18){
        var result = "Eligible to vote";
        console.log("Inside Block of function "+result);
    }
    console.log("Outside Block of function "+result);
}
 ageVerificationVar(18);**/

 function getValue(){
     var checkedOption = document.getElementsByName("gender");
     
     console.log(checkedOption[0].value);
 }

 const s = "Keyur Solanki";

 console.log(`My name is ${s}`);
 console.log(s.startsWith("K"));
 console.log(s.endsWith("i"));

 (function(){
     var score = 5;
     console.log("55555");
 })();
 
 function score1(){
     var score = 5;
 }
 console.log(score1());

 sessionStorage.setItem('name',0);

 console.log(parseInt(sessionStorage.getItem('name'))+1);