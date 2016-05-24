/*
JavaScript for map.html
*/

	// This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      window.onload = function() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
      }
        
      var map;
      var infowindow;
        
      function initMap() {
          
        var xmlhttp = new XMLHttpRequest();
        var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + localStorage.getItem('zipCode') + "&key=AIzaSyAebUsoQm8jnTJdOzlkfVJtIiz1KMXLhrc";
          
        console.log(localStorage.getItem('zipCode'));
          
        xmlhttp.onreadystatechange = function() {
        var jsonObj = $.parseJSON(xmlhttp.responseText);
        var lat = jsonObj.results[0].geometry.location.lat;
        var lng = jsonObj.results[0].geometry.location.lng;
        console.log(lat);
        console.log(lng);
        localStorage.setItem('zipcode_lat',lat);
        localStorage.setItem('zipcode_lng',lng);
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        
        console.log(parseFloat(localStorage.getItem('distance'))*1609.34);
          
        document.getElementById('distance').innerHTML = "Distance: " + localStorage.getItem('distance') + " Miles &nbsp;&nbsp;";
        document.getElementById('zipcode').innerHTML = "Zip Code: " + localStorage.getItem('zipCode') + "&nbsp;&nbsp;";
          
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(parseFloat(localStorage.getItem('zipcode_lat')),parseFloat(localStorage.getItem('zipcode_lng'))),
          zoom: 13
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: new google.maps.LatLng(parseFloat(localStorage.getItem('zipcode_lat')),parseFloat(localStorage.getItem('zipcode_lng'))),
          radius: parseFloat(localStorage.getItem('distance'))*1609.34,
          type: ['cafe']
        }, callback);
      }

      function callback(results, status) {
        var names = "";
        var addresses = "";
        var ratings = "";
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            names += results[i].name + ";";
            addresses += results[i].vicinity + ";";
            ratings += results[i].rating + ";";
          }
        }
        localStorage.setItem("names",names);
        localStorage.setItem("addresses",addresses);
        localStorage.setItem("ratings",ratings);
      }
      function createMarker(place) {
        var image = 'coffee_star.png';
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon:image
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
