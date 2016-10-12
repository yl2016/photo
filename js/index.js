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
function lunboBanner(){	
	var oPrev=document.getElementById("prev");
	var oNext=document.getElementById("next");
	var oImg=document.getElementById("pic");
	var oBox=getElementsByClassName("banner",document)[0];
	var aDiv=oBox.getElementsByTagName("div");;
	var num=0;
	var timer=null;
	var aSrc=["../images/banner5.jpg","../images/banner1.jpg","../images/banner.jpg"];
	oPrev.onclick=function(){
		clearInterval(timer);//清除自动播放
		num--;
		if(num==-1){num=aSrc.length-1;}
		oImg.src=aSrc[num];
		modify(num);
		timer=setInterval(showNext,4000);//开启自动播放
	};
	oNext.onclick=function(){
		clearInterval(timer);//清除自动播放
		num++;
		if(num==aSrc.length){num=0;}
		oImg.src=aSrc[num];
		modify(num);
		timer=setInterval(showNext,4000);//开启自动播放
	};
	for(var i=0;i<aSrc.length;i++){//点击四个小圆点
	
		aDiv[i].index=i;//把i的值赋给aDiv的index属性
		aDiv[i].onclick=function(){
			num=this.index;
			modify(this.index);
		};
	}
	function modify(num){
		oImg.src=aSrc[num];
		for(var j=0;j<aDiv.length;j++){//变成小红点
			aDiv[j].className="circle"+j;
		}
		aDiv[num].className+=" active";//等于aDiv[num].className="circle active"
	}
	function showNext(){//自动播放
		num++;
		if(num==aSrc.length){num=0;}
		modify(num);
	}
	timer=setInterval(showNext,4000);//每隔2s自动播放下一张
	oImg.onmouseover=function(){
		clearInterval(timer);
	}
	oImg.onmouseout=function(){
	timer=setInterval(showNext,4000);
	}
}
//搜索框文字隐藏
function inputSearch(){
	var input=document.getElementById("inputSearch");
	input.onfocus=function(){
		if(this.value=="搜索照片风格"){this.value="";}
	}
	input.onblur=function(){
		if(this.value==""){this.value="搜索照片风格";}
	}
}
window.onload=function(){
	lunboBanner();	
	inputSearch();
};
