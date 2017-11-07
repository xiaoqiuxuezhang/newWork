define('components/counter/counter.tpl',['hdbr'], function(Handlebars) {
			return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "sn-counter-double";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<label style=\"width:"
    + container.escapeExpression(((helper = (helper = helpers.labelWidth || (depth0 != null ? depth0.labelWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelWidth","hash":{},"data":data}) : helper)))
    + ";\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return " style=\"margin-left:"
    + container.escapeExpression(((helper = (helper = helpers.labelWidth || (depth0 != null ? depth0.labelWidth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelWidth","hash":{},"data":data}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "        <div class=\"sn-separator\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dbl : depth0)) != null ? stack1.separator : stack1), depth0))
    + "</div>\r\n        <div class=\"sn-counter-son sn-counter-two\"  style=\"width:"
    + alias2(((helper = (helper = helpers.counterSonWidth || (depth0 != null ? depth0.counterSonWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"counterSonWidth","hash":{},"data":data}) : helper)))
    + ";\">\r\n            <div class=\"sn-counter-input\">\r\n                <input type=\"number\" name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dbl : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" step=\""
    + alias2(((helper = (helper = helpers.step || (depth0 != null ? depth0.step : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"step","hash":{},"data":data}) : helper)))
    + "\" min=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dbl : depth0)) != null ? stack1.min : stack1), depth0))
    + "\" max=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dbl : depth0)) != null ? stack1.max : stack1), depth0))
    + "\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dbl : depth0)) != null ? stack1.value : stack1), depth0))
    + "\" class=\"sn-counterContent\"/>\r\n            </div>\r\n            <div class=\"sn-btns\">\r\n                <div class=\"sn-btn sn-addBtn\"></div>\r\n                <div class=\"sn-btn sn-minusBtn\"></div>\r\n            </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"sn-counter "
    + alias3((helpers.ifSize || (depth0 && depth0.ifSize) || alias2).call(alias1,(depth0 != null ? depth0.size : depth0),{"name":"ifSize","hash":{},"data":data}))
    + " "
    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dbl : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"sn-counter-sonBox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"sn-counter-son sn-counter-one\"  style=\"width:"
    + alias3(((helper = (helper = helpers.counterSonWidth || (depth0 != null ? depth0.counterSonWidth : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"counterSonWidth","hash":{},"data":data}) : helper)))
    + ";\">\r\n            <div class=\"sn-counter-input\">\r\n                <input type=\"number\" name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" step=\""
    + alias3(((helper = (helper = helpers.step || (depth0 != null ? depth0.step : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"step","hash":{},"data":data}) : helper)))
    + "\" min=\""
    + alias3(((helper = (helper = helpers.min || (depth0 != null ? depth0.min : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"min","hash":{},"data":data}) : helper)))
    + "\" max=\""
    + alias3(((helper = (helper = helpers.max || (depth0 != null ? depth0.max : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"max","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" class=\"sn-counterContent\" />\r\n            </div>\r\n            <div class=\"sn-btns\">\r\n                <div class=\"sn-btn sn-addBtn\"></div>\r\n                <div class=\"sn-btn sn-minusBtn\"></div>\r\n            </div>\r\n        </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dbl : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true})
		});

define('lib/requirejs/css.min!components/counter/counter',[],function(){});
/**
 * 组件-counter
 */
define('counter',['jquery', 'eventTarget','hdbr',
    'components/counter/counter.tpl',
    'lib/requirejs/css.min!components/counter/counter.css'],
    function ($, eventTarget, hdbr, template) {
        var VERSION = '1.1.2';
        var objClass = function (options) {
            //判断el的异常值：el不存在、为空string、dom原生对象
            if (options.el) {
                if (options.el instanceof jQuery && options.el.length > 0) {
                    this.$el = options.el;
                } else if (isDOM(options.el)) {
                    this.$el = $(options.el);
                } else if (typeof (options.el) == 'string' && $(options.el).length > 0) {
                    this.$el = $(options.el);
                }
            } else {
                this.$el = $("<div></div>")
            }
            //默认配置
            var init = {
                step: 1,//输入字段的合法数字间隔
                value: 0,
                rangeCounter: false, //设置两个步进器
                labelWidth: '30%',
                size:'md', //lg表示大按钮，sm表示小按钮，默认md中等大小。
                separator: '-',//分隔符
                dbl:{}
            }
            //定义取值范围函数取值范围的方法;
            this.extent = extent = function(value, min, max) {
                if(value <= min && (min || min == 0)){value = min;}
                if(value >= max && (max || max == 0)){value = max;}
                return value;
            }
            //定义禁用加减号按钮的方法
            var BtnDisabled = function(){
                that.$el.find('.sn-btn').removeClass("sn-btn-disabled");
                if((that.valueOne >= that.maxOne) && (that.maxOne || that.maxOne == 0)){
                    that.$el.find('.sn-counter-one .sn-addBtn').addClass("sn-btn-disabled");
                }
                if(that.valueOne <= that.minOne){
                    that.$el.find('.sn-counter-one .sn-minusBtn').addClass("sn-btn-disabled");
                }
                if(that.valueTwo >= that.maxTwo){
                    that.$el.find('.sn-counter-two .sn-addBtn').addClass("sn-btn-disabled");
                }
                if(that.valueTwo <= that.minTwo || that.valueTwo <= that.valueOne){
                    that.$el.find('.sn-counter-two .sn-minusBtn').addClass("sn-btn-disabled");
                }
            }
            //计算separator实际长度，中午字符为2，英文为1
            String.prototype.gblen = function() {
                var len = 0;
                for (var i=0; i<this.length; i++) {
                    if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
                         len += 2;
                     } else {
                         len ++;
                     }
                 }
                return len;
            }
            options = $.extend({},init, options,{
                step : parseFloat(options.step || init.step)
            });
            // 处理minOne
            if(options.min || options.min == 0){
                this.minOne = options.min = parseFloat(options.min)
                if(options.rangeCounter){this.minTwo = options.dbl.min = options.min}
            }
            // 处理maxTwo
            if(options.max || options.max == 0){
                this.maxOne = options.max = parseFloat(options.max);
                if(options.min >= options.max){
                    console.log('请检查min和max配置是否错误')
                    return;
                }
            }
            // 处理valueOne
            this.valueOne = options.value = extent(options.value, options.min, options.max);
            this.stepOne = options.step;
            if (options.rangeCounter) {
                options.dbl.separator = options.rangeCounter.separator || options.separator;
                options.dbl.name = options.rangeCounter.name;
                options.dbl.step = parseFloat(options.rangeCounter.step) || options.step;
                if(options.rangeCounter.min || options.rangeCounter.min == 0){
                    options.dbl.min = parseFloat(options.rangeCounter.min);
                    if(options.min || options.min == 0){
                        options.dbl.min = Math.max(options.rangeCounter.min, options.min)
                    }
                    this.minTwo = options.dbl.min
                }
                if((options.rangeCounter.max || options.rangeCounter.max == 0) && options.max){
                    this.maxTwo = options.dbl.max = Math.max(parseFloat(options.rangeCounter.max), options.max)
                    if(options.dbl.min >= options.dbl.max){
                        console.log('请检查min和max配置是否错误')
                        return;
                    }
                }
                if(options.rangeCounter.value || options.rangeCounter.value == 0){
                    options.dbl.value = extent(parseFloat(options.rangeCounter.value), options.dbl.min , options.dbl.max);
                    if(options.value || options.value == 0){
                        options.dbl.value = Math.max(options.dbl.value , options.value)
                    }else{
                        options.value = options.dbl.value;
                    }
                    this.valueTwo = options.dbl.value ;
                }else{
                    this.valueTwo = options.dbl.value = Math.max(options.value,init.value)
                }
                this.stepTwo = options.dbl.step;
                // 根据separator的长度，设置单个步进器的宽度。
                var  separatorLength = options.dbl.separator.gblen();
                if(separatorLength <=2 ){options.counterSonWidth = '44%'}
                else if(separatorLength <=4){options.counterSonWidth = '41%'}
                else if(separatorLength <=6){options.counterSonWidth = '39%'}
                else{options.counterSonWidth = '37%'}
            }else{
                options.dbl = false;
            }
            this.options = options;
            var that = this;
            render.call(this);
            BtnDisabled();//判断按钮是否禁用

            this.$counterOne = this.$el.find('.sn-counter-one .sn-counterContent');
            if(options.dbl){this.$counterTwo = this.$el.find('.sn-counter-two .sn-counterContent');}
            //设置步进器一的值，设置前会影响步进器二
            this.changeOne = function(){
                if(this.valueOne>=this.valueTwo){
                    this.valueTwo = this.valueOne
                    this.$counterTwo.val(this.valueTwo);
                }
                this.$counterOne.val(this.valueOne);
                BtnDisabled();//判断按钮是否禁用
            }
            // 设置步进器二的值，设置前受步进器一的影响
            this.changeTwo = function(){
                if(this.valueTwo < this.valueOne){
                    this.valueTwo = this.valueOne
                }
                this.$counterTwo.val(this.valueTwo);
                BtnDisabled();//判断按钮是否禁用
            }
            eventTarget.call(this);
            eventInt.call(this)
            // 手动输入数值时做判断
            this.$counterOne.blur(function(){
                that.valueOne = extent(parseFloat(that.$counterOne.val()),that.minOne,that.maxOne);
                if(that.options.dbl){that.valueTwo = extent(parseFloat(that.$counterTwo.val()),that.minTwo,that.maxTwo);}
                that.changeOne();
            })
            if(that.options.dbl){
                this.$counterTwo.blur(function(){
                    that.valueOne = extent(parseFloat(that.$counterOne.val()),that.minOne,that.maxOne);
                    that.valueTwo = extent(parseFloat(that.$counterTwo.val()),that.minTwo,that.maxTwo);
                    that.changeTwo();
                })
            }
        };
        $.extend(objClass.prototype, eventTarget.prototype, {
            version: VERSION
        });
        var render = function () {
            // 将size转换成对应的css类  从小到大依次是：sm md lg 默认md
            hdbr.registerHelper("ifSize", function (value) {
                if (!value || value == "md") {
                    return 'sn-counter-size-md';
                } else if (value == "lg") {
                    return 'sn-counter-size-lg';
                } else if (value == "sm") {
                    return 'sn-counter-size-sm';
                }
            });
            //      var template = hdb.compile(tpl);
            this.$el.html(template(this.options));
        };
        //自定义事件
        var eventInt = function () {
            var setTime,that = this;
            // 鼠标长按时，连续操作数值
            var timeout = function (i, fn) {
                setTime = setTimeout(function () {
                    fn.call(that);
                    // that.trigger("'" + fn + "'");
                    i < 6 && i++;
                    timeout(i, fn);
                }, 420 - i * 50)
            }
            //增加第一个步进器数值
            this.$el.on('mousedown', '.sn-counter-one .sn-addBtn',function () {
                var i = 0;
                addNumberOne.call(that);
                // that.trigger('addNumberOne');
                timeout(i, addNumberOne)
            });
            //减少第一个步进器数值
            this.$el.on('mousedown', '.sn-counter-one .sn-minusBtn',function () {
                var i = 0;
                minusNumberOne.call(that);
                // that.trigger('minusNumberOne');
                timeout(i, minusNumberOne)
            });
            //增加第二个步进器数值
            this.$el.on('mousedown','.sn-counter-two .sn-addBtn',function () {
                var i = 0;
                addNumberTwo.call(that);
                // that.trigger('addNumberTwo');
                timeout(i, addNumberTwo)
            });
            //减少第二个步进器数值
            this.$el.on('mousedown', '.sn-counter-two .sn-minusBtn',function () {
                var i = 0;
                minusNumberTwo.call(that);
                // that.trigger('minusNumberOne');
                timeout(i, minusNumberTwo)
            });
            this.$el.on('mouseup', '.sn-btn',function () {
                clearTimeout(setTime);
            })
            this.$el.on('focus','.sn-counterContent', function () {
                that.trigger('focus');
            });
        }
        var addNumberOne = function () {
            this.valueOne = extent(parseFloat(this.$counterOne.val()),this.minOne,this.maxOne);
            if(this.options.dbl){this.valueTwo = extent(parseFloat(this.$counterTwo.val()),this.minTwo,this.maxTwo);}
            if(this.maxOne || this.maxOne == 0){
                if(this.valueOne < (this.maxOne - this.stepOne)){
                    this.valueOne += this.stepOne;
                }else{
                    this.valueOne = this.maxOne;
                }
            }else{
                this.valueOne += this.stepOne;
            }
            this.changeOne();
        };
        var minusNumberOne = function () {
            this.valueOne = extent(parseFloat(this.$counterOne.val()),this.minOne,this.maxOne);
            if(this.options.dbl){this.valueTwo = extent(parseFloat(this.$counterTwo.val()),this.minTwo,this.maxTwo);}
            this.valueOne -= this.stepOne;
            if(this.valueOne <= this.minOne){
                this.valueOne = this.minOne;
            }
            this.changeOne();
        };
        var addNumberTwo = function () {
            this.valueOne = extent(parseFloat(this.$counterOne.val()),this.minOne,this.maxOne);
            this.valueTwo = extent(parseFloat(this.$counterTwo.val()),this.minTwo,this.maxTwo);
            if(this.maxTwo || this.maxTwo == 0){
                if(this.valueTwo < (this.maxTwo - this.stepTwo)){
                    this.valueTwo += this.stepTwo;
                }else{
                    this.valueTwo = this.maxTwo;
                }
            }else{
                this.valueTwo += this.stepTwo;
            }
            this.changeTwo();
        };
        var minusNumberTwo = function () {
            this.valueOne = extent(parseFloat(this.$counterOne.val()),this.minOne,this.maxOne);
            this.valueTwo = extent(parseFloat(this.$counterTwo.val()),this.minTwo,this.maxTwo);
            this.valueTwo -= this.stepTwo;
            if(this.valueTwo <= this.minTwo){
                this.valueTwo = this.minTwo;
            }
            this.changeTwo();
        };
        $.extend(objClass.prototype, {
            get: function () {
                var data = {};
                if(this.options.dbl){
                    data.num1 = parseFloat(this.$counterOne.val())
                    data.num2 = parseFloat(this.$counterTwo.val())
                    data.range = data.num2 - data.num1
                }else{
                    data = parseFloat(this.$counterOne.val())
                }
                return data;
            },
            set: function (num1,num2) {
                if(this.options.dbl){
                    this.valueOne = this.extent(num1,this.minOne,this.maxOne);
                    this.valueTwo = this.extent(num2 || this.valueTwo,this.minTwo,this.maxTwo);
                    this.changeOne();
                    this.changeTwo();
                }else{
                    this.valueOne = this.extent(num1,this.minOne,this.maxOne);
                    this.changeOne();
                }
            }
        })
        //解决ie下console.log()报错问题
        window.console = window.console || (function () {
            var c = {};
            c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
            return c;
        })();
        // 判断是否为原生DOM
        var isDOM = function (obj) {
            return obj.tagName ? true : false
        }
        return objClass;
    });

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.sn-counter,\r\n.sn-counter .sn-btn,\r\n.sn-counter-son .sn-counterContent{\r\n    padding:0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n}\r\n.sn-counter-son .sn-btn:focus{\r\n    outline:none;\r\n}\r\n.sn-counter{\r\n    font-size: 13px;\r\n    position: relative;\r\n}\r\n.sn-counter-size-sm .sn-btns,\r\n.sn-counter-size-sm .sn-counterContent{\r\n    height: 24px;\r\n}\r\n.sn-counter-size-sm .sn-separator,\r\n.sn-counter-size-sm > label,\r\n.sn-counter-size-sm .sn-counterContent{\r\n    line-height: 24px;\r\n}\r\n.sn-counter-size-sm .sn-btns .sn-btn{\r\n    height: 11px;\r\n}\r\n.sn-counter-size-md .sn-btns,\r\n.sn-counter-size-md .sn-counterContent{\r\n    height: 30px;\r\n}\r\n.sn-counter-size-md .sn-separator,\r\n.sn-counter-size-md > label,\r\n.sn-counter-size-md .sn-counterContent{\r\n    line-height: 30px;\r\n}\r\n.sn-counter-size-md .sn-btns .sn-btn{\r\n    height: 14px;\r\n}\r\n.sn-counter-size-lg .sn-btns,\r\n.sn-counter-size-lg .sn-counterContent{\r\n    height: 36px;\r\n}\r\n.sn-counter-size-lg .sn-separator,\r\n.sn-counter-size-lg > label,\r\n.sn-counter-size-lg .sn-counterContent{\r\n    line-height: 36px;\r\n}\r\n.sn-counter-size-lg .sn-btns .sn-btn{\r\n    height: 17px;\r\n}\r\n.sn-separator{\r\n    text-align: center;\r\n    width: 100%;\r\n    position: absolute;\r\n}\r\n.sn-counter-son{\r\n    position: relative;\r\n    background-color: #fff;\r\n    z-index: 99;\r\n    width: 100%;\r\n}\r\n.sn-counter-one{\r\n    float: left;\r\n    max-width: 70px;\r\n}\r\n.sn-counter-two{\r\n    float: right;\r\n}\r\n.sn-counter-sonBox{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.sn-counter-son .sn-btns{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n.sn-counter label{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: block;\r\n    margin-right: 3px;\r\n    text-align: right;\r\n}\r\n.sn-counter .sn-btn{\r\n    width: 17px;\r\n    border-radius: 2px;\r\n    border: 1px solid #a7a6ab;\r\n    overflow: hidden;\r\n    display: block;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n.sn-counter .sn-addBtn{\r\n    margin-bottom: 2px;\r\n    background-image: url(\'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACtJREFUeNpi/P//PwMMsDEy/f/1/x8jjM/EgAfglWRkZWD8j1OSNnYCBBgAyxwPC1JKQWEAAAAASUVORK5CYII=\');\r\n}\r\n.sn-counter .sn-minusBtn{\r\n    background-image: url(\'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAABCAIAAACdaSOZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABFJREFUeNpiZGVgZMAAAAEGAACoAAjmbLbfAAAAAElFTkSuQmCC\');\r\n}\r\n/* .sn-counter .sn-btns input[disabled]{ */\r\n.sn-counter .sn-btns .sn-btn-disabled{\r\n    cursor: not-allowed;\r\n    border: 1px solid #DDD;\r\n    background-color: #F5F5F5;\r\n    color:#ACA899;\r\n}\r\n.sn-double .sn-counter-son{\r\n    width: 45%;\r\n}\r\n.sn-counter-input{\r\n    margin-right: 20px;\r\n}\r\n.sn-counter-son .sn-counterContent{\r\n    font-size: inherit;\r\n    border-radius: 2px;\r\n    padding: 0 3px;\r\n    width: 100%;\r\n    border: 1px solid #a7a6ac;\r\n    color: #666;\r\n}\r\n.sn-counter .sn-counterContent:hover{\r\n    transition: border linear .3s;\r\n    -moz-transition: border linear .3s;\r\n    -webkit-transition: border linear .3s;\r\n    border: 1px solid #0085d0;\r\n}\r\n.sn-counter .sn-counterContent:focus{\r\n    border-color: #0085d0;\r\n    outline: 0;\r\n    -webkit-box-shadow:none;\r\n    box-shadow:none;\r\n}\r\n.sn-counter-double .sn-counter-son {\r\n    max-width: 100%;\r\n}\r\n/*去除input在浏览器中的上下箭头*/\r\ninput.sn-counterContent::-webkit-outer-spin-button,\r\ninput.sn-counterContent::-webkit-inner-spin-button {\r\n    -webkit-appearance: none !important;\r\n    -moz-appearance:textfield;\r\n    margin: 0;\r\n}\r\n\r\n');
