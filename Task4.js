var myButton = document.getElementById("changeColor");
var count = 0;
var mySquare =  document.getElementById("square");
myButton.addEventListener("click", function() {

switch(count) {
	case 0:
	  mySquare.style.backgroundColor = "red";
	  myButton.value = "make green";
	  count=1;
	  break;
	case 1:
	  mySquare.style.backgroundColor = "green";
	  myButton.value = "make red";
	  count = 0;
	  break;
}
});

		