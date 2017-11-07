/**
 * 普通业务模块示例
 */
define([
    'Util',
    'dialog',
    'text!tpl/example/commonExample.tpl',
    'list',
    'date',
    'select',
    'selectTree'
    ],
    function(Util,Dialog,tpl,List, MyDate, Select, SelectTree){
    var select;
    //系统变量-定义该模块的根节点
    var $el = null;
    //系统变量-构造函数
    var _indexModule = null, list = null;
    var initialize = function(indexModule, options,tabItem){
        $el = $(tpl);
        _indexModule = indexModule;
        //事件--点击切换tab后事件回调
        $(tabItem).on("tabActive",function(){
            console.log('common example')
            tabItem.show(true);//刷新表单
        });
        
        //业务相关代码
        eventInit();
        searchFormInit();
        listInit();
        //将根节点赋值给接口
        this.content = $el;
        // crossApi.createTab('11',"http://localhost:8892/#dXJsPWpzL2V4YW1wbGUvY29tcG9uZW50L3Byb2Nlc3MvcHJvY2Vzcw",{"data":1});
    };

    //业务代码-事件初始化
    var eventInit = function(){
        // $('.btnSearch',$el).on('click',search);
        $el.on('click','.btnSearch',search);
        $el.on('click','.iframe-test', addiframe);
        $el.on('click','.getContact', getContact);
        $el.on('click','.dialog-test', showDialog);
        $el.on('click','.dialog-test1', showDialog1);
        $el.on('click','.btnGetSelected', getSelected);
        $el.on('click','.btnFavorite',favorite)
        $el.on('click','.destroyDialog',destroyDialog)
        $el.on('click','.popAlert',popAlert)
        $el.on('click','.getUserInfo',getUserInfo)
        $el.on('click','.screenLoading',screenLoading)
        $el.on('click','.createTab',createTab)
        $el.on('click','.btnRemove', remove);
        $el.on('click','.js-total', getTotalNum);
        // crossApi.on("submit",function(param){
        //     console.log("list")
        //     console.log(param) //输出   ==>  { name:'zhangsan', age:'18' }
        // })
    };
    var destroyDialog = function(){
        _indexModule.destroyDialog("test");
    }
    var popAlert = function(){
        _indexModule.popAlert('测试弹出框','参数分离');
        // _indexModule.popAlert({
        //     content:'参数合并',
        //     title:'测试弹出框',
        //     callback:function(){alert(1111)},
        //     isfadeout: true
        // });
    }
    var getUserInfo = function(){
        // console.log(_indexModule.getUserInfo());
        crossApi.getIndexInfo(function(params){
            param = params;
            alert("index数据------" + JSON.stringify(param))

        })
    }
    var getContact = function(){
        crossApi.getContact(name,function(params){
            param = params;
            alert("index数据------" + JSON.stringify(param))
        })
    }
    var addiframe = function(){
        crossApi.getIndexInfo(function(params){
            $("#content").append("<iframe src='http://localhost:8892'></iframe>")
        })
    }
    var screenLoading = function(){
        _indexModule.screenLoading.show('加载中...');
    }
    var createTab = function(){
        _indexModule.main.createTab('测试模块', 'js/example/exampleSingle',{ businessID:15 });
    }
    var favorite = function(){
        new Dialog({
            mode:'confirm',
            title:'标题',
            content:'test info.', 
            ok: function () {
                console.log('您点击了确认按钮');
            },
            cancel: function () {
                console.log('您点击了取消按钮');
            }
        });
    }

    var getSelected = function(){
        console.log(list.getSelected());
    };

    var showDialog = function(e){
        _indexModule.showDialog({
            mode: 'confirm',
            title:'测试模块', 
            url:'js/example/component/list/list', 
            modal:0,
            id:"test",
            ok: function () {
                console.log('您点击了确认按钮');
            },
            cancel: function () {
                console.log('您点击了取消按钮');
            }
        });
        console.log('show dialog.')
    };
var showDialog1 = function(e){
        _indexModule.showDialog({
            mode: 'confirm',
            title:'测试模块1', 
            url:'js/example/component/list/list', 
            modal:0,
            id:"test1",
            ok: function () {
                console.log('您点击了确认按钮');
            },
            cancel: function () {
                console.log('您点击了取消按钮');
            }
        });
        console.log('show dialog.')
    }; 
    var remove = function(e){
        console.log('items already removed.')
    };

    //获取列表所有数据
    var getTotalNum=function(){
        select.enable();
    };

    var searchFormInit = function(){
        //服务请求类型
        var config = {
            el:$('.requestTypeWrap',$el),
            title:'部门选择',
            label:'弹出树',
            check:true,
            name:'requestType',
            text:'黄华林,业务部',
            value:'13612345611,2',
            textField:'name',
            // childNodeOnly:false,
            // childNodeOnly:true, //仅仅选择子节点到文本域
            expandAll:true,
            // checkAllNodes:true,
            url:'data/selectTree.json'
        };
        var selectTree = new SelectTree(config);
        selectTree.on('confirm',function(nodes){
            // if(nodes && nodes[0] && nodes[0].isParent){
            //     console.log("请选择一个子节点");
            //     return false;
            // }
        });
        

        //弹出异步树
        var asyncConfig = {
            el:$('.selectAsyncTree',$el),
            title:'业务选择',
            label:'弹出异步树',
            check:true,
            async:true,
            name:'requestType1',
            url:'data/selectAsyncTree.json'
        };
        var selectAsyncTree = new SelectTree(asyncConfig);
        //用户级别
       /* var select = new Compts.BusinessSelect({
            el:$('.userLevelWrap',$el),
            codeType:'CS_SR_ASSIST_DEAL_REQ@CURR_NODE_TYPE'
        });*/
      /*  new Compts.date({
            el:$('#startTime',$el),
            label:'时间',
            name:'startTime',    //字段名
            format: 'YYYY-MM-DD',    //日期格式
            min: laydate.now(0),         //最小日期限制
            istime: true,    //是否显示时间
            istoday: false,
            choose:function(){
                console.log(arguments);
                debugger;
            }
        });*/
        new MyDate( {
            el:$('#startTime',$el),
            label:'时间',
            double:{    //支持一个字段里显示两个日期选择框
                start:{
                    name:'startTime',
                    format: 'YYYY/MM/DD',
                    min: laydate.now(-1),
                    max: '2099-06-16 23:59:59',
                    istime: true,
                    istoday: false,
                    choose: function(datas){
                        this.end.min = datas;     //设置结束日期的最小限制
                        this.end.start = datas;     //设置结束日期的开始值
                    }
                },
                end:{
                    name:'endTime',
                    format: 'YYYY/MM/DD',
                    min: laydate.now(-1),
                    max: '2099-06-16 23:59:59',
                    istime: true,
                    istoday: false,
                    choose: function(datas){
                        this.start.max = datas;     //设置开始日期的最大日期
                    }
                }
            }
        });

        select=new Select({
            el:$('.userLevelWrap',$el),
            label:'用户级别',
            name:'subsLevel',
            // disabled:true,
            topOption:"所有",
            value:'',
            url:'data/select.json'
        });
        select.on("change",function(e,valueObj){
            console.log(valueObj);
        });
    };

    var search = function(e){
        var searchParam = {
            requestType:$('.searchContainer .requestType',$el).val()
        };
        var $form = $('.searchContainer form', this.$el);
        var result = Util.form.serialize($form);
        console.log(result);
        list.search(searchParam);
    };



    //业务代码-列表初始化
    var listInit = function(){
        var config = {
            el:$('.listContainer',$el),
            field:{
                boxType:'checkbox',
                key:'id',
                popupLayer:{
                    width:500,
                    height:100,
                    groups:[
                        {
                            items:[
                                [
                                    {text:'标题',name:'text'}
                                ]
                            ]
                        },
                        {
                            items: [
                                [
                                    {text:'发布人',name:'publishUser'},
                                    { text:'发布时间',name:'publishTime' }
                                ]
                            ]
                        }
                    ]
                },
                items:[
                    { text:'标题',title:'text',name:'text',className:'w120',click:function(e,item){
                        console.log(item)
                    },render:function(item,val){
                        //return '<a href="###">'+val + '</a>'
                        return val;
                    } },
                    { text:'发布人',title:'content',name:'publishUser',className:'w70',render:function(item,val,$src){
                        $src.on('click', '.link1', function(e){
                            console.log(val)
                        });
                        $src.on('click', '.link2', function(e){
                            console.log(val)
                        });
                        return '<a href="###" class="link2">'+val + '</a><a href="###" class="link2">链接2</a>'
                        //return val;
                    } },
                    { text:'发布时间',name:'publishTime' }
                ],
                button:{
                    className:'w90',
                    items:[
                        { text:'查看',name:'viewer',click:function(e,item){ 
                            console.log('editor is checked.')
                        } }
                    ]
                }
            },
            page:{
                button:{
                    items:[
                        { text:'删除',name:'deleter',click:function(item){ } },
                        { text:'暂停',name:'stopToggle' }
                    ],
                    url:'../src/js/example/component/list/autoRefresh',
                    param:{ a:'a111' }
                }
            },
            data:{
                url:"/front?key=001"
            }
        };
        list = new List(config);
        list.search({});
        list.on('checkboxChange',function(e,item, checked){
            console.log(item)
        });
        list.on('rowDoubleClick',function(e,item){
            // console.log(item)
        });
        list.on('success',function(result){
            console.log(result);
            console.log("total为："+list.total);
        });   
    };
    return initialize;
});
