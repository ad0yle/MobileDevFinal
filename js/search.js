/*
JavaScript for index.html, contact.js
*/

function searchTerms(zip, distance) {
		
		  var numbers = /^[0-9]+$/;  
          var zipCode = zip;
          var distance = distance;
		  
		  if(!zipCode.match(numbers) || zipCode.length !=5){
			alert('Please use 5 numbers for the Zip Code')
			return false;
		  }
		  
		  else{
			  if (zip!=""){
			  localStorage.setItem('zipCode', zipCode);
			  } 
			  if (distance !="") {
			  localStorage.setItem('distance', distance);
			  }
			  window.location.href = 'map.html';
		  }	
}