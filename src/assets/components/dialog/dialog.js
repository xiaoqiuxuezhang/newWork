
define('lib/requirejs/css.min!lib/dialog/6.0.4/css/ui-dialog',[],function(){});
define('dialog',['jquery','eventTarget','artDialog',
    'lib/requirejs/css.min!lib/dialog/6.0.4/css/ui-dialog.css'],
    function ($,EventTarget){
        var version = '1.0.14',
            dl = null;
        var objClass = function(options){
            this.options = options || {};
            //mode默认为normal
            this.options.mode = this.options.mode?this.options.mode:'normal';
            EventTarget.call(this);
            dl = dialogInit.call(this);
            $('button[i-id="ok"]',dl.node).on('click',$.proxy(function(){
                confirm.call(this);
                this.trigger('confirm')
            },this));
           //点击确定按钮时触发
        }
        var dialogInit = function(){
            var d = null,mode = this.options.mode,config={
                //对话框打开时触发
                onshow:$.proxy(function(){
                    if(this.options.beforeOpen && typeof this.options.beforeOpen == 'function'){ 
                        this.options.beforeOpen();
                    }
                    onshow.call(this);
                    this.trigger('onshow');
                },this),
                //对话框销毁之前触发
                onbeforeremove:$.proxy(function(){
                    onbeforeremove.call(this);
                    this.trigger('onbeforeremove');
                },this),
                //对话框销毁时触发
                onremove:$.proxy(function(){
                    onremove.call(this);
                    this.trigger('onremove');
                },this),
                //对话框关闭时触发
                onclose:$.proxy(function(){
                    onclose.call(this);
                    this.trigger('onclose');
                },this),
                //对话框获得焦点时触发
                onfocus:$.proxy(function(){
                    onfocus.call(this);
                    this.trigger('onfocus');
                },this),
                //对话框失去焦点时触发
                onblur:$.proxy(function(){
                    onblur.call(this);
                    this.trigger('onblur');
                },this),
                //对话框位置重置时触发
                onreset:$.proxy(function(){
                    onreset.call(this);
                    this.trigger('onreset');
                },this)
            };

            if(mode == 'normal'){
                d = dialog($.extend({
                    content: '<span class="ui-dialog-loading">Loading..</span>',
                    width:600,
                    height:400
                },config,this.options));
                d.__popup.removeClass("ui-tip-text");
            }else if(mode == 'tips'){
                d = dialog($.extend({
                    content: '<span class="ui-dialog-loading">Loading..</span>',
                    width:'auto',
                    height:'auto'
                },config,this.options));
                // 当width和maxWidth都不存在时，设置maxWidth的值为默认值240
                if(!this.options.width && !this.options.maxWidth) { 
                    d.__popup.find('.ui-dialog-content').css({
                        maxWidth:240
                    }); 
                }
                //当maxWidth或者maxHeight存在时设置tips对话框的最大宽度和最大高度 
                if(this.options.maxWidth) { 
                    d.__popup.find('.ui-dialog-content').css({
                        maxWidth:this.options.maxWidth,
                        width:'auto'
                    }); 
                }
                if(this.options.maxHeight) { 
                    d.__popup.find('.ui-dialog-content').css({
                        maxHeight:this.options.maxHeight,
                        height:'auto'
                    }); 
                }
                d.__popup.addClass("ui-tip-text");
            }else if(mode == 'confirm'){
                var d = dialog($.extend({
                    content: '<span class="ui-dialog-loading">Loading..</span>',
                    width:300,
                    height:180,
                    modal:true,
                    okValue:'确认',
                    ok:function(){},
                    cancelValue:'取消',
                    cancel :function(){
                        return;
                    }
                },config,this.options));
                d.__popup.removeClass("ui-tip-text"); 
            }
            d.show();
            if(mode == 'tips'){//tips,默认3s关闭
                setTimeout(function () {
                    d.close().remove();
                }, (this.options.delayRmove)*1000 || 3000);
            }else if(this.options.delayRmove){//非tips时，有延迟时间才自动关闭
                setTimeout(function () {
                    d.close().remove();
                }, this.options.delayRmove*1000);
            }
            return d;
        }
        $.extend(objClass.prototype, EventTarget.prototype, {
            version: version,
            origin:function(){
                return {
                    open:dl?dl['open']:false,   //判断对话框打开状态
                    returnValue:dl?dl['returnValue']:'' //对话框的返回值
                }
            },
            get:function(id){
                return dialog.get(id);
            },
            getCurrent:function(){
                return dialog.getCurrent();
            },
            show:function(anchor){
                dl.show(anchor);
            },
            showModal:function(anchor){
                dl.showModal(anchor);
            },
            close: function(result){
                dl.close(result);
            },
            remove:function(){
                dl.remove();
            },
            content:function(html){
                dl.content(html);
            },
            title:function(text){
                dl.title(text);
            },
            width:function(value){
                dl.width(value);
            },
            height:function(value){
                dl.height(value);
            },
            focus:function(){
                dl.focus();
            },
            blur:function(){
                dl.blur();
            },
            addEventListener:function(type,callback){
                dl.addEventListener(type,callback);
            },
            removeEventListener:function(type,callback){
                dl.removeEventListener(type,callback);
            }
        });
        //注册事件
        //onshow 对话框打开时触发
        var onshow = function(){}
        // confirm 点击确定按钮时触发
        var confirm = function(){}
        // onbeforeremove 对话框销毁之前触发
        var onbeforeremove = function(){}
        // onremove 对话框销毁事件
        var onremove = function(){}
        // onclose 对话框关闭时触发
        var onclose = function(){}
        // onfocus 对话框获取焦点时触发
        var onfocus = function(){}
        // onblur 对话框失去焦点时触发
        var onblur = function(){}
        // onreset 对话框位置重置时触发
        var onreset = function(){}

        //解决ie下console.log()报错问题
        window.console = window.console || (function() {
            var c = {};
            c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {};
            return c;
        })();
        return objClass;
    });

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('/*!\r\n * ui-dialog.css\r\n * Date: 2014-07-03\r\n * https://github.com/aui/artDialog\r\n * (c) 2009-2014 TangBin, http://www.planeArt.cn\r\n *\r\n * This is licensed under the GNU LGPL, version 2.1 or later.\r\n * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html\r\n */\r\n.ui-dialog {\r\n    *zoom:1;\r\n    _float: left;\r\n    position: relative !important;\r\n    background-color: #FFF;\r\n    border: 1px solid #CCC;\r\n    border-radius: 6px;\r\n    outline: 0;\r\n    background-clip: padding-box;\r\n    \r\n    font-size: 14px;\r\n    line-height: 1.428571429;\r\n    color: #333;\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: -webkit-transform .15s ease-in-out, opacity .15s ease-in-out;\r\n    transition: transform .15s ease-in-out, opacity .15s ease-in-out;\r\n}\r\n.ui-popup-show .ui-dialog {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n.ui-popup-focus .ui-dialog {\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\r\n}\r\n.ui-popup-modal .ui-dialog {\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);\r\n}\r\n.ui-dialog-grid {\r\n    width: auto;\r\n    margin: 0;\r\n    border: 0 none;\r\n    border-collapse:collapse;\r\n    border-spacing: 0;\r\n    background: transparent;\r\n}\r\n.ui-dialog-header,\r\n.ui-dialog-body,\r\n.ui-dialog-footer {\r\n    position: relative;\r\n    padding: 0;\r\n    border: 0 none;\r\n    text-align: left;\r\n    background: transparent;\r\n    overflow: hidden;\r\n}\r\n.ui-dialog-header {\r\n    white-space: nowrap;\r\n    border-bottom: 1px solid #d0d6d9;\r\n}\r\n.ui-dialog-close {\r\n    position: absolute;\r\n    _position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    _height: 26px;\r\n    padding: 10px 16px 14px 6px;\r\n    font-size: 28px;\r\n    line-height: 1;\r\n    color: #78909c;\r\n    text-shadow: 0 1px 0 #FFF;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    _background: #FFF;\r\n    border: 0;\r\n    -webkit-appearance: none;\r\n}\r\n.ui-dialog-close:hover,\r\n.ui-dialog-close:focus {\r\n    color: #000000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.ui-dialog-title {\r\n    -moz-box-sizing: border-box;  \r\n    -webkit-box-sizing: border-box; \r\n    -o-box-sizing: border-box; \r\n    -ms-box-sizing: border-box; \r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    color: #222;\r\n    font-size: 16px;\r\n    line-height: 1.428571429;\r\n    min-height: 16.428571429px;\r\n    padding: 14px 40px 14px 14px;\r\n    overflow:hidden; \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    font-weight: bold;\r\n    cursor: move;\r\n}\r\n.ui-dialog-content {\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    text-align: left;\r\n    overflow: auto;\r\n}\r\n.ui-dialog-content-drag {\r\n    display: none;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background:#ff0000; \r\n    opacity:0;\r\n    filter:alpha(opacity=0); \r\n}\r\n.ui-dialog-footer {\r\n    padding: 10px;\r\n    text-align: center;\r\n    background: #ebf1f5; \r\n    border-top: 1px solid #d5dce5; \r\n    border-radius: 0 0 4px 4px;\r\n    height:20px;\r\n}\r\n.ui-dialog-statusbar {\r\n    float: left;\r\n    margin-right: 20px;\r\n    padding: 6px 0;\r\n    line-height: 1.428571429;\r\n    font-size: 14px;\r\n    color: #888;\r\n    white-space: nowrap;\r\n}\r\n.ui-dialog-statusbar label:hover {\r\n    color: #333;\r\n}\r\n.ui-dialog-statusbar input,\r\n.ui-dialog-statusbar .label {\r\n    vertical-align: middle;\r\n}\r\n.ui-dialog-button {\r\n    /*float: right;*/\r\n    white-space: nowrap;\r\n}\r\n.ui-dialog-footer button+button {\r\n    margin-bottom: 0;\r\n    margin-left: 20px;\r\n}\r\n.ui-dialog-footer button {\r\n    overflow:visible;\r\n    display: inline-block;\r\n    padding: 9px 51px;\r\n    _margin-left: 5px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    line-height: 1.428571429;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n}\r\n\r\n.ui-dialog-footer button:hover,\r\n.ui-dialog-footer button:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.ui-dialog-footer button:active {\r\n  background-image: none;\r\n  outline: 0;\r\n}\r\n.ui-dialog-footer button[disabled] {\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n}\r\n\r\n.ui-dialog-footer button {\r\n  color: #0085d0;\r\n  background-color: #ffffff;\r\n  border-color: #d0d6d9;\r\n  outline: none;\r\n}\r\n\r\n.ui-dialog-footer button:hover,\r\n.ui-dialog-footer button:focus {\r\n  color: #0085d0;\r\n  background-color: #e5f3fa;\r\n  border-color: #d0d6d9;\r\n}\r\n\r\n.ui-dialog-footer button:active {\r\n  color: #0085d0;\r\n  background-color: #eaeef1;\r\n  border-color: #d0d6d9;\r\n}\r\n\r\n.ui-dialog-footer button:active{\r\n  background-image: none;\r\n}\r\n\r\n.ui-dialog-footer button[disabled],\r\n.ui-dialog-footer button[disabled]:hover,\r\n.ui-dialog-footer button[disabled]:focus,\r\n.ui-dialog-footer button[disabled]:active {\r\n  background-color: #ffffff;\r\n  border-color: #cccccc;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus {\r\n  color: #ffffff;\r\n  background-color: #0085d0;\r\n  border-color: #0085d0;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus:hover,\r\n.ui-dialog-footer button.ui-dialog-autofocus:focus {\r\n  color: #ffffff;\r\n  background-color: #1a91d4;\r\n  border-color: #1a91d4;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus:active {\r\n  color: #ffffff;\r\n  background-color: #0085d0;\r\n  border-color: #0085d0;\r\n}\r\n.ui-popup-top-left .ui-dialog,\r\n.ui-popup-top .ui-dialog,\r\n.ui-popup-top-right .ui-dialog {\r\n    top: -8px;\r\n}\r\n.ui-popup-bottom-left .ui-dialog,\r\n.ui-popup-bottom .ui-dialog,\r\n.ui-popup-bottom-right .ui-dialog {\r\n    top: 8px;\r\n}\r\n.ui-popup-left-top .ui-dialog,\r\n.ui-popup-left .ui-dialog,\r\n.ui-popup-left-bottom .ui-dialog {\r\n    left: -8px;\r\n}\r\n.ui-popup-right-top .ui-dialog,\r\n.ui-popup-right .ui-dialog,\r\n.ui-popup-right-bottom .ui-dialog {\r\n    left: 8px;\r\n}\r\n\r\n.ui-dialog-arrow-a,\r\n.ui-dialog-arrow-b {\r\n    position: absolute;\r\n    display: none;\r\n    width: 0;\r\n    height: 0;\r\n    overflow:hidden;\r\n    _color:#FF3FFF;\r\n    _filter:chroma(color=#FF3FFF);\r\n    border:8px dashed transparent;\r\n}\r\n.ui-popup-follow .ui-dialog-arrow-a,\r\n.ui-popup-follow .ui-dialog-arrow-b{\r\n    display: block;\r\n}\r\n.ui-popup-follow .ui-dialog-title{\r\n    cursor:initial;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-a,\r\n.ui-popup-top .ui-dialog-arrow-a,\r\n.ui-popup-top-right .ui-dialog-arrow-a {\r\n    bottom: -16px;\r\n    border-top:8px solid #7C7C7C;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-b,\r\n.ui-popup-top .ui-dialog-arrow-b,\r\n.ui-popup-top-right .ui-dialog-arrow-b {\r\n    bottom: -15px;\r\n    border-top:8px solid #fff;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-a,\r\n.ui-popup-top-left .ui-dialog-arrow-b  {\r\n    left: 15px;\r\n}\r\n.ui-popup-top .ui-dialog-arrow-a,\r\n.ui-popup-top .ui-dialog-arrow-b  {\r\n    left: 50%;\r\n    margin-left: -8px;\r\n}\r\n.ui-popup-top-right .ui-dialog-arrow-a,\r\n.ui-popup-top-right .ui-dialog-arrow-b {\r\n    right: 15px;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-a,\r\n.ui-popup-bottom .ui-dialog-arrow-a,\r\n.ui-popup-bottom-right .ui-dialog-arrow-a {\r\n    top: -16px;\r\n    border-bottom:8px solid #7C7C7C;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-b,\r\n.ui-popup-bottom .ui-dialog-arrow-b,\r\n.ui-popup-bottom-right .ui-dialog-arrow-b {\r\n    top: -15px;\r\n    border-bottom:8px solid #fff;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-a,\r\n.ui-popup-bottom-left .ui-dialog-arrow-b {\r\n    left: 15px;\r\n}\r\n.ui-popup-bottom .ui-dialog-arrow-a,\r\n.ui-popup-bottom .ui-dialog-arrow-b {\r\n    margin-left: -8px;\r\n    left: 50%;\r\n}\r\n.ui-popup-bottom-right .ui-dialog-arrow-a,\r\n.ui-popup-bottom-right .ui-dialog-arrow-b {\r\n    right: 15px;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-a,\r\n.ui-popup-left .ui-dialog-arrow-a,\r\n.ui-popup-left-bottom .ui-dialog-arrow-a {\r\n    right: -16px;\r\n    border-left:8px solid #7C7C7C;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-b,\r\n.ui-popup-left .ui-dialog-arrow-b,\r\n.ui-popup-left-bottom .ui-dialog-arrow-b {\r\n    right: -15px;\r\n    border-left:8px solid #fff;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-a,\r\n.ui-popup-left-top .ui-dialog-arrow-b {\r\n    top: 15px;\r\n}\r\n.ui-popup-left .ui-dialog-arrow-a,\r\n.ui-popup-left .ui-dialog-arrow-b {\r\n    margin-top: -8px;\r\n    top: 50%;\r\n}\r\n.ui-popup-left-bottom .ui-dialog-arrow-a,\r\n.ui-popup-left-bottom .ui-dialog-arrow-b {\r\n    bottom: 15px;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-a,\r\n.ui-popup-right .ui-dialog-arrow-a,\r\n.ui-popup-right-bottom .ui-dialog-arrow-a {\r\n    left: -16px;\r\n    border-right:8px solid #7C7C7C;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-b,\r\n.ui-popup-right .ui-dialog-arrow-b,\r\n.ui-popup-right-bottom .ui-dialog-arrow-b {\r\n    left: -15px;\r\n    border-right:8px solid #fff;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-a,\r\n.ui-popup-right-top .ui-dialog-arrow-b {\r\n    top: 15px;\r\n}\r\n.ui-popup-right .ui-dialog-arrow-a,\r\n.ui-popup-right .ui-dialog-arrow-b {\r\n    margin-top: -8px;\r\n    top: 50%;\r\n}\r\n.ui-popup-right-bottom .ui-dialog-arrow-a,\r\n.ui-popup-right-bottom .ui-dialog-arrow-b {\r\n    bottom: 15px;\r\n}\r\n\r\n\r\n@-webkit-keyframes ui-dialog-loading {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes ui-dialog-loading {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.ui-dialog-loading {\r\n    vertical-align: middle;\r\n    position: relative;\r\n    display: block;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    overflow: hidden;\r\n    width: 32px;\r\n    height: 32px;\r\n    top: 50%;\r\n    margin: -16px auto 0 auto;\r\n    font-size: 0;\r\n    text-indent: -999em;\r\n    color: #666;\r\n}\r\n.ui-dialog-loading {\r\n    width: 100%\\9;\r\n    text-indent: 0\\9;\r\n    line-height: 32px\\9;\r\n    text-align: center\\9;\r\n    font-size: 12px\\9;\r\n}\r\n\r\n.ui-dialog-loading::after {\r\n    position: absolute;\r\n    content: \'\';\r\n    width: 3px;\r\n    height: 3px;\r\n    margin: 14.5px 0 0 14.5px;\r\n    border-radius: 100%;\r\n    box-shadow: 0 -10px 0 1px #ccc, 10px 0px #ccc, 0 10px #ccc, -10px 0 #ccc, -7px -7px 0 0.5px #ccc, 7px -7px 0 1.5px #ccc, 7px 7px #ccc, -7px 7px #ccc;\r\n    -webkit-transform: rotate(360deg);\r\n    -webkit-animation: ui-dialog-loading 1.5s infinite linear;\r\n    transform: rotate(360deg);\r\n    animation: ui-dialog-loading 1.5s infinite linear;\r\n    display: none\\9;\r\n}\r\n.ui-tip-text .ui-dialog-content{padding: 15px}');
