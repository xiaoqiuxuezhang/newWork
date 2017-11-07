/**
 * Created by wangwei on 2017/2/9.
 * ajax 公用库示例
 */
define(['ajax'], function(ajax) {
    var url = '../../../../data/common_ajax_jsonp.json';
    var url2 = '../../../../data/list_notice.json';
    $('.get').click(function() {
        ajax.getJson(url2 + '?id=111', function(result) {
            console.log(result);
            console.log(arguments)
        });
    });
    $('.post').click(function() {
        ajax.postJson(url2, 'id=111', function(result) {
            console.log(result);
            console.log(arguments)
        });
    });
    $('.put').click(function() {
        ajax.putJson(url2, { id: 111 }, function(result) {
            console.log(result);
            console.log(arguments)
        });
    });
    $('.delete').click(function() {
        ajax.deleteJson(url2, function(result) {
            console.log(result);
            console.log(arguments)
        });
    });
    $('.getJsonp').click(function() {
        ajax.getJsonp(url2, '', function(result) {
            console.log(result);
            console.log(arguments)
        });
    });
})
