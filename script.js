function validateForm(){

let check=document.getElementById("confirm");

if(!check.checked){

alert("Please confirm that the details are correct.");

return false;

}

alert("Registration submitted successfully!");

return true;

}
