var tit = document.getElementById('nav-show-always');
	// 占位符设置
	var rect = tit.getBoundingClientRect();//获得页面中导航条相对浏览器视窗的位置。
	var inseDiv = document.createElement('div');
	tit.parentNode.replaceChild(inseDiv, tit);
	inseDiv.appendChild(tit);
	inseDiv.style.height = rect.height + 'px';
	// 获取导航条距页面顶部的距离
	var titTop = tit.offsetTop;
	//设置滚动监听事件
	document.onscroll = function() {
			//获取当前滚动距离
			var btop = document.body.scrollTop || document.documentElement.scrollTop;
			//如果滚动距离大于导航条距顶部距离
			if (btop > titTop) {
					//为导航条设置fixed
					tit.className = "clearfix fix";
			}else {
					//移出fixed
					tit.className = "clearfix";
			}
	}
