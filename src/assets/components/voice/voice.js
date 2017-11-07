define('components/voice/voice.tpl',['hdbr'], function(Handlebars) {
			return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n  <div class=\"jp-jplayer\"></div>\r\n  <div id=\""
    + alias4(((helper = (helper = helpers.cssSelectorAncestor || (depth0 != null ? depth0.cssSelectorAncestor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cssSelectorAncestor","hash":{},"data":data}) : helper)))
    + "\" style=\"width:"
    + alias4(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data}) : helper)))
    + "\" class=\"jp-audio\" role=\"application\" aria-label=\"media player\">\r\n    <div class=\"jp-type-single\">\r\n      <div class=\"jp-gui jp-interface\">\r\n        <div class=\"jp-volume-controls\">\r\n          <button class=\"jp-mute FlatTonyBackgroundForJplayer\" role=\"button\" tabindex=\"0\">mute</button>\r\n          <button class=\"jp-volume-max FlatTonyBackgroundForJplayer\" role=\"button\" tabindex=\"0\">max volume</button>\r\n          <div class=\"jp-volume-bar FlatTonyBackgroundForJplayer\">\r\n            <div class=\"jp-volume-bar-value FlatTonyBackgroundForJplayer\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"jp-controls-holder\">\r\n          <div class=\"jp-controls\">\r\n            <button class=\"jp-play FlatTonyBackgroundForJplayer\" role=\"button\" tabindex=\"0\">play</button>\r\n            <div class=\"jp-space FlatTonyBackgroundForJplayer\"></div>\r\n            <button class=\"jp-stop FlatTonyBackgroundForJplayer\" role=\"button\" tabindex=\"0\">stop</button>\r\n          </div>\r\n          <div class=\"jp-progress FlatTonyBackgroundForJplayer\">\r\n            <div class=\"jp-seek-bar FlatTonyBackgroundForJplayer\">\r\n              <div class=\"jp-play-bar FlatTonyBackgroundForJplayer\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"jp-current-time\" role=\"timer\" aria-label=\"time\">&nbsp;</div>\r\n          <div class=\"jp-time-space\">/</div>\r\n          <div class=\"jp-duration\" role=\"timer\" aria-label=\"duration\">&nbsp;</div>\r\n          <!-- <div class=\"jp-toggles\">\r\n            <button class=\"jp-repeat\" role=\"button\" tabindex=\"0\">repeat</button>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"jp-details\">\r\n        <!-- <div class=\"jp-title\" aria-label=\"title\">&nbsp;</div> -->\r\n      </div>\r\n      <div class=\"jp-no-solution\">\r\n        <span>Update Required</span>\r\n        To play the media you will need to either update your browser to a recent version or update your <a href=\"http://get.adobe.com/flashplayer/\" target=\"_blank\">Flash plugin</a>.\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
},"useData":true})
		});

define('lib/requirejs/css.min!components/voice/voice',[],function(){});

define('lib/requirejs/css.min!lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/css/jplayer.flat.tony',[],function(){});
define('voice',['jquery', 'eventTarget',
'components/voice/voice.tpl',
'lib/requirejs/css.min!components/voice/voice.css',
'lib/requirejs/css.min!lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/css/jplayer.flat.tony.css',
'jquery.jplayer'
], function ($, EventTarget, template) {

//  var template = hdb.compile(tpl);
var VERSION = '1.1.5';
var objClass = function () {
    var options = {};
    if (arguments.length == 1) {
        options = arguments[0];
    } else if (arguments.length == 2) {
        options.el = arguments[0];
        options.url = arguments[1];
    } else {
        console.log('参数有误');
    }
    //判断el的异常值：el不存在、为空string、dom原生对象
    if (options.el instanceof jQuery && options.el.length > 0) {
        this.$el = options.el;
    } else if (options.el && isDOM(options.el)) {
        this.$el = $(options.el);
    } else if (typeof (options.el) == 'string' && $(options.el).length > 0) {
        this.$el = $(options.el);
    } else {
        this.$el = $("<div></div>")
    }
    //默认配置
    var init = {
        url: '',
        className: "voice",
        swfPath: "../assets/lib/jqueryPlugin/jPlayer/dist/jplayer", //jquery.jplayer.swf 文件的路径(是文件夹而不是文件)。
        solution: "html,flash",// 定义html和flash解决方案的优先级。默认优先使用html，flash备用。
        preload: 'metadata',//预加载
        volume: '0.8', // 音量
        autoPaly: 1,//自动播放
        repeat: false,//重复播放
        shortcutKey: true,//键盘控制
        supplied:'mp3', //默认播放格式
        width:'460px',//视频播放器的宽度
        height:'270px',//视频播放器的高度
        cssSelectorAncestor: 'jp-jplayer-' + Math.floor(Math.random() * 1000000000), //生成随机ID
        keyBindings: { //键盘事件
            play: {
                key: 32, // space 播放/暂停
                fn: function(f) {
                  if(f.status.paused) {
                    f.play();
                  } else {
                    f.pause();
                  }
                }
            },
            volumeUp: {
                key: 38, // 音量增加 
                fn: function(f) {
                    f.volume(f.options.volume + 0.1);
                }
            },
            volumeDown: {
                key: 40, // 音量降低
                fn: function(f) {
                  f.volume(f.options.volume - 0.1);
                }
            },
            palyAhead:{
                key:39,//快进 3s 
                fn: function(f) {
                    f.play(that.currentTime + 3);
                }
            },
            palyBack:{
                key:37,//快退 3s 
                fn: function(f) {
                    f.play(that.currentTime - 3);
                }
            }
        }
    }
    this.options = options = $.extend(init, options);
    this.url = this.options.url; //当前播放的url
    this.$el.addClass('sn-voice ' + options.className).html(template(this.options));
    this.$jplayer = this.$el.find('.jp-jplayer');
    var that = this;
    that.$jplayer.jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia",{
                mp3: options.url,
                wav: options.url,
                ogg: options.url,
                m4v: options.url,
                m4a: options.url
            });
            // 是否自动播放
            if (options.autoPaly) {
                $(this).jPlayer('play');
            }
            // 是否重复播放
            if (options.repeat) {
                $(this).jPlayer('repeat');
            }
        },
        timeupdate: function (e) { //在播放过程中不断触发。
            that.currentTime = e.jPlayer.status.currentTime; //当前播放时间，
        },
        keyBindings: options.keyBindings,//键盘控制事件
        cssSelectorAncestor: '#' + options.cssSelectorAncestor,//jPlayer和唯一的一个界面关联所以用id
        swfPath: options.swfPath,
        size:options.supplied == 'mp3'||options.supplied == 'wav'||options.supplied == 'ogg'?{
            width: '0',
            height: '0'
        }:{
            width: options.width,
            height: options.height
        },
        supplied: options.supplied,//格式
        solution: options.solution,
        useStateClassSkin: true,
        autoBlur: false,
        preload: options.preload,//预加载
        volume: options.volume,//播放音量
        smoothPlayBar: true,//点击时平滑过渡滚动条
        keyEnabled: options.shortcutKey, //键盘控制
        remainingDuration: true, //剩余时间
        toggleDuration: true //点击剩余时间进行切换
    });
    // 自定义事件        
    EventTarget.call(this);
    // 播放事件
    this.$jplayer.on($.jPlayer.event.play, function (e) {
        that.trigger('play', e);
    });
    // 暂停事件
    this.$jplayer.on($.jPlayer.event.pause, function (e) {
        that.trigger('pause', e);
        that.paused = e.jPlayer.status.paused; //在执行pause()方法后timeupdate事件仍然会触发一次，导致this.paused不准确，故在此多执行一次，
    });
    // 播放完成事件
    this.$jplayer.on($.jPlayer.event.ended, function (e) {
        that.trigger('ended', e);
        that.paused = e.jPlayer.status.paused; //当前播放状态 解决IE浏览器兼容。
    });
    // 加载失败事件
    this.$jplayer.on($.jPlayer.event.abort, function (e) {
        that.trigger('abort', e);
    });
    // 播放过程中不断出发事件
    this.$jplayer.on($.jPlayer.event.timeupdate, function (e) {
        that.trigger('timeupdate', e);
        that.paused = e.jPlayer.status.paused; //当前播放状态
    });
    // 加载完成后触发
    this.$jplayer.on($.jPlayer.event.loadedmetadata, function (e) {
        that.trigger('progress', e);
    });
    // 发生异常事件
    this.$jplayer.on($.jPlayer.event.error, function (e) {
        that.trigger('error', e);
    });
};
$.extend(objClass.prototype, EventTarget.prototype, {
    version: VERSION,
    setMedia: function (url, play, reload) {
        // 判断当前的url与新的url是否相等,不等时执行setMedia方法。
        //reload为true时强制执行setMedia方法。
        if (url != this.url || reload) {
            this.$jplayer.jPlayer("setMedia", { 
                mp3: url,
                wav: url,
                ogg: url,
                m4v: url,
                m4a: url
            });
            this.url = url;
        }
        if (play != false) { this.$jplayer.jPlayer("play"); }
    },
    play: function (time) {
        this.$jplayer.jPlayer("play", time && time);
    },
    togglePlay: function () {
        this.paused? this.$jplayer.jPlayer("play"):this.$jplayer.jPlayer("pause");
    },
    stop: function () {
        this.$jplayer.jPlayer("stop");
    },
    pause: function () {
        this.$jplayer.jPlayer("pause");
    },
    volume: function (number) {
        this.options.volume = Math.max(Math.min(number, 1), 0);//取值范围0~1;
        this.$jplayer.jPlayer("volume", this.options.volume);
    }
});

// 判断是否为原生DOM
var isDOM = function (obj) {
    return obj.tagName ? true : false
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
('li {\r\n    list-style: none;\r\n}\r\n\r\n.btn.fr {\r\n    margin-left: 12px;\r\n    margin-right: 0;\r\n}\r\n\r\n.btn-blue, a.btn-blue {\r\n    background: #3A8BE0;\r\n    border-color: #4A81C4;\r\n    color: #fff;\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    border-radius: 3px;\r\n    margin-right: 10px;\r\n    border: 1px solid #DDD;\r\n    padding: 0 14px;\r\n    background: #fff;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    white-space: nowrap;\r\n}\r\n\r\n.sn-voice .FlatTonyBackgroundForJplayer {\r\n    background-image: url(\'data:image/png;base64,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\');\r\n}\r\n\r\n/*\r\n * Skin Name: flat tony\r\n * Author: tonytian\r\n * Skin Version: 1.0\r\n * Date: 2016-04-20\r\n */\r\n.jp-audio *:focus,\r\n.jp-audio-stream *:focus,\r\n.jp-video *:focus {\r\n  /* Disable the browser focus highlighting. */\r\n  outline: none; }\r\n\r\n.jp-audio button::-moz-focus-inner,\r\n.jp-audio-stream button::-moz-focus-inner,\r\n.jp-video button::-moz-focus-inner {\r\n  /* Disable the browser CSS3 focus highlighting. */\r\n  border: 0; }\r\n\r\n.jp-audio,\r\n.jp-audio-stream,\r\n.jp-video {\r\n  font-size: 16px;\r\n  line-height: 1.6;\r\n  color: #666;\r\n  border-radius: 6px;\r\n  border: 1px solid #D8D8D8;\r\n  background-color: #F7F7F7; }\r\n\r\n.jp-audio {\r\n  width: 460px; \r\n  min-width: 460px!important; \r\n  box-shadow: 1px 1px 2px #D8D8D8; }\r\n\r\n.jp-audio-stream {\r\n  width: 182px; }\r\n\r\n.jp-video-270p {\r\n  width: 480px; }\r\n\r\n.jp-video-360p {\r\n  width: 640px; }\r\n\r\n.jp-video-full {\r\n  /* Rules for IE6 (full-screen) */\r\n  width: 480px;\r\n  height: 270px;\r\n  /* Rules for IE7 (full-screen) - Otherwise the relative container causes other page items that are not position:static (default) to appear over the video/gui. */\r\n  position: static !important;\r\n  position: relative; }\r\n\r\n/* The z-index rule is defined in this manner to enable Popcorn plugins that add overlays to video area. EG. Subtitles. */\r\n.jp-video-full div div {\r\n  z-index: 1000; }\r\n\r\n.jp-video-full .jp-jplayer {\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed !important;\r\n  position: relative;\r\n  /* Rules for IE6 (full-screen) */\r\n  overflow: hidden; }\r\n\r\n.jp-video-full .jp-gui {\r\n  position: fixed !important;\r\n  position: static;\r\n  /* Rules for IE6 (full-screen) */\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1001;\r\n  /* 1 layer above the others. */ }\r\n\r\n.jp-video-full .jp-interface {\r\n  position: absolute !important;\r\n  position: relative;\r\n  /* Rules for IE6 (full-screen) */\r\n  bottom: 0;\r\n  left: 0; }\r\n\r\n.jp-interface {\r\n  position: relative;\r\n  top: 1px;\r\n  width: 100%; }\r\n\r\n.jp-audio .jp-interface {\r\n  height: 40px; }\r\n\r\n.jp-audio-stream .jp-interface {\r\n  height: 80px;}\r\n\r\n.jp-video .jp-interface {\r\n  border-top: 1px solid #009be3; }\r\n\r\n/* @group CONTROLS */\r\n.jp-controls-holder {\r\n  clear: both;\r\n  /* width: 460px; */\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  top: 0;\r\n  /* This negative value depends on the size of the text in jp-currentTime and jp-duration */ }\r\n\r\n.jp-interface .jp-controls {\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden; }\r\n\r\n.jp-audio .jp-controls {\r\n  width: 60px;\r\n  height: 24px;\r\n  position: absolute;\r\n  left: 4px;\r\n  top: 6px;}\r\n\r\n.jp-audio-stream .jp-controls {\r\n  position: absolute;\r\n  top: 20px;\r\n  left: 20px;\r\n  width: 142px; }\r\n\r\n.jp-video .jp-type-single .jp-controls {\r\n  width: 78px;\r\n  margin-left: 200px; }\r\n\r\n.jp-video .jp-type-playlist .jp-controls {\r\n  width: 134px;\r\n  margin-left: 172px; }\r\n\r\n.jp-video .jp-controls {\r\n  float: left; }\r\n\r\n.jp-controls button {\r\n  display: block;\r\n  float: left;\r\n  overflow: hidden;\r\n  text-indent: -9999px;\r\n  border: none;\r\n  cursor: pointer; }\r\n\r\n.jp-play {\r\n  width: 24px;\r\n  height: 24px; }\r\n\r\n.jp-play {\r\n  background-position: 0 0 ; background-repeat:no-repeat; }\r\n\r\n.jp-play:focus {\r\n  background-position: -24px 0 ; background-repeat:no-repeat; }\r\n\r\n.jp-state-playing .jp-play {\r\n  background-position: 0 -23px ; background-repeat:no-repeat; }\r\n\r\n.jp-state-playing .jp-play:focus {\r\n  background-position: -24px -23px ; background-repeat:no-repeat; }\r\n\r\n.jp-stop, .jp-previous, .jp-next {\r\n  width: 24px;\r\n  height: 24px; }\r\n\r\n.jp-stop {\r\n  background-position: 0 -47px ; background-repeat:no-repeat;\r\n  }\r\n\r\n.jp-stop:focus {\r\n  background-position: -24px -47px ; background-repeat:no-repeat; }\r\n\r\n.jp-previous {\r\n  background-position: 0 -74px ; background-repeat:no-repeat; }\r\n\r\n.jp-previous:focus {\r\n  background-position: -24px -74px ; background-repeat:no-repeat; }\r\n\r\n.jp-next {\r\n  background-position: 0 -98px ; background-repeat:no-repeat; }\r\n\r\n.jp-next:focus {\r\n  background-position: -24px -98px ; background-repeat:no-repeat; }\r\n\r\n/* @end */\r\n/* @group progress bar */\r\n.jp-progress {\r\n  overflow: hidden;\r\n  background-position: 0 -198px; background-repeat: repeat-x; }\r\n\r\n.jp-audio .jp-progress {\r\n  position: absolute;\r\n  top: 12px;\r\n  height: 14px; }\r\n\r\n.jp-audio .jp-type-single .jp-progress {\r\n  left: 64px;\r\n  width: 186px; }\r\n\r\n.jp-audio .jp-type-playlist .jp-progress {\r\n  left: 166px;\r\n  width: 130px; }\r\n\r\n.jp-video .jp-progress {\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 10px; }\r\n\r\n.jp-seek-bar {\r\n  background-position: 0 -222px; background-repeat:  repeat-x;\r\n  width: 0px;\r\n  height: 100%;\r\n  cursor: pointer; }\r\n\r\n.jp-play-bar {\r\n  background-position: 0 -246px; background-repeat:  repeat-x;\r\n  width: 0px;\r\n  height: 100%; }\r\n\r\n/* The seeking class is added/removed inside jPlayer */\r\n.jp-seeking-bg {\r\n  background-position: 0 -226px; background-repeat:  repeat-x; }\r\n\r\n/* @end */\r\n/* @group volume controls */\r\n.jp-state-no-volume .jp-volume-controls {\r\n  display: none; }\r\n\r\n.jp-volume-controls {\r\n  position: absolute;\r\n  top: 11px;\r\n  /* left: 356px; */\r\n  right: 8px;\r\n  width: 94px;\r\n  height: 24px;}\r\n\r\n.jp-audio-stream .jp-volume-controls {\r\n  left: 70px; }\r\n\r\n.jp-video .jp-volume-controls {\r\n  top: 12px;\r\n  left: 50px; }\r\n\r\n.jp-volume-controls button {\r\n  display: block;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  text-indent: -9999px;\r\n  border: none;\r\n  cursor: pointer; }\r\n\r\n.jp-mute,\r\n.jp-volume-max {\r\n  width: 18px;\r\n  height: 18px; }\r\n\r\n.jp-volume-max {\r\n  left: 74px; }\r\n\r\n.jp-mute {\r\n  background-position: -4px -124px ; background-repeat:no-repeat; }\r\n\r\n.jp-mute:focus {\r\n  background-position: -28px -124px ; background-repeat:no-repeat; }\r\n\r\n.jp-state-muted .jp-mute {\r\n  background-position: -4px -148px ; background-repeat:no-repeat; }\r\n\r\n.jp-state-muted .jp-mute:focus {\r\n  background-position: -28px -148px ; background-repeat:no-repeat; }\r\n\r\n.jp-volume-max {\r\n  background-position: -2px -172px ; background-repeat:no-repeat; }\r\n\r\n.jp-volume-max:focus {\r\n  background-position: -26px -172px ; background-repeat:no-repeat; }\r\n\r\n.jp-volume-bar {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  background-position: 0 -270px; background-repeat:  repeat-x;\r\n  top: 2px;\r\n  left: 22px;\r\n  width: 46px;\r\n  height: 11px;\r\n  cursor: pointer; }\r\n\r\n.jp-volume-bar-value {\r\n  background-position: 0 -294px; background-repeat:  repeat-x;\r\n  width: 0px;\r\n  height: 11px; }\r\n\r\n/* @end */\r\n/* @group current time and duration */\r\n.jp-audio .jp-time-holder {\r\n  position: absolute;\r\n  top: 50px; }\r\n\r\n.jp-audio .jp-type-single .jp-time-holder {\r\n  left: 110px;\r\n  width: 186px; }\r\n\r\n.jp-audio .jp-type-playlist .jp-time-holder {\r\n  left: 166px;\r\n  width: 130px; }\r\n\r\n.jp-current-time,\r\n.jp-duration {\r\n  width: 46px;\r\n  height: 16px;\r\n  font-size: 10px !important;\r\n  color: #999;\r\n  text-shadow: 1px 1px 2px #FFF;\r\n  cursor: default;}\r\n\r\n.jp-current-time {\r\n  text-align: right;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 250px;\r\n  top: 10px;}\r\n\r\n.jp-duration {\r\n  text-align: left;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 306px;\r\n  top: 10px;}\r\n\r\n.jp-video .jp-current-time {\r\n  margin-left: 20px; }\r\n\r\n.jp-video .jp-duration {\r\n  margin-right: 20px; }\r\n\r\n/* @end */\r\n/* @group playlist */\r\n.jp-details {\r\n  font-weight: bold;\r\n  text-align: center;\r\n  cursor: default; }\r\n\r\n.jp-details,\r\n.jp-playlist {\r\n  width: 100%;\r\n  background-color: #F3F3F3;\r\n  border-radius:0 0 6px 6px;}\r\n\r\n.jp-type-single .jp-details,\r\n.jp-type-playlist .jp-details {\r\n  border-top: 1px solid #EEE; }\r\n\r\n.jp-details .jp-title {\r\n  margin: 0;\r\n  padding: 5px 10px;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: #555;}\r\n\r\n.jp-playlist ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0 20px;\r\n  font-size: .72em; }\r\n\r\n.jp-playlist li {\r\n  padding: 5px 0 4px 20px;\r\n  border-bottom: 1px solid #eee; }\r\n\r\n.jp-playlist li div {\r\n  display: inline; }\r\n\r\n/* Note that the first-child (IE6) and last-child (IE6/7/8) selectors do not work on IE */\r\ndiv.jp-type-playlist div.jp-playlist li:last-child {\r\n  padding: 5px 0 5px 20px;\r\n  border-bottom: none; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist li.jp-playlist-current {\r\n  list-style-type: square;\r\n  list-style-position: inside;\r\n  padding-left: 7px; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist a {\r\n  color: #333;\r\n  text-decoration: none; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist a:hover {\r\n  color: #0d88c1; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist a.jp-playlist-current {\r\n  color: #0d88c1; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist a.jp-playlist-item-remove {\r\n  float: right;\r\n  display: inline;\r\n  text-align: right;\r\n  margin-right: 10px;\r\n  font-weight: bold;\r\n  color: #666; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist a.jp-playlist-item-remove:hover {\r\n  color: #0d88c1; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist span.jp-free-media {\r\n  float: right;\r\n  display: inline;\r\n  text-align: right;\r\n  margin-right: 10px; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist span.jp-free-media a {\r\n  color: #666; }\r\n\r\ndiv.jp-type-playlist div.jp-playlist span.jp-free-media a:hover {\r\n  color: #0d88c1; }\r\n\r\nspan.jp-artist {\r\n  font-size: .8em;\r\n  color: #666; }\r\n\r\n/* @end */\r\n.jp-video-play {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  /* Important for nested negative margins to work in modern browsers */\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  /* Makes IE9 work with the active area over the whole video area. IE6/7/8 only have the button as active area. */ }\r\n\r\n.jp-video-270p .jp-video-play {\r\n  margin-top: -270px;\r\n  height: 270px; }\r\n\r\n.jp-video-360p .jp-video-play {\r\n  margin-top: -360px;\r\n  height: 360px; }\r\n\r\n.jp-video-full .jp-video-play {\r\n  height: 100%; }\r\n\r\n.jp-video-play-icon {\r\n  position: relative;\r\n  display: block;\r\n  width: 112px;\r\n  height: 100px;\r\n  margin-left: -56px;\r\n  margin-top: -50px;\r\n  left: 50%;\r\n  top: 50%;\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.flat.tony.video.play.png\") 0 0 no-repeat;\r\n  text-indent: -9999px;\r\n  border: none;\r\n  cursor: pointer; }\r\n\r\n.jp-video-play-icon:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.flat.tony.video.play.png\") 0 -100px no-repeat; }\r\n\r\n.jp-jplayer audio,\r\n.jp-jplayer {\r\n  width: 0px;\r\n  height: 0px; }\r\n\r\n.jp-jplayer {\r\n  background-color: #000000; }\r\n\r\n/* @group TOGGLES */\r\n/* The audio toggles are nested inside jp-time-holder */\r\n.jp-toggles {\r\n  padding: 0;\r\n  margin: 0 auto;\r\n  overflow: hidden; }\r\n\r\n.jp-audio .jp-type-single .jp-toggles {\r\n  width: 25px; }\r\n\r\n.jp-audio .jp-type-playlist .jp-toggles {\r\n  width: 55px;\r\n  margin: 0;\r\n  position: absolute;\r\n  left: 325px;\r\n  top: 50px; }\r\n\r\n.jp-video .jp-toggles {\r\n  position: absolute;\r\n  right: 16px;\r\n  margin: 0;\r\n  margin-top: 10px;\r\n  width: 100px; }\r\n\r\n.jp-toggles button {\r\n  display: block;\r\n  float: left;\r\n  width: 25px;\r\n  height: 18px;\r\n  text-indent: -9999px;\r\n  line-height: 100%;\r\n  /* need this for IE6 */\r\n  border: none;\r\n  cursor: pointer; }\r\n\r\n/*.jp-full-screen {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") 0 -310px no-repeat;\r\n  margin-left: 20px; }\r\n\r\n.jp-full-screen:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -30px -310px no-repeat; }\r\n\r\n.jp-state-full-screen .jp-full-screen {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -60px -310px no-repeat; }\r\n\r\n.jp-state-full-screen .jp-full-screen:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -90px -310px no-repeat; }\r\n\r\n.jp-repeat {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") 0 -290px no-repeat; }\r\n\r\n.jp-repeat:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -30px -290px no-repeat; }\r\n\r\n.jp-state-looped .jp-repeat {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -60px -290px no-repeat; }\r\n\r\n.jp-state-looped .jp-repeat:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -90px -290px no-repeat; }\r\n\r\n.jp-shuffle {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") 0 -270px no-repeat;\r\n  margin-left: 5px; }\r\n\r\n.jp-shuffle:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -30px -270px no-repeat; }\r\n\r\n.jp-state-shuffled .jp-shuffle {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -60px -270px no-repeat; }\r\n\r\n.jp-state-shuffled .jp-shuffle:focus {\r\n  background: url(\"../../../src/lib/jqueryPlugin/jPlayer/dist/skin/flat.tony/image/jplayer.blue.monday.jpg\") -90px -270px no-repeat; }*/\r\n\r\n/* @end */\r\n/* @group NO SOLUTION error feedback */\r\n.jp-no-solution {\r\n  padding: 5px;\r\n  font-size: .8em;\r\n  background-color: #F7F7F7;\r\n  border: 2px solid #009be3;\r\n  color: #000;\r\n  display: none; }\r\n\r\n.jp-no-solution a {\r\n  color: #000; }\r\n\r\n.jp-no-solution span {\r\n  font-size: 1em;\r\n  display: block;\r\n  text-align: center;\r\n  font-weight: bold; }\r\n\r\n/* @end */\r\n\r\n/* add */\r\n.jp-space {\r\n  width: 4px;\r\n  height: 24px;\r\n  font-size: 0;\r\n  float: left;\r\n  background-position: -59px top ; background-repeat:no-repeat;\r\n}\r\n\r\n.jp-time-space {\r\n  width: 10px;\r\n  height: 16px;\r\n  text-align: center;\r\n  line-height: 17px;\r\n  position: absolute;\r\n  left: 296px;\r\n  top: 10px;\r\n  color: #999;\r\n  text-shadow: 1px 1px 2px #FFF;\r\n  font-size: 10px !important;\r\n}\r\n');
