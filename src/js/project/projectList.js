/**
 * 普通业务模块示例
 */
define(['Util',
        'list',
        'form',
        'text!tpl/project/projectList.tpl',
        'dialog',
        'text!tpl/project/tabelList.tpl',
        'select',
        'tab',
        'loading',
        '../common/getPath',
        '../common/getQueryString'
    ],
    function(Util, List, Form, tpl, Dialog, tabelTpl, Select, Tab, Loading, AjaxPath, GetQueryString) {
        require(['style!css/style.css']);

        var $el = null;

        var _indexModule = null,
            list = null,
            tplId = null,
            tab = null,
            handLoading = null,
            loadingConfig = null,
            selectDrop = null,
            isShow = false;
        var initialize = function(indexModule, options, tabItem) {
            $el = $(tpl);
            _indexModule = indexModule;

            // 事件--点击切换tab后事件回调
            $(tabItem).on("tabActive", function() {
                console.log('common example');
                tabItem.show(true); // 刷新表单
            });

            tab = tabItem;
            createLoading();
            tplId = options.menuId;

            // 业务相关代码
            eventInit();
            this.content = $el;

            listInit();
        };

        var eventInit = function (){
            //页面除dialog按钮功能
            $el.on('click', '#btnAdd', addProject);
            $el.on('click', '#btnDel', delProject);
            $el.on('click', '#btnExp', expUsers);
            $el.on('click', '.btnSearch', search);
            $el.on('click', '.btnReset', searchRest);
            $el.on('click', '.projectEditBtn', editProject);
            $el.on('click', '.projectDeleteBtn', delProject);
            $('#tabList li.' + tplId).on('click', tabActive);
            $(document).on('click','#isTrue',save);
        }

        var tabActive = function() {
            // listInit();
            search();
        }

        var search = function() {
            var data = Form.serialize($('.searchProjectForm', $el));
            data.limit = 10;
            data.page = 1;
            list.search(data);
        }

        var searchRest = function(){
            $("input[name=projectName]",$el).val("");
            $("input[name=tagName]",$el).val("");
            list.search();
        }

        var addProject = function(e) {
            tab.createTab({
                title: '新增项目',
                closeable: 1, //是否可以关闭 0false不可以|1true可以
                className: 'addProjectTab'
            });
            tab.switchTab('新增项目');
            var projectdata = {};
            projectdata.menuId = tplId;
            require(['js/project/addProject'], function(addProjectContent) {
                var result = new addProjectContent({}, projectdata, tab);
                tab.content(result.content);
            });
            
        }

        var editProject = function(e, index){
            // console.log(e.currentTarget.parentNode.parentNode.rowIndex);
            
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
                    title: '修改项目',
                    closeable: 1, //是否可以关闭 0false不可以|1true可以
                    className: 'editProjectTab'
                });
                tab.switchTab('修改项目');
                var projectdata = datas[0];

                var positiondata = datas[0];
                // positiondata.orgId=selectdata.id;
                // positiondata.orgName=selectdata.name;
                projectdata.menuId = tplId;
                require(['js/project/editProject'], function(projectEditContent) {
                    var result = new projectEditContent({}, projectdata, tab);
                    tab.content(result.content);
                });
            }
        }

        var listInit = function (){
            var config = {
                el: $('.listContainer', $el),
                ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置；慎用
                    method:'GET'
                },
                field: {
                    boxType: 'checkbox',
                    key: 'id',
                    items: [
                    {
                        text: '项目名称',
                        title: 'projectName',
                        name: 'projectName',
                        className: 'w90',
                        sorting:1,
                        click: function (e, val,item) {
                            // var codeNum=GetQueryString('code');
                            // var systemIdStr=GetQueryString('systemid');
                            // var objBox ={
                            //     code : codeNum,
                            //     systemid: systemIdStr
                            // };
                            // Util.ajax.postJson(AjaxPath+"http://192.168.1.108:8089/devops-auth/login/check", objBox, function(result, isok) {
                            // Util.ajax.postJson("http://192.168.1.108:8089/devops-auth/login/check", objBox, function(result, isok) {
                            //     是管理员或产品经理 ? isShow = true : isShow = false;
                                creatDialog(e, item);
                                creatSelect(item);
                                $("#isTrue").prev().val(item.data.spacekey);
                                // if(result.token != 管理员){
                                //     //如果不是系统管理员修改按钮不可见
                                //     $("button.ui-dialog-autofocus").css({'display':'none'})
                                // }
                                
                                // setTimeout(function(){ $('#isTrue').on('click',save); },100)
                                // $('#isTrue').on('click',save);
                            // });
                        },
                        render: function (item, val) {
                            return '<a href="javascript:;">' + val + '</a>';
                        }
                    },
                    {
                        text: '项目标识',
                        title: 'tagName',
                        name: 'tagName',
                        className: 'w90',
                        sorting:1,
                        click: function (e, val,item) {
                            creatDialog(e, item);
                            creatSelect(item);
                            $("#isTrue").prev().val(item.data.spacekey);
                            // setTimeout(function(){ $('#isTrue').on('click',save); },100);
                            // $('#isTrue').on('click',save);
                        },
                        render: function (item, val) {
                            return '<a href="javascript:;">' + val + '</a>';
                        }
                    },
                    {
                        text: '开始时间',
                        title: 'startTime',
                        name: 'startTime',
                        className: 'w90',
                        sorting:1,
                        render: function (item, val) {
                            return val;
                        }
                    },
                    {
                        text: '结束时间',
                        title: 'endTime',
                        name: 'endTime',
                        className: 'w90',
                        sorting:1
                    },
                    {
                        text: '状态',
                        title: 'projectStatus',
                        name: 'projectStatus',
                        className: 'w90',
                        sorting:1,
                        render: function (item, val) {
                            var status = "";
                            if(val===1) {
                                status = "新建";
                            } else if(val===2) {
                                status = "开发中";    
                            } else if(val===3) {
                                status = "转测";    
                            } else if(val===4) {
                                status = "已结束";    
                            }
                            return status;
                        }
                    },
                    {
                        text: '项目经理',
                        title: 'userName',
                        name: 'userName',
                        className: 'w90',
                        sorting:1
                    },
                    {
                        text: '需求负责人',
                        title: 'requireLeader',
                        name: 'requireLeaderName',
                        className: 'w90',
                        sorting:1
                    },
                    {
                        text: '开发负责人',
                        title:'developLeader',
                        name: 'developLeaderName',
                        className: 'w90',
                        sorting:1
                    }
                    ,
                    {
                        text: '测试负责人',
                        title: 'testLeader',
                        name: 'testLeaderName',
                        className: 'w90',
                        sorting:1
                    },
                    {
                        text: '操作',
                        title: '',
                        name: '',
                        className: 'w90',
                        click: function (e, val, item) {
                            // console.log(val,item);
                        },
                        render: function (item, val) {
                            return '<button class="t-btn t-btn-blue t-btn-xs projectEditBtn" style="margin-right:8px;margin-left:20px"><a style="color:#fff">修改</a></button><button class="t-btn t-btn-blue t-btn-xs projectDeleteBtn"><a style="color:#fff">删除</a></button>';
                        }
                    }]
                },
                page: {
                    customPages: [2, 3, 5, 10, 15, 20, 30, 50], //可选择每页显示多少条
                    perPage: 10, //默认每页显示多少条记录
                    total: true
                },
                data: {
                    url: AjaxPath + "/projects"
                    // url:"http://192.168.91.172:8089/devops-project/projects"
                    // url:"../../../data/list1.json"
                }
            };
            list = new List(config);
            list.search();
        }

        var creatDialog = function(e, item){
            var projectStatusName = "";
            if(item.data.projectStatus===1) {
                console.log(1111);
                projectStatusName = "新建";
            } else if(item.data.projectStatus===2) {
                projectStatusName = "开发中";    
            } else if(item.data.projectStatus===3) {
                projectStatusName = "转测";    
            } else if(item.data.projectStatus===4) {
                projectStatusName = "已结束";    
            }
            item.data.projectStatusName = projectStatusName;

            var config = {
                mode: 'normal', //对话框模式，默认normal标准|tips浮动层|confirm确认对话框
                delayRmove: "", //延迟删除秒数设定 tips默认3秒,非tips默认不关闭。
                title: item.data.projectName+'项目信息', //对话框标题，
                content: Util.hdb.compile(tabelTpl)(item), //对话框内容，可以是字符串、html代码段,tpl对象。默认为loading状态（由点组成的圈。大段代码建议使用 tpl。
                ok: function() { 
                    console.log('点击了修改按钮');
                    editProject(e, e.currentTarget.parentNode.rowIndex);
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
                height: 400, //对话框高度，normal默认值为400，confirm默认值为180，tips默认值为80
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
        }

        var creatSelect = function(item){
            Util.ajax.getJson(AjaxPath+"/dropdown?modual=inventory&type=inventoryType&inventoryType=13", {}, function(result, isok) {
                console.log(item)
                var config = {
                    el:'#confluenceServer',       //要绑定的容器
                    ajax:{    //所有jquery.ajax的配置项均可配置，这些配置将替换底层组件的配置，<span class="s">慎用</span>
                        method:'GET'
                    },
                    selectText:false,       //是否显示  ‘选择|清除’  模式
                    name:'inventoryId',    //下拉框单元右侧下拉框名称
                    disabled:false,     //组件是否被禁用
                    topOption:"请选择", //设置最顶部option的text属性
                    value:'',//初始选中项设置 默认是按value，如果你想按id设置 也可以 value:[&quot;id&quot;,1],这样设置
                    textField:"value",   //设置下拉框内容，填写数据中对应的字段名
                    valueField:"key",//设置下拉框value，填写数据中对应的字段名
                    datas: result.beans,         //数据源
                    loadAtClick:false,// true--第一次点击时渲染|false或不配置--初始化时渲染
                    /*dataReady:function(){
                        console.log(23423432)
                    }, //select的DOM结构加载完后执行*/
                    // url:'../../data/select.json'  //数据源，不建议使用，后期将会移除
                };
                selectDrop = new Select(config);
                
                // if(item.data.inventory_name){
                    selectDrop.setValue('"'+item.data.inventoryId+'"');
                // } 
                 
            });
        }

        var expUsers = function() {

            /*if($(".orgIdHide").val()) {
                var ids = "";
                for(var i = 0; i < list.getCheckedRows().length; i++) {
                    ids += list.getCheckedRows()[i].id + ",";
                }
                ids = ids.substring(0, ids.length - 1);
                var orgArr = zTree.transformToArray(zTree.getSelectedNodes());
                var orgIds = "";
                for(var i = 0; i < orgArr.length; i++) {
                    orgIds += "," + orgArr[i].id;
                }
                var orgIdsTemp = orgIds.substring(1);

                var loginName = !$(".loginName").val() ? "" : $(".loginName").val();
                var userName = !$(".userName").val() ? "" : $(".userName").val();
                var mobile = !$(".mobile").val() ? "" : $(".mobile").val();

                var form = $('<form method="POST" action="/it/user/expExcel">');
                form.append($('<input type="hidden" name="loginName" value="' + loginName + '">'));
                form.append($('<input type="hidden" name="userName" value="' + userName + '">'));
                form.append($('<input type="hidden" name="mobile" value="' + mobile + '">'));
                form.append($('<input type="hidden" name="ids" value="' + ids + '">'));
                form.append($('<input type="hidden" name="orgIdsTemp" value="' + orgIdsTemp + '">'));
                $('body').append(form);
                form.submit(); //自动提交
            } else {
                new Dialog({
                    mode: 'tips',
                    title: '提示',
                    content: '请先选择组织'
                });
            }*/

        }
        
        var delProject = function(e){
            
            if(e.currentTarget.id!=="btnDel"){
                $(".listContainer .sn-list-content-locker.sn-list-show table tbody tr.selected td").click();
                $(".listContainer .sn-list-show table tbody tr").eq(e.currentTarget.parentNode.parentNode.rowIndex).find('td').click();
            }

            handLoading = new Loading(loadingConfig);
            var nodes = list.getCheckedRows();
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
                var data = [];
                for(var i = 0; i < nodes.length; i++) {
                    var obj = new Object();
                    obj.id = list.getCheckedRows()[i].id;
                    // obj.orgId = list.getCheckedRows()[i].orgId;
                    // obj.projectName = list.getCheckedRows()[i].projectName;
                    data.push(obj);
                }
                var content = "";
                for(var k = 0; k < data.length; k++) {
                    content = content + data[k].projectName + ",";
                }
                var str = JSON.stringify(data);
                delDialogBox(content, nodes, data, str);
            }    
        }

        var delDialogBox = function(content, nodes, data, str) {
            handLoading.destroy();
            var config = {
                mode: 'confirm', //对话框模式，默认normal标准|tips浮动层|confirm确认对话框
                title: "删除提示", //对话框标题
                content: '<div style="text-align:center;margin-top:50px">确认删除选择的项目？</div>' /* + content.substring(0,content.length-1)*/ , //对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                ok: function() {
                    handLoading = new Loading(loadingConfig);
                    deleteProject(nodes, data, str);
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
        };

        var deleteProject = function(nodes, data, str) {
            if(data.length===1) {
                Util.ajax.getJson(AjaxPath+"/projects/delete/"+nodes[0].id, {}, function(result, isok) {
                    var flag = result.returnMessage;
                    if(undefined === flag) {
                        handLoading.destroy();
                        new Dialog({
                            mode: 'confirm', //对话框模式，默认normal标准|tips浮动层|tips确认对话框
                            title: '提示', //对话框标题
                            width: 300,
                            height: 120,
                            modal: true,
                            content: '<div style="text-align:center;margin-top:50px">与服务器通讯失败，请检查网络！</div>', //对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                            cancelDisplay: false,
                            ok: function() {}, // 配置该项时才会出现ok按钮，回调函数可为空。如果指定 return false 则执行完方法后不关闭对话框。默认 return true
                            okValue: '关闭' //确定按钮的文本 默认是 ‘ok’
                        });
                        return;
                    } else {
                        handLoading.destroy();
                        new Dialog({
                            mode: 'tips',
                            content: '<div style="text-align:center;margin-top:70px">'+ result.returnMessage +'</div>',
                            width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                            height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                            cancelDisplay: false
                        });
                        if(result.returnCode==="0000"){
                            search();
                        }
                    }
                })
            }
            else {
                Util.ajax.postJson(AjaxPath+ "/projects/batchDelete", str, function(result, isok) {
                    var flag = result.returnMessage;
                    if(undefined === flag) {
                        handLoading.destroy();
                        new Dialog({
                            mode: 'confirm', //对话框模式，默认normal标准|tips浮动层|tips确认对话框
                            title: '提示', //对话框标题
                            width: 300,
                            height: 120,
                            modal: true,
                            content: '<div style="text-align:center;margin-top:50px">与服务器通讯失败，请检查网络！</div>', //对话框内容，可以是字符串、html片段、或dom对象,默认为loading状态（点组成的圈）
                            cancelDisplay: false,
                            ok: function() {}, // 配置该项时才会出现ok按钮，回调函数可为空。如果指定 return false 则执行完方法后不关闭对话框。默认 return true
                            okValue: '关闭' //确定按钮的文本 默认是 ‘ok’
                        });
                        return;
                    } else {
                        handLoading.destroy();
                        new Dialog({
                            mode: 'tips',
                            content: '<div style="text-align:center;margin-top:70px">'+ result.returnMessage +'</div>',
                            width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                            height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                            cancelDisplay: false
                        });
                        if(result.returnCode==="0000"){
                            search();
                        }
                    }
                })
            }
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

        var save = function(){
            // console.log(11111,$("#isTrue").prev().val());
            // console.log(22222,$("#confluenceServer").find("select").val())
            // console.log(33333,$("#projectTagName").attr("projectId"));
            // console.log(44444,$("input[name=id]").attr("inventoryId"));
            // console.log(55555,$("input[name=id]").val())
            // console.log(99999,selectDrop.getSelected().key)
            let oId = $("input[name=id]").val();
            let oInput = $("#isTrue").prev().val();
            let oSelect = $("#confluenceServer").find("select").val();
            let inventory_id = $("input[name=id]").attr("inventoryId");
            if(inventory_id && oSelect){
                //空间服务器存在
                Util.ajax.getJson(AjaxPath+"/confluence/updateSpace/"+oId+"/"+selectDrop.getSelected().key+"/"+inventory_id+"/"+oInput, {}, function(result, isok){
                // Util.ajax.getJson("http://192.168.1.102:8089/devops-project/confluence/updateSpace/"+oId+"/"+selectDrop.getSelected().key+"/"+inventory_id+"/"+oInput, {}, function(result, isok){
                    console.log(result)
                        let config = {
                            mode: 'tips',
                            content: '<div style="text-align:center;margin-top:70px">'+result.returnMessage+'</div>',
                            width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                            height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                            cancelDisplay: false
                        };
                        var dialog = new Dialog(config);
                });
            } else if( !inventory_id ) {
                //创建空间服务器
                
                var obj = {
                    projectId:oId,
                    inventoryId: selectDrop.getSelected().key,
                    spacekey : oInput
                };
                Util.ajax.postJson(AjaxPath+"/confluence/createSpace", obj, function(result, isok){
                // Util.ajax.postJson("http://192.168.1.102:8089/devops-project/confluence/createSpace", obj, function(result, isok){
                    console.log(result)
                    let config = {
                        mode: 'tips',
                        content: '<div style="text-align:center;margin-top:70px">'+result.returnMessage+'</div>',
                        width: 300, //对话框宽度，可选项。normal默认值为600，confirm默认值为300，tips默认值为240
                        height: 150, //对话框高度，可选项。normal默认值为400，confirm默认值为180，tips默认值为80
                        cancelDisplay: false
                    };
                    var dialog = new Dialog(config);
                    if(result.beans) $("input[name=id]").attr("inventoryId",result.beans.inventoryId);
                    
                });

            }           
        }

        return initialize;
    });