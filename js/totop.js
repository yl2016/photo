/*返回顶部*/
$(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><div class=\"btn btn-phone\"></div><div class=\"btn btn-top\"></div></div>";
	$("#totop").html(tophtml);
	$("#izl_rmenu").each(function()
	{
		$(this).find(".btn-phone").mouseenter(function()
		{
			$(this).find(".phone").fadeIn();
		});
		$(this).find(".btn-phone").mouseleave(function()
		{
			$(this).find(".phone").fadeOut();
		});
		$(this).find(".btn-top").click(function()
		{
			$("html, body").animate({
				"scroll-top":0
			},1000);
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function()
	{
		var _top=$(window).scrollTop();
		if(_top>200)
		{
			// true显示返回顶部图片
			$("#izl_rmenu").data("expanded",true);
		}
		else
		{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus)
		{
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus)
			{
				// 返回顶部图片出现时间
				$("#izl_rmenu .btn-top").slideDown(500);
			}
			else
			{
				// 返回顶部图片消失时间
				$("#izl_rmenu .btn-top").slideUp(500);
			}
		}
	});
});