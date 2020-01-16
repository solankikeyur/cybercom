var find = "company";

switch(find){
    case 'name':
        console.log("My name is Keyur Solanki");
        break;
    case 'company':
        console.log("Working at Cybercom Creation");
        break;
    default:
        console.log('Will be soon available..');
}

var age = 17;

switch(true){
    case age>18:
        console.log("greater");
        break;
    case age<18:
        console.log("less than 18");
}

function calculateAge(birthYear){
   return 2020-birthYear;
}

console.log(calculateAge(1998));

function yearsToRetire(year,firstname){
    var maxAge = 65;
    var age = calculateAge(year);
    var retireYears = 65 - age;

    console.log(firstname+' will retire in '+retireYears+' years.');
}

yearsToRetire(1998,'Keyur');

//array

var names = ['Keyur','Hardik','Shyam'];

console.log(names);

names[2]='Mahesh';

console.log(names);
console.log(names.length);

names.push('Jay');
names.unshift('Tak');

console.log(names);

names.pop();
names.shift();

console.log(names);
names.indexOf('Keyur');

