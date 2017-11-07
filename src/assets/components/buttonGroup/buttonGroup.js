define('components/buttonGroup/buttonGroup.tpl',['hdbr'], function(Handlebars) {
			return Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<li class=\""
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + " "
    + alias4((helpers.ifDirection || (depth0 && depth0.ifDirection) || alias2).call(alias1,(depths[1] != null ? depths[1].direction : depths[1]),{"name":"ifDirection","hash":{},"data":data}))
    + "\">\r\n			<button type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\""
    + alias4((helpers.ifDisabledtrue || (depth0 && depth0.ifDisabledtrue) || alias2).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"ifDisabledtrue","hash":{},"data":data}))
    + " class=\"t-btnGroup "
    + alias4((helpers.ifSize || (depth0 && depth0.ifSize) || alias2).call(alias1,(depth0 != null ? depth0.size : depth0),{"name":"ifSize","hash":{},"data":data}))
    + " "
    + alias4((helpers.ifType || (depth0 && depth0.ifType) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"ifType","hash":{},"data":data}))
    + " "
    + alias4((helpers.ifDisabled || (depth0 && depth0.ifDisabled) || alias2).call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"ifDisabled","hash":{},"data":data}))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</button>\r\n		</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\""
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\" >\r\n	<ul class=\"sn-buttonGroup-list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n</div>\r\n";
},"useData":true,"useDepths":true})
		});

define('lib/requirejs/css.min!components/buttonGroup/buttonGroup',[],function(){});
/**
 * 组件-buttonGroup
 */
define('buttonGroup',[
    'jquery',
    'eventTarget', 'hdbr',
    'components/buttonGroup/buttonGroup.tpl',
    'lib/requirejs/css.min!components/buttonGroup/buttonGroup.css'
], function ($, eventTarget, hdbr, template) {
    var VERSION = '1.1.1';
    var objClass = function (config) {
        if (config.el) {
            if (config.el instanceof jQuery && config.el.length > 0) {
                this.$el = config.el;
            } else if (isDOM(config.el)) {
                this.$el = $(config.el);
            } else if (typeof (config.el) == 'string' && $(config.el).length > 0) {
                this.$el = $(config.el);
            }
        } else {
            this.$el = $("<div></div>")
        }

        this.options = config;
        eventTarget.call(this);
        render.call(this);
        //自定义事件    
        this.$el.on('click', 'button', $.proxy(function (e) {
            btnClick.call(this, e);
            this.trigger('btnClick', e);
        }, this));
    };

    $.extend(objClass.prototype, eventTarget.prototype, {
        version: VERSION
    });//扩展方法

    //渲染按钮
    var render = function () {
        // 将direction转换成对应的css类  .t-btnGroup-h /.t-btnGroup-v
        hdbr.registerHelper("ifDirection", function (value) {
            if (value && value == "vertical") {
                return 't-btnGroup-v';
            } else if (value == "horizontal" || !value) {
                return "t-btnGroup-h";
            } else {
                return "t-btnGroup-h";
            }
        });
        // 将type转换成对应的css类  .t-btnGroup-blue/.t-btnGroup-green
        hdbr.registerHelper("ifType", function (value) {
            if (!value || value == "0") {
                return '';
            } else if (value == "1") {
                return 't-btnGroup-blue';
            } else if (value == "2") {
                return 't-btnGroup-green';
            }
        });
        // 将size转换成对应的css类  从小到大依次是：xs sm md lg 默认md
        hdbr.registerHelper("ifSize", function (value) {
            if (!value || value == "md") {
                return '';
            } else if (value == "lg") {
                return 't-btnGroup-lg';
            } else if (value == "sm") {
                return 't-btnGroup-sm';
            }
        });
        // 判断ifDisabled禁启用状态
        hdbr.registerHelper("ifDisabled", function (value) {
            if (value == "0") {
                return "t-btnGroup-disabled";
            }
        });
        // 判断ifDisabled禁启用状态
        hdbr.registerHelper("ifDisabledtrue", function (value) {
            if (value == "0") {
                return "disabled";
            }
        });

        this.$el.html(template(this.options));
    };
    var btnClick = function (e) {
        var target = e.target || e.currentTarget,
            item = this.options.items,
            index = this.$el.find('.sn-buttonGroup-list li button').index(target);
        if (item[index].click) {
            item[index].click(e);
        } else {
            console.log("请在items中配置点击事件。");
        }
    }
    // 判断是否为原生DOM
    var isDOM = function (obj) {
        return obj.tagName ? true : false
    }
    //解决ie下console.log()报错问题
    window.console = window.console || (function () {
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
        return c;
    })();

    return objClass
});


(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.buttonGroup-list,\r\n.buttonGroup-list > li,\r\n.buttonGroup-list > li > button{\r\n\tlist-style:none;\r\n\tpadding:0;\r\n\tmargin:0;\r\n}\r\n\r\n  /* // 按钮 */\r\n.sn-buttonGroup-list> li > .t-btnGroup {\r\n   padding: 6px 14px;\r\n   margin-right: 12px;\r\n   font-size: 12px;\r\n   line-height: 1;\r\n   border-radius: 3px;\r\n   border: 1px solid #DDD;\r\n   background: #fff;\r\n   text-decoration: none;\r\n   cursor: pointer;\r\n   position: relative;\r\n   white-space: nowrap;\r\n   outline: none;\r\n   color: #333;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup:hover {\r\n   background: #F9F9F9;\r\n   border-color: #CCC;\r\n   color: #333;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup:active {\r\n   background: #EEE;\r\n   border-color: #CCC;\r\n   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;\r\n}\r\n\r\n\r\n/* // 蓝色按钮 */\r\n.sn-buttonGroup-list> li > .t-btnGroup-blue {\r\n   background: #339dd9;\r\n   border-color: #2690cc;\r\n   color: #fff;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup-blue:hover {\r\n   background: #48a7dd;\r\n   border-color: #339dd9;\r\n   color: #fff;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup-blue:active {\r\n   background: #2690cc;\r\n   border-color: #2281b7;\r\n   color: #fff;\r\n   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;\r\n}\r\n\r\n\r\n/* // 绿色按钮 */\r\n.sn-buttonGroup-list > li > .t-btnGroup-green {\r\n   background: #51B148;\r\n   border-color: #499f41;\r\n   color: #fff;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup-green:hover {\r\n   background: #60bb58;\r\n   border-color: #51B148;\r\n   color: #fff;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup-green:active {\r\n   background: #499f41;\r\n   border-color: #408d39;\r\n   color: #fff;\r\n}\r\n\r\n\r\n/* //禁用按钮 */\r\n.sn-buttonGroup-list> li > .t-btnGroup-disabled {\r\n   background: #F9F9F9;\r\n   border-color: #E6E6E6;\r\n   color: #AAA;\r\n   cursor: not-allowed;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup-disabled:hover {\r\n   background: #F9F9F9;\r\n   border-color: #E6E6E6;\r\n   color: #AAA;\r\n}\r\n\r\n.sn-buttonGroup-list> li > .t-btnGroup-disabled:active {\r\n   box-shadow: none;\r\n}\r\n/* 横向按钮 */\r\n.sn-buttonGroup-list > .t-btnGroup-h {\r\n\tdisplay: inline-block;\r\n}\r\n/* 纵向按钮 */\r\n.sn-buttonGroup-list> li > .t-btnGroup-v {\r\n\tpadding: 8px 0;\r\n}\r\n\r\n/* // 尺寸 */\r\n.sn-buttonGroup-list > li > .t-btnGroup-sm {\r\n   padding: 4px 5px;\r\n}\r\n\r\n.sn-buttonGroup-list > li > .t-btnGroup-lg {\r\n   font-size: 14px;\r\n   padding: 12px 30px;\r\n   padding: 13px 30px 11px 30px\\9;\r\n}\r\n/*\r\n.buttonGroup-list > li > .t-btnGroup-link {\r\n   padding: 0px;\r\n   border: none;\r\n   text-decoration: none;\r\n   cursor: pointer;\r\n   position: relative;\r\n   white-space: nowrap;\r\n   outline: none;\r\n   font-size: 12px;\r\n   color: #347AC7;\r\n}   \r\n\r\n*/\r\n ');
