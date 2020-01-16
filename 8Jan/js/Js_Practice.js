//Simple Way of creating object

/**var john = {
    name : "John",
    yearOfBirth : 1990,
    job : "designer"
}**/

//function constructer

/**var Person = function(name,dateOfBirth,job){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;
    this.calAge = function(){
        return 2020-this.dateOfBirth;
    }
}

Person.prototype.message = function(){
    console.log(this.name+" "+"This is Prototype");
}
//Object creation using constructee

var john = new Person("John",1990,"designer");
var mark =  new Person("Mark",1995,"teacher");
console.log(john.dateOfBirth);
console.log(john.calAge());
john.message();
mark.message();

var Student = function(firstName,lastName,collegeName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.collegeName = collegeName;
}
Student.prototype.collegeType = "Private";

var keyur = new Student("Keyur","Solanki","RK University");

console.log(keyur.collegeType);

//primitives and objects

var a = 10;
var b = a;
console.log(b);
a = 25;
console.log(b);

//using objects

var john = {age: 25,name: "John"}
var mark = john;

console.log(john.age);
console.log(mark.age);
john.age = 12;
console.log(john.age);
console.log(mark.age);
mark.age=55;
console.log(john.age);
console.log(mark.age);

var age = 55;
var obj = {
    name:"OBJ",
}

console.log(age);
console.log(obj.name);

function change(age,obj){
    age = 65;
    obj.name = "obj1";
}
change(age,obj);
console.log(age);
console.log(obj.name);**/
/////function inside function

console.log("-------------function inside function-----------");
var years = [1990,1998,1995];

function calAge(year){
    return 2020-year;
}

function printAges(yearArr,calAge){
    var result =[];
    for(var i=0;i<yearArr.length;i++){
        result.push(calAge(yearArr[i]));
    }
    console.log(result);
}
printAges(years,calAge);