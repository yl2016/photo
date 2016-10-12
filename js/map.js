/*banner轮播*/
function lunboBannera(){
	var current=0;
	var header=document.getElementsByClassName("header")[0];
	var lunbo=document.getElementsByClassName("banner")[0];
	var imgs=lunbo.getElementsByTagName("img");
	var num=0;
	var timer=null;
	function next(){
		imgs[current].className="";
 		current=current+1>imgs.length-1?0:current+1;
 		imgs[current].className="selected";
	}
	timer=setInterval(next,4000);
	imgs.onmouseover=function(){
		clearInterval(timer);
	}
	imgs.onmouseout=function(){
	timer=setInterval(showNext,4000);
	}	
}
// function ditu(){
// 	var map = new AMap.Map('mapa', {
// 		zoom: 10,
// 		center: [116.39, 39.9]
// 	});
// }
window.onload=function(){
	lunboBannera();
	// ditu();
	var map = new AMap.Map('mapa');
    map.setZoom(15);//设置缩放级别
    map.setCenter([116.2695662200,40.131258004]);//设置中心坐标
    var marker = new AMap.Marker({//创建标记
        position: [116.2695662200,40.131258004],//设置标记位置
        map:map//设置map属性，使得标记能被立即添加到地图上
    });
	 //marker.setMap();移除点标记
// <!--创建并且设置信息窗口-->
	 AMap.plugin('AMap.AdvancedInfoWindow',function(){
       infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">高德地图</div><div class="info-content">'+'我的位置。<br/>'+'</div>',//设置信息窗口内容
        offset: new AMap.Pixel(10, 30)//设置窗口位置相对于标记的偏移量
      });
      infowindow.open(map,[116.2695662200,40.131258004]);//创建好信息窗口后，立即调用open方法，让它显示在需要的位置
	})
// <!--添加工具条和比例尺子-->
	AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){//加载工具条和比例尺两个插件放到数组中
        var toolBar = new AMap.ToolBar();//在回调函数里进行控件的生成和添加
        var scale = new AMap.Scale();
        map.addControl(toolBar);
        map.addControl(scale);
    })
	//map.removeControl(toolBar);移除控件
};