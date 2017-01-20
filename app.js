$(document).ready(function(){
    $("#intro").click(function(){
		$("#intro").fadeOut("fast", function(){
		    $("#intro_noticia").removeClass("hide");
		});
	});
	$("#video_intro").click(function(){
		$("#intro").fadeOut("fast", function() {
    		$("#intro_noticia").removeClass("hide");
		});
	});
	$("#retro").click(function(){
        $("#intro_noticia").addClass("hide");
    	$("#intro").show();
    })
});
