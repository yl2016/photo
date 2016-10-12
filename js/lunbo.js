/*getElementsByClassName兼容性代码*/
function getElementsByClassName(name,context){
	if(context.getElementsByClassName)
		return context.getElementsByClassName(name);
	context=context || document;
	var childs=context.getElementsByTagName('*');
	var result=[];
	var r=new RegExp('\\b'+name+'\\b');
	for(var i=0;i<childs.length;i++){		
		if(r.test(childs[i].className)){
			result.push(childs[i]);
		}
	}
	return result;
}

/*banner轮播*/
function lunboBannera(){
	var current=0;
	var header=getElementsByClassName("header",document)[0];
	var lunbo=getElementsByClassName("banner",document)[0];
	var imgs=lunbo.getElementsByTagName("img");
	var num=0;
	var timer=null;
	function next(){
		imgs[current].className="";
 		current=current+1>imgs.length-1?0:current+1;
 		imgs[current].className="selected";
	}
	setInterval(next,4000);

}
/*model轮播*/
function model(){
	var omain=document.getElementById("list");
	var oul=omain.getElementsByTagName("ul")[0];
	var lis=omain.getElementsByTagName("li");
	var speed=2;
	oul.innerHTML=oul.innerHTML+oul.innerHTML;
	oul.style.width=lis[0].offsetWidth*lis.length+"px";
	function move(){
		// 往左边移动
		// if(oul.offsetLeft<-oul.offsetWidth/2){
		// 	oul.style.left='0';
		// }
		// oul.style.left=oul.offsetLeft-2+"px";
		// 往右边移动
		if(oul.offsetLeft>0){
			oul.style.left=-oul.offsetWidth/2+"px";
		}
		    oul.style.left=oul.offsetLeft+speed+"px";	
	}
	var timer=setInterval(move,40);
	omain.onmouseover=function(){
		clearInterval(timer);
	}
	omain.onmouseout=function(){
		timer=setInterval(move,40);
	}
}

window.onload=function(){
	lunboBannera();
	model();	
};