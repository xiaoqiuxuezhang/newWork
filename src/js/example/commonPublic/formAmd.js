/**
 * Created by wangwei on 2017/2/9.
 * formAmd 公用库示例
 */
define(['Util', 'form'], function(Util, Form) {
    $(function() {
        $('.btn').click(function() {
            var $form = $('#form');
            var result = Util.form.serialize($form);
            console.log(result);
        })

    })
})
