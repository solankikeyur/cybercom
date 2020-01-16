var john,mark,markBmi,johnBmi;
john = {
    fullname: "John Diggle",
    mass: 55,
    height: 1.7,
    bmi: function(){
        return this.mass/this.height**2;
    }
}

mark = {
    fullname: "Mark Spencer",
    mass: 7005,
    height: 1.7,
    bmi: function(){
        return this.mass/this.height**2;
    }
}

markBmi = mark.bmi();
johnBmi = john.bmi();

console.log("-----------BOTH BMI'S-----------");
console.log("Mark's BMI:"+markBmi);
console.log("John's BMI:"+johnBmi);
console.log("--------------------------------");
if(markBmi==johnBmi){
    console.log("Both have same bmi");
}else if(markBmi>johnBmi){
    console.log("Mark's has Higher BMI");
}else{
    console.log("John's has Higher BMI");
}
