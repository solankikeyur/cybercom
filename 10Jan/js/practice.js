const years = [1909,1998,2000];

//es5
var ages = years.map(function(ele){
    return 2020-ele;
});

console.log(ages);

//es6
var ages2 = years.map(ele => 2020-ele);

console.log(ages2);

//2nd way
age2 = years.map((el,index) => `age of ${index} is ${2020-el}`);

console.log(age2);

//3rd way

age2 = years.map((el,index) => {
    var a = 2020 - el;
    return `Age is ${a}`;
});

console.log(age2);