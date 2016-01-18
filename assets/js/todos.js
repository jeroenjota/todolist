// Code for the todo list application
//alert("CONNECTED");

// check of todo's by clicking
$("ul").on("click", "li", function() {
	// if line is grey, set black vice versa
	$(this).toggleClass("done");
});

$("ul").on("click", ".rmbtn", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	// check if key is enter
	if(event.which===13) {
		// grab the input text
//		<li>Studeer Spaans <span class="rmbtn"><i class="fa fa-trash"></i></span> </li>

		if($(this).val()===""){return}
		var nwItem = "<li>" + $(this).val() +  "<span class='rmbtn'>"
		nwItem += "<i class='fa fa-trash'></i>"
		nwItem += "</span>" +"</li>";

		// add new li to ul
		$("ul").append(nwItem);
		
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
})