function printHello(){
  var content = document.getElementById("output");
  content.innerHTML = "";
  for(var i = 0; i<100; i++){
	content.innerHTML += "<div>Hello world</div>";
  }
}

function printGoodBye() { 
  var content = document.getElementById("output");	 
  content.innerHTML = "";
  for(var i =0; i<100; i++){
	content.innerHTML += "<div>Good Bye world</div>";
  }
}