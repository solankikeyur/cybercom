var names = ["Keyur","Hardik","Nikunj"];

names.forEach(getNames);


function getNames(name,i){
    document.getElementById("nameTable").innerHTML += "<tr><td>"+i+"</td>"+"<td>"+name+"</td>"+"</tr>";
}
