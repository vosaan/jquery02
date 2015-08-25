$(document).ready(function(){

	$(".guess_box").click(checkForCode);

	function getRandom(num){
		return Math.floor(Math.random() * num);
	}
	
	var hideCode = function(){
		var numRnd = getRandom(4);
		$(".guess_box").each(function(index, value){
			if(numRnd == index){
				$(this).append("<span id = 'has_discount'></span>");
				console.log(numRnd);
				return false;
			}
		});
	}

	hideCode();

	function checkForCode(){
		var discount;
		if($.contains(this, document.getElementById("has_discount"))){
			discount = "<p>Код скидки: CODE" + getRandom(100) + " </p>";
		} else {
			discount = "<p>Ваша скидка 0%</p>";
		}
		$(".tablo").append(discount);
		$(".guess_box").each(function(){
			if($.contains(this, document.getElementById("has_discount"))){
				$(this).classAdd("discount");
			} else {
				$(this).classAdd("no_discount");
			}
			$(this).unbind("click");
		});
	}

	$(".guess_box").hover(
		function(){
			$(this).addClass("my_hover");
		},

		function(){
			$(this).removeClass("my_hover")
		});

});

