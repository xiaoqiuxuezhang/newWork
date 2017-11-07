
define('lib/requirejs/css.min!components/validator/validator',[],function(){});
/**
 * Created by zhanglizhao on 2016/3/9.
 */
define('validator',['jquery', 'eventTarget',
    // 'artDialog',
    'lib/requirejs/css.min!components/validator/validator.css'
    //  'lib/requirejs/css.min!css/ng-components.css',
    // 'lib/requirejs/css.min!lib/dialog/6.0.4/css/ui-dialog.css'
],
    function ($, EventTarget) {
        var VERSION = '1.0.11';
        var tools = {
            isArray: function (arr) {
                return Object.prototype.toString.apply(arr) === "[object Array]";
            },
            isObject: function (arr) {
                return Object.prototype.toString.apply(arr) === "[object Object]";
            },
            isFunction: function (arr) {
                return Object.prototype.toString.apply(arr) === "[object Function]";
            }
        };

        var SnRegExp = {
            decmal: "^([+-]?)\\d*\\.\\d+$", //浮点数
            decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$", //正浮点数
            decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //负浮点数
            decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", //浮点数
            decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$", //非负浮点数（正浮点数 + 0）
            decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$", //非正浮点数（负浮点数 + 0）
            intege: "^-?[1-9]\\d*$", //整数
            intege1: "^[1-9]\\d*$", //正整数
            intege2: "^-[1-9]\\d*$", //负整数
            num: "^([+-]?)\\d*\\.?\\d+$", //数字
            num1: "^[1-9]\\d*|0$", //正数（正整数 + 0）
            num2: "^-[1-9]\\d*|0$", //负数（负整数 + 0）
            ascii: "^[\\x00-\\xFF]+$", //仅ACSII字符
            chinese: "^[\\u4e00-\\u9fa5]+$", //仅中文
            color: "^[a-fA-F0-9]{6}$", //颜色
            date: "^\\d{4}(\\-|\\/|\\.)\\d{1,2}\\1\\d{1,2}$", //日期
            time: "^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$",//时间
            email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
            idcard: "^(^\\d{15}$|^\\d{18}$|^\\d{17}(\\d|X|x))$", //身份证
            ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$", //ip地址
            letter: "^[A-Za-z]+$", //字母
            letter_l: "^[a-z]+$", //小写字母
            letter_u: "^[A-Z]+$", //大写字母
            mobile: "^0?(13|15|17|18|14)[0-9]{9}$", //手机
            notempty: "^\\S+$", //非空
            password: "^.*[A-Za-z0-9\\w_-]+.*$", //密码
            fullNumber: "^[0-9]+$", //数字
            picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", //图片
            qq: "^[1-9]*[1-9][0-9]*$", //QQ号码
            rar: "(.*)\\.(rar|zip|7zip|tgz)$", //压缩文件
            tel: "^[0-9\\-()（）]{7,18}$", //电话号码的函数(包括验证国内区号,国际区号,分机号)
            url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", //url
            username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$", //户名
            deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$", //单位名
            zipcode: "^\\d{6}$", //邮编
            realname: "^[A-Za-z\\u4e00-\\u9fa5]+$", // 真实姓名
            companyname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
            companyaddr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
            companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"
        };

        var defaultMsg = {
            required: '此项必填',
            mobile: '此项必需为手机号',
            number: '此项必需为数字',
            email: '此项必需为邮箱',
            date: '此项必需为日期',
            time: '此项必需为时间',
            max: '此项最大值为{{0}}',
            min: '此项最小值为{{0}}'
        };

        //验证规则
        var validateRules = {
            // 判断字符串是否为空
            "required": function (str) {
                return !(str.replace(/\s/g, "") == "" || typeof str != "string");
            },
            // 判断是否是手机号码
            "mobile": function (str) {
                return new RegExp(SnRegExp.mobile).test(str);
            },
            // 判断是否是数字
            "number": function (str) {
                return new RegExp(SnRegExp.num).test(str);
            },
            // 判断是否是日期格式
            "date": function (str) {
                return new RegExp(SnRegExp.date).test(str);
            },
            // 判断是否是时间格式
            "time": function (str) {
                return new RegExp(SnRegExp.time).test(str);
            },
            // 判断是否是email
            "email": function (str) {
                return new RegExp(SnRegExp.email).test(str);
            },
            //判断是否整数
            "digits": function (str) {
                return new RegExp(SnRegExp.intege).test(str);
            },
            //判断是否整数
            "max": function (str, _max) {
                return (str.length <= _max);
            },
            //判断是否整数
            "min": function (str, _min) {
                return (str.length >= _min);
            }
            /*  // 判断是否纯数字
              "fullNumber":function(str){
                  return new RegExp(SnRegExp.fullNumber).test(str);
              },*/
        };
        // addValidateRules添加验证规则
        var addValidateRules = function (obj) {
            var addVal = {};
            for (var name in obj) {
                (function (name) {
                    addVal[name] = function (str) { return new RegExp(SnRegExp[name]).test(str) };
                })(name);
            }
            return addVal;
        };
        var verifyOnOff = false; // 正在验证或者重置的标识位
        var objClass = function (options) {
            // if(!tools.isObject(options)||(options.el&&(options.el.length!=1))||!options.rules)return false;
            if (options.el) {
                if (options.el instanceof jQuery && options.el.length > 0) {
                    this.form = options.el;
                } else if (isDOM(options.el)) {
                    this.form = $(options.el);
                } else if (typeof (options.el) == 'string' && $(options.el).length > 0) {
                    this.form = $(options.el);
                }
            } else {
                this.form = $("<div></div>")
            }
            this.form.addClass('validatorForm').css({ 'position': 'relative' });
            this.submitBtn = options.submitBtn;
            this.resetBtn = options.resetBtn;
            this.rules = options.rules;
            this.messages = options.messages;
            this.msgPos = options.msgPos ? options.msgPos : 'top';
            this.defaultMsg = defaultMsg;
            this.dialog = options.dialog;
            this.items = {};
            this.SnRegExp = $.extend(SnRegExp, options.pattern);
            this.addVal = addValidateRules(options.pattern);
            //其中getValidateRulesFromReg是遍历SnRegExp内置正则得到规则函数；validateRules是声明的；this.addval是遍历用户自定义规则pattern配置项获取的
            this.validateRules = $.extend(getValidateRulesFromReg(),validateRules, this.addVal);
            this.returnObj = returnObj.call(this);
            EventTarget.call(this.returnObj);
            this.eventInit();
            // this.validateRules = validateRules;
            return this.returnObj;
        };
		function getValidateRulesFromReg(){
			var result={};
			for (var name in SnRegExp) {
				result[name]=function (str) { return new RegExp(SnRegExp[name]).test(str) };
            }
			return result;
		}
        //返回参数
        function returnObj() {
            var _sef = this;
            var returnOjb = {
                //添加验证规则
                addMethod: function (name, callback) {
                    if (name && callback && tools.isFunction(callback) && !_sef.validateRules[name]) {
                        _sef.validateRules[name] = callback
                    }
                },
                extendMessages: function (msg) {
                    tools.isObject(msg) && $.extend(_sef.defaultMsg, msg);
                },
                form: function () {
                    var validate = _sef.dealValidateArr();
                    if (validate) {
                        _sef.returnObj.trigger("success");
                    }
                    return validate;
                }
            };

            $.extend(returnOjb, EventTarget.prototype,{
            	version: VERSION
            });

            return returnOjb;
        }

        $.extend(objClass.prototype, {
            //事件绑定
            eventInit: function () {
                this.getItems();
                //提交按钮点击事件
                if (this.submitBtn && this.submitBtn.length) {
                    this.submitBtn.on("click", $.proxy(function (e) {
                        if (this.dealValidateArr()) {
                            this.returnObj.trigger("success");
                        }
                    }, this));
                }
                //重置按钮点击事件
                if (this.resetBtn && this.resetBtn.length) {
                    this.resetBtn.on("click", $.proxy(function (e) {
                        verifyOnOff = true;
                        this.form[0].reset();
                        this.returnObj.trigger('reset', e);
                    }, this));
                }

                this.form.on("click", $.proxy(function () {
                    // this.getItems();
                }, this));

                this.form.on('scroll', $.proxy(function () {
                    // var scrollT = this.form[0].scrollTop;
                    // var scrollL = this.form[0].scrollLeft;
                    // var t = parseFloat($('.errorText').css('top'));
                    // var l = parseFloat($('.errorText').css('left'));
                    // console.log(t, l , scrollT);
                    // $('.errorText').css({top: t - scrollT, left: l - scrollL});
                }, this))

            },
            //根据el类型绑定对应事件
            eventEleInit: function (item) {
                var _self = this;
                switch (item.tagName) {
                    case "INPUT":
                        _self.form.on("blur focus", 'input[name=' + item.name + ']', function (e) {
                            if (e.type == "focusin") {
                                //    _self.dialogClose();
                                // $(this).next('.textBox').hide();
                                _self.focusEvent.call(this);
                            } else {
                                // var error = _self.verify(item);
                                // _self.errorFun(error, item, true);

                                setTimeout($.proxy(function () {
                                    if (!verifyOnOff) {
                                        var error = _self.verify(item, this);
                                        _self.errorFun(error, this, true);
                                    }
                                }, this), 200);

                            }
                        });
                        break;
                    case "TEXTAREA":
                        _self.form.on("change blur focus", 'textarea[name=' + item.name + ']', function (e) {
                            if (e.type == "focusin") {
                                _self.focusEvent.call(this);
                            } else {
                                setTimeout($.proxy(function () {
                                    var error = _self.verify(item, this);
                                    _self.errorFun(error, this, true);
                                }, this), 200);
                            }

                        });
                        break;
                    case "SELECT":
                        _self.form.on("change", 'select[name=' + item.name + ']', function () {
                            // _self.dialogClose();
                            // var error = _self.verify(item);
                            // _self.errorFun(error, item, true);
                            _self.focusEvent.call(this);
                            setTimeout($.proxy(function () {
                                var error = _self.verify(item, this);
                                _self.errorFun(error, this, true);
                            }, this), 200);
                            // var error = _self.verify(item, this);
                            // _self.errorFun(error, this, true);
                        });
                        break;
                }
            },
            focusEvent: function () {
            	//this是触发事件的inpute,这句话不讲道理啊
                clearTimeout(this.timer);
                verifyOnOff = false;
                var that = this;
				//$(this).closest('form').find('.errorText').each(function (k, v) {
                //上面一行,如果用户配置的容器el不是form,从form找会找不到
                $('.errorText').each(function (k, v) {
                    if ($(v).data('elem') == that) {
                        $(v).remove();
                        return false;
                    }
                });
                var posEle;
                if ($(this).css('display') == 'none') {
                    posEle = $(this).siblings()[0];
                } else {
                    posEle = this;
                }
                $(posEle).removeClass("validate-error");
            },
            //循环this.rules得到 this.items;
            getItems: function (callback) {
                if (this.items) {
                    for (var item in this.rules) {
                        if (!this.items[item]) {
                            var ele = this.form.find("[name=" + item + "]");
                            if (ele.length) {
                                this.items[item] = {
                                    name: item,
                                    el: ele,
                                    tagName: ele[0].tagName,
                                    rules: this.rules[item].split("|")
                                };
                                this.eventEleInit(this.items[item]);
                                // var that = this;
                                // $.each(ele, function (k, v) {
                                //     // $('<span class="afterBox"></span>').insertAfter($(v)).append($('<span class="textBox"></span>'));
                                //     if (that.msgPos === 'right') {
                                //         $('<span class="afterBox"></span>').css({ 'display': 'inline-block', 'width': v.offsetWidth, 'height': v.offsetHeight }).insertAfter($(v)).append($(v)).append($('<span class="textBox"></span>')).find('.textBox').css({ 'left': v.offsetWidth + 3, 'bottom': 0 });
                                //     } else {
                                //         // top值要加上重构后的具体父级的上边距值
                                //         $('<span class="afterBox"></span>').css({ 'display': 'inline-block', 'width': v.offsetWidth, 'height': v.offsetHeight }).insertAfter($(v)).append($(v)).append($('<span class="textBox"></span>')).find('.textBox').css({ 'top': v.offsetTop + v.offsetHeight + 3, 'left': 0 });
                                //     }
                                // });
                            }
                        }
                        // this.items[item] && callback && callback.call(this, this.items[item]);
                        if (this.items[item] && callback) {
                            var $ele = this.form.find("[name=" + item + "]");
                            $.each($ele, $.proxy(function (k, v) {
                                callback.call(this, this.items[item], v);
                            }, this))
                        }
                    }
                }
            },
            //处理 validateArr
            dealValidateArr: function () {
                verifyOnOff = true;
                var errorText = [];
                // 统一验证前把所有提示弹框移除
                this.form.find('.errorText').remove();
                this.getItems(function (item, ele) {
                    if (item["rules"]) {
                        var error_text = this.verify(item, ele);
                        this.errorFun(error_text, ele, this.dialog);
                        if (error_text) {
                            errorText.push(error_text);
                        }
                        // error_text && errorText.push('<p>' + error_text + '</p>');
                    }
                });
                // 返回验证结果布尔值
                if (errorText.length) {
                    return false;
                } else {
                    return true;
                }
                // if (errorText.length) {
                //     if (this.dialog) {
                //         var d = dialog({
                //             quickClose: true,
                //             content: errorText.join("")
                //         });
                //         d.show();
                //     }

                //     return false;
                // } else {

                //     return true;
                // }
            },
            //判断value值是否通过验证 返回错误信息
            verify: function (item, ele) {
                var errorText = '';
                $.each(item.rules, $.proxy(function (kev, v) {
                    var validate = this.getRule(v);
                    if (validate.is_rule) {
                        // var value = item.el.val();
                        // if ($(ele).attr('type') == "radio" || $(ele).attr('type') == "checkbox") {
                        //     var boxName = $(ele).attr('name');
                        //     var checkedVal = $("input[name="+boxName+"]:checked").val();
                        //     var value = checkedVal ? checkedVal : '';

                        // }else {
                        var value = $(ele).val();
                        // }
                        if (($.inArray("required", item.rules) != -1) || (this.validateRules["required"](value))) {
                            if (validate.validate(value)) {
                                if (this.messages && this.messages[item.name] && this.messages[item.name][validate.val]) {
                                    errorText = this.messages[item.name][validate.val]
                                } else {
                                    //errorText = (this.defaultMsg[validate.val] ? this.defaultMsg[validate.val] : ("验证不通过"));
                                    errorText = this.defaultMsgFun(validate);
                                }
                                return false
                            }
                        }
                    }
                }, this));
                return errorText;
            },
            //默认提示文本
            defaultMsgFun: function (obj) {
                var error = "验证不通过";
                if (this.defaultMsg[obj.val]) {
                    error = this.defaultMsg[obj.val].replace('\{\{0\}\}', obj.str1 ? obj.str1 : "").replace('\{\{1\}\}', obj.str2 ? obj.str2 : "")
                }
                return error;
            },
            //针对 min-10 max-20 这样的规则进行集中处理 后期可在扩展
            getRule: function (rule) {
                var ruleObj = {}, _self = this, arr = [];
                if (rule.split("-")[1]) {
                    arr = rule.split("-");
                    ruleObj.val = arr[0];
                    ruleObj.str1 = arr[1];
                } else {
                    ruleObj.val = rule
                }
                $.extend(ruleObj, {
                    is_rule: !!_self.validateRules[ruleObj.val],
                    validate: function (value) {
                        var is_validate;
                        if (ruleObj.str1) {
                            is_validate = _self.validateRules[ruleObj.val](value, ruleObj.str1)
                        } else {
                            is_validate = _self.validateRules[ruleObj.val](value)
                        }
                        return !is_validate
                    }
                });
                return ruleObj;
            },
            //元素错误处理
            errorFun: function (errorText, ele, is_tips) {
                var _self = this;
                if (errorText) {
                    // item.el.parent().addClass("validate-error");
                    var posEle;
                    if ($(ele).css('display') == 'none') {
                        posEle = $(ele).siblings()[0];
                    } else {
                        posEle = ele;
                    }
                    $(posEle).addClass("validate-error");
                    if (is_tips) {
                        // 做一个dialog
                        clearTimeout(ele.timer);
                        var t = $(posEle).offset().top,
                            l = $(posEle).offset().left,
                            T = this.form.offset().top,
                            L = this.form.offset().left,
                            scrollT = this.form[0].scrollTop,
                            scrollL = this.form[0].scrollLeft,
                            eleH = posEle.offsetHeight,
                            eleW = posEle.offsetWidth,
                            textHeight = 23;
                        var $nowSpan=$('<div class="errorText"></span><span class="icon-i">!</span><span class="error-text"></span></div>');
//                      var $nowSpan = $('<span class="errorText"></span>');
                        if (_self.msgPos === 'right') {
                            $nowSpan.addClass("arrow-left").data('elem', ele).appendTo(this.form).css({ top: t - T + scrollT+(eleH-textHeight)/2, left: l - L + scrollL + eleW + 3 ,width:eleW});
                        } else if (_self.msgPos === 'bottom'){
                            $nowSpan.addClass("arrow-bottom").data('elem', ele).appendTo(this.form).css({ top: t - T + scrollT + eleH, left: l - L + scrollL ,width:eleW});
                        } else { // top
                            $nowSpan.addClass("arrow-top").data('elem', ele).appendTo(this.form).css({ top: t - T + scrollT - textHeight, left: l - L + scrollL ,width:eleW});
                        }
                        $nowSpan.find('.error-text').text(errorText);
                        ele.timer = setTimeout(function () {
                            $nowSpan.remove();
                            verifyOnOff = false;
                            $(posEle).removeClass("validate-error");
                        }, 2500)

                    }
                } else {
                    $(posEle).removeClass("validate-error");
                }

            }
            // dialogClose: function () {
            //     dialog.get("sn-validate") && dialog.get("sn-validate").close().remove();
            // }
        });

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
('.validatorForm input,\r\n.validatorForm select,\r\n.validatorForm textarea {\r\n\tborder: 1px solid #d0d6d9;\r\n\t/*box-sizing: border-box;*/\r\n}\r\n\r\n.validatorForm .validate-error {\r\n\t/*color: #c9344b;*/\r\n\t/*outline: 2px solid #f66;\r\n    outline-offset: -2px;*/\r\n\tbackground-color: #fff2f4!important;\r\n\tborder: 1px solid #F65A56!important;\r\n}\r\n\r\n.errorText {\r\n\tposition: absolute;\r\n\tfont-size: 0;\r\n\tz-index: 99;\r\n\theight: 23px;\r\n\tline-height: 23px;\r\n\tbackground-color: #ffebeb;\r\n\tbox-sizing: border-box;\r\n\tborder: 1px solid #faccc6;\r\n\tbox-shadow: 1px 1px 1px rgba(0, 0, 0, .2);\r\n}\r\n\r\n.errorText .icon-i {\r\n\tposition: absolute;\r\n\ttop: 5px;\r\n\tleft: 0;\r\n\tdisplay: inline-block;\r\n\twidth: 11px;\r\n\theight: 11px;\r\n\tbackground-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMBJREFUeNps0bEJwlAUheFoITZa2BhE1NJCS3eIGSCFE2QDdQJdwQEsdADNGmIvES1iZSFYWPkfuIHHIxc+Lpx3EsJL7btIApshVogRosAJW9xVqFsxwhUpBmjYTi2PyvIIB7SC6lF+VE/lNdrO4Q0d2+4DS5Xn3pt6eNt2J1a564VNjG27E6r8qvjOfUVWqHz2Ql3TDE8vz1Te4OOEuu8L+k6m843KORLvgYlX1Hle/pQMU+zwwM/2znKdB38BBgDwbiPAiLQ75AAAAABJRU5ErkJggg==\');\r\n\tbackground-size: 100% 100%;\r\n\tbackground-repeat:no-repeat;\r\n\tmargin: 0 6px;\r\n}\r\n\r\n.errorText .error-text {\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\tpadding-left: 24px;\r\n\tfont-size: 12px;\r\n\tcolor: #fe5750;\r\n\tbox-sizing: border-box;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\r\n\toverflow: hidden;\r\n}\r\n\r\n.errorText:before {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tposition: absolute;\r\n\tleft: 12px;\r\n\tborder-right: 6px solid transparent;\r\n\tborder-left: 6px solid transparent;\r\n}\r\n\r\n.errorText:after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tposition: absolute;\r\n\tleft: 12px;\r\n\tborder-right: 6px solid transparent;\r\n\tborder-left: 6px solid transparent;\r\n}\r\n.errorText.arrow-top:before{\r\n\tbottom: -18px;\r\n\tborder-top: 9px solid #faccc6;\r\n\tborder-bottom: 9px solid transparent;\r\n}\r\n.errorText.arrow-top:after{\r\n\tbottom: -17px;\r\n\tborder-top: 9px solid #ffebeb;\r\n\tborder-bottom: 9px solid transparent;\r\n}\r\n\r\n.errorText.arrow-bottom:before{\r\n\ttop:-18px;\r\n\tborder-top: 9px solid transparent;\r\n\tborder-bottom: 9px solid #faccc6;\r\n}\r\n.errorText.arrow-bottom:after{\r\n\ttop:-16px;\r\n\tborder-top: 9px solid transparent;\r\n\tborder-bottom: 9px solid #ffebeb;\r\n}\r\n\r\n.errorText.arrow-left:before{\r\n\tleft: -13px;\r\n\ttop:5px;\r\n\tborder-top: 6px solid transparent;\r\n\tborder-bottom: 6px solid transparent;\r\n\tborder-right: 6px solid #faccc6;\r\n\tborder-left: 6px solid transparent;\r\n}\r\n.errorText.arrow-left:after{\r\n\tleft: -12px;\r\n\ttop:5px;\r\n\tborder-top: 6px solid transparent;\r\n\tborder-bottom: 6px solid transparent;\r\n\tborder-right: 6px solid #ffebeb;\r\n\tborder-left: 6px solid transparent;\r\n}\r\n');
