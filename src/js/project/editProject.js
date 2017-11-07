
define([
    'Util',
    'buttonGroup',
    'text!tpl/project/editProject.tpl',
    'date',
    'select',
    'form',
    'jquery',
    'dialog',
    'validator',
    'loading',
    '../common/getPath'
], function(Util, buttonGroup, tpl, MyDate, Select, Form, $, Dialog, Validator, Loading, AjaxPath) {
    var select;
    //系统变量-定义该模块的根节点
    var $el = null;
    //系统变量-构造函数
    var _indexModule = null,
        list = null,
        valiform = null,
        tabParent = null,
        editProjectdata = null,
        loadingConfig=null,
        handLoading=null,
        editProjectValidator = null,
        manageSelect = null,
        confluenceSelect = null,
        confluenceSelectData = null,
        developSelect = null,
        testSelect = null,
        startDate=null,
        endDat=null,
        config = null,
        dialog = null;
    var initialize = function(indexModule, options, tabItem) {
        $el = $(tpl);
        _indexModule = indexModule;
        //事件--点击切换tab后事件回调
        $(tabItem).on("tabActive", function() {
            console.log('common example')
            tabItem.show(true); //刷新表单
        });
        //页面传递变量，勿删！
        editProjectdata = options;
        console.log(editProjectdata);
        tabParent = tabItem;
        createLoading();
       /* //业务相关代码
        TabInit();*/
        //将根节点赋值给接口
        eventInit();
        formInit();
        this.content = $el;
        inSelect();
        initDate();
        ProjectEditValidation();
    };

    //业务代码-事件初始化
    var eventInit = function() {
        $el.on('click', '.btnSave', saveProjectEditValidation);
        $el.on('click', '.btnBack', back);
        // $el.on('click', '.btnNodeBack', back);
        $el.on('click', '.btnProjectReset', resetFun);
    };

    var resetFun = function() {
        $("input[name='projectName']", $el).val("");
        manageSelect.setValue(0);
        confluenceSelect.setValue(0);
        requireSelect.setValue(0);
        developSelect.setValue(0);
        testSelect.setValue(0);
        $("textarea[name='memo']", $el).val("");
        $("input[name='spacekey']", $el).val("");
    }

    var back = function() {
        tabParent.switchTab(editProjectdata.menuId);
        tabParent.destroy('editProjectTab');
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
            //defaultValue: nowTime(0,'yyyy-MM-dd'),
            defaultValue: editProjectdata.startTime,
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
            //defaultValue: nowTime(365,'yyyy-MM-dd'),
            defaultValue: editProjectdata.endTime,
            btns: ['clear', 'now', 'confirm'],
            done: function(dates,value,endDate){
                startDate.options.max = dates; //设置开始日期的最大日期
            }
        });
    }

    var formInit = function() {
        $("input[name='projectName']", $el).val(editProjectdata.projectName);
        $("input[name='tagName']", $el).val(editProjectdata.tagName);
        $("textarea[name='memo']", $el).val(editProjectdata.memo);
        $("input[name='spacekey']", $el).val(editProjectdata.spacekey);
        // $("textarea[name='remark']", $el).val(editProjectdata.remark);
        // $("select[name='state']", $el).val(editProjectdata.state);
    }

    var switchTab = function(index) {
        $(".t-tabs-items li", $el).eq(index).trigger('click');
    }

    var inSelect = function() {
        //项目经理
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
            //console.log(editProjectdata.user_account);
            manageSelect.setValue(editProjectdata.userAccount);
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
            manageSelect.setValue('"' + editProjectdata.projectStatus + '"');
        })

        //需求负责人
        Util.ajax.getJson( AjaxPath + "/dropdown?modual=project&type=userId&systemId=" + editProjectdata.id, {}, function(result, isok){
            requireSelect = new Select({
                el:$("#requireLeader", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>需求负责人:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'requireLeader',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: result.beans,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取需求负责人");
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
            requireSelect.setValue('"'+editProjectdata.requireLeader+'"');
            //开发负责人
            developSelect = new Select({
                el:$("#developLeader", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>开发负责人:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'developLeader',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: result.beans,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取开发负责人");
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
            developSelect.setValue('"'+editProjectdata.developLeader+'"');
             //测试负责人
            testSelect = new Select({
                el:$("#testLeader", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>测试负责人:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'testLeader',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
                topOption:"请选择", //设置最顶部option的text属性
                value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                valueField:"key",//设置下拉框value，填写数据中对应的字段名
                datas: result.beans,         //数据源
                loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                dataReady:function(){
                    console.log("获取测试负责人");
                } //select的DOM结构加载完后执行
                //  url:'../data/select.json'  //数据源，不建议使用，后期将会移除
            });
            testSelect.setValue('"'+editProjectdata.testLeader+'"');
        })
       
        //获取Confluence
        Util.ajax.getJson( AjaxPath + "/dropdown?modual=inventory&type=inventoryType&inventoryType=13", {}, function(result, isok){
            confluenceSelectData = result.beans;
            confluenceSelect = new Select({
                el:$("#confluenceServer", $el),       //要绑定的容器
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                    method:'GET'
                }, 
                label:'<i style="color:red;padding:2px;">*</i>Confluence空间服务器:', //下拉框单元左侧label文本，可不配置
                selectText:false,       //是否显示  ‘选择|清除’  模式
                name:'inventoryId',    //下拉框单元右侧下拉框名称
                disabled:false,     //组件是否被禁用
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
            confluenceSelect.setValue('"'+editProjectdata.inventoryId+'"');
        })
        
    }

    var ProjectEditValidation = function(checked) {
        var config = {
            // el: $('.validatorForm'),
            el: $(".detailProjectEditForm", $el),
            submitBtn: $(".btnSave"), //触发验证的按钮，可不配置
            dialog: true, //是否弹出验证结果对话框
            rules: {
                projectName: "required",
                tagName: 'required',
                userAccount: "required",
                projectStatus: 'required',
                startTime: "required|date",
                endTime: "required|date",
                requireLeader: "required",
                developLeader: "required",
                testLeader: "required",
                inventoryId: "required",
                spacekey: "required|letterNum",
            },
            messages: {
                projectName: {
                    required: "项目名称不能为空！"
                },
                tagName: {
                    required: "项目标签不能为空！"
                },
                userAccount: {
                    required: "项目经理不能为空！"
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
                requireLeader: {
                    required: "需求负责人不能为空！"
                },
                developLeader: {
                    required: "开发负责人不能为空！"
                },
                testLeader: {
                    required: "测试负责人不能为空！"
                },
                inventoryId: {
                    required: "Confluence空间服务器不能为空！"
                },
                spacekey: {
                    required: "空间key不能为空！",
                    letterNum: "请输入字母或数字！"
                }
            }
        };  
        editProjectValidator = new Validator(config);
        editProjectValidator.addMethod("letterNum", function(str) { return new RegExp("^[A-Za-z0-9]+$").test(str); });
    }

    var saveProjectEditValidation = function() {
        if(editProjectValidator.form()) {
            savEditProject();
        } else {
            console.log('验证失败');
        }
    }
    
    var savEditProject = function(e) {
        var handLoading = new Loading(loadingConfig);
        if(true) {
            var data = Form.serialize($('.detailProjectEditForm', $el));
            data.tagName = editProjectdata.tagName;
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
                    Util.ajax.postJson(AjaxPath + "/projects/" + editProjectdata.id, data, function(result, isok) {
                        handLoading.destroy();
                        if(result.returnCode==="0000") {
                            config = {
                                mode: 'confirm', // 对话框模式，默认normal标准|confirm浮动层|confirm确认对话框
                                title:'提示',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 120, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false, //是否显示取消按钮（强制执行，可在confirm模式下生效），可选项。 默认true(显示)
                                modal:true,
                                content: '<div style="text-align:center;margin-top:50px">修改项目成功</div>' ,// 对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                            };
                            dialog = new Dialog(config);
                            dialog.on('onclose',function(){
                                back();
                            });
                        } else {
                            content = '修改项目失败';
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
                            //     tabParent.destroy("修改项目");
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

