var originalBill,finalBill;

originalBill = [124,48,268];
finalBill = [];

for(var i=0;i<originalBill.length;i++){
    if(originalBill[i]<50){
        finalBill.push(calTip(originalBill[i],20));
    }else if(originalBill[i]>=50 && originalBill[i]<=200){
        finalBill.push(calTip(originalBill[i],15));
    }else if(originalBill[i]>200){
        finalBill.push(calTip(originalBill[i],10));
    }
}

console.log("--------Billing History Of All Tips---------");
for(var j=0;j<originalBill.length;j++){
    console.log("Before Tip:"+originalBill[j]+"  "+"After Tip:"+finalBill[j]);
}


function calTip(originalAmount,tipAmount){
    return originalAmount + originalAmount*(tipAmount/100);
}