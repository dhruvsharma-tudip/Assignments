$(function(){ 

function myFunction(info) {
	var i;
    for(i = 0; i<info.length; i++){
      $("#tblData tbody").append("<tr><td>" +
    info[i].FirstName + "</td><td>" +
	info[i].LastName + "</td><td>" +
	info[i].RollNO + "</td><td>" +
	info[i].Subject1 + "</td><td>" +
	info[i].Subject2 + "</td><td>" +
	info[i].Subject3 + "</td>"+
	"<td><img src='images/d.png' class='btnDelete'/><img src='images/b.png' class='btnEdit'/>"+ "</tr>"); 
 $(".btnEdit").bind("click", Edit);
 $(".btnDelete").bind("click", Delete); 
    }
   }


function Add(){ 
$("#tblData tbody").append( "<tr>"+
 "<td><input type='text'/></td>"+
 "<td><input type='text'/></td>"+ 
 "<td><input type='text'/></td>"+ 
 "<td><input type='text'/></td>"+
 "<td><input type='text'/></td>"+ 
 "<td><input type='text'/></td>"+  
 "<td><img src='images/i.png' class='btnSave'><img src='images/d.png' class='btnDelete'/>"+ "</tr>"); 
$(".btnSave").bind("click", Save);	
$(".btnDelete").bind("click", Delete);
 }; 

 
  
 function Save(){ 
	var par = $(this).parent().parent();//tr 
 var tdFirstName = par.children("td:nth-child(1)");
 var tdLastName = par.children("td:nth-child(2)");
 var tdRollNO = par.children("td:nth-child(3)");
 var tdSubject1 = par.children("td:nth-child(4)");
 var tdSubject2 = par.children("td:nth-child(5)");
 var tdSubject3 = par.children("td:nth-child(6)");
 var tdButtons = par.children("td:nth-child(7)");
 
 tdFirstName.html(tdFirstName.children("input[type=text]").val());
 tdLastName.html(tdLastName.children("input[type=text]").val());
 tdRollNO.html(tdRollNO.children("input[type=text]").val());
 tdSubject1.html(tdSubject1.children("input[type=text]").val());
 tdSubject2.html(tdSubject2.children("input[type=text]").val());
 tdSubject3.html(tdSubject3.children("input[type=text]").val());
 tdButtons.html("<img src='images/d.png' class='btnDelete'/><img src='images/b.png' class='btnEdit'/>");

 $(".btnEdit").bind("click", Edit);
 $(".btnDelete").bind("click", Delete); 
 }; 
 
 
 
 function Edit(){ 
	var par = $(this).parent().parent(); //tr 
	var tdFirstName = par.children("td:nth-child(1)");
 var tdLastName = par.children("td:nth-child(2)");
 var tdRollNO = par.children("td:nth-child(3)");
 var tdSubject1 = par.children("td:nth-child(4)");
 var tdSubject2 = par.children("td:nth-child(5)");
 var tdSubject3 = par.children("td:nth-child(6)");
 var tdButtons = par.children("td:nth-child(7)");
 
	tdFirstName.html("<input type='text' id='FirstName' value='"+tdFirstName.html()+"'/>");
	tdLastName.html("<input type='text' id='LastName' value='"+tdLastName.html()+"'/>"); 
	tdRollNO.html("<input type='text' id='RollNO' value='"+tdRollNO.html()+"'/>");
	tdSubject1.html("<input type='text' id='RollNO' value='"+tdSubject1.html()+"'/>");
	tdSubject2.html("<input type='text' id='RollNO' value='"+tdSubject2.html()+"'/>");
	tdSubject3.html("<input type='text' id='RollNO' value='"+tdSubject3.html()+"'/>");
	tdButtons.html("<img src='images/i.png' class='btnSave'/>"); 
	
	$(".btnSave").bind("click", Save); 
	$(".btnEdit").bind("click", Edit); 
	$(".btnDelete").bind("click", Delete); 
};


function Delete(){
	var par = $(this).parent().parent(); //tr
	par.remove(); 
}; 


    
	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
	$("#btnAdd").bind("click", Add);
	$("#btnShow").bind("click",myFunction(info));
	});


