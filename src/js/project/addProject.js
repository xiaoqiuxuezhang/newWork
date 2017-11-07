
define([
	'Util',  
    'text!tpl/project/addProject.tpl',
    'select',
    'date',
    'form',
    'dialog',
    'jquery',
    'checkboxes',
    'validator',
    'loading',
    '../common/getPath'
	],
	function (Util, tpl, Select, MyDate, Form, Dialog, $, Checkboxes, Validator, Loading, AjaxPath) {
    require(['style!css/style.css']);    

    //系统变量-定义该模块的根节点
    var $el = null;
    var _indexModule = null,
        // list = null,
        // valiform = null,
        tabParent = null,
        addProjectData = null,
        loadingConfig=null,
        addProjectValidator = null,
        manageSelect = null,
        confluenceSelect = null,
        startDate = null,
        endDate = null,
        checkboxes = null,
        confluenceSelectData = null;
    //系统变量-构造函数
    var initialize = function(indexModule, options, tabItem) {
        $el = $(tpl);
        _indexModule = indexModule;
        $(tabItem).on("tabActive", function() {
            tabItem.show(true); //刷新表单
        });

        createLoading();
        addProjectData = options;
        tabParent = tabItem;
        eventInit();
        this.content = $el;
        inSelect();
        initDate();
        initCheckbox();
        ProjectValidation();

    };

    //业务代码-事件初始化
    var eventInit = function() {
        $el.on('click', '.btnSave', saveProjectValidation);
        $el.on('click', '.btnBack', back);
        // $el.on('click', '.btnNodeBack', back);
        $el.on('click', '.btnProjectReset', resetFun);
    };

    var resetFun = function() {
        $("input[name='projectName']", $el).val("");
        $("input[name='projectFullName']", $el).val("");
        $("select[name='projectManage']", $el).val(0);
        $("input[name='tagName']", $el).val("");
        manageSelect.setValue(0);
        confluenceSelect.setValue(0);
        $("textarea[name='memo']", $el).val("");
    }

    var back = function() {
        tabParent.switchTab(addProjectData.menuId);
        tabParent.destroy("addProjectTab");
    }

    var switchTab = function(index) {
        $(".t-tabs-items li", $el).eq(index).trigger('click');
    }

    var inSelect = function() {
        Util.ajax.getJson( AjaxPath + "/dropdown?modual=user&type=userAccount", {}, function(result, isok){
            manageSelect = new Select({
                el:$("#projectManage", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>项目经理:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'userAccount',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: result.beans,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取项目经理");
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
            $("#projectManage .sn-select-container").addClass("mt-5");
        })

        Util.ajax.getJson( AjaxPath + "/dropdown?modual=project&type=projectStatus", {}, function(result, isok){
            manageSelect = new Select({
                el:$("#projectStatus", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>状态:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'projectStatus',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: result.beans,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取项目状态");
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
        })

        Util.ajax.getJson( AjaxPath + "/dropdown?modual=inventory&type=inventoryType&inventoryType=13", {}, function(result, isok){
            confluenceSelectData = result.beans;
            confluenceSelect = new Select({
                el:$("#confluenceServer", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>Confluence空间服务器:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'',    //下拉框单元右侧下拉框名称
                disabled:true,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: confluenceSelectData,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取Confluence")
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
            $("#confluenceServer label i").hide();
        })
        
    }

    var initDate = function() {
        startDate = new MyDate({
            el: $("#startDate", $el),
            inputClassName: 'date',
            label: '<i style="color:red;padding:2px;">*</i>开始时间:',
            name: 'startTime',    //开始日期文本框name
            isReadOnly: true,  //项可设置日期输入框是否只读
            min: 0,         //最小日期限制
            range: false,
            type: "date",
            isDisabled: false,//是否禁用组件
            defaultValue: nowTime(0,'yyyy-MM-dd'),
            btns: ['clear', 'now', 'confirm'],
            done: function(dates,value,startDate){
                endDate.options.min = dates; //设置结束日期的最小限制
            }
        });
        endDate = new MyDate({
            el: $("#endDate", $el),
            inputClassName: 'date',
            label: '<i style="color:red;padding:2px;">*</i>结束时间:',
            name: 'endTime',    //开始日期文本框name
            isReadOnly: true,  //项可设置日期输入框是否只读
            min: 1,         //最小日期限制
            range: false,
            type: "date",
            isDisabled: false,//是否禁用组件
            // defaultValue: nowTime(365,'yyyy-MM-dd'),
            defaultValue: '',
            btns: ['clear', 'now', 'confirm'],
            done: function(dates,value,endDate){
                startDate.options.max = dates; //设置开始日期的最大日期
            }
        });
    }

    var initCheckbox = function() {
        var checkboxesConfig = {
            el: $("#checkbox", $el), //要绑定的容器
            className: 'box3', //组件外围的className,默认横向|all-width纵向
            disabled: 0, //是否禁用，1禁用|0不禁用 
            defaultValue: '', //默认选中项（复选框的value值）
            disabledValue: '', //初始化默认禁用指定复选框
            items: [{
                className: 'mt-10', //复选框的className，可不配置
                label: '', //必须配置
                value: '1', //必须配置
                click: function(e, itemData) {
                    //itemData 表示 该复选框的内容 { label:'',value:'', checked:未选中0|选中1 }
                    if (itemData.checked) {
                        // console.log(itemData.label + '===被勾选');
                        confluenceSelect.enable();
                        $("#confluenceServer select").attr("name", "inventoryId");
                        $("#confluenceServer label i").show();
                    } else {
                        // console.log(itemData.label + '===被取消勾选');
                        confluenceSelect.disabled();
                        $("#confluenceServer select").attr("name", "");
                        $("#confluenceServer label i").hide();
                    }
                }
            }]
        }
        checkboxes = new Checkboxes(checkboxesConfig);
    }

    var ProjectValidation = function(checked) {
        var config = {
            // el: $('.validatorForm'),
            el: $(".detailProjectForm", $el),
            submitBtn: $(".btnSave"), //触发验证的按钮，可不配置
            dialog: true, //是否弹出验证结果对话框
            rules: {
                projectName: "required",
                userAccount: "required",
                tagName: 'required',
                projectStatus: 'required',
                startTime: "required|date",
                endTime: "required|date",
                inventoryId: "required"
            },
            messages: {
                projectName: {
                    required: "项目名称不能为空！"
                },
                userAccount: {
                    required: "项目经理不能为空！"
                },
                tagName: {
                    required: "项目标签不能为空！"
                },
                projectStatus: {
                    required: "项目状态不能为空！"
                },
                startTime: {
                    required: "开始时间不能为空！"
                },
                endTime: {
                    required: "结束时间不能为空！"
                },
                inventoryId: {
                    required: "Confluence空间服务器不能为空！"
                }
            }
        };  
        addProjectValidation = new Validator(config);
    }

    var saveProjectValidation = function() {
        if(addProjectValidation.form()) {
            saveProject();
        } else {
            console.log('验证失败');
        }
    }

    var saveProject = function(e) {
        var handLoading = new Loading(loadingConfig);
        if(true) {
            var data = Form.serialize($('.detailProjectForm', $el));
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
                    Util.ajax.postJson(AjaxPath + "/projects", data, function(result, isok) {
                        handLoading.destroy();
                        if(result.returnCode==="0000") {
                            config = {
                                mode: 'confirm', // 对话框模式，默认normal标准|confirm浮动层|confirm确认对话框
                                title:'提示',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 120, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false, //是否显示取消按钮（强制执行，可在confirm模式下生效），可选项。 默认true(显示)
                                modal:true,
                                content: '<div style="text-align:center;margin-top:50px">添加项目成功</div>' ,// 对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                            };
                            dialog = new Dialog(config);
                            dialog.on('onclose',function(){
                                back();
                            });
                        } else {
                            content = '添加项目失败';
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
                            //     tabParent.destroy("添加项目");
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

