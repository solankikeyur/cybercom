
var fibSeries = [];

fibSeries[0] = 0;
fibSeries[1] = 1;


for(var i=2;i<=10;i++){
    fibSeries[i] = fibSeries[i-1]+fibSeries[i-2];
}

console.log("Fibonacci Series is:"+fibSeries);