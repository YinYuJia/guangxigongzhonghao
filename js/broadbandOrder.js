$(function() {
	
	$(".search_btn").on('tap',function() {
		var keyWords = $("#inpt").val();
		console.log(keyWords)
		Route.getMallQueryADSLAddr(keyWords,function (data) {
			console.log(data);
			
		})
	})
	
	
	
	
	
	
	
})

