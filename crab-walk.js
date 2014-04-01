$(document).ready(function() {
    $(document).keydown(function(key) {
    	var crab = $("img")

        switch(parseInt(key.which,10)) {
			case 37:
				crab.animate({left: "-=10px"}, 'fast');
				break;
			case 38:
				crab.animate({top: "-=10px"}, "fast");
				break;
			case 39:
				crab.animate({left: "+=10px"}, "fast");
				break;
			case 40:
				crab.animate({top: "+=10px"}, "fast");
				break;
		}
	});
});