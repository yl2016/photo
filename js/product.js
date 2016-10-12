window.onload=function(){
	/*banner轮播*/
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

};