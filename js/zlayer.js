zlayer={
	openLayer:function(){
		if($(".zlayer_body").length != 0){
			$(".zlayer_body").remove();
		}
		var zlayer_body = $("<div>");
		
		$("body").css("overflow","hidden");
		zlayer_body.addClass("zlayer_body");
		zlayer_body.css("width",$(window).width() + 17);
		zlayer_body.css("height",$(window).height());
		
		console.log($(window).width());console.log($(window).height());
		$("body").append(zlayer_body);
	},
	closeLayer:function(){
		$(".zlayer_body").remove();
		$("body").css("overflow","auto");
	}
}
