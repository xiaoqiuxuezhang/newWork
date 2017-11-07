
/**
 * tab 组件示例
 */
define(['Util','Compts'],
    function(Util,Compts){

    //系统变量-定义该模块的根节点
    var $el = $('<div></div>'), _indexModule;
    //系统变量-构造函数
    var initialize = function(indexModule, options){
        _indexModule = indexModule;
        // Util.svMap.add('notice','notice.json','/fraont?key=001');
        var config = {
            el:$el,
            field:{
                boxType:'checkbox',
                key:'id',
                items:[
                    { text:'标题',title:'text',name:'text',className:'w120' },
                    { text:'发布人',title:'content',name:'publishUser',className:'w70'},
                    { text:'发布时间',name:'publishTime' }
                ]
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
                // url:Util.svMap.get('notice')
            }
        };
        list = new Compts.List(config);
        list.search({});

        this.content = $el;
    };



    return initialize;
});
