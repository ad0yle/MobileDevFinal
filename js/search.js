/*
JavaScript for index.html, contact.js
*/

function searchTerms(zip,distance) {
          var zipCode = zip;
          var distance = distance;
          if (zip!=""){
          localStorage.setItem('zipCode', zipCode);
          } 
          if (distance !="") {
          localStorage.setItem('distance', distance);
          }
          window.location.href = 'map.html';
      }
