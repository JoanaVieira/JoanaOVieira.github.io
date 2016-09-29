$(window).load(function() {
    $(".loader").fadeOut("slow");
});

           
$( function() {
    $( "#draggable" ).draggable({
            
        drag: function() {
            document.getElementById("dragtext").innerHTML = "To infinity and beyond!";
            document.getElementById("spaceman_icon").src="assets/images/spacemandrag.png";
        },
                
         stop: function() {
             document.getElementById("dragtext").innerHTML = "Drag me!";
            document.getElementById("spaceman_icon").src="assets/images/spaceman.png";
            document.getElementById("spaceman_icon").src="assets/images/spaceman.png";
        },
    });
});

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

