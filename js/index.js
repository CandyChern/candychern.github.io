//当滚动条有一定变化时，头部发生响应式变化
var secHead=document.getElementById("secHead").style;
var firHead=document.getElementById("firHead").style;
window.onscroll=function(){
	if(document.body.scrollTop>100||document.documentElement.scrollTop>100){//当大于屏幕高度1/3的时候改变头部高度
		firHead.visibility="hidden";
		secHead.visibility="visible";
	}else{
		firHead.visibility="visible";
		secHead.visibility="hidden";
	}
}
