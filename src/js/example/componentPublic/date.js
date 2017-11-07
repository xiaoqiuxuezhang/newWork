/**
 * Created by wangwei on 2017/2/9.
 * date 组件示例
 */
define(['date', 'jquery'], function(MyDate) {
    //系统变量-定义该模块的根节点
    // new MyDate({
    //     el: $('#date2'),
    //     label: '开始结束日期', //label内容
    //     double: { //支持一个字段里显示两个日期选择框
    //         start: {
    //             name: 'startTime', //开始日期文本框name
    //             format: 'YYYY-MM-DD', //日期格式
    //             min: laydate.now(-1), //最小日期
    //             max: '2099-06-16 23:59:59', //最大日期
    //             istime: true,
    //             istoday: false,
    //             choose: function(datas) {
    //                 this.end.min = datas; //设置结束日期的最小限制
    //                 this.end.start = datas; //设置结束日期的开始值
    //             }
    //         },
    //         end: {
    //             name: 'endTime', //结束日期文本框name
    //             format: 'YYYY-MM-DD', //日期格式
    //             min: laydate.now(-1), //最小日期
    //             max: '2099-06-16 23:59:59', //最大日期
    //             istime: true,
    //             istoday: false,
    //             choose: function(datas) {
    //                 this.start.max = datas; //设置开始日期的最大日期
    //             }
    //         }
    //     }
    // });
    var date,date1;
    date = new MyDate({
        el: $('#date'),
        label: '日期',
        isReadOnly:true,
        name: 'startTime', //开始日期文本框name
        format: 'yyyy-MM-dd', //日期格式
        defaultValue: '2018-09-17', //默认日期
        min: nowTime(0), //最小日期限制
        type:'date',
        done: function() {} //用户选中日期时执行的回调函数
    });
    //自定义事件测试
    date.on('focusInput', function(e) {
        console.log($(e.currentTarget));
    });

    date1 = new MyDate({
        el: $('#date2'),
        label: '时间',
        double: { //支持一个字段里显示两个日期选择框
            start: {
                name: 'startTime',
                isReadOnly:true,
                format: 'yyyy-MM-dd HH:mm:ss',
                defaultValue: '2018-09-16 00:00:00', //默认日期值
                min: nowTime(-1,'yyyy-MM-dd HH:mm:ss'),
                max: '2018-09-17 12:00:00',
                type:'datetime',
                done: function(datas) {
                    date1.options.double.end.min = datas; //设置结束日期的最小限制
                }
            },
            end: {
                name: 'endTime',
                isReadOnly:true,
                format: 'yyyy-MM-dd HH:mm:ss',
                defaultValue: '2018-09-17 12:00:00', //默认日期值
                min: '2018-09-16 00:00:00',
                max: '2099-06-16 23:59:59',
                istime: true,
                istoday: false,
                type:'datetime',
                done: function(datas) {
                    date1.options.double.start.max = datas; //设置开始日期的最大日期
                }
            }
        }
    });
});
