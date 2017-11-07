require(['list', 'buttonGroup', 'date', 'selectTree', 'businessSelectTree', 'businessSelect', 'select', 'indexLoad', 'crossAPI'], 
    function(List, ButtonGroup, Mydate, SelectTree, BusinessSelectTree, BusinessSelect, Select, IndexLoad){

    var _list = null, 
        _buttonGroup = null, 
        _date = null, 
        _doubleDate = null, 
        _businessSelectTree = null,
        _selectTree = null,
        _selectList1 = null,
        _selectList2 = null,
        _indexModule = null,
        _select = null,
        _businessSelect = null;

    //系统变量-构造函数
    // IndexLoad(function(indexModule, options){
    //     _indexModule = indexModule;
    //     searchFormInit.call(this);
    //     listInit.call(this);
    //     eventInit.call(this)
    // })
    //业务代码-事件初始化
    var eventInit = function(){
        $('.btnSearch').on('click', function(){
            _list.search()
        });
    }

    var searchFormInit = function(){
        _selectTree = new SelectTree({
            el:$('.selectTree'),
            title: '部门选择',
            label: '弹出树',
            check: true,
            name: 'requestType',
            text: '张三',
            value: '13612345611',
            textField: 'name',
            valueFiled: 'id',
            expandAll: true,
            childNodeOnly: true,
            url: '../../../data/selectTree.json'
        });
        //弹出树业务组件使用
        _businessSelectTree = new BusinessSelectTree({
            el:$('.businessSelectTree'),
            codeType:'SR.USER.LEVEL.SUBS_LEVEL',
        });
        // 日期组件
        // 单日期
        _date = new Mydate({
            el:$('.date'),
            label:'日期',
            name:'startTime',    //开始日期文本框name
            defaultValue:laydate.now(),     //默认日期值
            // istime: true,
            // istoday: false,
            choose:function(){} //用户选中日期时执行的回调函数
        });
        // 双日期
        _doubleDate = new Mydate({
            el:$('.doubleDate'),
            label:'开始结束日期',     //label内容
            double:{    //支持一个字段里显示两个日期选择框
                start:{
                    name:'startTime',   //开始日期文本框name
                    format: 'YYYY-MM-DD',   //日期格式
                    defaultValue:laydate.now(),     //默认日期值
                    min: laydate.now(-1),   //最小日期
                    max: '2099-06-16 23:59:59', //最大日期
                    istime: true,       
                    istoday: false,
                    choose: function(datas){
                        this.end.min = datas;     //设置结束日期的最小限制
                        this.end.start = datas;     //设置结束日期的开始值
                    }
                },
                end:{
                    name:'endTime',     //结束日期文本框name
                    format: 'YYYY-MM-DD',   //日期格式
                    defaultValue:laydate.now(),     //默认日期值
                    min: laydate.now(-1),   //最小日期
                    max: '2099-06-16 23:59:59', //最大日期
                    istime: true,
                    istoday: false,
                    choose: function(datas){
                        this.start.max = datas;     //设置开始日期的最大日期
                    }
                }
            }
        })
        // selectListinit相关
        _selectList1 = _indexModule.selectListInit({
            el:$('.selectList1'),
            title: '城市选择',
            label: '弹出列表',
            name: 'city',
            url: 'js/example/city1',
            nameField: 'anoceIssueStsCdShow',
            valueField: 'anoceTitleNm',
            height: 250
        }, { type: 1 });
        // selectListinit相关
        _selectList2 = _indexModule.selectListInit({
            el:$('.selectList2'),
            title: '状态选择',
            label: '状态列表',
            name: 'city',
            url: 'js/example/city2',
            nameField: 'anoceRecStsCdShow',
            valueField: 'opTime',
            height: 250
        }, { type: 1 });
        // 下拉框业务组件
        _businessSelect = new BusinessSelect({
            el:$('.businessSelect'),
            label:'业务下拉框组件',
            url:'../../../data/select.json'
        })
        // 下拉框组件
        _select = new Select({
            el:$('.select'),
            label:'用户',
            name:'userName',
            disabled:false,
            topOption:"所有",
            value:'',
            url:'../../../data/select.json'
        })
    }

    var listInit = function(){
        // 列表组件
        _list = new List({
            el:$('.listContainer', this.$el),
            className: 'listContainer',
            field: {
                boxType: 'checkbox',
                key: 'id',
                popupLayer: {
                    text: "详情",
                    width: 800,
                    height: 250,
                    groups: [{
                        title: '<span style="color:#f00; ">title0</span>',
                        items: [
                            [{
                                text: '公告名称',
                                name: 'anoceTitleNm'
                            }, {
                                text: '公告ID',
                                name: 'anoceId'
                            }]
                        ]
                    }, {
                        title: 'title1',
                        items: [
                            [{
                                text: '公告类型',
                                name: 'typeNm'
                            }, {
                                text: '公告类别ID',
                                name: 'anoceTypeId'
                            }],

                            [{
                                text: '发布状态',
                                name: 'anoceIssueStsCdShow'
                            }, {
                                text: '有效状态',
                                name: 'anoceRecStsCdShow'
                            }],
                            [{
                                text: '生效时间',
                                name: 'bgnEffTime'
                            }, {
                                text: '失效时间',
                                name: 'endEffTime'
                            }]
                        ]
                    }, {
                        title: 'title2',
                        items: [
                            [{
                                text: '接收组织',
                                name: 'rcvOrgBrnchNm'
                            }]
                        ]
                    }]
                },
                items: [{
                    text: '公告标题',
                    name: 'anoceTitleNm',
                    className: 'w120'
                }, {
                    text: '公告类别',
                    name: 'typeNm'
                }, {
                    text: '紧急程度',
                    name: 'urgntExtentTypeCdShow'
                }, {
                    text: '发布状态',
                    name: 'anoceIssueStsCdShow'
                }, {
                    text: '有效状态',
                    name: 'anoceRecStsCdShow'
                }, {
                    text: '创建时间',
                    name: 'crtTime'
                }, {
                    text: '操作日期',
                    name: 'odrOpTime'
                }],
                button: {
                    className: 'btnHandle',
                    render: function(e, item) {
                        return '<a href="">链接1</a>';
                    },
                    items: [{
                        text: '编辑',
                        name: 'editor',
                        click: function(e, item) {
                            console.log('editor is checked.')
                        }
                    }, {
                        text: '查看',
                        name: 'viewer'
                    } ]
                }
            },
            page: {
                customPages: [2, 3, 5, 10, 15, 20, 30, 50],
                perPage: 2,
                total: true,
                align: 'right',
                button: {
                    className: 'btnStyle',
                    // url:'../js/list/autoRefresh',
                    items: [{
                        text: '删除',
                        name: 'deleter',
                        click: function(e) {
                            // 打印当前按钮的文本
                            console.log('点击了删除按钮' + '+' + this.text)
                        }
                    }, {
                        text: '暂停',
                        name: 'stopToggle',
                        click: function(e) {
                            // 打印当前按钮的文本
                            console.log('点击了暂停按钮' + '+' + this.text)
                        }
                    }]
                }
            },
            data: {
                url: '../../../data/list_notice.json',
            }
        });
    
        // this.$el.append(_list.$el);
    }

    // return initialize;

});