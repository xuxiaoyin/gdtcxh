//function scrollPic(obj){
//	this.wrap = document.querySelector(obj);
//	this.list = this.wrap.querySelector('.list'),
//	this.nav=this.wrap.querySelector('nav');
//	this.a = this.nav.querySelectorAll('a');
//	this.disX = 0;//按下的坐标
//	this.listL = 0;//当前按下list的left值
//	this.w = this.wrap.clientWidth;//一张图片的宽度
//	this.len = 0;
//	this.n = 0;//默认第一个小点为白色
//	this.num=0;
//	this.timer=null;
//}
//
//scrollPic.prototype={
//	init:function(){
//		var This=this;
//		this.list.innerHTML += this.list.innerHTML;		
//		this.len = this.list.children.length;		
//		this.list.style.width = this.w * this.len + 'px';		
//		this.list.addEventListener('touchstart',function(ev){
//			var e = ev.changedTouches[0];
//			This.start(e);
//		});
//		this.list.addEventListener('touchmove',function(ev){
//			var _this=this;
//			var e = ev.changedTouches[0];
//			This.move(e,this);
//		});
//		this.list.addEventListener('touchend',function(){
//			This.num = Math.round(This.list.offsetLeft / This.w);
//			This.autoplay();
//			This.end(this.num);			
//		});
//		this.autoplay();
//	},
//	autoplay:function(){
//		var This=this;
//		this.timer=setInterval(function(){
//				This.num++;
//				This.num%=This.len
//				This.end(-This.num);
//			},3000)
//	},
//	start:function(e){
//			clearInterval(this.timer);
//			var This=this
//			this.disX = e.pageX;
//			this.list.style.transition = 'none';
//			
//			/*
//				在按下的时候，要知道当前点击的是第几张图片
//				如果是第一张快速拉到第5张的位置上。
//				
//				
//			*/
//			
//			this.num = Math.round(this.list.offsetLeft/this.w);
//			if(this.num == 0){
//				this.num =this.a.length;
//				this.list.style.left = -this.num * this.w + 'px';
//			}
//			
//			if(-this.num == this.len-1){
//				this.num = this.a.length-1;
//				this.list.style.left = -this.num * this.w + 'px';
//			}
//			
//			this.listL = This.offsetLeft;
//	},
//	move:function(e){
//		this.list.style.left = (e.pageX - this.disX) + this.listL + 'px';
//	},
//	end:function(num){
//		this.list.style.transition = '.5s';
//		this.list.style.left = num * this.w + 'px';
//		
//		//console.log(-num)
//		this.a[this.n].className = '';
//		this.a[-num%this.a.length].className = 'active';
//		this.n = -num%this.a.length;		
//	}
//}


function scrollPic(obj){
		var wrap = document.querySelector(obj),
			list = wrap.querySelector('.list'),
			nav=wrap.querySelector('nav'),
			a = nav.querySelectorAll('a'),
			disX = 0,//按下的坐标
			listL = 0,//当前按下list的left值
			w = wrap.clientWidth,//一张图片的宽度
			len = 0,
			n = 0,//默认第一个小点为白色
			num=0,
			timer=null;
		list.innerHTML += list.innerHTML;		
		len = list.children.length;		
		list.style.width = w * len + 'px';		
		list.addEventListener('touchstart',start);
		list.addEventListener('touchmove',move);
		list.addEventListener('touchend',function(){
			var num = Math.round(list.offsetLeft / w);
			autoplay();
			end(num);			
		});
		
		
		function autoplay(){
			timer=setInterval(function(){
				num++;
				num%=len
				end(-num);
			},3000)
		};
		
		autoplay();
		
		function start(ev){
			clearInterval(timer);
			var e = ev.changedTouches[0];
			disX = e.pageX;
			list.style.transition = 'none';
			
			/*
				在按下的时候，要知道当前点击的是第几张图片
				如果是第一张快速拉到第5张的位置上。
				
				
			*/
			
			var num = Math.round(list.offsetLeft / w);
			if(num == 0){
				num = a.length;
				list.style.left = -num * w + 'px';
			}
			
			if(-num == len-1){
				num = a.length-1;
				list.style.left = -num * w + 'px';
			}
			
			listL = this.offsetLeft;
		}
		function move(ev){
			var e = ev.changedTouches[0];
			list.style.left = (e.pageX - disX) + listL + 'px';
		}
		function end(num){
			list.style.transition = '.5s';
			list.style.left = num * w + 'px';
			
			//console.log(-num)
			a[n].className = '';
			a[-num%a.length].className = 'active';
			n = -num%a.length;		
		}
}


function tab(obj){
	var oTab = document.querySelector(obj);
	var oTitle=oTab.querySelector('.title');
	var aTitle=oTitle.querySelectorAll('a');
	var aList=oTab.querySelectorAll('.list');
	for(var i=0; i<aTitle.length;i++){
		aTitle[i].index=i;
		aTitle[i].addEventListener('touchstart',function(){
			for(var i=0;i<aTitle.length;i++){
				aList[i].style.display='none';
				aTitle[i].classList.remove('active');
			}
			this.classList.add('active');
			aList[this.index].style.display='block';
		});
	}
	
	
}
