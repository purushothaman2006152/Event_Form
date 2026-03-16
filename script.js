document.getElementById("registrationForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let event=document.getElementById("event").value;

let mode=document.querySelector('input[name="mode"]:checked').value;

let table=document.getElementById("participantsTable");

let newRow=document.createElement("tr");

newRow.innerHTML=
"<td>"+name+"</td>"+
"<td>"+email+"</td>"+
"<td>"+phone+"</td>"+
"<td>"+event+"</td>"+
"<td>"+mode+"</td>";

table.appendChild(newRow);

alert("Registration Successful!");

document.getElementById("registrationForm").reset();

});
