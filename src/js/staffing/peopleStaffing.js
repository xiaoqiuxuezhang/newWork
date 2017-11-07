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
        'select',
        'cookie',
        'text!tpl/staffing/peoplestaffing.tpl',
        'text!tpl/staffing/editor.tpl',
        'text!tpl/staffing/formation.tpl',
        'simpleTree',
        'text!tpl/staffing/addPeople.tpl',
        'selectTree',
        'text!tpl/staffing/table.tpl'
    ],
    function(Util, List, Form, Dialog, Tab, Loading, AjaxPath, GetQueryString, Select, $cookie, staffTpl, editorTpl, formationTpl, SimpleTree, addPeopleTpl, SelectTree) {
        require(['style!css/style.css']);
        var $el = null;

        var _indexModule = null,
            requireList = null,
            developList = null,
            testList = null,
            tab = null,
            oStaffTpl = null,
            handLoading = null,
            loadingConfig = null,
            listConfig = null,
            excuterSelect = null,
            allPeopleList = null,
            dropSelectTo = null,
            dropSelectOgn = null;
        var initialize = function(indexModule, options, tabItem) {

            $el = $(staffTpl);
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
            
            allListInit();
            initTpl();
        };
        var allListInit = function(){
            listInit('requireListContainer');
            requireList = new List(listConfig);
            requireList.search();
            listInit('developListContainer');
            developList = new List(listConfig);
            developList.search();
            listInit('testListContainer');
            testList = new List(listConfig);
            testList.search();
        }
        var initTpl = function(){
            require(['text!tpl/staffing/table.tpl'], function(tabelTpl){
                // Util.ajax.getJson(AjaxPath+"/projects/"+139+"/users?isLeader=true", {} ,function(result, isok) {
                // console.log(typeof result.beans[0].project_role_id)
                var item = {
                    "beans":{}
                };
                // for(var i = 0; i < result.beans.length; i++){
                //     if(result.beans[i].project_role_id === 1){
                //         item["beans"]["manager"] = result.beans[i].user_name;
                //     } else if(result.beans[i].project_role_id === 2){
                //         item["beans"]["require"] = result.beans[i].user_name;
                //     } else if(result.beans[i].project_role_id === 3){
                //         item["beans"]["develop"] = result.beans[i].user_name;
                //     } else if(result.beans[i].project_role_id === 4){
                //         item["beans"]["test"] = result.beans[i].user_name;
                //     }
                // }
                oTableTpl = Util.hdb.compile(tabelTpl)(item);
                console.log($("#oTabel"))
                $("#oTabel").html(oTableTpl);               
            // });              
            })      
        }


        var eventInit = function (){
            //修改按钮
            $el.on('click', '#requireEditBtn', excuterEdit);
            $el.on('click', '#developEditBtn', excuterEdit);
            $el.on('click', '#testEditBtn', excuterEdit);
            //添加人员点击事件
            $el.on('click', '.addStaffing', addStaffing);

            //添加人员中的模糊查询 查询按钮  重置按钮
            $(document).on("click", ".btnSearch", btnSearch);
            $(document).on("click", ".btnReset", btnSearchRest);
            //删除按钮
            $el.on('click', '#delrequire', delDialogBox);
            $el.on('click', '#deldevelop', delDialogBox);
            $el.on('click', '#deltest', delDialogBox);

            $('#tabList li.' + tplId).on('click', tabActive);
        }

        var excuterEdit = function(e){
            creatDialog(e);
        }

        var tabActive = function() {
            initTpl();
            allListInit();
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

        var listInit = function(content){
            var projectRoleId = null;
            if(content === "requireListContainer"){ projectRoleId = 5 };
            if(content === "developListContainer"){ projectRoleId = 6 };
            if(content === "testListContainer"){ projectRoleId = 7 };
            listConfig = {
                el: $('.'+content, $el),
                ajax: {    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置；慎用
                    method:'GET'
                },
                field: {
                    boxType: 'checkbox',
                    key: 'id',
                    items: [
                    {
                        text: '姓名',
                        title: 'moduleName',
                        name: 'moduleName',
                        className: 'w90',
                        sorting:1,
                        click: function (e, val,item) {
                            console.log(item)
                            creatNameDialog(item)
                            // creatDialog(e, item);
                        },
                        render: function (item, val) {
                            return '<a href="javascript:;">' + val + '</a>';
                        }
                    },
                    {
                        text: '用户名',
                        title: 'moduleDscription',
                        name: 'moduleDscription',
                        sorting:1,
                        className: 'w120'
                    },
                    {
                        text: '手机号',
                        title: 'excuter',
                        name: 'excuter',
                        className: 'w120',
                        sorting:1
                    },
                    {
                        text: '邮箱',
                        title: 'excuter',
                        name: 'excuter',
                        className: 'w120',
                        sorting:1
                    },
                    {
                        text: '操作',
                        title: '',
                        name: '',
                        className: 'w120',
                        click: function (e, val,item) {
                            // console.log(555,$(".sn-list-content-locker.sn-list-show tr.selected"))
                            $(".sn-list-content-locker.sn-list-show tr.selected").find('td').click();
                            // $("."+content+" .sn-list-content-locker.sn-list-show table tbody tr.selected td").click();
                            $("."+content+" .sn-list-show table tbody tr").eq(e.currentTarget.parentNode.rowIndex).find('td').click();
                            // console.log(666,$(".sn-list-content-locker.sn-list-show tr.selected"))
                            delDialogBox(e);
                        },
                        render: function (item, val) {
                            return '<button class="t-btn t-btn-blue t-btn-xs"><a style="color:#fff">删除</a></button>';
                        }
                    }]
                },
                page: {
                    customPages: [2, 3, 6, 5, 10, 15, 20, 30, 50], //可选择每页显示多少条
                    perPage: 6, //默认每页显示多少条记录
                    total: true
                },
                data: {
                    // url: AjaxPath + "/projects/"+138+"/users?projectRoleId="+projectRoleId
                    url:"../../../data/list1.json"
                }
            };
        }


        var creatDialog = function(e){
            var oItem = null,
                config = null,
                name = null;
            console.log(e)
            e.currentTarget.id === "requireEditBtn" ? name = "需求负责人" : (e.currentTarget.id === "developEditBtn" ? name = "开发负责人" : name = "测试负责人");
                config = {
                    mode: 'normal', //对话框模式，默认normal标准|tips浮动层|confirm确认对话框
                    title: '修改'+name, //对话框标题，
                    content: Util.hdb.compile(editorTpl)(), //对话框内容，可以是字符串、html代码段,tpl对象。默认为loading状态（由点组成的圈。大段代码建议使用 tpl。
                    ok: function() {
                        /*Util.ajax.getJson(AjaxPath+"/modules/delete/", {} ,function(result, isok) {
                            var flag = result.returnMessage;
                            if(flag !== '修改成功') {
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
                            } else if(flag === '修改成功'){
                                new Dialog({
                                    mode: 'tips',
                                    content: '<div style="text-align:center;margin-top:70px">删除成功！</div>',
                                    width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                    height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                    cancelDisplay: false
                                });
                                $(e.currentTarget.parentNode.parentNode.children).eq(1).html(33333);
                            }
                        })*/
                        return true;
                    }, 
                    cancel: function() {
                        return true;
                    },
                    cancelValue: '取消', //取消按钮的文本 默认是 ‘关闭’
                    okValue: '提交', //取消按钮的文本 默认是 ‘关闭’
                    cancelDisplay: true, //是否显示取消按钮 默认true显示|false不显示
                    width: 600, //对话框宽度，normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 150, //对话框高度，normal默认值为400，confirm默认值为180，tips默认值为80
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
                    escClose:true,//esc键快速关闭对话框，默认为true
                    zIndex:990   // 对话框的z-index值，默认是1024。
                };
                var dialog = new Dialog(config);
                dropSelect(name);
        }

        var creatNameDialog = function(){
            // Util.ajax.getJson(AjaxPath+"/modules/"+item.data.id, {}, function(result, isok) {
                new Dialog({
                    mode: 'normal', 
                    title: '用户信息', 
                    content: Util.hdb.compile(formationTpl)(), 
                    cancel: function() { 
                        return true;
                    },
                    cancelDisplay: false, //是否显示取消按钮 默认true显示|false不显示
                    width: 600, //对话框宽度，normal默认值为600，confirm默认值为300，tips默认值为240
                    height: 300, //对话框高度，normal默认值为400，confirm默认值为180，tips默认值为80
                    maxWidth: 240,//设置tips对话框的最大宽度,默认为240px。仅在tips对话框下生效，该项存在时，width属性将失效。
                    maxHeight: 'auto', //设置tips对话框的最大高度,默认为auto。仅在tips对话框下生效，该项存在时，height属性将失效。
                    padding:'0 16px 1em 10px',//(默认值: 继承 css 文件设置) 设置消息内容与消息容器的填充边距，即 style padding属性
                    align: 'bottom left',//设置对话框与其他元素的对齐方式。仅在show(elem)与showModal(elem)传入元素时生效。默认值: "bottom left"。可选："top left" "top" "top right" "right top" "right" "right bottom" "bottom right" "bottom" "bottom left" "left bottom" "left" "left top"。
                    skin: 'dialogSkin dialogSkin2',//设置对话框额外的className参数,多个className请使用空格隔开。
                    modal: true ,//是否开启模态框状态  默认false不开启|true开启,confirm默认状态为true
                    backdropBackground:'#000',//设置遮罩颜色，默认 #000。
                    backdropOpacity:0.7, //设置遮罩透明度，默认 0.7，取值范围：0~1 。
                    zIndex:990   // 对话框的z-index值，默认是1024。
                });
                creatZtree();
            // });
        }
        var creatZtree = function(){
            console.log($('#ztreeContainer'));
            // Util.ajax.getJson(AjaxPath+"/", {}, function(result, isok) {
                var setting = {
                    treeId: "ztreeContainer",      //zTree 的唯一标识，初始化后，等于 用户定义的容器的 id 属性值
                    async:{
                        enable: true,        //是否开启异步加载模式
                        //以下配置,async.enable=true时生效
                        url: "",      //Ajax获取数据的地址
                        type: "post",      //Ajax的http请求模式
                        autoParam: [],       //异步加载时需要自动提交父节点属性的参数
                        otherParam:{},       //Ajax 请求提交的静态参数键值对。默认值：[ ]
                        dataFilter:function(treeId, parentNode, responseData){   // 用于对 Ajax 返回数据进行预处理的函数。默认值：null
                            //do something
                        }
                    },
                    callback:{
                        onClick: '', 
                        onRightClick: '',  
                        onCollapse: '',  
                        beforeAsync: null,       
                        beforeCheck: null,       
                        beforeCollapse: null,    
                        beforeRemove: null     
                    },
                    view:{
                        showIcon: false,     //是否显示节点图标，默认值为true
                        showLine: false,     //是否显示节点之间的连线，默认值为false
                        showTitle: false,    //是否显示节点的 title 提示信息(即节点DOM的title属性)，与 setting.data.key.title 同时使用
                        fontCss: {},        //自定义字体
                        nameIsHTML: false  // name 属性是否支持HTML脚本,默认值为false
                    },
                    data:{
                        keep:{
                            leaf: false,
                            parent: false
                        },
                        key:{
                            checked: "checked",
                            children: "children",
                            name: "name",
                            title: "", //若节点配置有title属性，设置title:"title"则显示配置的title值；否则显示节点的name值
                            url: "url"
                        },
                        simpleData:{
                            enable: false,
                            idKey: "id",
                            pIdKey: "pId",
                            rootPId: null
                        }
                    }
                }
				// zTree = new SimpleTree.tierTree($('#ztreeContainer'), result.beans, setting);
			// });
        }
        var dropSelect = function(oName) {
            console.log(11111111111,oName)
            // Util.ajax.getJson( AjaxPath + "/dropdown?modual=require&type=tryPeople&systemId=" + addModuleData.refProject, {}, function(result, isok){
                excuterSelect = new Select({
                    el:$("#excuter"),       //要绑定的容器
                    ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                        method:'GET'
                    }, 
                    label:'指定'+oName+'负责人:', //下拉框单元左侧label文本，可不配置
                    selectText:false,       //是否显示  ‘选择|清除’  模式
                    name:'excuter',    //下拉框单元右侧下拉框名称
                    disabled:false,     //组件是否被禁用
                    topOption:"请选择", //设置最顶部option的text属性
                    value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                    textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                    valueField:"key",//设置下拉框value，填写数据中对应的字段名
                    // datas: result.beans,         //数据源
                    loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                    url:'../../../data/select.json'  //数据源，不建议使用，后期将会移除
                });
            // })
        }

        //弹出添加人员对话框
        var addStaffing = function(e){
            console.log(e);
            new Dialog({
                mode: 'normal', 
                title: '添加人员', 
                content: Util.hdb.compile(addPeopleTpl)(), 
                ok: function() {
                    /*Util.ajax.getJson(AjaxPath+"/modules/delete/", {} ,function(result, isok) {
                        var flag = result.returnMessage;
                        if(flag !== '删除成功') {
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
                            new Dialog({
                                mode: 'tips',
                                content: '<div style="text-align:center;margin-top:50px">'+flag+'</div>',
                                width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                                height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                                cancelDisplay: false
                            });
                        }
                    })*/
                    return true;
                }, 
                cancel: function() {
                    return true;
                },
                cancelValue: '取消', //取消按钮的文本 默认是 ‘关闭’
                okValue: '提交', //取消按钮的文本 默认是 ‘关闭’
                cancelDisplay: true, //是否显示取消按钮 默认true显示|false不显示
                width: 800, //对话框宽度，normal默认值为600，confirm默认值为300，tips默认值为240
                height: 600, //对话框高度，normal默认值为400，confirm默认值为180，tips默认值为80
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
                escClose:true,//esc键快速关闭对话框，默认为true
                zIndex:990   // 对话框的z-index值，默认是1024。
            });
            addDropSelectTo();
            adddropSelectOgn();
            allList();
        }

        var addDropSelectTo = function() {
            // Util.ajax.getJson( AjaxPath + "/dropdown?modual=require&type=tryPeople&systemId=" + addModuleData.refProject, {}, function(result, isok){
                new Select({
                    el:$("#addTo"),       //要绑定的容器
                    ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                        method:'GET'
                    }, 
                    label:'添加到:', //下拉框单元左侧label文本，可不配置
                    selectText:false,       //是否显示  ‘选择|清除’  模式
                    name:'addTo',    //下拉框单元右侧下拉框名称
                    disabled:false,     //组件是否被禁用
                    topOption:"请选择", //设置最顶部option的text属性
                    value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                    textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                    valueField:"key",//设置下拉框value，填写数据中对应的字段名
                    // datas: result.beans,         //数据源
                    loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                    url:'../../../data/select.json'  //数据源，不建议使用，后期将会移除
                });
            // })
        }

        var adddropSelectOgn = function() {
            // Util.ajax.getJson( AjaxPath + "/dropdown?modual=require&type=tryPeople&systemId=" + addModuleData.refProject, {}, function(result, isok){
                var selectTree3 = new SelectTree({
                    el:'#organization',                  //组件要绑定的容器，默认为body（此项可不配置或留空）
                    inputClassName:'',       //给所选input框添加类名，值默认为bg-tree 
                    className:'',    //弹出树面板树上添加的类名
                    label:'所属组织：',     //所选input框左侧label的名称
                    check:true,         //false时为单选，true时为多选
                    async:{
                        enable:false  //是否启用异步树
                    },         
                    name:'departNameRadio',      //所选input框兄弟元素隐藏域的名称，用于存储用户选中的值
                    text:'张三',            //组件初始化时，要显示在文本域中的内容
                    value:'11',           //组件初始化时，要显示在隐藏域中的value值
                    textField:'name',  //用户从树上选中节点时，要显示在文本域中的内容,默认为name值
                    valueField:'id',   //用户从树上选中节点时，要显示在隐藏域中的内容
                    expandAll:true,     //默认是否展开所有节点
                    checkAllNodes:true,
                    childNodeOnly:true, //true仅仅选择子节点到文本域；false连同父级节点一同选择到文本域
                    url:'../../../data/selectTree.json'
                })
            // })
        }

        var allList = function (){
            var config = {
                el: $('.addListContainer'),
                ajax: {    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置；慎用
                    method:'GET'
                },
                field: {
                    boxType: 'checkbox',
                    key: 'id',
                    items: [
                    {
                        text: '姓名',
                        title: 'moduleName',
                        name: 'moduleName',
                        className: 'w90',
                        render: function (item, val) {
                            return '<a href="javascript:;">' + val + '</a>';
                        }
                    },
                    {
                        text: '用户名',
                        title: 'moduleDscription',
                        name: 'moduleDscription',
                        className: 'w90'
                    },
                    {
                        text: '手机号',
                        title: 'excuter',
                        name: 'excuter',
                        className: 'w120'
                    },
                    {
                        text: '手机号',
                        title: 'excuter',
                        name: 'excuter',
                        className: 'w120'
                    }]
                },
                page: {
                    customPages: [2, 3, 5, 10, 15, 20, 30, 50], //可选择每页显示多少条
                    perPage: 10, //默认每页显示多少条记录
                    total: true
                },
                data: {
                    // url: AjaxPath + "/modules"
                    url:"../../../data/list1.json"
                }
            };
            allPeopleList = new List(config);
            allPeopleList.search();
        }

        var btnSearch = function() {
            var data = Form.serialize($('.addForm'));
            data.limit = 10;
            data.page = 1;
            // data.systemId = $cookie.get("projectSelectId");
            allPeopleList.search(data);
        }

        var btnSearchRest = function(){
            $("#userName").val("");
            $("#email").val("");
            var data = {};
            // data.systemId = $cookie.get("projectSelectId");
            allPeopleList.search(data);
        }

        //删除确认对话框
        var delDialogBox = function(e) {
            var config = null;
            var nodes = null;
            if(e.currentTarget.id === 'delrequire'){
                nodes = requireList.getCheckedRows();
            } else if(e.currentTarget.id === 'deldevelop'){
                nodes = developList.getCheckedRows();
            } else if(e.currentTarget.id === 'deltest'){
                nodes = testList.getCheckedRows();
            } else if(e.currentTarget.id === ""){
                nodes = requireList.getCheckedRows().length ? requireList.getCheckedRows(): ( developList.getCheckedRows().length ? developList.getCheckedRows() : testList.getCheckedRows() );
            }
            if(nodes.length < 1 && e.currentTarget.id !== '') {
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
                        delPeopleList(e,nodes);
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
        //删除操作
        var delPeopleList = function(e,nodes){
            handLoading = new Loading(loadingConfig);
            console.log(9999,nodes === requireList.getCheckedRows())
            /*if(e.currentTarget.id ===""){
                $(".listContainer .sn-list-content-locker.sn-list-show table tbody tr.selected td").click();
                $(".listContainer .sn-list-show table tbody tr").eq(e.currentTarget.parentNode.parentNode.rowIndex).find('td').click();
            }*/
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
        return initialize;
    });