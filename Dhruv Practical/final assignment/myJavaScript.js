function myFunction(info) {
     var out="<table border=1 width=100%><tr><th>First</th><th>Last</th><th>RollNo</th><th>Subject1</th><th>Subject2</th><th>Subject3</th></tr>";
    var i;
    for(i = 0; i<info.length; i++) {
         out += "<tr><td>" +
    info[i].FirstName + "</td><td>" +
	info[i].LastName + "</td><td>" +
	info[i].RollNO + "</td><td>" +
	info[i].Subject1 + "</td><td>" +
	info[i].Subject2 + "</td><td>" +
	info[i].Subject3 + "</td></tr>";
    }
	out+="</table>";
    document.getElementById("id01").innerHTML = out;
}