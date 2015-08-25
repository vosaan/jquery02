$(document).ready(function(){
	function checkForCode(){
		var my_num = Math.floor((Math.random() * 5) + 5);
		var discount = "<p>Ваша скидка " + my_num + "%</p>";
		$(this).append(discount);

		$(".guess_box").each(function(){
			$(this).unbind("click");
		});
	}

	$(".guess_box").click(checkForCode);
	
});