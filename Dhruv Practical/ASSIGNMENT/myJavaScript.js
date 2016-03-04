$(document).ready(function(){
	$("#panel").hide();
	 $("#btnAdd").click(function(){
        $("#panel").slideToggle("slow");
	});
});	


function myValidate(){
  var textVal = $("#Fname").val();
  if(textVal == "") {
    alert('Please Enter FirstName!!!');
    return false;
  }
}

function myValidate1(){
  var textVal = $("#Lname").val();
  if(textVal == "") {
    alert('Please Enter LastName!!!');
    return false;
  }
}
function myValidate2(){
  var textVal = $("#RollNO").val();
  if(textVal == "") {
    alert('Please Enter Roll-NO.');
    return false;
  }
}

function first(){
		myFunction(info);
}

function myFunction(info) {
	var i;
    for(i = 0; i<info.length; i++){
      $("#tblData tbody").append("<tr><td>" +
    info[i].FirstName + "</td><td>" +
	info[i].LastName + "</td><td>" +
	info[i].RollNO + "</td><td>" +
	info[i].Subjects +"</td>"+
	"<td><img src='images/d.png' class='btnDelete'/><img src='images/b.png' class='btnEdit'/>"+ "</tr>"); 
		 $(".btnEdit").bind("click", Edit);
		 $(".btnDelete").bind("click", Delete); 
		}
}


function Add(){
            var fn=$("#Fname");
			if (fn.val() == "") {
                alert("Please select FirstName ");
                return false;
            }
			var ln=$("#Lname");
			if (ln.val() == "") {
                alert("Please select LastName ");
                return false;
            }
			var rn=$("#RollNO");
			if (rn.val() == "" ) {
                alert("Please select RollNO ");
                return false;
				else if(rn % 10!=0){
					alert("Please enter RollNO in multiples of 10");
                return false;
				} 
            }
            var dd = $("#Subjects");
            if (dd.val() == "") {
                alert("Please select an option! ");
                return false;
            }		
		$("#tblData tbody").append( "<tr><td>" + 
        document.getElementById("Fname").value + "</td><td>" +
		document.getElementById("Lname").value + "</td><td>" +
		document.getElementById("RollNo").value + "</td><td>" +
		document.getElementById("Subjects").value+ "</td>"+  
     "<td><img src='images/d.png' class='btnDelete'/><img src='images/b.png' class='btnEdit'/>"+ "</tr>"); 
     $(".btnEdit").bind("click", Edit);
     $(".btnDelete").bind("click", Delete); 
	 
	 document.getElementById("Fname").value="";
	 document.getElementById("Lname").value="";
	 document.getElementById("RollNo").value="";
	 document.getElementById("Subjects").value="";	 
 };
 
   
 function Save(){ 
	var par = $(this).parent().parent();//tr 
 var tdFirstName = par.children("td:nth-child(1)");
 var tdLastName = par.children("td:nth-child(2)");
 var tdRollNO = par.children("td:nth-child(3)");
 var tdSubjects = par.children("td:nth-child(4)");
 var tdButtons = par.children("td:nth-child(5)");
 
 tdFirstName.html(tdFirstName.children("input[type=text]").val());
 tdLastName.html(tdLastName.children("input[type=text]").val());
 tdRollNO.html(tdRollNO.children("input[type=text]").val());
 tdSubjects.html(tdSubjects.children("input[type=text]").val());
 tdButtons.html("<img src='images/d.png' class='btnDelete'/><img src='images/b.png' class='btnEdit'/>");

 $(".btnEdit").bind("click", Edit);
 $(".btnDelete").bind("click", Delete); 
 }; 
 
 function Edit(){ 
	var par = $(this).parent().parent(); //tr 
	var tdFirstName = par.children("td:nth-child(1)");
	var tdLastName = par.children("td:nth-child(2)");
	var tdRollNO = par.children("td:nth-child(3)");
	var tdSubjects = par.children("td:nth-child(4)");
	var tdButtons = par.children("td:nth-child(5)");
 
	tdFirstName.html("<input type='text' id='FirstName1' value='"+tdFirstName.html()+"'/>");
	tdLastName.html("<input type='text' id='LastName1' value='"+tdLastName.html()+"'/>"); 
	tdRollNO.html("<input type='text' id='RollNO1' value='"+tdRollNO.html()+"'/>");
	tdSubjects.html("<input type='text' id='Subjects1' value='"+tdSubjects.html()+"'/>");
	tdButtons.html("<img src='images/i.png' class='btnSave'/>"); 
	
	$(".btnSave").bind("click", Save);  
};


function Delete(){
	var par = $(this).parent().parent(); //tr
	par.remove(); 
}; 			