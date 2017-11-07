
define([
	'Util',  
	'assets/common/routes',
	'tab',
	'text!tpl/index/topMenuLevelTwo.tpl',
	'../common/getQueryString',
	'cookie',
	'../common/getPath'
	],
	function (Util, Routes, Tab, menuTpl, getQueryString, $cookie, AjaxPath) {

	var tabList = null,
		AutoClose = false,	
		_index = null;

	var _delay = (function() {
	    var timeout = 0;
	    return function(callback, ms) {
	        clearTimeout(timeout);
	        timeout = setTimeout(callback, ms);
	    };
	})();	

	//初始化 initIndex 之前，先进行了 systemUserInfoInit

	var initIndex = function() {

	    /** 初始化内容区Tabs页 */
	    initTabs();

	    /** 初始化首页左上角菜单 */
	    initTopMenu();

	    /** 初始化用户信息 */
	    systemUser();
	    
	    // 判断是否显示菜单
		if(getQueryString("menuShow")){
            require(['style!/src/assets/css/menu-show.css']);
        }
	};

	function systemUser() {
        var code = getQueryString("code");
        var systemIdStr = getQueryString("systemid");
        var data = {
            code: code,
            systemid: systemIdStr
        };
        Util.ajax.postJson(AjaxPath+ "/devops-auth/login/check", data, function(result, isok) {
            if(result.code === "0000"){
                $cookie.set("userId", result.beans, 86400000);
			}
        });
	}

	function initTabs() {
        require(['text!/src/tpl/index/index.tpl', 'style!css/dashboard/dashboard.css'], function(testTpl) {
            var config = {
                el: '#tabList', //要绑定的容器
                className: 'tab', //组件的className
                direction: 'horizontal', //按布局 horizontal默认横向|vertical纵向
                multiline: true, //是否实现折叠多行，false不可以|true可以，非必填，默认为false
                tabs: [ //选项卡内容设置
                    {
                        title: '首页', //选项卡标题
                        className: 'tab0', //选项卡的className
                        closeable: 0, //是否可以关闭 0false不可以|1true可以
                        render: function(originTab) { //选项卡的内容使用该方法返回值填充
                            //                          var module1 = new Module1();
                            //var $module1 = $('<div class="module1"></div>')
                            //var element1 = document.createElement('div');
                            /*
                             return处支持多种类型的值
                             1、对象实例，只要包含了content、$el、或el中任意一个属性即可
                             2、dom对象，可以是jquery类型、普通dom、字符串格式的dom
                            */
                            return '<iframe class="uiTabIframe" frameborder="0" src="welcome.html" marginwidth="0" marginheight="0" ></iframe>';
                        },
                        click: function(e, tabData) { //选项卡单击触发
                            // 标题点击时触发的回调函数，默认会触发第一个标题
                            // var module1 = new Module1();
                            tabList.content(testTpl);
                        }
                    }
                ]
            };
            tabList = new Tab(config);
        });
    }

	function initTopMenu() {
	    /** 表单刷新 */
	    reloadTopMenu();

	    function toInConstruction(dataId, tabName) {
	        require(['js/InConstruction'], function(objClass) {
	            var isSwitchFlag = true;
	            var tabs = tabList.options.tabs;
	            for(var i = 0; i < tabs.length; i++) {
	                if(tabs[i].className === dataId) {
	                    tabList.switchTab(dataId);
	                    isSwitchFlag = false;
	                    break;
	                }
	            }
	            if(isSwitchFlag) {
	                tabList.createTab({
	                    title: '' + tabName,
	                    className: dataId,
	                    closeable: 1
	                });
	                _objClass = objClass;
	                if(typeof(_objClass) === 'function') {
	                    var result = new _objClass({}, {
	                        menuId: dataId,
	                        menuName: tabName
	                    }, tabList);
	                    if(typeof(result) === 'object') {
	                        if(result.hasOwnProperty('content')) {
	                            setTimeout(tabList.content(result.content), 200);
	                        } else {
	                            setTimeout(tabList.content(result), 200);
	                        }
	                    } else {
	                        setTimetout(tabList.content(result), 200);
	                    }
	                }

	                $('.i_panel_left').css('height', $(document.body).height() - 90);
	                $('.i_panel_right').css('height', $(document.body).height() - 90);
	                $(window).resize(function() {
	                    $('.i_panel_left').css('height', $(document.body).height() - 90);
	                    $('.i_panel_right').css('height', $(document.body).height() - 90);
	                });

	            }
	        }, function() {});
	    }

	    function bindMenuOnClickEvent(menuObj) {
	        menuObj.click(function(e) {
	            e.stopPropagation();
	            var dataId = $(this).attr('data-id');
	            var dataUrl = $(this).attr('data-url');
	            var dataType = $(this).attr('data-type');
	            var tabName = $(this).text();
	            if(dataUrl === null || dataUrl === '') {
	                return;
	            } else if(dataUrl === '建设中') {
	                toInConstruction(dataId, tabName);
	            }
	            /*if(dataType != 'system' && dataUrl != '建设中') { //iframe嵌入
	                Util.ajax.postJson('/it/api/v1/access_url', {
	                    userId: userId,
	                    url: dataUrl,
	                    systemid: dataType
	                }, function(json, status) {
	                    if(json.success) {
	                        var isCreateFlag = true;
	                        var tabs = tabList.options.tabs;
	                        for(var i = 0; i < tabs.length; i++) {
	                            if(tabs[i].className == dataId) {
	                                var float = $('.' + dataId).position().left;
	                                if(float < 0 || float > 1000) {
	                                    $('.sn-tab-items').animate({
	                                        'scrollLeft': float + 'px'
	                                    }, 200);
	                                }
	                                tabList.switchTab(dataId);
	                                isCreateFlag = false;
	                                break;
	                            }
	                        }
	                        if(isCreateFlag) {
	                            tabList.createTab({
	                                title: '' + tabName,
	                                className: dataId,
	                                closeable: 1
	                            });

	                            //这里可以配置要跳转到的页面
	                            setTimeout(tabList.content($('<iframe class="uiTabIframe" frameborder="0" marginheight="0"  marginwidth="0" src="' + json.data + '"></iframe>')), 200);
	                            $('iframe').css('height', $(document.body).height() - 90);
	                            $(window).resize(function() {
	                                $('iframe').css('height', $(document.body).height() - 90);
	                            });
	                        }

	                    } else {
	                        alert('获取授权CODE失败:' + json.returnMessage || json.message);
	                    }
	                });

	            } else*/ if(/*dataType == 'system' && */dataUrl !== '建设中') { //系统管理 
	                console.log([dataUrl]);
	                require([dataUrl], function(objClass) {
	                    var isSwitchFlag = true;
	                    var tabs = tabList.options.tabs;
	                    for(var i = 0; i < tabs.length; i++) {
	                        if(tabs[i].className === dataId) {
	                            var float = $('.' + dataId).position().left;
	                            if(float < 0 || float > 1000) {
	                                $('.sn-tab-items').animate({
	                                    'scrollLeft': float + 'px'
	                                }, 200);
	                            }
	                            tabList.switchTab(dataId);
	                            isSwitchFlag = false;
	                            break;
	                        }
	                    }
	                    if(isSwitchFlag) {
	                        tabList.createTab({
	                            title: '' + tabName,
	                            className: dataId,
	                            closeable: 1
	                        });

	                        _objClass = objClass;
	                        // console.log("当前js模块:"+dataUrl+".类型是:"+typeof(_objClass));
	                        if(typeof(_objClass) === 'function') {
	                            var result = new _objClass({}, {
	                                menuId: dataId,
	                                menuName: tabName,
	                                menuUrl: dataUrl,
	                                menuType: dataType
	                            }, tabList);
	                            if(typeof(result) === 'object') {
	                                if(result.hasOwnProperty('content')) {
	                                    setTimeout(tabList.content(result.content), 200);
	                                } else {
	                                    setTimeout(tabList.content(result), 200);
	                                }
	                            } else {
	                                setTimetout(tabList.content(result), 200);
	                            }
	                        }

	                        $('.i_panel_left').css('height', $(document.body).height() - 90);
	                        $('.i_panel_right').css('height', $(document.body).height() - 90);
	                        $(window).resize(function() {
	                            $('.i_panel_left').css('height', $(document.body).height() - 90);
	                            $('.i_panel_right').css('height', $(document.body).height() - 90);
	                        });

	                    }
	                }, function() {
	                    //console.log("当前js模块:"+moduleUrl+"加载失败");
	                });
	            }
	        });

	    }

	    function reloadTopMenu() {

            Util.ajax.postJson('/data/myTopMenu.json', {}, function(json, status) {
                var $nav = $('.nav');
                $nav.html(Util.hdb.compile(menuTpl)(json));
                $nav.find('.menu ul').click(function() {
                    var menuItem = $(this);
                    if(!menuItem.hasClass('active')) {
                        $nav.find('.menu ul li').slideUp(200);
                        $nav.find('.menu ul').removeClass('active');
                    }
                    menuItem.find('li').slideToggle(200);
                    menuItem.toggleClass('active');

                    $nav.find('.menu').animate({
                        scrollTop: menuItem.offset().top - 150
                    }, 200);
                });

                /*$('.top-menu-btn').click(function() {
                    // $nav.find('.menu').toggle();
                    $('.section').toggleClass('moved-left');
                    setTimeout(function() {
                        tabList.resize();
                    }, 200);
                });*/

                $nav.find('.menu ul li a').click(function() {
                    // if (!isMainMenuPinned) {
                    //     $('.section').toggleClass('moved-left');
                    setTimeout(function() {
                        tabList.resize();
                    }, 200);
                    // }
                });

                bindMenuOnClickEvent($nav.find('.menu ul li a'));

                if(getQueryString("module")){
                	$(".nav ul li a").each(function(index, item){
                		if($(".nav ul li a").eq(index).attr("data-url").split("/")[1] === getQueryString("module")){
                			setTimeout(function() {
                				$(".nav ul li a").eq(index).click()
                			}, 200);
                		}
                	})
                }
            });
	    }
	}

	//关闭指定tab
    window._close = function(tabClassName) {
        console.log("关闭" + tabClassName);
        AutoClose = true;
        tabList.destroy(tabClassName);
    };

	$(function() {
	    $('.nav .menu').css('height', $(document.body).height() - 37);
	    // systemUserInfoInit();
	    initIndex();

	    // heartbeatFlag = setInterval(heartBeat, 15000);
	    
	    // 浏览器关闭事件
	    /*
	        window.onbeforeunload = function (e) {
	                e = e || window.event;
	                // 兼容IE8和Firefox 4之前的版本
	                if (e) {
	                    e.returnValue = '您是否要关闭浏览器窗口，关闭后所有会话将会丢失？';
	                }

	                // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
	                return '您是否要关闭浏览器窗口，关闭后所有会话将会丢失？';
	         };*/

	    //屏蔽鼠标右键
	    document.oncontextmenu = function(e) {
	        e = e || window.event;
	        e.returnValue = false;
	    };
	    document.onkeydown = function(event) {
	        if(!event) {
	            event = window.event;
	        } else {
	            event = event;
	        }
	        //禁用Alt+方向键
	        if(event.altKey === true && (event.keyCode === 37 || event.keyCode === 39)) {
	            //              alert("禁用Alt+方向键！");
	            event.returnValue = false;
	        }
	        //禁用Backspace、F5、Ctrl+R
	        //                   if((event.keyCode===8)||(event.keyCode===116)||(event.ctrlKey===true&&event.keyCode===82)){
	        if((event.keyCode === 116) || (event.ctrlKey === true && event.keyCode === 82)) {
	            //              alert("禁用退格删除键、F5、Ctrl+R！");
	            event.keyCode = 0;
	            event.returnValue = false;
	        }
	        //屏蔽shift + 空格
	        if((event.shiftKey) && (event.keyCode === 32)) {
	            event.keyCode = 0;
	            event.returnValue = false;
	        }
	        //屏蔽Esc
	        if(event.keyCode === 27) {
	            event.keyCode = 0;
	            event.returnValue = false;
	        }
	        //屏蔽Enter
	        if(event.keyCode === 13) {
	            event.keyCode = 0;
	            event.returnValue = false;
	        }
	        //屏蔽 shift+F10
	        if((event.shiftKey) && (event.keyCode === 121)) {
	            event.keyCode = 0;
	            event.returnValue = false;
	        }
	        //屏蔽alt + home
	        if(event.altKey && event.keyCode === 36) {
	            event.keyCode = 0;
	            event.returnValue = false;
	        }
	    };

	});
});

//监听消息关闭指定tab
window.addEventListener('message', function(e) {
    console.log("父页监听到消息");
    var tabClassName = e.data;
    _close(tabClassName);
}, false);
