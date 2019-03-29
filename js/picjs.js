window.onload=function(){
	changepic("banner")
	var oNav=document.getElementsByClassName("g-nav")[0];
	var aNav=oNav.getElementsByTagName("a");
	for (var i=0;i<aNav.length;i++) {
		aNav[i].onclick=function(){
			for (var i=0;i<aNav.length;i++) {
				aNav[i].className='';
			}
			this.className='active';
		}
	}
}

function changepic(id){
	var oBanner=document.getElementById(id);
	var num=0;
	var oBtn=oBanner.getElementsByClassName("btn")[0];
	var aBtn=oBtn.getElementsByTagName("a");
	var oPic=oBanner.getElementsByClassName("picchange")[0];
	var aPic=oPic.getElementsByTagName("img");
	
	function fn1(){
		for (var i=0; i<aBtn.length;i++) {
			aPic[i].style.display="none";
			aBtn[i].className="";
		}
		aPic[num].style.display="block";
		aBtn[num].className="active";
	}
	fn1();
	var timer=null;
	
	function autoplay(){
		timer=setInterval(function(){
			num++;
			num%=aBtn.length;
			fn1();
		},2000)
	}
	autoplay();
	
	for(var i=0; i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			num=this.index;
			fn1();
		}
	}
	
	oBanner.onmouseover=function(){
		clearInterval(timer);
	}
	oBanner.onmouseout=autoplay;

}



function gotopage(value){
	try{value=="-1"?showPage(pgindex-1):showPage(pgindex+1)
}catch(e){		  
 }
}
		
function showPage(pageINdex){		     
 	obj.scrollTop=(pageINdex-1)*parseInt(obj.offsetHeight);                                                                  //根据高度，输出指定的页
 	pgindex=pageINdex;
}

function changebg(){
	var oMenu=document.getElementById("menu");
	var aList=oMenu.getElementsByTagName("a");
	for (var i=0;i<aList.length;i++) {
		aList[i].onclick=function(){
			for (var i=0;i<aList.length;i++) {
				aList[i].className='';
			}
			this.className='active';
		}
	}		
}