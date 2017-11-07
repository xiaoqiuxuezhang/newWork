/**
 * 普通业务模块示例
 */
define(['Util',
        'list',
        'form',
        'dialog',
        'tab',
        'loading',
        '../common/getPath',
        '../common/getQueryString',
        'text!tpl/module/moduleList.tpl',
        'text!tpl/module/viewModule.tpl',
        'select',
        'cookie',
        '../common/getProjectList',
    ],
    function(Util, List, Form, Dialog, Tab, Loading, AjaxPath, GetQueryString, ModuleTpl, vModuleTpl, Select, $cookie, getProjectList) {
        require(['style!css/style.css']);
        var $el = null;

        var _indexModule = null,
            list = null,
            tab = null,
            tplId = null,
            handLoading = null,
            loadingConfig = null,
            moduleSelectDrop = null,
            projectSelect = null;
        var initialize = function(indexModule, options, tabItem) {
            $el = $(ModuleTpl);
            _indexModule = indexModule;

            // 事件--点击切换tab后事件回调
            $(tabItem).on("tabActive", function() {
                tabItem.show(true); // 刷新表单
            });

            tab = tabItem;
            createLoading();
            tplId = options.menuId;

            // 业务相关代码
            eventInit();
            this.content = $el;

            inProjectList();
            // listInit();
        };

        var eventInit = function (){
            //页面除dialog按钮功能
            $el.on('click', '#btnAdd', addModule);
            $el.on('click', '#btnDel', delDialogBox);
            $el.on('click', '.moduleEditBtn', editorModule);
            $el.on('click', '.moduleDeleteBtn', delDialogBox);
            $el.on('click', '.btnSearch', search);
            $el.on('click', '.btnReset', searchRest);
            $('#tabList li.' + tplId).on('click', tabActive);
        }

        var tabActive = function() {
            search();
        }

        var search = function() {
            var data = Form.serialize($('.searchModuleForm', $el));
            data.limit = 10;
            data.page = 1;
            data.systemId = $cookie.get("projectSelectId");
            list.search(data);
        }

        var searchRest = function(){
            $("input[name=moduleName]",$el).val("");
            $("input[name=excuter]",$el).val("");
            var data = {};
            data.systemId = $cookie.get("projectSelectId");
            list.search(data);
        }

        var inProjectList = function(){
            getProjectList($cookie.get("userId"), listInit, search); //第一个参数为用户id
        }

        var createLoading = function() {
            loadingConfig = {
                el: 'body', //组件要绑定的容器，默认为body（此项可不配置或留空）
                className: 'loading', //组件外围的className
                position: 'center', //提示信息位置，顶部top|默认center中央
                width: '300', //loading的宽度,非必须，默认300
                height: 'auto', //loading的宽度,非必须，默认auto
                mask: 1, //是否显示遮罩， 0不显示|默认1显示
                animate: 1, //是否显示动画效果， 0不显示|默认1显示
                mode: 'layer', //展示方式 loadingLine线条方式|默认layer弹层方式
                text: '加载中...', //提示文字，默认 加载中...
                icon: 'dotCycle', //文字前面的gif动画， 默认dotCycle有点组成的圈|cmcc移动图标|cmccLarge大的移动图标
            }
        }

        var listInit = function(){
            var data = {};
                data.systemId = $cookie.get("projectSelectId");
            var config = {
                el: $('.listContainer', $el),
                ajax: {    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置；慎用
                    method:'GET'
                },
                field: {
                    boxType: 'checkbox',
                    key: 'id',
                    items: [
                    {
                        text: '模块名称',
                        title: 'moduleName',
                        name: 'moduleName',
                        className: 'w90',
                        sorting:1,
                        click: function (e, val,item) {
                            // console.log(e,item)
                            creatDialog(e, item);
                        },
                        render: function (item, val) {
                            return '<a href="javascript:;">' + val + '</a>';
                        }
                    },
                    {
                        text: '模块描述',
                        title: 'moduleDscription',
                        name: 'moduleDscription',
                        className: 'w90'
                    },
                    {
                        text: '负责人',
                        title: 'excuter',
                        name: 'excuter',
                        className: 'w120',
                        sorting:1
                    },
                    {
                        text: '操作',
                        title: '',
                        name: '',
                        className: 'w90',
                        render: function (item, val) {
                            return '<button class="t-btn t-btn-blue t-btn-xs moduleEditBtn" style="margin-right:8px;margin-left:20px"><a style="color:#fff">修改</a></button><button class="t-btn t-btn-blue t-btn-xs moduleDeleteBtn"><a style="color:#fff">删除</a></button>';
                        }
                    }]
                },
                page: {
                    customPages: [2, 3, 5, 10, 15, 20, 30, 50], //可选择每页显示多少条
                    perPage: 10, //默认每页显示多少条记录
                    total: true
                },
                data: {
                    url: AjaxPath + "/modules"
                    // url:"../../../data/list1.json"
                }
            };
            list = new List(config);
            list.search(data);
        }

        var addModule = function(){
            tab.createTab({
                title: '新增模块',
                closeable: 1, //是否可以关闭 0false不可以|1true可以
                className: 'addModuleTab'
            });
            tab.switchTab('新增模块');
            var moduledata = {};
            moduledata.menuId = tplId;
            moduledata.refProject = $cookie.get("projectSelectId");
            require(['js/module/addModule'], function(addModuleContent) {
                var result = new addModuleContent({}, moduledata, tab);
                tab.content(result.content);
            });
        }

        var delModule = function(e){
            
            handLoading = new Loading(loadingConfig);
            if(e.currentTarget.id!=="btnDel"){
                $(".listContainer .sn-list-content-locker.sn-list-show table tbody tr.selected td").click();
                $(".listContainer .sn-list-show table tbody tr").eq(e.currentTarget.parentNode.parentNode.rowIndex).find('td').click();
            }
            var nodes = list.getCheckedRows();
            console.log(nodes)
            if(nodes.length < 1) {
                handLoading.destroy();
                config = {
                    mode: 'tips',
                    content: '<div style="text-align:center;margin-top:70px">请选择至少一条数据进行删除！</div>',
                    width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                    cancelDisplay: false
                };
                var dialog = new Dialog(config);
            } else {
                /*var data = [];
                for(var i = 0; i < nodes.length; i++) {
                    var obj = new Object();
                    obj.id = list.getCheckedRows()[i].id;
                    // obj.orgId = list.getCheckedRows()[i].orgId;
                    obj.moduleName = list.getCheckedRows()[i].moduleName;
                    data.push(obj);
                }
                var content = "";
                for(var k = 0; k < data.length; k++) {
                    content = content + data[k].moduleName + ",";
                }
                var str = JSON.stringify(data);*/

                var data = [];
                for(var i = 0; i < nodes.length; i++) {
                   data.push(nodes[i].id);
                }
                var str = JSON.stringify(data);
                if(nodes.length === 1){
                    Util.ajax.getJson(AjaxPath+"/modules/delete/"+nodes[0].id, {} ,function(result, isok) {
                        var flag = result.returnMessage;
                        if(flag !== '删除成功') {
                            handLoading.destroy();
                            new Dialog({
                                mode: 'confirm', //对话框模式，默认normal标准|tips浮动层|tips确认对话框
                                title: '提示', //对话框标题
                                width: 300,
                                height: 120,
                                modal: true,
                                content: '<div style="text-align:center;margin-top:50px">'+flag+'</div>', //对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                                cancelDisplay: false,
                                ok: function() {}, // 配置该项时才会出现ok按钮，回调函数可为空。如果指定 return false 则执行完方法后不关闭对话框。默认 return true
                                okValue: '关闭' //确定按钮的文本 默认是 ‘ok’
                            });
                            return;
                        } else if(flag === '删除成功'){
                            handLoading.destroy();
                            new Dialog({
                                mode: 'tips',
                                content: '<div style="text-align:center;margin-top:70px">删除成功！</div>',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false
                            });
                            search();
                        }
                    })
                } else {
                    Util.ajax.postJson(AjaxPath+"/modules/batchDelete", str, function(result, isok) {
                        var flag = result.returnMessage;
                        if(flag === '批量删除未关联模块成功'){
                            handLoading.destroy();
                            new Dialog({
                                mode: 'tips',
                                content: '<div style="text-align:center;margin-top:70px">批量删除模块成功!</div>',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false
                            });
                            search();
                        } else {
                            handLoading.destroy();
                            new Dialog({
                                mode: 'confirm', //对话框模式，默认normal标准|tips浮动层|tips确认对话框
                                title: '提示', //对话框标题
                                width: 300,
                                height: 120,
                                modal: true,
                                content: '<div style="text-align:center;margin-top:50px">'+result.returnMessage+'</div>', //对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                                cancelDisplay: false,
                                ok: function() {}, // 配置该项时才会出现ok按钮，回调函数可为空。如果指定 return false 则执行完方法后不关闭对话框。默认 return true
                                okValue: '关闭' //确定按钮的文本 默认是 ‘ok’
                            });
                            search();
                            return;
                        }  
                    })
                }
                
            }
        }

        var editorModule = function(e,index){
            console.log(index)
            
            if(!index && index!==0){
                $(".listContainer .sn-list-content-locker.sn-list-show table tbody tr.selected td").click();
                $(".listContainer .sn-list-show table tbody tr").eq(e.currentTarget.parentNode.parentNode.rowIndex).find('td').click();
            }else{
                $(".listContainer .sn-list-content-locker.sn-list-show table tbody tr.selected td").click();
                $(".listContainer .sn-list-show table tbody tr").eq(index).find('td').click();
            }

            var datas = list.getCheckedRows();
            // console.log(datas);

            if(datas.length === 0 || datas.length > 1) {
                config = {
                    mode: 'tips',
                    content: '<div style="text-align:center;margin-top:70px">请选择一条数据进行修改！</div>',
                    width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                    cancelDisplay: false
                };
                var dialog = new Dialog(config);
            }else {
                tab.createTab({
                    title: '修改模块',
                    closeable: 1, //是否可以关闭 0false不可以|1true可以
                    className: 'editModuleTab'
                });
                tab.switchTab('修改模块');
                var moduledata = datas[0];
                moduledata.menuId = tplId;
                require(['js/module/editModule'], function(moduleEditContent) {
                    var result = new moduleEditContent({}, moduledata, tab);
                    tab.content(result.content);
                });
            }
        }

        var creatDialog = function(e,item){
            var oItem = null,
                config = null;
            Util.ajax.getJson(AjaxPath+"/modules/"+item.data.id, {}, function(result, isok) {
                console.log(result)
                oItem = result.beans;
                config = {
                    mode: 'normal', //对话框模式，默认normal标准|tips浮动层|confirm确认对话框
                    title: '模块：'+oItem.moduleName, //对话框标题，
                    content: Util.hdb.compile(vModuleTpl)(oItem), //对话框内容，可以是字符串、html代码段,tpl对象。默认为loading状态（由点组成的圈。大段代码建议使用 tpl。
                    ok: function() { 
                        console.log('点击了修改按钮');
                        editorModule(e, e.currentTarget.parentNode.rowIndex);
                        return true;
                    }, 
                    cancel: function() { 
                        search();
                        return true;
                    },
                    cancelValue: '修改', //取消按钮的文本 默认是 ‘关闭’
                    okValue: '修改', //取消按钮的文本 默认是 ‘关闭’
                    cancelDisplay: false, //是否显示取消按钮 默认true显示|false不显示
                    width: 600, //对话框宽度，normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 200, //对话框高度，normal默认值为400，confirm默认值为180，tips默认值为80
                    maxWidth: 240,//设置tips对话框的最大宽度,默认为240px。仅在tips对话框下生效，该项存在时，width属性将失效。
                    maxHeight: 'auto', //设置tips对话框的最大高度,默认为auto。仅在tips对话框下生效，该项存在时，height属性将失效。
                    padding:'0 16px 1em 10px',//(默认值: 继承 css 文件设置) 设置消息内容与消息容器的填充边距，即 style padding属性
                    align: 'bottom left',//设置对话框与其他元素的对齐方式。仅在show(elem)与showModal(elem)传入元素时生效。默认值: "bottom left"。可选："top left" "top" "top right" "right top" "right" "right bottom" "bottom right" "bottom" "bottom left" "left bottom" "left" "left top"。
                    skin: 'dialogSkin dialogSkin2',//设置对话框额外的className参数,多个className请使用空格隔开。
                    fixed: false, //是否开启固定定位 默认false不开启|true开启
                    quickClose: false, //点击空白处快速关闭 默认false不关闭|true关闭
                    modal: true ,//是否开启模态框状态  默认false不开启|true开启,confirm默认状态为true
                    backdropBackground:'#000',//设置遮罩颜色，默认 #000。
                    backdropOpacity:0.7, //设置遮罩透明度，默认 0.7，取值范围：0~1 。
                    beforeOpen: function() {console.log('对话框打开时执行。')}, //对话框打开之前执行。
                    escClose:true,//esc键快速关闭对话框，默认为true
                    zIndex:990   // 对话框的z-index值，默认是1024。
                };
                var dialog = new Dialog(config);
            });
        }

        var delDialogBox = function(e) {
            var config = null;
            var nodes = list.getCheckedRows();
            console.log(e)
            if(nodes.length < 1 && e.currentTarget.id === 'btnDel') {
                config = {
                    mode: 'tips',
                    content: '<div style="text-align:center;margin-top:70px">请选择至少一条数据进行删除！</div>',
                    width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                    cancelDisplay: false
                };
                var dialog = new Dialog(config);
            } else {
                config = {
                    mode: 'confirm', //对话框模式，默认normal标准|tips浮动层|confirm确认对话框
                    title: "删除提示", //对话框标题
                    content: '<div style="text-align:center;margin-top:50px">确认删除选择的项目？</div>' /* + content.substring(0,content.length-1)*/ , //对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                    ok: function() {
                        delModule(e);
                        return true;
                    }, // 配置该项时才会出现ok按钮，回调函数可为空。如果指定 return false 则执行完方法后不关闭对话框。默认 return true
                    okValue: '确定', //确定按钮的文本 默认是 ‘ok’
                    cancel: function() {}, //取消按钮的回调函数,配置该项时才会出现关闭按钮，回调函数可为空。
                    cancelValue: '取消', //取消按钮的文本 默认是 ‘关闭’
                    cancelDisplay: true, //是否显示取消按钮 默认true显示|false不显示
                    width: 300, //对话框宽度，normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 120, //对话框高度，normal默认值为400，confirm默认值为180，tips默认值为80
                    padding: '0 16px 1em 10px', //(默认值: 继承 css 文件设置) 设置消息内容与消息容器的填充边距，即 style padding属性
                    align: 'bottom right', //设置对话框与其他元素的对齐方式。仅在show(elem)与showModal(elem)传入元素时生效。默认值: "bottom left"。可选："top left" "top" "top right" "right top" "right" "right bottom" "bottom right" "bottom" "bottom left" "left bottom" "left" "left top"。
                    skin: 'dialogSkin dialogSkin2', //设置对话框额外的className参数,多个className请使用空格隔开。
                    fixed: true, //是否开启固定定位 默认false不开启|true开启
                    quickClose: false, //点击空白处快速关闭 默认false不关闭|true关闭
                    modal: true, //是否开启模态框状态  默认false不开启|true开启,confirm默认状态为true
                    beforeOpen: function() {}, //对话框打开之前执行。
                    zIndex: 990 // 对话框的z-index值，默认是1024。
                };
                var delDialog = new Dialog(config)
            }
        };
        

        return initialize;
    });