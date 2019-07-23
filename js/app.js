"uses strict";

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));    
        } else 
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }

    return objects;
}




let myRequest = new Request("./js/postalcode.json");






window.onload=function(){
	// Get the button that opens the modal
  var el = document.getElementById("myBtn");
  // Get the input postzahl in form 
 var eg = document.getElementById("postzahl");
 var ef = document.getElementById("posty");
 // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("refrain")[0];

var fenetre = document.getElementById("myModal");;
var fenetre1 = document.getElementById("myModal1");;
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  fenetre.style.display = "none";
}

span1.onclick = function() {
  fenetre1.style.display = "none";
}
span2.onclick = function() {
  fenetre1.style.display = "none";
}




 if (eg){


		document.getElementById("myBtn").addEventListener("click", function(){

		fetch(myRequest)
	.then(function(resp){
		return resp.json();
	})
	.then(function(data){
	var soucissa = getObjects(data, 'pc', eg.value);
if (soucissa.length == 1){
							

						ef.innerHTML = soucissa[0].value;
					fenetre.style.display = "block";
window.onclick = function(event) {
  if (event.target == fenetre) {
    fenetre.style.display = "none";
  }
}

}

	else {
		
		fenetre1.style.display = "block";
	window.onclick = function(event) {
  if (event.target == fenetre1) {
    fenetre1.style.display = "none";
  }
}
	}
		
		
	})
		});

 }

}


