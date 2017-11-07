
define('text!components/tab/tab.tpl',[],function () { return '<div class="sn-tab-container"><div class="sn-tab J_tab_render"><div class="sn-tabbar-wrapper"><span class="sn-scroll-left">&lt;&lt;</span><ul class="sn-tab-items"></ul><span class="sn-scroll-right">&gt;&gt;</span></div><div class="sn-dropdown"></div><div class="contentArea J_content_render"></div></div></div>';});


define('text!components/tab/tabItem.tpl',[],function () { return '<li class="J_item_click">\r\n    <a href="javascript:;">\r\n        {{#if icon}}\r\n        <span class="{{icon}}"></span>\r\n        {{/if}}\r\n        {{{title}}}\r\n    </a>\r\n    {{#if closeable}}\r\n    <span class="sn-tabClose"></span>\r\n    {{/if}}\r\n</li>';});


define('lib/requirejs/css.min!components/tab/tab',[],function(){});
/*
 * 组件-tab
 */
define('tab',[
    'jquery', 'hdb', 'eventTarget',
    'text!components/tab/tab.tpl',
    'text!components/tab/tabItem.tpl',
    'lib/requirejs/css.min!components/tab/tab.css'
], function ($, Hdb, EventTarget, tpl, itemTpl) {
    var VERSION = '1.0.7';
    var template = Hdb.compile(itemTpl);
    var itemSelectStr = '>.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>li';
    var objClass = function (options) {
        if (options.el) {
            if (options.el instanceof jQuery && options.el.length > 0) {
                this.$el = options.el;
            } else if (isDOM(options.el)) {
                this.$el = $(options.el);
            } else if (typeof (options.el) == 'string' && $(options.el).length > 0) {
                this.$el = $(options.el);
            }
        } else {
            this.$el = $("<div></div>");
        }
        this.options = options;
        this.originTab = {};
        this.tabItem = {};
        EventTarget.call(this);
        render.call(this);
        eventInit.call(this);
        var tabData = this.options.tabs[0];
        if (tabData.render) {
            originTabInit.call(this, tabData);
        }
        setTimeout($.proxy(function (e) {
            var $li = $(this.$el).find(itemSelectStr).first();
            if ($li.length) {
                $li.trigger("click");
            }
        }, this), 200);
    };
    var render = function () {
        var $tpl = $(tpl);
        var tabDatas = this.options.tabs;
        for (var i = 0; i < tabDatas.length; i++) {
            var tabData = tabDatas[i];
            var num = Math.random().toString(36).substr(2, 9);
            var className = tabData.className ? tabData.className : 'sn-tab-item' + num;
            var title = tabDatas[i].title;
            this.options.tabs[i].className = className;
            this.tabItem[className] = title;
            $tpl.find('.sn-tab>.sn-tabbar-wrapper>.sn-tab-items').append(template(tabDatas[i]));
            $tpl.find('.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>li:last').addClass(className);
        }
        this.$el.html($tpl);
        if (this.options.direction && this.options.direction === "vertical") {
            this.$el.addClass("sn-vertical")
        }
        if (this.options.className) {
            this.$el.find('>.sn-tab-container>.J_tab_render>.sn-tab-container').addClass(this.options.className);
        }
        //多行配置项
        var $dropdownBtn = this.$el.find('>.sn-tab-container>.J_tab_render>.sn-dropdown');
        $dropdownBtn.hide();
        if (this.options.multiline && this.options.multiline === true) {

            var containerWidth = this.$el.width();

            var $li = this.$el.find(itemSelectStr);
            var liHeight = $li.first().height();

            var liWidth = 0;
            $.each($li, function () {
                liWidth += $(this).outerWidth(true);
            });
            var $ul = this.$el.find('>.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-tab-items');

            if (containerWidth < liWidth) {
                $ul.css('padding-right', '30px');
                $dropdownBtn.show();
            }
            var status = true;
            $dropdownBtn.on('click', function () {

                if (status) {
                    $ul.css('height', liHeight);
                    $ul.css('overflow', 'hidden');
                    status = false;
                    $dropdownBtn.addClass('sn-btnclose');
                } else {
                    $ul.css('height', '');
                    $ul.css('overflow', '');
                    status = true;
                    $dropdownBtn.removeClass('sn-btnclose');
                }
            });
        }
        var $tabBar = this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items');
        this.$el.find('>.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-scroll-left').click(function() {
            $tabBar.animate({'scrollLeft': $tabBar.scrollLeft() - 200}, 200);
        });

        this.$el.find('>.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-scroll-right').click(function() {
            $tabBar.animate({'scrollLeft': $tabBar.scrollLeft() + 200}, 200);
        });
        // $tpl.find('.sn-tab>.sn-tabbar-wrapper>.sn-tab-items').width($(window).width() - 73);
    };
    var eventInit = function () {
        // 最初写法，不作任何处理
        // this.$el.on('click', itemSelectStr, $.proxy(itemClick, this));

        // 双击时不触发单击事件，有延迟，不是最优选择
        // var timer = null;
        var that = this;
        this.$el.on('click', itemSelectStr, function (e) {
            // clearTimeout(timer);
            // timer = setTimeout(function () {
            //     itemClick.call(that, e);
            // }, 300);

            itemClick.call(that, e);
        });
        this.$el.on('dblclick', itemSelectStr,function (e) {
            // clearTimeout(timer);

            if ($(this).has('span.sn-tabClose').length !== 0) {
                tabClose.call(that, e);
            }
        });
        // 400ms内最多触发一次click
        // var that = this;
        // var onOff = true;
        // var timer = null;
        // this.$el.on('click', itemSelectStr, function (e) {
        //     clearTimeout(timer);
        //     onOff && itemClick.call(that, e);
        //     onOff = false;
        //     timer = setTimeout(function () {
        //         onOff = true;
        //     }, 400);
        // });

        // this.$el.on('dblclick', itemSelectStr, function(e) {
        //     tabClose.call(that, e);
        // });
        // this.$el.on('click', '.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>li>.sn-tabClose', $.proxy(tabClose, this));
        this.$el.on('click', '.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>li>.sn-tabClose', function(e) {
            e.stopPropagation();
            tabClose.call(that, e);
        });
        $(window).on('resize', function () {
            sizeInit.call(that);
        });
    };
    var tabClose = function (e) {
        e.stopPropagation();
        var $li = $(e.target || e.currentTarget).closest("li");
        var index = $li.index();
        var tabData = this.options.tabs[index];
        var className = tabData.className;
        this.destroy(className, e);
        tabBarResize(this);
    };

    var tabBarResize = function (element) {
        var $tabBar = element.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items');
        if($tabBar.get()[0].scrollWidth <= $tabBar.width()) {
            element.$el.find('.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-scroll-left').hide();
            element.$el.find('.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-scroll-right').hide();
        } else {
            element.$el.find('.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-scroll-left').css('display', 'inline-block');
            element.$el.find('.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-scroll-right').css('display', 'inline-block');
        }
    };
    var originTabInit = function (tabData) {
        var result = tabData.render(this.originTab);
        var index = this.$el.find('.active').index();
        var className = tabData.className;
        var $div = $('<div></div>');
        if (result instanceof jQuery) {
            $div.append(result);
            this.originTab[className] = { content: $div };
        } else if (typeof (result) !== 'object') {
            this.originTab[className] = { content: $('<div>' + result + '</div>') };
        } else if (typeof (result) == 'object') {
            result.content = $div.append(result.content);
            this.originTab[className] = result;
        }
        this.originTab[className].content.addClass(tabData.className);
        $('>.sn-tab-container>.J_tab_render>.contentArea', this.$el).append(this.originTab[className].content);
        // 滚动条处理
        sizeInit.call(this);
    };
    var itemClick = function (e) {
        var $src = $(e.target || e.currentTarget).closest(".J_item_click");
        var index = this.$el.find(itemSelectStr).index($src);
        var actIndex = this.$el.find('.active').index();
        var tabDatas = this.options.tabs;
        var tabData = tabDatas[index];
        var className = tabData.className;
        if (actIndex != -1) {
            var actTabData = tabDatas[actIndex];
            var actclassName = actTabData.className;
        }
        var $content = this.$el.find('>.sn-tab-container>.J_tab_render>.contentArea').find('.' + className);
        this.$el.find(itemSelectStr).removeClass('active');
        $src.addClass('active');
        if (actIndex != -1) {
            this.$el.find('>.sn-tab-container>.J_tab_render>.contentArea').find('.' + actclassName).css('display', 'none');
        }
        if ($content.length != 0) {
            $content.css('display', 'block')
        } else {
            if (tabData.render) {
                originTabInit.call(this, tabData);
            }
        }
        if (tabData && tabData.click) {
            tabData['originTab'] = this.originTab;
            tabData.click(e, tabData);
        }
    };
    var itemDestroy = function (e, data) { };
    $.extend(objClass.prototype, EventTarget.prototype, {
        version: VERSION,
        resize: function() {
            tabBarResize(this);
        },
        //切换选项卡
        switchTab: function (title) {
            var _self = this;
            if (this.$el.find(itemSelectStr).length > 1) {
                $.each(this.tabItem, function (key, val) {
                    var $li = null;
                    if (key == title) {
                        $li = _self.$el.find('.' + title);
                        $li.click();
                        return false;
                    } else if (val == title) {
                        $li = _self.$el.find('li:contains(' + title + ')');
                        $li.click();
                        return false;
                    }

                })
            }
        },
        //销毁选项卡
        destroy: function (title, e) {
            var _self = this;
            if (_self.$el.find(itemSelectStr).length > 1) {
                var $li = null;
                $.each(this.tabItem, function (key, val) {
                    if (key == title) {
                        $li = _self.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>.' + title);
                        return false;
                    } else if (val == title) {
                        $li = _self.$el.find('li:contains(' + title + ')');
                        return false;
                    }
                });
                if ($li) {
                    var index = $li.index();
                    if (index != -1) {
                        var data = _self.options.tabs[index];
                        var className = data.className;
                        $li.remove();
                        _self.options.tabs.splice(index, 1);
                        delete this.tabItem[className];
                        _self.$el.find('>.sn-tab-container>.J_tab_render>.contentArea').find('.' + className).remove();
                        itemDestroy.call(_self, e);
                        _self.trigger('itemDestroy', e, data);
                        if (_self.$el.find('.J_item_click.active').length == 0) {
                            var $newLi = _self.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>.J_item_click:eq(' + index + ')');
                            if ($newLi.length == 0) {
                                _self.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>.J_item_click:eq(' + (index - 1) + ')').trigger("click");
                            } else {
                                $newLi.trigger("click");
                            }
                        }
                    }
                }
            }
        },
        //清除内存
        clear: function () {
            this.$el.find('.sn-tab-container').remove();
            for (var key in this) {
                delete this[key];
            }
        },
        // 设置选项卡title
        setTitle: function (className, title) {
            this.tabItem[className] = title;
            for (var i = 0; i < this.options.tabs.length; i++) {
                if (this.options.tabs[i].className == className) {
                    this.options.tabs[i].title = title;
                    this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>.J_item_click.'+ className).find('a').text(title);
                    //tab标题过长时截断并添加title
                    this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>.J_item_click.'+ className).find('a').attr("title",title);
                }
            }
        },
        //创建选项卡
        createTab: function (title, render, param) {
            if (arguments.length == 0) {
                return;
            }
            var options = null;
            if (typeof (title) == 'object') {
                options = title;
            } else {
                options = { title: title, render: render, param: param }
            }
            var tabs = this.options.tabs;
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].title == options.title) {
                    return;
                }
            }
            var num = Math.floor(100 + Math.random() * 899);
            var className = options.className ? options.className : (options.param && options.param.className) ? options.param.className : 'sn-tab-item' + num;
            options.className = className;
            var icon = options.icon ? options.icon : (options.param && options.param.icon) ? options.param.icon : '';
            this.options.tabs = this.options.tabs.concat(options);
            this.tabItem[className] = options.title;
            var length = this.options.tabs.length;
            this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items').append(template(this.options.tabs[length - 1]));
            var $liLast = this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>li:last');
            $liLast.addClass(className);
            $liLast.trigger("click");
            var $aTitle = this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items>li>a');
            $aTitle.attr("title",options.title);
            var $tabBar = this.$el.find('.sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items');
            $tabBar.animate({'scrollLeft': $tabBar.get()[0].scrollWidth}, 200);
            tabBarResize(this);
        },
        //设置选项卡内容 
        content: function (html) {
            var index = this.$el.find(".sn-tab-container>.sn-tab>.sn-tabbar-wrapper>.sn-tab-items").find('.active').index();
            var $contentArea = this.$el.find('>.sn-tab-container>.J_tab_render>.contentArea');
            var className = (this.options.tabs)[index].className;
            if (this.lastDom) {
//                this.lastDom.detach();
            }
            if ($contentArea.find('.' + className).length != 0) {
                if (typeof (html) == 'object') {
                    this.lastDom = html;
                    $contentArea.find('.' + className).empty().append(html);
                } else {
                    $contentArea.find('.' + className).html(html);
                }
            } else {
                if (typeof (html) == 'object') {
                    this.lastDom = html;
                    var $div = $('<div class="' + className + '"></div>');
                    $div.append(html);
                    $contentArea.append($div);
                } else {
                    $html = $('<div class="' + className + '">' + html + '</div>');
                    $contentArea.append($html);
                }
            }
        },
        render: function () {
            return this;
        }
    });
    var isDOM = function (obj) {
        return obj.tagName ? true : false;
    };

    var sizeInit = function () {
        if (!(this.options.direction && this.options.direction === "vertical") && this.options.fixedNav && this.$el.height()) {
            var containerHeihgt = this.$el.height();
            var navHeight = this.$el.find('>.sn-tab-container>.J_tab_render>.sn-tabbar-wrapper>.sn-tab-items').height();
            this.$el.find('>.sn-tab-container>.J_tab_render').height(containerHeihgt);
            this.$el.find('>.sn-tab-container').height(containerHeihgt);
            this.$el.find('>.sn-tab-container>.J_tab_render>.contentArea').height(containerHeihgt - navHeight);
        }
    };
    //解决ie下console.log()报错问题
    window.console = window.console || (function () {
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
        return c;
    })();
    return objClass;
});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('@charset \"UTF-8\";\r\n\r\n/* 横向tab */\r\n.sn-tab { overflow: hidden;}\r\n.sn-tab .sn-tab-items { margin: 0; padding: 0; border-bottom: 1px solid #d0d6d9; font-size: 12px; }\r\n.sn-tab .sn-tab-items:after, .sn-tab .contentArea:after { clear: both; display:block; visibility: hidden; height: 0; content: \" \"; }\r\n.sn-tab .sn-tab-items > li { float:left; margin-bottom:-1px; list-style: none; position: relative; padding: 0 16px; }\r\n.sn-tab .sn-tab-items > li:hover .sn-tabClose {visibility: visible; cursor:pointer; }\r\n.sn-tab .sn-tab-items > li a { display: inline-block; height: 36px; line-height: 36px; color: #666; border-bottom: 2px solid transparent; text-decoration: none; outline: none; transition: background-color .4s ease-out,color .4s ease-out; }\r\n.sn-tab .sn-tab-items > li a:hover { border-bottom: 2px solid #0085d0; }\r\n.sn-tab .sn-tab-items > li.active a { border-bottom: 2px solid #0085d0; color: #222; }\r\n.sn-tab .contentArea { margin: 0; padding: 0; font-size: 12px; overflow: auto;}\r\n.sn-tab .sn-dropdown{position: absolute;top: 19px; right: 23px;border: 1px solid #d0d6d9;width: 14px; height: 14px;background:  url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZBOTYzOEEyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZBOTYzOEIyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRkE5NjM4ODIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRkE5NjM4OTIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJJ474AAADPSURBVHjaYvz//z8DJYAFxqiYOI8kjR35SWCaiYFCgM2AG0DshkXcC4gvEmNAHhAvRTPECyqWizMMkMAuII6GaoiGqgGx/YH4EDEGIBvSAMRcuDQTCgOQIVZAbADVPFzDgAVPGtkFxSQnJJIAI6WZiSZ5YaQZMDhLJBiwA+ILQHwCRwmFNymDNG8E4hgg/g3Ey4A4ClvSZsKheQNU81aopiioIW7EGDAFiGOhmpEzFsiQScR4QQ/JJSANP4C4DmqIxggLA2wllMbgK5EAAgwAaVhGl3VANuwAAAAASUVORK5CYII=);\r\n                    background-repeat:no-repeat;background-position: -1px -18px;}\r\n.sn-tab .sn-dropdown:hover{background:#e5f2fa url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZBOTYzOEEyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZBOTYzOEIyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRkE5NjM4ODIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRkE5NjM4OTIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJJ474AAADPSURBVHjaYvz//z8DJYAFxqiYOI8kjR35SWCaiYFCgM2AG0DshkXcC4gvEmNAHhAvRTPECyqWizMMkMAuII6GaoiGqgGx/YH4EDEGIBvSAMRcuDQTCgOQIVZAbADVPFzDgAVPGtkFxSQnJJIAI6WZiSZ5YaQZMDhLJBiwA+ILQHwCRwmFNymDNG8E4hgg/g3Ey4A4ClvSZsKheQNU81aopiioIW7EGDAFiGOhmpEzFsiQScR4QQ/JJSANP4C4DmqIxggLA2wllMbgK5EAAgwAaVhGl3VANuwAAAAASUVORK5CYII=);\r\n                    background-repeat:no-repeat;background-position: -1px -18px;}\r\n.sn-tab .sn-dropdown:active{background:#ebeff2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZBOTYzOEEyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZBOTYzOEIyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRkE5NjM4ODIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRkE5NjM4OTIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJJ474AAADPSURBVHjaYvz//z8DJYAFxqiYOI8kjR35SWCaiYFCgM2AG0DshkXcC4gvEmNAHhAvRTPECyqWizMMkMAuII6GaoiGqgGx/YH4EDEGIBvSAMRcuDQTCgOQIVZAbADVPFzDgAVPGtkFxSQnJJIAI6WZiSZ5YaQZMDhLJBiwA+ILQHwCRwmFNymDNG8E4hgg/g3Ey4A4ClvSZsKheQNU81aopiioIW7EGDAFiGOhmpEzFsiQScR4QQ/JJSANP4C4DmqIxggLA2wllMbgK5EAAgwAaVhGl3VANuwAAAAASUVORK5CYII=);\r\n                    background-repeat:no-repeat;background-position: -1px -18px;}\r\n.sn-tab .sn-btnclose{background-position: -1px 0px;}\r\n.sn-tab .sn-btnclose:hover{background:#e5f2fa url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZBOTYzOEEyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZBOTYzOEIyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRkE5NjM4ODIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRkE5NjM4OTIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJJ474AAADPSURBVHjaYvz//z8DJYAFxqiYOI8kjR35SWCaiYFCgM2AG0DshkXcC4gvEmNAHhAvRTPECyqWizMMkMAuII6GaoiGqgGx/YH4EDEGIBvSAMRcuDQTCgOQIVZAbADVPFzDgAVPGtkFxSQnJJIAI6WZiSZ5YaQZMDhLJBiwA+ILQHwCRwmFNymDNG8E4hgg/g3Ey4A4ClvSZsKheQNU81aopiioIW7EGDAFiGOhmpEzFsiQScR4QQ/JJSANP4C4DmqIxggLA2wllMbgK5EAAgwAaVhGl3VANuwAAAAASUVORK5CYII=);\r\n                    background-repeat:no-repeat;background-position: -1px 0px;}\r\n.sn-tab .sn-btnclose:active{background:#ebeff2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZBOTYzOEEyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZBOTYzOEIyMDFFMTFFN0I4ODQ5MDI4NTk3NzAzNEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRkE5NjM4ODIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRkE5NjM4OTIwMUUxMUU3Qjg4NDkwMjg1OTc3MDM0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrJJ474AAADPSURBVHjaYvz//z8DJYAFxqiYOI8kjR35SWCaiYFCgM2AG0DshkXcC4gvEmNAHhAvRTPECyqWizMMkMAuII6GaoiGqgGx/YH4EDEGIBvSAMRcuDQTCgOQIVZAbADVPFzDgAVPGtkFxSQnJJIAI6WZiSZ5YaQZMDhLJBiwA+ILQHwCRwmFNymDNG8E4hgg/g3Ey4A4ClvSZsKheQNU81aopiioIW7EGDAFiGOhmpEzFsiQScR4QQ/JJSANP4C4DmqIxggLA2wllMbgK5EAAgwAaVhGl3VANuwAAAAASUVORK5CYII=);\r\n                    background-repeat:no-repeat;background-position: -1px 0px;}\r\n\r\n/* 竖向tab，依赖sn-tab */\r\n.sn-vertical { border: 1px solid #d0d6d9; }\r\n.sn-vertical:after { clear: both; display:block; visibility: hidden; height: 0; content: \" \"; }\r\n.sn-vertical .sn-tab-items { width: 150px; float: left; display: block; margin-bottom: -1px; border-bottom: none; }\r\n.sn-vertical .sn-tab-items li { margin-bottom: 0; width: 100%; height: 36px; text-indent: 12px; border-bottom: 1px solid #d0d6d9; border-right: 1px solid #d0d6d9; }\r\n.sn-vertical .sn-tab-items li a { display: block; margin: 0; height: 36px; line-height: 36px; color: #666; background: #F6F6F6; border-bottom: 1px solid #d0d6d9; }\r\n.sn-vertical .sn-tab-items li a:hover { border-bottom: 1px solid #d0d6d9; }\r\n.sn-vertical .sn-tab-items li.active { border-right: 1px solid transparent; text-indent: 10px; }\r\n.sn-vertical .sn-tab-items li.active a { margin-left: -1px; color: #222; background: #fff; border-bottom: 1px solid #d0d6d9; border-left: 3px solid #0085d0; }\r\n.sn-vertical .sn-tab .contentArea { margin-left: 150px; }\r\n\r\n/*删除*/\r\n.sn-tab .sn-tab-items > li .sn-tabClose {\r\n    background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcRJREFUeNqkUz1IHEEU/t7s6u7iYWD9CxFBwRQhIQjX6BUBxSI/RSAYQtLlIEXCpREsUqaxSKUoWimpDoKFxB8wCKIQAimS5g4xmoBE8ALmhzvWvdvZnRlnEwIH3tn4pplvvve+9968GVJK4TxmnjpZGXRhtWRARlKji4D6hKi8iJvL67UEqLoCuZAaIOvCiuKei8pPHSuAhgTIboWS/DW7t/m4roCYv+ZquKNxG5k21O+dfx5GI+hSP+AVdIbwmZHOz1YLsP+b6E/pqfB4mwwdsPvvoDrvQETNYLeyoKtPIIo+oqL/Kpi47NS8g6gkh6hBAmEBMpuG9XBeV7EP5f9CsDCqs+t2oBJK8aQFvD9VAT+2E1FRt1J2EH7bgyzsgnUlwT++hfBMCN+Kff761WyB+86XwLchgibYj2YggxDeZBr2yDhYz3DMI4gFfGe7tkDZmqvoLCG1Izo8QGn6BYJ8HqWpMbDufpSPGxH41lLHTO573THuPkhNacWMYxowGYHi0Wq+IiS4VEeau9775sOPugKx5e7eyOigl0TkxljFS2HNMtjzK4tbX898SNX2+fZgj2ZcgyjXt7rB6z1lOu9fOBFgADfTzCtPJyMIAAAAAElFTkSuQmCC\') no-repeat center center;\r\n    display: inline-block;\r\n    width: 12px;\r\n    height: 20px;\r\n    margin-right: 1px;\r\n    position: absolute;\r\n    top: 1px;\r\n    right: 1px;\r\n    visibility: hidden;\r\n}');
