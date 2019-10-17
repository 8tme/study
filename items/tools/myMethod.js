	//重写push方法
	// Array.prototype.push = function myPush() {
	// 	for (var i = 0; i < arguments.length; i++) {
	// 		this[this.length] = arguments[i];
	// 	}
	// 	return this.length;
	// }
	//升降序排序
	/*sort(function (a,b) {
		// body...
		return a-b;//return b-a;
	});
	//随机排序
	sort(function () {
		return Math.random() - 0.5;
	});*/
	//数组去重
	Array.prototype.unique = function () {
		// body...
		var temp = {},
			arr = [],
			len = this.length;
		for (var i = 0; i < len; i++) {
			if (!temp[this[i]]) {
				temp[this[i]] = "abc";
				arr.push(this[i]);
			}
			return arr;
		}
	}

	//字符串中第一个只出现一次的字符
	function getOnce(str) {
				var arr = str.split('');
				var obj = {};
				var newArr = [];
				for (var i in arr) {
					if (!obj[arr[i]]) {
						obj[arr[i]] = 'once';
					} else {
						obj[arr[i]] += 'notme';
					}
				}
				for (var prop in obj) {
					if (obj[prop] == 'once') {
						newArr.push(prop);
					}
				}
				if (newArr[0]) {
					console.log('第一个只出现一次的字母是:' + newArr[0] + '\n' + '索引为:' + str.indexOf(newArr[0]));
				} else {
					console.log('不存在只出现一次的字符');
				}
			}


	//圣杯模式，标准继承模式
	var inherit = (function () {
		//可以将这一步操作隐藏起来,让f成为下面函数的私有化变量，形成闭包
		var F = function () {};
		return function (Target, Origin) {
			F.prototype = Origin.prototype;
			// new F() 是一个静态对象,如果target对yua原型操作,不会对其他造成影响
			Target.prototype = new F();
			Target.prototype.constructor = Target;
			//存储最终继承自谁
			target.prototype.uber = Origin.prototype;
		}
	}());

	//深度克隆
	function deepClone(origin, target) {
		// body...
		var target = target || {};
		toStr = Object.prototype.toString,
			arrStr = "[object Array]";
		for (var key in origin) {
			if (origin.hasOwnProperty(key)) {
				if (typeof (origin[key]) == 'object') {
					if (toStr.call(origin[key]) == arrStr) {
						target[key] = [];
					} else {
						target[key] = {};
					}
					deepClone(Target[prop], Origin[prop]);
				} else {
					target[key] = origin[key];
				}
			}
		}
		return target;
	}

	//求滚动条滚动的距离
	function getScrollPosition() {
		if (window.pageXOffset) {
			return {
				x: window.pageXOffset,
				y: window.pageYOffset
			}
		} else {
			return {
				x: document.body.scrollLeft +
					documentElement.scrollLeft,
				y: document.body.scrollTop +
					document.documentElement.scrollTop
			}
		}
	}
	//显示窗口尺寸
	function getViewportOffdet() {
		if (window.innerWidth) {
			return {
				w: window.innerWidth,
				h: window.innerHeight
			}
		} else {
			if (document.compatMode === "BackCompat") {
				return {
					w: document.body.clientWidth,
					h: document.body.clientHeight
				}
			} else {
				return {
					w: document.documentElement.clientWidth,
					H: document.documentElement.clientHeight
				}
			}
		}
	}
	//得到行间属性
	function getStyle(elem, prop) {
		if (window.getComputedStyle) {
			return window.getComputedStyle(elem, null)[prop];
		} else {
			return elem.currentStyle[prop];
		}
	}
	//具有兼容性的添加事件处理函数
	function addEvent(elem, type, handle) {
		if (elem.addEventListener) {
			elem.addEventListener(type, handle, flase);
		} else if (elem.attachEvent) {
			elem.attachEvent('on' + type, function () {
				//this指向的是用他的元素
				handle.call(elem);
			})
		} else {
			elem['on' + type] = handle;
		}

		// function handle() { 
		// }
	}

	//加载完毕
	function loadScript(url, callback) {
		var script = document.createElement('script');
		script.type = "text/javascript";
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == "complete" ||
					script.readyState == "loaded") {
					callback();
				}
			}
		} else {
			script.onload = function () {
				callback();
			}
		}
		script.src = url;
		document.head.appendChild('script');
	}

	// type类型判断
	function type(Target) {
		var template = {
			'[object Array]': 'array',
			'[object Object]': 'object',
			'[object String]': 'string - object',
			'[object Nember]': 'number - object',
			'[object Boolean]': 'boolean - object'
		}
		if (Target == null) {
			return 'null';
		} else if (typeof (Target) == 'object') {
			return template[Object.prototype.toString.call(Target)];
		} else {
			return typeof (Target);
		}
	}

	// 查看屏幕尺寸
	function getViewportOffset() {
		if (window.innerWidth) {
			return {
				width: window.innerWidth,
				height: window.innerHight
			}
		}
		if (window.compatMode == 'CSS1Compat') {
			return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHight
			}
		} else if (window.compatMode == 'BackCompat') {
			return {
				width: document.body.clientWidth,
				height: document.body.clientHight
			}
		}
	}






	// 解绑事件
	function removeEvent(elem, type, handler) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handler, false);
		} else if (elem.detachEvent) {
			elem.detachEvent('on' + type, handler);
		} else {
			elem['on' + type] = false;
		}
	}


	// 取消冒泡
	function stopBubble(e) {
		var event = e || window.event;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	}
	// elem.addEventListener('click', function(e) {
	// 	.....
	// 	stopBubble(e);
	// }, false)

	// 阻止默认事件
	function cancelHandler(e) {
		var e = e || window.event;
		if (e.preventDefault) {
			e.preventDefault();
		} else if (e.returnValue) {
			e.returnValue = false;
		}
	}

	// 事件委托
	// function() {
	// 	var event = event || window.event;
	// 	var target = event.target || event.srcElement;
	// 	//获取源生事件兼容写法
	// 	......
	// }





	//多物体 多值 链式变动框架  
	function startMove(dom, dataObj, func) {
		clearInterval(dom.timer);
		var iSpeed,
			iCur,
			name;
		dom.timer = setInterval(function () {
			var bStop = true;
			for (var attr in dataObj) {
				if (attr === 'opacity') {
					name = attr;
					iCur = parseFloat(getStyle(dom, attr)) * 100;
				} else {
					iCur = parseInt(getStyle(dom, attr));
				}
				iSpeed = (dataObj[attr] - iCur) / 8;
				if (iSpeed > 0) {
					iSpeed = Math.ceil(iSpeed);
				} else {
					iSpeed = Math.floor(iSpeed);
				}
				if (attr === 'opacity') {
					dom.style.opacity = (iCur + iSpeed) / 100;
				} else {
					dom.style[attr] = iCur + iSpeed + 'px';
				}
				if (Math.floor(Math.abs(dataObj[attr] - iCur)) != 0) {
					bStop = false;
				}
			}
			if (bStop) {
				clearInterval(dom.timer);
				if (name === 'opacity') {
					dom.style.opacity = dataObj[name] / 100;
				}
				func();
			}
		}, 30);
	}
	// 弹性运动
	function move(dom, iTarget) {
		clearInterval(dom.timer);
		var iSpeed = 0,
			a = 0,
			u = 0.8;
		dom.timer = setInterval(function () {
			a = (iTarget - dom.offsetLeft) / 5;
			iSpeed = 0.8 * (iSpeed + a);
			if (Math.abs(iSpeed) < 1 && dom.offsetLeft === iTarget) {
				dom.style.left = iTarget + 'px';
				clearInterval(dom.timer);
			}
			dom.style.left = dom.offsetLeft + iSpeed + 'px';
		}, 30)
	}

	// 节流
	function dealFunction(handle, wait) {
		var lastTime = 0;
		return function () {
			var nowTime = new Date().getTime();
			if (nowTime - lastTime > wait) {
				handle.apply(this, arguments);
				lastTime = nowTime;
			}
		};
	}
	
	// 防抖
	function debounce (handler, delay) {
		var timer = null;
		return function (e) {
			var _self = this, _arg = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				handler.apply(_self, _arg);
			}, delay);
		}
	}
	
	//cookie增删改查
	var cookieCtrol = {
		setCookie: function (name, value, time) {
			document.cookie = name + '=' + value + ';max-age=' + time;
			return this;
		},
		getCookie: function (name, callback) {
			//document.cookie
			//"name=huang; age=18; max-age=1000; name=bai; age=19"
			var arr = document.cookie.split('; ');
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].split('=')[0] == name) {
					callback(arr[i]);
					return this;
				}
			}
			return this;
		},
		removeCookie: function (name) {
			setCookie(name, value, -1);
			return this;
		},
	};

	//原生js ajax操作
	function myAjax(method, url, para, loadType, callback) {
		var obj;
		var method = method.toUpperCase();
		if (window.XMLHttpRequest) {
			obj = new XMLHttpRequest();
		} else {
			obj = new ActiveXObject('Microsoft.XMLHttp');
		}
		obj.onreadystatechange = function () {
			if (obj.readyState == 4) {
				if (obj.status == 200) {
					console.log(obj.responseText)
					callback(obj.responseText);
				}
			}
		}
		if (method == 'GET') {
			obj.open(method, url + '?' + para, loadType);
			obj.send();
		} else if (method == 'POST') {
			obj.open(method, url, loadType);
			obj.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			obj.send(para);
		}
	}

	//拥有记忆功能拖拽
// var a;
var drag = {
	init: function(dom) {
		this.dom = dom;
		// var _this = this;
		this.bindEvent();
		// manageCookie.getCookie('newLeft', function (data) {
			
		//     _this.dom.style.left = data + 'px';
		// }).getCookie('newTop', a = function (data) {
		//     _this.dom.style.top = data + 'px';
		//     return data;
		// })
		// console.log(a);
	},
	bindEvent: function () {
		this.dom.onmousedown = this.mouseDown.bind(this);
	},
	mouseDown: function (e) {
		document.onmousemove = this.mouseMove.bind(this);
		document.onmouseup = this.mouseUp.bind(this);

		this.disY = e.clientY - this.dom.offsetTop;
		this.disX = e.clientX - this.dom.offsetLeft;
	},
	mouseMove: function(e) {
		this.newLeft = e.clientX - this.disX;
		this.newTop = e.clientY - this.disY;
		this.dom.style.left = this.newLeft + 'px';
		this.dom.style.top = this.newTop + 'px';
	},
	mouseUp: function () {
		document.onmousemove = null;
		document.onmouseup = null;
		// manageCookie.setCookie('newLeft', this.newLeft, 10000).setCookie('newTop',this.newTop, 10000);
	}
}

	//普通拖拽
	function dragFunc(dom) {
		var e = e || window.event;
		var disX, disY;
		dom.onmousedown = function (e) { 
			disX = e.pageX - parseInt( getStyle(dom, 'left'));
			disY = e.pageY - parseInt( getStyle(dom, 'top'));
			document.onmousemove = function (e) { 
				dom.style.left = e.pageX - disX + 'px';	
				dom.style.top = e.pageY - disY + 'px';	
			 };
			document.onmouseup = function () { 
				document.onmousemove = false;
				document.onmousedown = false;
			 };
		 }
	 }
	 //<script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>