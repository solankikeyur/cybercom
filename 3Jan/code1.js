
var markMass = prompt("Enter Mark's mass in kg");
var markHeight = prompt("Enter Mark's height in meter");

var johnMass = prompt("Enter John's mass in kg");
var johnHeight = prompt("Enter John's height in meter");


var markBmi = markMass / markHeight ** 2;
var johnBmi = johnMass / johnHeight ** 2;
var result = markBmi > johnBmi;

console.log('Marks BMI is '+markBmi);
console.log('Johns BMI is '+johnBmi);

alert('Is Marks BMI higher than Johns BMi ? '+result);

markBmi>johnBmi ? console.log("Mark's BMI is higher") : console.log("John's BMI is higher");