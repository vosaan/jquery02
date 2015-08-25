$(document).ready(function(){
	$(".guess_box").click(function(){
		
		//$(".guess_box p").remove();
		
		var discount = Math.floor((Math.random() * 5) + 5);
		var discountMessage = "<p>Подавись! " + discount + "%</p>";
		//alert(discountMessage);
		$(this).append(discountMessage);
		$(".guess_box").each(function(){
			$(this).unbind("click");
		});
	});
});