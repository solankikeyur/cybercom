function getOption() {

    var selans = [];
    var correctans = ["keyur", "ctrl+c", "ctrl+v","hyper text markup language"]
    var count = 0;
    for(var i=0;i<12;i++)
     {

         if(document.getElementById('r'+i).checked)
     {
         selans.push(document.getElementById('r'+i).value);
     }
     }
     console.log(selans);

     for(var j=0;j<correctans.length;j++){
         if(selans[j] == correctans[j])
         {
             count+=1;
         }
     }
     document.getElementById('result').innerHTML = "Correct Answers are " + count;
    }