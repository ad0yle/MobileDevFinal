/*
JavaScript for ratings.html
*/
function createTable() {
    document.getElementById('distance').innerHTML = "Distance: " + localStorage.getItem('distance') + " Miles &nbsp;&nbsp;";
    document.getElementById('zipcode').innerHTML = "Zip Code: " + localStorage.getItem('zipCode') + "&nbsp;&nbsp;";
        
        var names = localStorage.getItem("names");
        var addresses = localStorage.getItem("addresses");
        var ratings = localStorage.getItem("ratings");
        
        var names_array = names.split(";");
        var addresses_array = addresses.split(";");
        var ratings_array = ratings.split(";");
        
        var table = document.getElementById("ratings_table");
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        var text1 = document.createTextNode("Coffee Shop");
        var text2 = document.createTextNode("Address");
        var text3 = document.createTextNode("Rating");
        th1.appendChild(text1);
        th2.appendChild(text2);
        th3.appendChild(text3);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        table.appendChild(tr);
        
        for (var i = 0; i < names_array.length; i++) {
            
            var tr = document.createElement('tr');   

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            var text1 = document.createTextNode(names_array[i]);
            var text2 = document.createTextNode(addresses_array[i]);
            
            
            for (j = 0; j < Math.round(parseFloat(ratings_array[i])); j++) {
                var DOM_img = document.createElement("img");
                DOM_img.className = "coffee_star";
                DOM_img.src = "./pics/coffee_star.png";
                td3.appendChild(DOM_img);
            }

            td1.appendChild(text1);
            td2.appendChild(text2);
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            table.appendChild(tr);
        }
        
        document.body.appendChild(table);
        
        for (var i = 0; i < names_array.length; i++) {
            console.log(names_array[i] + " " + addresses_array[i] + " " + ratings_array[i]);
        }
}

        