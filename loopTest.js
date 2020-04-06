/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("loaded").onload = setTimeout(showLocation,30000);
var buttonpressed = false;


function displayPosition(position) {
  if (!buttonpressed ) 
  {
    console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude );
    document.getElementById("longitude").value = position.coords.longitude;
    document.getElementById("latitude").value = position.coords.latitude;
   // document.getElementById("dataUpdate").submit();
   // document.forms["dataUpdate"].submit();
  } else {
 document.getElementById('info').value='stopped';
  }
}

function startSomething() {
 document.getElementById('info').value='';
 buttonpressed = false;
 setTimeout(showLocation,30000);
 ; 
}

function setButtonPressed() {
 buttonpressed = true;
 console.log("Stopped");
}


function showLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}


