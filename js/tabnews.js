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
/*news选项卡*/
function tabNews(){
	var lis=null,contents=null;	
	var tab=document.getElementById('tab');
	lis=Array.prototype.slice.call(
		tab.getElementsByTagName('li'),0);
	var tab_content=document.getElementById('tab_content');
	contents=document.getElementsByClassName("contenta");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;//给li设置index属性
		lis[i].onclick=function(){
			// 设置tab字属性
			if(this.className=='cur') return;
			for(var i=0;i<lis.length;i++){
				if(lis[i].className=="cur")
					contents[lis[i].index].className="contenta disapper";
				lis[i].className="";
			}
			this.className="cur";
			contents[this.index].className="contenta show";
		};
	}
}
window.onload=function(){
	lunboBannera();
	tabNews();
};