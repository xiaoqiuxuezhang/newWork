define('components/detailPanel/detailPanel.tpl',['hdbr'], function(Handlebars) {
			return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h3>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>";
},"3":function(container,depth0,helpers,partials,data) {
    return "detail-show";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <li class=\""
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.beyondHide || (depth0 != null ? depth0.beyondHide : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"beyondHide","hash":{},"data":data}) : helper)))
    + "\" style=\""
    + alias4((helpers.liStyle || (depth0 && depth0.liStyle) || alias2).call(alias1,(depth0 != null ? depth0.itemColumn : depth0),{"name":"liStyle","hash":{},"data":data}))
    + "\">\r\n            <label style=\"width:"
    + alias4(alias5((depths[1] != null ? depths[1].labelWidth : depths[1]), depth0))
    + ";\" class=\""
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].colon : depths[1]),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n                <div class=\"labelText\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div> \r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].colon : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </label>\r\n            <div class=\"value\" style=\"margin-left:"
    + alias4(alias5((depths[1] != null ? depths[1].labelWidth : depths[1]), depth0))
    + ";\">\r\n                <span class=\""
    + alias4((helpers.ifEvent || (depth0 && depth0.ifEvent) || alias2).call(alias1,(data && data.index),{"name":"ifEvent","hash":{},"data":data}))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\r\n                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.customHTML : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " labelRight";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "<div class=\"colon\">"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].colon : depths[1]), depth0))
    + "</div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"custom\">"
    + ((stack1 = ((helper = (helper = helpers.customHTML || (depth0 != null ? depth0.customHTML : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"customHTML","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"sn-beyondHide "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.status : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"detail-icon\"></div>\r\n    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "detail-buttonHide";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<div class=\"sn-detailPanel "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\r\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <ul class=\"detailList "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.status : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n";
  stack1 = ((helper = (helper = helpers.ifBeyondHide || (depth0 != null ? depth0.ifBeyondHide : depth0)) != null ? helper : alias2),(options={"name":"ifBeyondHide","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.ifBeyondHide) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true,"useDepths":true})
		});

define('lib/requirejs/css.min!components/detailPanel/detailPanel',[],function(){});
/* 
* 组件-detailPanel
*/
define('detailPanel',[
    'jquery',
    'eventTarget',
    'hdbr',
    'components/detailPanel/detailPanel.tpl',
    'lib/requirejs/css.min!components/detailPanel/detailPanel.css'
],function ($, eventTarget, hdbr,template){
    var VERSION = '1.1.7';
    var objClass = function(options){
        //判断el的异常值：el不存在、为空string、dom原生对象
        if(options.el){
            if(options.el instanceof jQuery&&options.el.length>0){
                this.$el = options.el;
            }else if(isDOM(options.el)){
                this.$el = $(options.el);
            }else if (typeof(options.el) == 'string'&&$(options.el).length>0) {
                this.$el = $(options.el);
            }
        }else{
            this.$el = $("<div></div>")             
        }
        //默认配置
        var init = {
            column:'1', //组件的总列数
            labelWidth:'30%', //label的宽度
            colon:'：', //可选项在label后追加一个"："
            errValue:'--',
            status:false,//展开状态，默认不展开
            data:{}
        }
        this.options = $.extend({},init,options);
        this.options.errValue = this.options.errValue.replace(/\s/g , '&nbsp;') || '&nbsp;';//替换空格
        eventTarget.call(this);
        render.call(this);
        eventInit.call(this);
    };

    $.extend(objClass.prototype,eventTarget.prototype,{
        version:VERSION
    });

    var render = function(){
        var data = this.options.data,
            items = this.options.items,
            length = this.options.items.length,
            column = this.options.column,
            errValue = this.options.errValue,
            lineWidth = 0,//for循环中记录当前行的总宽度。
            itemLine = 1,//记录item的行数。
            beyondHide = this.options.beyondHide,
            hideItems = 0;//记录隐藏的item的个数
        for(var i = 0,keys=[],key;i<length;i++){
             //计算itemColumn对beyondHide的影响
            var itemColumn = (items[i].itemColumn || 1); //当前item的column
            lineWidth += itemColumn;
            //当当前行宽度大于column时，重新计算。
            if (lineWidth>column){
                lineWidth = itemColumn;
                itemLine ++;
            }
            // 如果当前行大于需要隐藏的行数，则给当前item添加beyondHide属性
            if (itemLine>beyondHide){
                items[i].beyondHide = 'beyondHide';
                hideItems ++; //记录需要隐藏的item个数
            }
            key = this.options.items[i].key;
            keys.push(key);
            //当data中的value为 object 或者 items中存在render方法时执行render方法
            if(typeof(data[key])=='object' || this.options.items[i].render){
                itemsRender.call(this,i,data[key]);
            }else{
                this.options.items[i].key = data[key]|| errValue;
            }
        }
        hdbr.registerHelper("ifBeyondHide", function(options) {
            if (hideItems>0) {
                return options.fn(this);
            }
        });
        hdbr.registerHelper("liStyle", function(itemColumn) {
            itemColumn = (itemColumn || 1)<=column?(itemColumn || 1):column;//默认为1，最大为column
            return 'width:'+100/column*itemColumn+'%;'
        });
        hdbr.registerHelper("ifEvent", function(index) {
            var str = '';
            if (items[index].click) {
                str = str+' canClick';
            }
            if (items[index].mouseover) {
                str = str+' canMouse';
            }
            return str;
        });
        this.$el.html(template(this.options));
        for(var i = 0;i<length;i++){
            this.options.items[i].key = keys[i];
            var itemObj = this.options.items[i],
                reg = /^click+[\s]/ig,
                _self = this;
            for(var n in itemObj){
                if(n.match(reg)){
                    var selector = n.split(' ')[1];
                    _self.$el.find('li:eq('+i+') '+selector).attr({'data-id':n})
                    .off('click').on('click',function(e){
                        var selectorEvent = $(this).data('id');
                        var index = $(this).closest('li').index();
                        var itemObj = (_self.options.items)[index];
                        itemObj[selectorEvent](e,data[items[index].key]);
                    })
                }
            }
        }
        setTimeout($.proxy(function(){
            this.trigger('loadSuccess',data);
        },this),200)
    }
    var eventInit = function(){
        var _self = this;
        this.$el.on('click','.sn-detailPanel li .canClick',function(e){
            itemsClick.call(_self,e);
            _self.trigger('itemsClick',e);
        });
        this.$el.on('mouseover','.sn-detailPanel li .canMouse',function(e){
            itemsMouseover.call(_self,e);
            _self.trigger('itemsMouseover',e);
        });
        //给更多按钮绑定事件。
        this.$el.on('click','.sn-detailPanel .sn-beyondHide', function(e) {
            $(this).toggleClass('detail-buttonHide');
            _self.$el.find('.detailList').toggleClass('detail-show');
            _self.options.status = $(this).hasClass('detail-buttonHide');//记录当前表单展开状态。
        });
    }
    var itemsClick = function(e){
        var target = e.currentTarget||e.target,
            data = this.options.data,
            items = this.options.items;
        var index = $(target).closest('li').index();
        var itemData = data[items[index].key];
        items[index].click(e,itemData);
    }
    var itemsMouseover = function(e){
        var target = e.currentTarget||e.target,
            data = this.options.data,
            items = this.options.items;
        var index = $(target).closest('li').index();
        var itemData = data[items[index].key];
        items[index].mouseover(e,itemData);
    }

    var itemsRender = function(index,data){
        var items = this.options.items;
        if(items[index].render){
            this.options.items[index].key = items[index].render(data) || this.options.errValue;
        }else{
            this.options.items[index].key = this.options.errValue;
        }
    }
    // 注册loadSuccess事件
    var loadSuccess = function(data){}
    // 扩展方法
    $.extend(objClass.prototype,{
        reload:function(data){
            this.options.data = data;
            render.call(this);
        }
    })
    //解决ie下console.log()报错问题
    window.console = window.console || (function(){
        var c = {};
        c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
        return c;
    })();
    // 判断是否为原生DOM
    var isDOM = function(obj){
        return obj.tagName ?true:false
    } 
    return objClass;
})
;

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.sn-detailPanel {\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    display: table;\r\n    font-size: 13px;\r\n    position: relative;\r\n}\r\n\r\n.sn-detailPanel h3 {\r\n    margin: 0;\r\n    padding: 5px 0;\r\n}\r\n\r\n.sn-detailPanel .detailList {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    overflow: hidden;\r\n    font-size: 0;\r\n}\r\n\r\n.sn-detailPanel .detailList li {\r\n    overflow: hidden;\r\n    margin: 0;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    font-size: 13px;\r\n    position: relative;\r\n    padding-bottom: 5px;\r\n}\r\n.sn-detailPanel .detailList li .colon {\r\n    font-size: 13px;\r\n    text-align: center;\r\n    line-height: 15px;\r\n    width: 0px;\r\n    display: inline-block;\r\n    text-indent:2px;\r\n    vertical-align: middle;\r\n}\r\n.sn-detailPanel .detailList li label {\r\n    display: block;\r\n    text-align: right;\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    font-size: 0px;\r\n}\r\n\r\n.sn-detailPanel .detailList li .labelRight {\r\n    padding-right:12px !important;\r\n}\r\n.sn-detailPanel .detailList li .labelText {\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    max-height: 30px;\r\n}\r\n\r\n.sn-detailPanel .detailList li .value {\r\n    padding-left: 5px;\r\n    margin-top: -2px;\r\n    min-height: 30px;\r\n    box-sizing: border-box;\r\n    line-height: 19px;\r\n}\r\n\r\n.sn-detailPanel .detailList li a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.sn-detailPanel .detailList li .canClick {\r\n    cursor: pointer;\r\n}\r\n\r\n.sn-detailPanel .detailList li .custom a {\r\n    margin-left: 10px;\r\n}\r\n\r\n.sn-beyondHide+.detailList {\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.sn-detailPanel .detail-show li.beyondHide {\r\n    display: inline-block;\r\n}\r\n\r\n.detailList li.beyondHide {\r\n    display: none;\r\n}\r\n\r\n.sn-detailPanel .sn-beyondHide {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    right: 10px;\r\n}\r\n\r\n.sn-beyondHide .detail-icon {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    border: 1px solid #d0d6d9;\r\n    border-radius: 1px;\r\n    background-color: #fff;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-image: url(\'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE9JREFUeNpi6Fm45tbDJ/+RwI37j/qXrGcAijbNXAqXA4rWT19878lzBiAHLgcXBQoyAjEDA8PtR093nzj/+/cfPwcLRWkJoAgDHewACDAAxKeRl3CcNYgAAAAASUVORK5CYII=\');\r\n}\r\n\r\n.sn-beyondHide .detail-icon:hover {\r\n    border: 1px solid #0088d1;\r\n}\r\n\r\n.sn-detailPanel .detail-buttonHide .detail-icon {\r\n    background-image: url(\'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGBJREFUeNpi/P//PwMDw+1HT/ecOPf7z19fewtFaQmgCBNEdMX2/S4WRm6Wxos377n/9AVQkOHWwyfNM5cAyf9gcP3eo4bpi+49ec7Qu3A1XBQCbtx/NGHJWkY62AEQYACQ9H9retQvRwAAAABJRU5ErkJggg==\');\r\n}');
