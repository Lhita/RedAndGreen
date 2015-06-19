var assert = {
	equals:function(message, results) {
        var square = new RedOrGreen("square");
        	
        if (message === results) {
        	square.makeGreen();
	    
	    }
	    else {
	    	square.makeRed();
	    	
	    }
	}
}

     var TestMyCode = {
	    run: function(name,test) {
	    	this.name = name;
	   		test(assert);
     }
 };

