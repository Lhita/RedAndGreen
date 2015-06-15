 var rg = new RedOrGreen("mySquare");

   rg.makeGreen('mySquare');
	if(document.getElementById('mySquare').style.backgroundColor === 'green') {
		window.alert('success');
	}
	else {
		window.alert('failure');
}
	rg.makeRed('mySquare');
	if(document.getElementById('mySquare').style.backgroundColor === 'red') {
		window.alert('success');
	}
	else{
		window.alert('failure');
}
