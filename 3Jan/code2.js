var avgJohn = 2// (89 + 120 + 103) / 3;
var avgMike = 3//(116 + 94 + 123) / 3;
var avgMary = 2//(97 + 34 + 105) / 3;

if(avgJohn == avgMike && avgJohn == avgMary)
{
    console.log("They have equal score.");
}
else if(avgJohn > avgMike && avgJohn > avgMary){
    console.log("John's team won.");
}else if(avgMike > avgMary && avgMike > avgJohn){
    console.log("Mike's team won.");
    if(avgMary==avgJohn)
    {
        console.log("Mary and John Ties");
    }
}else if(avgMary > avgMike && avgMary > avgJohn){
    console.log("Mary's team won.");
    
}else if(avgJohn == avgMary){
    console.log("Draw between John and Mary");
}else if(avgMike == avgMary){
    console.log("Draw between Mike and Mary");
}else if(avgJohn == avgMike){
    console.log("Draw between John and Mike");
}