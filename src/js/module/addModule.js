
define([
	'Util',  
    'text!tpl/module/addModule.tpl',
    'select',
    'form',
    'dialog',
    'jquery',
    'validator',
    'loading',
    '../common/getPath'
	],
	function (Util, tpl, Select, Form, Dialog, $, Validator, Loading, AjaxPath) {

    //系统变量-定义该模块的根节点
    var $el = null;
    var _indexModule = null,
        // list = null,
        // valiform = null,
        tabParent = null,
        addModuleData = null,
        loadingConfig=null,
        addModuleValidator = null,
        excuterSelect = null;
    //系统变量-构造函数
    var initialize = function(indexModule, options, tabItem) {
        $el = $(tpl);
        _indexModule = indexModule;
        $(tabItem).on("tabActive", function() {
            tabItem.show(true); //刷新表单
        });

        createLoading();
        addModuleData = options;
        tabParent = tabItem;
        eventInit();
        this.content = $el;
        inSelect();
        ModuleValidation();
    };

    //业务代码-事件初始化
    var eventInit = function() {
        $el.on('click', '.btnSave', saveModuleValidation);
        $el.on('click', '.btnBack', back);
        // $el.on('click', '.btnNodeBack', back);
        $el.on('click', '.btnProjectReset', resetFun);
    };

    var resetFun = function() {
        $("input[name='moduleName']", $el).val("");
        excuterSelect.setValue(0);
        $("textarea[name='moduleDscription']", $el).val("");
    }

    var back = function() {
        tabParent.switchTab(addModuleData.menuId);
        tabParent.destroy("addModuleTab");
    }

    var switchTab = function(index) {
        $(".t-tabs-items li", $el).eq(index).trigger('click');
    }

    var inSelect = function() {
        Util.ajax.getJson( AjaxPath + "/dropdown?modual=require&type=tryPeople&systemId=" + addModuleData.refProject, {}, function(result, isok){
            excuterSelect = new Select({
                el:$("#excuter", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>负责人:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'excuter',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: result.beans,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取负责人");
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
            $("#excuter .sn-select-container").addClass("mt-5");
        })
    }

    var ModuleValidation = function(checked) {
        var config = {
            // el: $('.validatorForm'),
            el: $(".detailModuleForm", $el),
            submitBtn: $(".btnSave"), //触发验证的按钮，可不配置
            dialog: true, //是否弹出验证结果对话框
            rules: {
                moduleName: "required",
                excuter: "required",
            },
            messages: {
                moduleName: {
                    required: "模块名称不能为空！"
                },
                excuter: {
                    required: "负责人不能为空！"
                }
            }
        };  
        addModuleValidation = new Validator(config);
    }

    var saveModuleValidation = function() {
        if(addModuleValidation.form()) {
            saveModule();
        } else {
            console.log('验证失败');
        }
    }

    var saveModule = function(e) {
        var handLoading = new Loading(loadingConfig);
        if(true) {
            var data = Form.serialize($('.detailModuleForm', $el));
                data.refProject = addModuleData.refProject;
            var config = null,
                dialog = null;
            // var orgId = addPositionData.orgId;
            // data.orgId = orgId;
            console.log(data);
            // Util.ajax.getJson("/it/token/getToken", {}, function(result, isok){
                // var token= result.bean;
                // console.log("################3"+token);
                // if(token){
                    // data.token = token;
                    Util.ajax.postJson(AjaxPath + "/modules", data, function(result, isok) {
                        handLoading.destroy();
                        if(result.returnCode==="0000") {
                            config = {
                                mode: 'confirm', // 对话框模式，默认normal标准|confirm浮动层|confirm确认对话框
                                title:'提示',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 120, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false, //是否显示取消按钮（强制执行，可在confirm模式下生效），可选项。 默认true(显示)
                                modal:true,
                                content: '<div style="text-align:center;margin-top:50px">添加模块成功</div>' ,// 对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                            };
                            dialog = new Dialog(config);
                            dialog.on('onclose',function(){
                                back();
                            });
                        } else {
                            content = '添加模块失败';
                            if(result.returnMessage) {
                                content = result.returnMessage;
                            }
                            config = {
                                mode: 'confirm', // 对话框模式，默认normal标准|confirm浮动层|confirm确认对话框
                                title:'提示',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 120, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false, //是否显示取消按钮（强制执行，可在confirm模式下生效），可选项。 默认true(显示)
                                modal:true,
                                content: '<div style="text-align:center;margin-top:50px">'+content+'</div>' ,// 对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                            };
                            dialog = new Dialog(config);
                            // dialog.on('onclose',function(){
                            //     back();
                            //     tabParent.destroy("添加模块");
                            // });
                        }
                    });
            //     }else{
            //         handLoading.destroy();
            //         config = {
            //             mode: 'confirm', // 对话框模式，默认normal标准|confirm浮动层|confirm确认对话框
            //             title:'提示',
            //             width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
            //             height: 120, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
            //             cancelDisplay: false, //是否显示取消按钮（强制执行，可在confirm模式下生效），可选项。 默认true(显示)
            //             modal:true,
            //             content: '<div style="text-align:center;margin-top:50px">非法请求！</div>' ,// 对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
            //         };
            //         dialog = new Dialog(config);
            //     }
            // });
        }
    }

    var createLoading = function(){
        loadingConfig = {
            el:'body',                  //组件要绑定的容器，默认为body（此项可不配置或留空）
            className:'loading',           //组件外围的className
            position:'center',      //提示信息位置，顶部top|默认center中央
            width:'300',      //loading的宽度,非必须，默认300
            height:'auto',      //loading的宽度,非必须，默认auto
            mask:1,                 //是否显示遮罩， 0不显示|默认1显示
            animate:1,              //是否显示动画效果， 0不显示|默认1显示
            mode:'layer',     //展示方式 loadingLine线条方式|默认layer弹层方式
            text:'加载中...',       //提示文字，默认 加载中...
            icon:'dotCycle',  //文字前面的gif动画， 默认dotCycle有点组成的圈|cmcc移动图标|cmccLarge大的移动图标
        }
    };

    return initialize;

});

