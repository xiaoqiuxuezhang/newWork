
define('text!components/list/list.tpl',[],function () { return '<div class="sn-list {{className}}" style="width:{{#if width}}{{formatUnit width}}{{else}}100%{{/if}};">\r\n    <!--{{#if height}}style="height:{{formatUnit height}};"{{/if}}-->\r\n    <div class="sn-list-table sn-table">\r\n        <div class="sn-list-header" style="">\r\n            <div class="sn-list-header-locker">\r\n                <table width="{{lockerWidth field}}">\r\n                    <colgroup>\r\n                        {{#if_checkbox field.boxType compare=\'checkbox\'}}\r\n                        <col></col>\r\n                        {{/if_checkbox}}\r\n\r\n                        {{#if_button field.button}}\r\n                        {{#if field.button.locked}}\r\n                        <col style="width:{{#if field.button.width}}{{field.button.width}}{{else}}100{{/if}}px;"></col>\r\n                        {{/if}}\r\n                        {{/if_button}}\r\n\r\n                        {{#if field.items}}\r\n                        {{#each field.items}}\r\n                        {{#if locked}}\r\n                        <col style="width:{{#if width}}{{width}}{{else}}100{{/if}}px;"></col>\r\n                        {{/if}}\r\n                        {{/each}}\r\n                        {{/if}}\r\n                    </colgroup>\r\n                    <thead><tr>\r\n                        {{#if_checkbox field.boxType compare=\'checkbox\'}}\r\n                        <th class="checkAllWraper"><input type="checkbox" /><em class="checkboxCover"></em></th>\r\n                        {{/if_checkbox}}\r\n\r\n                        {{#if_button field.button}}\r\n                        {{#if field.button.locked}}\r\n                        <th scope="col">{{field.button.text}}</th>\r\n                        {{/if}}\r\n                        {{/if_button}}\r\n\r\n                        {{#if field.items}}\r\n                        {{#each field.items}}\r\n                        {{#if locked}}\r\n                        {{#if sorting}}\r\n                        <th scope="col" class="{{className}}">{{text}}\r\n                            <span class="sortBox">\r\n                                <a class="sortUp" href="javascript:;"></a>\r\n                                <a class="sortDown" href="javascript:;"></a>\r\n                            </span>\r\n                        </th>\r\n                        {{else}}\r\n                        <th scope="col" class="{{className}}">{{text}}</th>\r\n                        {{/if}}\r\n                        {{/if}}\r\n                        {{/each}}\r\n                        {{/if}}\r\n                    </tr></thead>\r\n                </table>\r\n            </div>\r\n            <div class="sn-list-header-wrap">\r\n                <table class="sn-list-resizable">\r\n                \r\n                    <thead><tr>\r\n                        {{#if field.items}}\r\n                        {{#each field.items}}\r\n                        {{#if_false locked}}\r\n                        {{#if sorting}}\r\n                        <th {{#if width}}style="width:{{width}}px;"{{/if}} scope="col" class="{{className}}">{{text}}\r\n                            <span class="sortBox">\r\n                                <a class="sortUp" href="javascript:;"></a>\r\n                                <a class="sortDown" href="javascript:;"></a>\r\n                            </span>\r\n                        </th>\r\n                        {{else}}\r\n                        <th {{#if width}}style="width:{{width}}px;"{{/if}} scope="col" class="{{className}}">{{text}}</th>\r\n                        {{/if}}\r\n                        {{/if_false}}\r\n                        {{/each}}\r\n                        {{/if}}\r\n\r\n                        {{#if_button field.button}}\r\n                        {{#if_false field.button.locked}}\r\n                        <th style="width:{{#if field.button.width}}{{field.button.width}}{{else}}100{{/if}}px;" scope="col">{{field.button.text}}</th>\r\n                        {{/if_false}}\r\n                        {{/if_button}}\r\n\r\n                        {{#if_popupLayer field.popupLayer}}\r\n                        <th style="width:50px;" scope="col"></th>\r\n                        {{/if_popupLayer}}\r\n                    </tr></thead>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="sn-list-content-locker sn-list-hide">\r\n            <table width="{{lockerWidth field}}">\r\n                <colgroup>\r\n                    {{#if_checkbox field.boxType compare=\'checkbox\'}}\r\n                    <col></col>\r\n                    {{/if_checkbox}}\r\n\r\n                    {{#if_button field.button}}\r\n                    {{#if field.button.locked}}\r\n                    <col style="width:{{#if field.button.width}}{{field.button.width}}{{else}}100{{/if}}px;"></col>\r\n                    {{/if}}\r\n                    {{/if_button}}\r\n\r\n                    {{#if field.items}}\r\n                    {{#each field.items}}\r\n                    {{#if locked}}\r\n                    <col style="width:{{#if width}}{{width}}{{else}}100{{/if}}px;"></col>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                </colgroup>\r\n                <tbody>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class="sn-list-content sn-list-hide">\r\n            <table class="sn-list-also">\r\n                <tbody>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class="sn-list-blockOverlay">\r\n            \r\n        </div>\r\n        <div class="copyMenu">\r\n            <ul>\r\n                <li class="copyTd">复制单元格</li>\r\n                <li class="copyRows">复制整行</li>\r\n                <li class="copyCols">复制整列</li>\r\n            </ul>\r\n            <input type="text" class="copyText"/>\r\n        </div>\r\n\r\n    </div>\r\n    <div class="sn-list-footer" style="display:{{#if page.button}}block{{else}}none{{/if}};">\r\n        {{#if_checkbox field.boxType compare=\'checkbox\'}}\r\n        {{#if page.checkedCount}}\r\n        <div class="checkedDetail">\r\n            <span class="checkAllWraper"><input type="checkbox" /><em class="checkboxCover"></em></span>\r\n            全选\r\n            <span class="checkedCountBox">已选择（<b class="checkedCount">0</b>）</span>\r\n        </div>\r\n        {{/if}}\r\n        {{/if_checkbox}}  \r\n        <div class="buttons btns {{page.button.className}}">\r\n            {{#if_object page.button compare=\'object\'}}\r\n            {{#each page.button.items}}\r\n            <input type="button" value="{{text}}" name="{{name}}" class="btn btnCustom{{@key}}"/>\r\n            {{/each}}\r\n            {{/if_object}}\r\n        </div>\r\n        <div class="sn-list-pagination"></div>        \r\n    </div>\r\n</div>';});


define('text!components/list/listTips.tpl',[],function () { return '<div class="sn-list-tip"  >\r\n{{#each this}}\r\n    {{#if this.items.length}}\r\n    <div class="list-items" >\r\n        {{#if title}}<h3>{{{title}}}</h3>{{/if}}\r\n        {{#each items}}\r\n        <div class="clearfix" >\r\n            {{#deal_item this}}\r\n                {{#each this}}\r\n                <div class="list-level" style="width:{{this.width}};" >\r\n                    <label>{{{this.name}}}：</label>\r\n                    <span>{{{this.text}}}</span>\r\n                </div>\r\n                {{/each}}\r\n            {{/deal_item}}\r\n        </div>\r\n        {{/each}}\r\n    </div>\r\n    {{/if}}\r\n{{/each}}\r\n</div>';});


define('text!components/list/overlay.tpl',[],function () { return '<div class="sn-list-result">\r\n    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAYAAACKuMJNAAAKdklEQVR4nO3dbWwb9QHH8a8fkjRu07C084jQ1MLCVJCaSiVoSEOrpZUG1LBJtALx0DFYJeoIjebVWDeqjqLxYm+GNCWdeIHGACms1bS1aGrIwEXLxNZSqenUaFoVuklrWUhLkzZPfrq9sM+9Oi4xtnP/c/z7SKf4Lue7c/LL//Fig4iIiIiIiIiIiIiIiIiIiIiIiEj185X6RMuyKnkd4l29QBToA7rtjT5fadFR4GQh1qoNT3Dx1BvgyEupgfNX6KJEiqLASSG9gJVdnOxtvaUeWFWqFGKt2vBEbuXiqTfIX/eVWKcqcFKI3VEAwNGGs/X5fL7uec8qQrDMC5OlqZtrPVJnyVJyAWVTG05ctRSq1A5gKxAGxoB3gBNGr2hp0TicQ8eJC9PH3zl7hbHpJOFQkK1tTXS0hu5GoVtUpQaumttwG09+MnP89/+cYMf6Fm5trufjiTi/PX0J4LhC503V3IZ78PC/JnlyfQvrVjXQEPSxblUDT21o4Z2zVyBTzYrHVHPgwmPTSdY011+3cW1zPWPTSci06cRjqjlwY+FQkNHLc9dtHP0sTjgUhEwHQjymmgN3pOv2lbx++jNGxmeZS1qMjM/y2vAltrY1Qaa3uqiyo+/2NFDJ0z21ZEn0Uo+cnWRsKkl4eZCutpWu9VKzI/AF76ZwibEhoVrspQKc6GgN3d3RGuri2g/9CLXROy00JLRvyfbOLcuq5aXXcmhpf9zK09vS/vhinn/jRxemrT3vn7dGxmet2UTaGhmftfa8f946fn7KsiyrY7F/BqWq9hLOlOgCd1NEcYzKL4LckNDXVzUA5IaE3vzHZTpaQ1vxaCmnwJWmLxsqoPDdFIt8/qodElLgSrBqwxO5uykunnrDcmx3q9OQGxK6Y/Wy3MYlPSTkgXaU8SXbTnO24dw6910nLkxbz7933jrz6Yw1m0hbZz6dsZ5/z/ttuLLH4TQWRV+2Ol3satTpo7tubrx727pm+kcu0zP4X/pHLrNtXbPnb1woexzOA2NRxjg7CkB+O84NHYCRISHPjMN54JfgGg+8thN4uDQrpJwqtRewnI1myDSis0stVq+ygHJKONNjUVKFygmc6bEoqULlVKndgK/A2JMvu3R7oI0jHlPNtydJFapU4EyMRUkVqvb74cQQz4zDFevQuaSpUy8J29ZW5zS4J65629rgY2T+2fbeCh3yL0DfoXPJtyp0PKkQTwQOiHY9Gb33w5PDFTnYPRvb7z3ymz4ABc5jvNJLrVjYALLHqlRpKRXklcBJjfBKlXqdXx8+VtLznnlwU4WvRCrNROB6gagbvaxta4O1NnYzCQySGQ8dNHwtBZkIXHT1+m8WteOmmwOsXvb54z3jsxbHPknN217sOZaSphXLV266p+OhvbujD9225qsvA3tMX1M+T7fhFgpbsfvUiitXpzgyeIz7Ht3J2XP/+TGw2fQ15fN04MZnF64RL87VWq25sIkrV3nplQPgeJ9erzAxtWU5q7tSOwgy39kzp/nFj54FYHmokX//bfAq0LQY59IHgwhtd67PPZ6angFYYexibkCBE1cpcOIqBU5cpcCJqxS4pc9yLBPAIQyOz3lyLrUYmjddWP5sixdmIlTC1RAvzEQocDXI5ExE1VapTofe/aDgdj9QF4DlQR+BGphyDfgyrzXc6KO+QFHy4clhup7MZOz9v/4dYIurF8gSL+HSwFwKLs9ZpGpgyjVlwWTC4uMraebm30DDPRvbc49NzUQs6cDZ0sBUsgYSl5Wy4NMibnwwoSYCBxAv8Be/lF316B9YzQTOmz/+xZP26AuumcCJNyhw4ioFTlylwNWYQCDzK6+vqzNyfgWuxjz71OOEGpex63uPGDn/kphpkOK98NwuXnhul7Hzq4QTVylw4ioFTlylwNWY/a8cYM03NvPiL828HbMCV2N+9dqbTE3PcOD1fiPnVy+1SIlEgr7eXgYGBrAsi87OTqLd3dSVMJ5VyWN9UalUGoB4IrHo5ypEgStSX18fBw8ezK0fPHiQhoYGntn1xYcYKnmsaqMqtUgDR4/O23b48GHjx6o2Cpy4SoEr0pbOznnburq6jB+r2qgNV6RoNAqWxdFsddjZ2ckPdu40fqwvKhDwk0qljU3eV+37wzn/EfpG/7WV78s19m6Zd940vwLb/8oBXn3zd+x8bDt7d0ehxAxU3UcfiRmavJeaosCJqxQ4cZUCV2M0eS+uMj15r8DVGNOT9wqcuErjcBWSTqc5FosxMDDAmZERJicmWNnczJ133MGWLVvYFIng9+vvW4GrgM8uXeKFvXsZPnVq3vahoSGGhoZob29n//79fKmlxdBVeoP+5MoUj8fp6emZF7Z8w8PD9PT0EI/HXboyb1IJV6b+/n5GR0cB8AcCfPs72/nWA99ldfhmxsc+4YM//YE///Eg6VSK0dFR+vv72bFjh+GrNkclXJmOOm6mfHTXbrY/3U249Rb8gQDh1lvY/nQ3j+7andvn3YEBE5fpGSrhytTW1sbXbrsNgM77H6Cubv5dFJ33P8D5MycBCBq6LcgrFLgy7du3r4i9GvjZiy8u9qVUBVWp4ioFTlylwImrFDhxlQInrlLgxFUKnLhKgRNXKXDiKgVOXKXAiasUOHGVAieuUuDEVSYCN9m0Ynlu5eyZ0wYuQUwx8XZdh77fs+ehI4OlvU2XVM746SFw+e26TJRwfT/54TM0N60wcGoxzUTgBm+/dc3LR996la7Nm1ixPGTgEsQUE1WqbTMQBe4Dmso9mJSkD+gu5YmlVqnGAnfoXLKs59e6bWvN/jtK1QVOqls1dRqkhilw4ioFTlylwImrFDhxlQInrlLgxFUKnLjK+LsnxWIx05dQcyKRiLFzGw9csSKRSBBoBJZlvzYA9dmvddllGZnXVJf9GgQC2f3Ifh/HPrZA3rq9rZ7SxIFU3rZE3rYEYM/vzeY9L5ld7H1ms48TwFx2vzlgJvu9mVgsVhVzhZ4JXCQSaQa+AoSBldllRfZro2VZL6XTadLpNKlUCsuysNcty8qt24+dSzqd+WwC+6u93Za/fqNtxfL5fPOmfvK3Odftdzf3+/257c7Fud3v9+fWA4FAbj0SifyUTAAngClgMruMAf+LxWITJb2YCvNE4CKRyMPJZLI/Ho+TSCRIJpOkUilSqRTJZDIXpGpRTlhL5fP5XvL7/QSDQQKBAIFAgGAwSF1dHfX19UQikUdisdjbrl5Uoess9YkV/IE+PDY21j89PV2p40kBoVCIcDj8SCwWe7sSbbiq/YBe+wfgLOHsks0u5eyqU27MrlqdpVsgEMiVcMFg0BMlnPHAQS50R4PBYCvQAjQDNwEhMjdnNlqW9XM7eM6lUPstv83mrJKdwXU+XqgaXCjwn/cpM/ntN+e+9mO7febclt92y2/HORefz7eHTBvuCjANXCbTnrsEXPBKG84LVWqx/FzroTaS6UEu4/oeqt07tXujDWReYz2ZXqezN+rPft9WqKfKDfYtZA64USrze6jOfe3vpcj0Pq3s9yHTA7V7q86e6mx23xmu9VRdrQJKrVJFRERERERERERERERERETEsP8Dq6HTsxfeQnoAAAAASUVORK5CYII=" />\r\n    <span>\r\n        <!--\r\n        {{#if_errorCode returnCode}}\r\n        错误码{{returnCode}}，\r\n        {{/if_errorCode}}\r\n        -->\r\n\r\n        {{#if_message returnMessage}}\r\n        {{returnMessage}}\r\n        {{else}}\r\n        没有任何数据\r\n        {{/if_message}}\r\n    </span>\r\n</div>';});


define('text!components/list/loading.tpl',[],function () { return '<div class="sn-list-loading">\r\n    <img src="data:image/gif;base64,R0lGODlhEAAQAPYZAPLy8szMzNXV1c7Ozvr6+t7e3ujo6Obm5vX19eXl5dHR0erq6uDg4NLS0v7+/tjY2OLi4v39/ePj49ra2vj4+P///+zs7O7u7vDw8LnX6g+GzGqu1KXN5DSVz5PD4Im+3gCAzF2o1ROIzHKy2TyZ1WKr1SWM16/T6Ojy9vH3+vr8/Xm22gB/0PT5+06h0lqm00ee1hWJzuXw9+Dt9gmA1X643SmRzsTd7BqG1rTV6WSq28Taq8Xab5jF4XSzxefw7bXRObrY6nq1zFmmzOrx3ByK1a/QIdnp8i+S03az0Obv6+vy4dvnwxOF0wCAy5zIE7zVloe81jOP3bvVirjTd7jTK6XLGuHsze/18Ya74azOKHm10YK94MLdU9Lntcvjl2y24iGM3sfj8/P59cPZjZTI4s7gpOzz7YfD6ITB2Eyk4J7P7Pz+/i2T3pTJ6vH35rfb8bjTR3K45ev1+maz3Vms3rrX5XOyzBqE3LLRF6vNffn797LPd7HT5yCNzQAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUAI/eAAh+QQFAAAZACwAAAAAEAAQAAAFqmAlioQkKBMwriI2BIVlCBArLoGCEIYBMAXH6hAQEACKwKBhSDBGksAjcnktKoSCJGGoUCQThyUQsFQSD0sCAgGoKwYlpjIhK5qSHqTZAEQKShYEe3kLEgcQBAQCOQgRD3l5BlszLw2KjAVwBghsCRYNDwQUDTAVBxIqhhAMBBUISU8JUiMMXAKMAQkVEAETriIOBW1AfoAFETYMaQAGSRI2IxgPCgoPcyshACH5BAUAAAAALAQADgAIAAIAAAYQwFDHk/mIQBsApyPSdDiAIAAh+QQFAAAAACwCAAwADQACAAAGGcDQaGUysUAjQAlEQqlcpdPLdUrBQK4WIAgAIfkEBQAAAAAsAAAKABAAAgAAByGANyU6STtGQEtHRSAuACM+TAAfGzovSgA3TSAhjk5IDoEAIfkEBQAAAAAsAAAIABAAAgAAByKAHxtTVFhLWk9WVylSG1BUUVk6W1BVVk9aSygmIDAAU1CBACH5BAUAAAAALAAABgAQAAIAAAcggDtUAFlONBwAcU9PeWRCOjUfeo54dnuKVmZnfFN3NYEAIfkEBQAAAAAsAAAEABAAAgAAByGAADogHS0cICwfDj9DOhs1AEQ+JCoeiD0APEA7QjolQYEAIfkEBQAAAAAsAgACAAwAAgAABhdAwAcUu81Wq0zIpRqBbLKchkXD1UavIAAh+QQFAAAAACwAAAAAEAAQAAAHxoAAgoIzcjZFanCDi4JwIiB1a2gkcoyCbgBFYjJoaGJ0dWyLaABIczcxgmFoXHSDlSQAJ5cAWHRycqRvaWoAa4K/AHFeaXJgYl5fAJgAil2DX8VoblPRYWIqzwBeWGTR0zVfZGNvQABGRC0k4WRlbnJpZoNGb3NtAL1fZmJg8F5Vcd7MCAOgDgA0aa4sw0XnDAAxRQC44gIgliAwXNC0uQeAIhgAMOYMYlMHDBxQcFoYNGgJDIk1YtxErGRJ0AkSMWLAyMEoEAAh+QQFAAACACwAAAAAEAAQAAAHz4ACgoJHJX4iJH2Di4IcGgIuHis2JYyCHwIxNzMrKxkhLiqLIwI2MjmPAjg1Iy+DOgIdAhyXAj9DOhs1AkQ+JAIegj2CQDtCOiVBO1QCWY0CcYNkxzUfetN4dnvRAmZnfFN31RtTVFhLWgJWVylSG1BUUVk6W1CDWksoJgIwAlNQN0roSLLDCJAlR4pAEjDCBxMBHzboeKFEwI0mAkIwFIBkUIgRK0zs21iJBIpBKlyUOPHCxYkU/VxYEsDggQUABhQEkDBTEIYHChQ8wMAoEAAh+QQFAAADACwCAAwADQACAAAFFSCTGIIQBMkABRPhFBDAFEBUBEU0hAAh+QQFAAACACwAAAoAEAACAAAFGiACQYnVPATVBIVwSICwSBBDCIgSMEISPJUQACH5BAUAAAAALAAACAAQAAIAAAUX4CIdEEEIgYJEj2S4b2IIQ9CYaAEYRggAIfkEBQAAAgAsAAAGABAAAgAABReglQhGMGDCFASKkUiGAbkNEBWmRcxwCAAh+QQFAAACACwAAAQAEAACAAAFGqAgBU90DcFSEYWUGAIlTY4VBJaQPFYCQYAQACH5BAUAAA8ALAIAAgAMAAIAAAQS8K2gEDEGsOJOEASgBENjJEwEADs=" />\r\n    <span>数据加载中</span>\r\n</div>';});

/*! jQuery UI - v1.12.1 - 2017-04-27
* http://jqueryui.com
* Includes: widget.js, disable-selection.js, widgets/resizable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define('jqueryUI',["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;t(document).on("mouseup",function(){s=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),s=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[o];return this._updatePrevProperties(),l?(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-o.width)/h)*h,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable});

define('lib/requirejs/css.min!components/list/list',[],function(){});

define('lib/requirejs/css.min!lib/jqueryui/jquery-ui.min',[],function(){});

define('lib/requirejs/css.min!lib/dialog/6.0.4/css/ui-dialog',[],function(){});
/**
 * 
 * This jQuery plugin displays pagination links inside the selected elements.
 *
 * @author Gabriel Birke (birke *at* d-scribe *dot* de)
 * @version 1.2
 * @param {int} maxentries Number of entries to paginate
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 */
jQuery.fn.pagination = function(maxentries, opts){
	opts = jQuery.extend({
		items_per_page:10,
		num_display_entries:10,
		current_page:0,
		skip_page:false,//add by  zhanglizhao
		num_edge_entries:0,
		link_to:"#",
		total:false,
		prev_text:"Prev",
		next_text:"Next",
		ellipse_text:"...",
		prev_show_always:true,
		next_show_always:true,
		call_callback_at_once : true,
		callback:function(){return false;}
	},opts||{});
	var objBase = {}
	/**
	 * Calculate the maximum number of pages
	 */
	function numPages() {
		return Math.ceil(maxentries/opts.items_per_page);
	}
	
	/**
	 * Calculate start and end point of pagination links depending on 
	 * current_page and num_display_entries.
	 * @return {Array}
	 */
	function getInterval()  {
		var ne_half = Math.ceil(opts.num_display_entries/2);
		var np = numPages();
		var upper_limit = np-opts.num_display_entries;
		var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
		var end = current_page>=ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);// 之前是>，改成>=后，修复跳到第3页不显示4的问题
		return [start,end];
	}
	
	/**
	 * This is the event handling function for the pagination links. 
	 * @param {int} page_id The new page number
	 */
	function pageSelected(page_id, evt){
		objBase.currentPage = current_page = page_id;
		drawLinks();
		var continuePropagation = opts.callback(page_id, panel);
		if (!continuePropagation) {
			if (evt.stopPropagation) {
				evt.stopPropagation();
			}
			else {
				evt.cancelBubble = true;
			}
		}
		return continuePropagation;
	}
		
	/**
	 * This function inserts the pagination links into the container element
	 */
	function drawLinks() {
		panel.empty();
		var interval = getInterval();
		var np = numPages();
		// This helper function returns a handler function that calls pageSelected with the right page_id
		var getClickHandler = function(page_id) {
			return function(evt){return pageSelected(page_id,evt);}
		};
		// Helper function for generating a single link (or a span tag if it's the current page)
		var appendItem = function(page_id, appendopts){
			page_id = page_id<0?0:(page_id<np?page_id:np-1); // Normalize page id to sane value
			appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
			var lnk ;
			if(page_id == current_page){
				lnk = jQuery("<span class='current'>"+(appendopts.text)+"</span>");
			}
			else
			{
				lnk = jQuery("<a>"+(appendopts.text)+"</a>")
					.bind("click", getClickHandler(page_id))
					.attr('href', opts.link_to.replace(/__id__/,page_id));
					
			}
			if(appendopts.classes){lnk.addClass(appendopts.classes);}
			panel.append(lnk);
		}
		if(opts.total){
			jQuery("<span class='total'>"+opts.total+"</span>").appendTo(panel);
		}
		// Generate "Previous"-Link
		if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
			// appendItem(current_page-1,{text:opts.prev_text, classes:"prev"});
			appendItem(current_page-1,{text:'', classes:"prev"});
		}
		// Generate starting points
		if (interval[0] > 0 && opts.num_edge_entries > 0)
		{
			var end = Math.min(opts.num_edge_entries, interval[0]);
			for(var i=0; i<end; i++) {
				appendItem(i);
			}
			if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
			{
				jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
			}
		}
		// Generate interval links
		for(var i=interval[0]; i<interval[1]; i++) {
			appendItem(i);
		}
		// Generate ending points
		if (interval[1] < np && opts.num_edge_entries > 0)
		{
			if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
			{
				jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
			}
			var begin = Math.max(np-opts.num_edge_entries, interval[1]);
			for(var i=begin; i<np; i++) {
				appendItem(i);
			}
			
		}
		// Generate "Next"-Link
		if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
			// appendItem(current_page+1,{text:opts.next_text, classes:"next"});
			appendItem(current_page+1,{text:'', classes:"next"});
		}
		if(opts.skip_page){
			var $inputBox = jQuery("<span class='input-box'><em>跳转到第</em><input type='text' /><em>页</em></span>");
			var $selectPerPage = jQuery("<span class='per-page'><em>每页条数：</em><select class='selectPerPage'></select><span class='selectValBox'><span class='selectVal'></span><b class='jiantou'></b></span></span>");
			var $select=$selectPerPage.find("select");
			$('input',$inputBox).on('change',function(){
				var value = parseInt($(this).val());
				if(isNaN(value)){
					value = '1';
				}
				$(this).val(value);
			})
			if (opts.custom_pages && opts.custom_pages.length){
				jQuery.each(opts.custom_pages,function(i, item){
					$select.append('<option value="'+ item +'">'+ item +'</option>');
				});
				$select.on('change',jQuery.proxy(function(evt){
					objBase.perPage = opts.items_per_page = jQuery(evt.currentTarget).val();
					pageSelected(0,evt);
				},this))
			}
			var $option = $select.find('option[value='+ opts.items_per_page +']');
			$option.length && $option.attr('selected', true);
			$selectPerPage.appendTo(panel);
			$inputBox.appendTo(panel);
			

			jQuery('<a href="javascript:;" >'+opts.skip_page+'</a>').appendTo(panel)
				.bind("click",function(evt){
					var pageNum = parseInt(panel.find("input").val());
					if(pageNum&&pageNum>1){
						pageNum=(pageNum>np)?np:pageNum;
					}else{
						pageNum=1
					}
					return pageSelected(pageNum-1,evt);
				});

			

		}
	}
		
	// Extract current_page from options
	var current_page = opts.current_page;
	// Create a sane value for maxentries and items_per_page
	maxentries = (!maxentries || maxentries < 0)?1:maxentries;
	opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
	// Store DOM element for easy access from all inner functions
	var panel = jQuery(this);

	// Attach control functions to the DOM element 
	this.selectPage = function(page_id){ pageSelected(page_id);};
	this.prevPage = function(){ 
		if (current_page > 0) {
			pageSelected(current_page - 1);
			return true;
		}
		else {
			return false;
		}
	};
	this.nextPage = function(){ 
		if(current_page < numPages()-1) {
			pageSelected(current_page+1);
			return true;
		}
		else {
			return false;
		}
	};
	// When all initialisation is done, draw the links
	drawLinks();
    // call callback function
	if (opts.call_callback_at_once) { // 修改。第一次加载时，不调用2次。
		opts.callback(current_page, this);
	}
        
	return objBase;
};



define("jquery.pagination", ["jquery"], function(){});


define('lib/requirejs/css.min!lib/jqueryPlugin/pagination/1.2.1/pagination',[],function(){});
define('list',['jquery', 'eventTarget', 'hdbHelper',
    'text!components/list/list.tpl',
    'text!components/list/listTips.tpl',
    'text!components/list/overlay.tpl',
    'text!components/list/loading.tpl',
    'jqueryUI',
    'artDialog',
    'lib/requirejs/css.min!components/list/list.css',
    'lib/requirejs/css.min!lib/jqueryui/jquery-ui.min.css',
    'lib/requirejs/css.min!lib/dialog/6.0.4/css/ui-dialog.css',
    'jquery.pagination',
    'lib/requirejs/css.min!lib/jqueryPlugin/pagination/1.2.1/pagination.css'
],
    function ($, EventTarget, hdb, tpl, listTipsTpl, overlayTpl, loadingTpl) {

        var listVersion = '1.1.7';
        var Collection = function (model) {
            // 数据列表
            this.models = model === undefined ? [] : model;
            // 后续实例化视图的集合
            this.modules = [];
            this.contentModules = [];
        };
        var resizableOnOff = false;
        // var allCheckedRows = [];
        var pageInit = function (result) {
            var $pagination = this.$pagination = $(this.el).find('.sn-list-footer .sn-list-pagination');
            // var total = result.bean.total || 0;
            var total = result.bean && result.bean.total ? result.bean.total : 0;
            var optTotal = null;
            if (this.options.page.total) {
                optTotal = '共' + total + '条';
            }
            if (!this.loaded) {
                // this.loaded = 1;
                this.objPagination = $pagination.pagination(total, {
                    'items_per_page': $(this.el).find('.selectPerPage').val() || this.options.page.perPage || 10,
                    'current_page': typeof this.pageIndex == 'undefined' ? 0 : this.pageIndex,
                    'num_display_entries': 3,
                    'num_edge_entries': 1,
                    'skip_page': "跳转",
                    //'link_to': '#tradeRecordsIndex' ,
                    'link_to': 'javascript:;',
                    'total': optTotal,
                    'prev_text': "上一页",
                    'next_text': "下一页",
                    'call_callback_at_once': false, //控制分页控件第一次不触发callback.
                    'custom_pages': this.options.page.customPages || [10],
                    'callback': $.proxy(function (pageIndex, $page) {
                        this.loaded = 1;
                        // 解决ie下选中文本后翻页大面积选中问题
                        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                        loading.call(this, pageIndex);
                    }, this)
                });
            }
            $(this.el).find('.selectVal').html($(this.el).find('.selectPerPage').val());
            $(this.el).find('.selectPerPage').on('change', $.proxy(function () {
                $(this.el).find('.selectVal').html($(this.el).find('.selectPerPage').val());
            }, this));
            $(this.el).find('.sn-list-footer').show();
        };

        //加载顺序 loading->ajaxStart->ajaxHandle->loadHandle
        var loading = function (pageIndex) {
            // 初始化全选复选框状态
            $(this.$el).find('thead .checkAllWraper>input, .sn-list-footer .checkAllWraper>input').prop('checked', false).siblings('.checkboxCover').removeClass('checked');
            if (!(this.options.page && this.options.page.checkedCount === 'allPages')) {
                $(this.el).find('.sn-list-footer .checkedCountBox .checkedCount').text(0);
            }
            var $content = $(this.el).find('.sn-list-content-locker, .sn-list-content');
            $content.find('>table').css({ borderBottom: 0 });
            // 如果正在加载，清掉分段加载定时器
            this.onSearchTimer && clearTimeout(this.onSearchTimer);
            if (pageIndex == null) {
                console.log('组件-列表 数据加载失败（请检查数据格式）');
                return false;
            }
            this.pageIndex = pageIndex;
            //!检查
            // if(!this.url && this.options.data){
            //     this.url=this.options.data.url;
            // }
            loadingShow.call(this);
            //直接加载数据时，初始化默认值
            if (typeof (pageIndex) == "object") {
                var result = null;
                if (pageIndex.length >= 0) {
                    result = {
                        bean: { total: 1 },
                        beans: pageIndex
                    };
                } else {
                    result = pageIndex;
                }
                ajaxHandle.call(this, result);
            } else {
                pageIndex = pageIndex || 0;
                ajaxStart.call(this, pageIndex);
            }
            // $('.sn-list',this.$el).addClass('sn-list-loading');
        };
        var loadingShow = function () {
            var $blockOverlay = $(this.$el).find('.sn-list-blockOverlay').addClass('sn-list-display-block');
            var template = hdb.compile(loadingTpl);
            $blockOverlay.html(template({}));
        };
        // var loadingHide = function(){
        //     $('.sn-list-blockOverlay', this.$el).addClass('sn-list-display-block');
        // }

        var ajaxStart = function (pageIndex) {
            // 解决勾选分页器每页条数后再查询bug
            // if (this.loaded == 1) {
            //     var perPage = ((this.objPagination && this.objPagination.perPage) || (this.options.page && this.options.page.perPage)) || 3;
            // } else {
            //     var perPage = (this.options.page && this.options.page.perPage) || 3;
            // }
            var perPage = this.perPage = (($(this.el).find('.selectPerPage').val()) || (this.options.page && this.options.page.perPage)) || 3;
            var start = pageIndex * perPage,
                searchParam = this.searchParam,
                options = this.options;
            if (searchParam) {
                $.extend(searchParam, {
                    start: start,
                    limit: perPage,
                    page: pageIndex + 1,
                    _: Math.random()
                });
            }

            var ajaxOptions = $.extend({
                url: options.data.url,
                type: 'post',
                dataType: 'json',
                data: searchParam,
                success: $.proxy(function (result) {
                    var content = result;
                    ajaxHandle.call(this, result);
                }, this),
                error: $.proxy(function (err) {
                    loadHandle.call(this, {
                        returnCode: '-1',
                        returnMessage: '数据加载失败',
                        bean: null,
                        beans: []
                    });
                    console.log('组件-列表 数据加载失败，请检查数据接口 ' + options.data.url);
                }, this)
            }, options.ajax);
            $.ajax(ajaxOptions);
        };
        var ajaxHandle = function (result) {
            $(this.el).find('tbody').empty();
            $(this.el).find('.sn-list').removeClass('sn-list-loading');
            // this.total = result.bean.total;
            this.total = result.bean ? result.bean.total : 0;
            // loadHandle.call(this, result);
            (this.options.page && !this.options.page.noPages) && pageInit.call(this, result);
            // loadhandle 放在pageinit显示动作下面，sizeinit计算到footer显示后高度
            loadHandle.call(this, result);
            // success afterBuild移到加载完所有数据后绑定
            // this.trigger('success', result);
            // this.trigger('afterBuild', result);

            // // tr隔行换色js兼容处理
            // var $tbody = $('.sn-list tbody', this.el);
            // for (var i = 0; i < $tbody.length; i++) {
            //     var $tr = $tbody.eq(i).find('tr');
            //     for (var j = 0; j < $tr.length; j++) {
            //         if (j % 2 === 0) {
            //             $tr.eq(j).addClass('evenTr');
            //         } else {
            //             $tr.eq(j).addClass('oddTr');
            //         }
            //     }
            // }

            // 判断如果主体部分存在，则排序图标显示在表头
            // if ($(this.el).find('.sn-list-also')[0] && $(this.el).find('.sn-list-also')[0].offsetWidth) {
            //     $(this.el).find('.sortDown').addClass('sortImgShow');
            //     $(this.el).find('.sortUp').addClass('sortImgShow');
            // } else {
            //     $(this.el).find('.sortDown').removeClass('sortImgShow');
            //     $(this.el).find('.sortUp').removeClass('sortImgShow');
            // }

            // var that = this;
            // 先设置该项属性让表格内容自适应，然后延时设置table-layout为fixed以满足拖拽
            // $(that.el).find('.sn-list-also').css({ 'table-layout': 'auto' });
            // setTimeout(function () {
            //     sizeInit.call(that);
            // }, 0);
        };

        var loadHandle = function (result) {
            var addOne = function (i, model) {
                var config = { model: model, listOptions: this.options };
                var lockedListItem = new LockedContentListItem(config, this.allCheckedRows, i);
                // 视图push到集合中
                this.collection.modules.push(lockedListItem);
                $(this.el).find('.sn-list-content-locker table>tbody').append(lockedListItem.render().el);
                var contentListItem = new ContentListItem(config, i);
                this.collection.contentModules.push(contentListItem);
                $(this.el).find('.sn-list-content table>tbody').append(contentListItem.render().el);
                var listItemEnter = function (e) {
                    if (this.options.highlight === false) {
                        return;
                    }
                    var index = lockedListItem.$el.closest('table').find('tr').index(lockedListItem.$el);
                    var $lockedListTrs = lockedListItem.$el.closest('table').find('tr');
                    var $contentListTrs = contentListItem.$el.closest('table').find('tr');
                    var $lockedListItemTr = $lockedListTrs.eq(index);
                    var $contentListItemTr = $contentListTrs.eq(index);
                    $contentListItemTr.addClass('hover');
                    $lockedListItemTr.addClass('hover');
                }
                var listItemLeave = function (e) {
                    if (this.options.highlight === false) {
                        return;
                    }
                    var $lockedListTrs = lockedListItem.$el.closest('table').find('tr');
                    var $contentListTrs = contentListItem.$el.closest('table').find('tr');
                    $contentListTrs.removeClass('hover');
                    $lockedListTrs.removeClass('hover');
                }
                lockedListItem.on('checkboxChange', $.proxy(function (e, checked, onOff) {
                    var index = lockedListItem.$el.closest('table').find('tr').index(lockedListItem.$el);
                    var $contentListItemTr = contentListItem.$el.closest('table').find('tr').eq(index);
                    var $checkAllBox = $(this.$el).find('thead .checkAllWraper>input, .sn-list-footer .checkAllWraper>input');
                    if (checked) {
                        $contentListItemTr.addClass('selected');
                        var checkedRows = this.getCheckedRows();
                        if (checkedRows.length === this.collection.models.length) {
                            $checkAllBox.prop('checked', true).siblings('.checkboxCover').addClass('checked');
                        }
                    } else {
                        var isChecked = $checkAllBox.is(":checked");
                        if (isChecked) {
                            $checkAllBox.prop('checked', false).siblings('.checkboxCover').removeClass('checked');
                        }
                        $contentListItemTr.removeClass('selected');
                    }
                    if (this.options.page && this.options.page.checkedCount === 'currentPage') {
                        var aCount = [];
                        if ($checkAllBox.is(':checked')) {
                            aCount = this.collection.models;
                        } else if (this.collection) {
                            var checkedModel = [];
                            for (var i = 0; i < this.collection.modules.length; i++) {
                                if (this.collection.modules[i].checked === 1) {
                                    checkedModel.push(this.collection.modules[i].options.model);
                                }
                            }
                            aCount = checkedModel;
                        }
                        $(this.el).find('.sn-list-footer .checkedCountBox .checkedCount').text(aCount.length);
                    } else if (this.options.page && this.options.page.checkedCount === 'allPages' && this.options.checkedRecord === true) {
                        var aCount = this.allCheckedRows;
                        $(this.el).find('.sn-list-footer .checkedCountBox .checkedCount').text(aCount.length);
                    }
                    !onOff && this.trigger('checkboxChange', e, lockedListItem.options.model, checked);
                }, this));
                lockedListItem.on('rowClick', $.proxy(function (e, data) {
                    var index = lockedListItem.$el.closest('table').find('tr').index(lockedListItem.$el);
                    var $contentListTrs = contentListItem.$el.closest('table').find('tr');
                    var $contentListItemTr = $contentListTrs.eq(index);
                    if (this.options.field.boxType == "radio") {
                        $contentListTrs.removeClass('selected');
                        $contentListItemTr.addClass('selected');
                        this.selectedData = data;
                    }
                    this.trigger('rowClick', e, data);
                }, this));
                contentListItem.on('rowClick', $.proxy(function (e, data) {
                    var index = contentListItem.$el.closest('table').find('tr').index(contentListItem.$el);
                    var $lockedListTrs = lockedListItem.$el.closest('table').find('tr');
                    var $lockedListItemTr = $lockedListTrs.eq(index);
                    if (this.options.field.boxType == "radio") {
                        $lockedListTrs.removeClass('selected');
                        $lockedListItemTr.addClass('selected');
                        this.selectedData = data;
                    }
                    this.trigger('rowClick', e, data);
                }, this));
                lockedListItem.on('rowEnter', $.proxy(function (e) {
                    listItemEnter.call(this, e);
                    this.trigger('listItemEnter', e);
                }, this));
                contentListItem.on('rowEnter', $.proxy(function (e) {
                    listItemEnter.call(this, e);
                    this.trigger('listItemEnter', e);
                }, this));
                lockedListItem.on('rowLeave', $.proxy(function (e) {
                    listItemLeave.call(this, e);
                    this.trigger('listItemLeave', e);
                }, this));
                contentListItem.on('rowLeave', $.proxy(function (e) {
                    listItemLeave.call(this, e);
                    this.trigger('listItemLeave', e);
                }, this));
                var translateCellClick = function (e, data) {
                    this.trigger('cellClick', e, data, text);
                }
                var translateRowDoubleClick = function (e) {
                    this.trigger('rowDoubleClick', e, model);
                }
                lockedListItem.on('cellClick', $.proxy(translateCellClick, this));
                contentListItem.on('cellClick', $.proxy(translateCellClick, this));
                lockedListItem.on('rowDoubleClick', $.proxy(translateRowDoubleClick, this));
                contentListItem.on('rowDoubleClick', $.proxy(translateRowDoubleClick, this));
            };
            this.collection = new Collection(result.beans);
            var $content = $(this.el).find('.sn-list-content-locker, .sn-list-content');
            var $blockOverlay = $(this.el).find('.sn-list-blockOverlay');
            if (this.collection.models.length) {
                var that = this;
                // 正在加载数据的标识位
                this.onSearch = true;
                // 加载开始时记录尺寸，防止加载中切到其他页再切回尺寸紊乱问题
                var $list = this.$el.find('.sn-list');
                var $header = this.$el.find('.sn-list-header');
                this.listWidth = $list.width();
                var contentLockerWidth = headerLockerWidth = lockerWidth(this.options.field);
                this.headerWrapWidth = $header.width() - contentLockerWidth;
                // 是否启用懒加载
                if (this.options.lazyLoad == true) {
                    // 分段加载模式
                    var iNum = 0;
                    var iCount = 6;
                    var aModels = this.collection.models;
                    function lazyLoad() {
                        if (iNum * iCount >= aModels.length) {
                            // 列表内容加载完的时机
                            that.onSearchTimer && clearTimeout(that.onSearchTimer);
                        } else {
                            var arr = [];
                            for (var i = iCount * iNum; i < iCount * iNum + iCount; i++) {
                                if (i < aModels.length) {
                                    arr.push(aModels[i]);
                                }
                            }
                            $.each(arr, $.proxy(addOne, that));
                            if (iNum === 0) {
                                setTimeout(function () {
                                    loadOver.call(that, result);
                                }, 100);
                            }
                            iNum++;
                            that.onSearchTimer = setTimeout(lazyLoad, 0);
                        }
                    }
                    lazyLoad();
                } else if (this.options.lazyLoad === 'scroll') {
                    var iNum = 0;
                    var iCount = 6;
                    var aModels = this.collection.models;
                    // 本应该放在加载完后，但懒加载需要拿到可见高度
                    $content.removeClass('sn-list-hide').addClass('sn-list-show');
                    $blockOverlay.removeClass('sn-list-display-block').addClass('sn-list-hide');
                    var lazyLoadTimer = setInterval(function () {
                        if (that.$el.find('.sn-list-also')[0].clientHeight > that.$el.find('.sn-list-content')[0].clientHeight || iNum * iCount >= aModels.length) {
                            // 列表内容加载完的时机
                            clearInterval(lazyLoadTimer);
                            loadOver.call(that, result);
                            $(that.$el).find('.sn-list-content').off('scroll.lazyLoad');
                            $(that.$el).find('.sn-list-content').on('scroll.lazyLoad', $.proxy(function (e) {
                                var e = e || window.event;
                                if (that.options.lazyLoad) {
                                    // 滚动条快到底部时继续加载
                                    if (e.currentTarget.scrollTop + e.currentTarget.clientHeight + 20 >= e.currentTarget.scrollHeight) {
                                        var arr = [];
                                        for (var i = iCount * iNum; i < iCount * iNum + iCount; i++) {
                                            if (i < aModels.length) {
                                                arr.push(aModels[i]);
                                            }
                                        }
                                        $.each(arr, $.proxy(addOne, that));
                                        iNum++;
                                        if (iNum * iCount >= aModels.length) {
                                            $(that.$el).find('.sn-list-content').off('scroll.lazyLoad');
                                        }
                                    }
                                }
                            }, that));
                        } else {
                            var arr = [];
                            for (var i = iCount * iNum; i < iCount * iNum + iCount; i++) {
                                if (i < aModels.length) {
                                    arr.push(aModels[i]);
                                }
                            }
                            $.each(arr, $.proxy(addOne, that));
                            iNum++;
                        }
                    }, 50)
                    
                } else {
                    // 正常加载模式
                    $.each(this.collection.models, $.proxy(addOne, this));
                    // 列表内容加载完的时机
                    loadOver.call(that, result);
                }
                /**
                 * 分段加载暂时摒弃
                var iNum = 0;
                var iCount = 6;
                var aModels = this.collection.models;
                function load_test() {
                    if (iNum * iCount >= aModels.length) {
                        // 列表内容加载完的时机
                        $content.removeClass('sn-list-hide').addClass('sn-list-show');
                        $blockOverlay.removeClass('sn-list-display-block').addClass('sn-list-hide');
                        // IE8下选中文本后，翻页大面积选中debug
                        $(that.el).find('.sn-list-table').css({ 'user-select': 'none' }).attr('unselectable', 'on');
                        $(that.el).find('.sn-list-table').css({ 'user-select': 'text' }).attr('unselectable', 'off');
                        // 每次查询前先设置0，解决再次搜索造成的尺寸变宽出现滚动条bug               
                        $(that.el).find('.sn-list-also').css({ width: '0', 'table-layout': 'auto' });
                        // $(that.el).find('.sn-list-also').css({ 'table-layout': 'auto' });

                        // IE下checkbox双击选中debug
                        var u_agent = navigator.userAgent;
                        if (u_agent.indexOf('Trident') > -1 && u_agent.indexOf('rv:11') > -1 || u_agent.indexOf('MSIE') > -1) {
                            $(that.el).find("input[type='checkbox']").attr('ondblclick', 'this.click()');
                        }

                        sizeInit.call(that);
                        that.onSearch = false;
                        // sizeInit.call(that);
                        // 模拟scroll事件，解决ie下搜索数据后拉动滚动条到最右，然后搜索为空数据后，再次搜索有数据时表头不对齐bug
                        $(that.el).find('.sn-list-content').trigger('scroll');
                        // 解决ie下td 省略号bug，在sizeinit算完尺寸后
                        $(that.el).find('.sn-list table td, .sn-list table th').css({ 'text-indent': '-1px' });

                        that.trigger('success', result);
                        that.trigger('afterBuild', result);
                        that.onSearchTimer && clearTimeout(that.onSearchTimer);
                    } else {
                        var arr = [];
                        for (var i = iCount * iNum; i < iCount * iNum + iCount; i++) {
                            if (i < aModels.length) {
                                arr.push(aModels[i]);
                            }
                        }
                        $.each(arr, $.proxy(addOne, that));
                        iNum++;
                        that.onSearchTimer = setTimeout(load_test, 0);
                    }
                };
                load_test();
                */
                // $content.removeClass('sn-list-hide').addClass('sn-list-show');
                // $blockOverlay.removeClass('sn-list-display-block').addClass('sn-list-hide');
            } else {
                $content.removeClass('sn-list-show').addClass('sn-list-hide');
                $blockOverlay.removeClass('sn-list-hide').addClass('sn-list-display-block');
                var templateOverlay = hdb.compile(overlayTpl);
                $blockOverlay.html(templateOverlay(result));
                var $overlayText = $blockOverlay.find('>div');
                if (result && (result.returnCode != 0 || !result.returnMessage)) {
                    console.log('组件-列表 接口没有返回任何数据，错误码' + result.returnCode);
                }
                this.trigger('success', result);
            }

        };

        var LockedContentListItem = function (options, allCheckedRows, i) {
            this.options = options;
            // 多选记忆功能
            this.checkedRecord = this.options.listOptions.checkedRecord;
            this.checked = 0;
            this.el = document.createElement('tr');
            this.$el = $(this.el);
            this.allCheckedRows = allCheckedRows;
            this.nTr = i;
            EventTarget.call(this);
            this.eventInit();
            this.initialize();
        };
        $.extend(LockedContentListItem.prototype, EventTarget.prototype, {
            initialize: function () {
                var that = this;
                if (this.checkedRecord) {
                    $.each(this.allCheckedRows, function (k, v) {
                        for (var name in v) {
                            if (v[name] != that.options.model[name]) { return };
                        }
                        setTimeout(function () {
                            that.trigger('changeChecked', null, 1, true);
                        }, 300)
                    });
                }
                if (this.nTr % 2 === 0) {
                    this.$el.addClass('evenTr');
                } else {
                    this.$el.addClass('oddTr');
                }
            },
            eventInit: function () {
                this.$el.on('click', 'td>input', $.proxy(this.changeSelectStatus, this));
                this.$el.on('click', $.proxy(this.rowClick, this));
                this.$el.on('dblclick', $.proxy(this.rowDoubleClick, this));
                this.$el.on('click', '.boxWraper', $.proxy(this.boxWrapperClick, this));
                this.$el.on('mouseenter', $.proxy(this.rowEnter, this));
                this.$el.on('mouseleave', $.proxy(this.rowLeave, this));
                this.on('changeChecked', $.proxy(function (e, checked, onOff) {
                    // onOff是判断 是否是模拟点击的标识位，是则传入true
                    var that = this;
                    this.checked = checked;
                    var boxType = this.options.listOptions.field.boxType;
                    var $el = this.$el;
                    var $box = $el.find('.boxWraper>input');
                    if (boxType == 'checkbox' && checked) {
                        $box.prop('checked', true);
                        $box.siblings('.checkboxCover').addClass('checked');
                        $el.addClass('selected');
                        // if (!onOff && this.checkedRecord) {
                        //     this.allCheckedRows.push(this.options.model);
                        // }
                        if (!onOff && this.checkedRecord) {
                            for (var i = 0; i < this.allCheckedRows.length; i++) {
                                if (this.allCheckedRows[i] == that.options.model) {
                                    break;
                                }
                                if (i === this.allCheckedRows.length - 1) {
                                    that.allCheckedRows.push(that.options.model);
                                }
                            }
                            this.allCheckedRows.length === 0 && this.allCheckedRows.push(this.options.model);
                        }                        
                    } else if (boxType == 'checkbox' && !checked) {
                        $box.prop('checked', false);
                        $box.siblings('.checkboxCover').removeClass('checked');
                        $el.removeClass('selected');
                        if (this.checkedRecord) {
                            $.each(this.allCheckedRows, function (k, v) {
                                for (var name in v) {
                                    if (v[name] != that.options.model[name]) { return };
                                }
                                that.allCheckedRows.splice(k, 1);
                            });
                        }
                    }
                    this.trigger('checkboxChange', e, checked, onOff);
                }, this));
            },
            render: function () {
                var json = this.options.model;
                var listOptions = this.options.listOptions;
                var boxType = listOptions.field.boxType;
                var field = listOptions.field;
                var button = field.button;
                var $el = this.$el.html('');
                if (boxType) {
                    switch (boxType) {
                        case 'checkbox':
                            var $boxWraper = $('<td class="boxWraper"></td>');
                            var $box = $('<input type="checkbox" />');
                            $box.val(json[this.options.listOptions.field.key]);
                            // value="'+  +'" '+ (json.checked?'checked=checked':'') +' 
                            if (json.checked) {
                                $box.attr('checked', 'true')
                            }
                            var $cover = $('<em class="checkboxCover"></em>');
                            $boxWraper.append($box).append($cover);
                            break;
                    }
                    $el.append($boxWraper);
                }
                if (button && button.locked) {
                    var listItemButton = new ListItemButton(button, json);
                    $el.append(listItemButton.$el);
                }
                $.each(field.items, $.proxy(function (i, item) {
                    if (item && item.locked) {
                        var cellView = new ListItemCellView({ config: item, data: json });
                        $el.append(cellView.render().el);
                    }
                }, this));

                return this;
            },
            rowClick: function (e) {
                var $src = $(e.currentTarget);
                this.trigger('rowClick', e, this.options.model);
                if (this.options.listOptions.field.boxType == "radio") {
                    this.$el.siblings().removeClass('selected');
                    this.$el.addClass('selected');
                }
            },
            changeSelectStatus: function (e) {
                var $box = $(e.currentTarget);
                var checked = $box.is(':checked') ? 1 : 0;
                // this.model.set('checked', checked);
                this.trigger('changeChecked', e, checked);
                e.stopPropagation();
            },
            boxWrapperClick: function (e) {
                var $box = $(e.currentTarget).find('input');
                var checked = $box.is(':checked') ? 0 : 1;
                // this.model.set('checked', checked);
                this.trigger('changeChecked', e, checked);
                return false;
            },
            rowDoubleClick: function (e) {
                this.trigger('rowDoubleClick', e, this.options.model);
            },
            rowEnter: function (e) {
                this.trigger('rowEnter', e);
            },
            rowLeave: function (e) {
                this.trigger('rowLeave', e);
            }
        });

        var ListItemButton = function (button, json) {
            this.el = document.createElement('td');
            this.$el = $(this.el);
            this.initialize(button, json);
        };
        ListItemButton.prototype = {
            initialize: function (button, json) {
                var $el = this.$el.addClass('btnStyles');
                if (button.className) {
                    $el.addClass(button.className);
                }
                if (button.items && button.items.length) {
                    $.each(button.items, $.proxy(function (i, item) {
                        if (item) {
                            var buttonView = new ListItemButtonItem({ config: item, data: json });
                            $el.append(buttonView.render().el);
                        }

                    }, this));
                }
                if (button.render) {
                    var $result = $(button.render($el, json));
                    $el.append($result);
                }
            }
        }

        var ContentListItem = function (options, i) {
            this.options = options;
            this.el = document.createElement('tr');
            this.$el = $(this.el);
            this.nTr = i;
            EventTarget.call(this);
            this.eventInit();
            this.initialize();
        };
        $.extend(ContentListItem.prototype, EventTarget.prototype, {
            eventInit: function () {
                this.$el.on('click', $.proxy(this.rowClick, this));
                this.$el.on('dblclick', $.proxy(this.rowDoubleClick, this));
                this.$el.on('mouseenter', 'td.tooltip', $.proxy(this.hover, this));
                this.$el.on('mouseenter', $.proxy(this.rowEnter, this));
                this.$el.on('mouseleave', $.proxy(this.rowLeave, this));
            },
            initialize: function () {
                if (this.nTr % 2 === 0) {
                    this.$el.addClass('evenTr');
                } else {
                    this.$el.addClass('oddTr');
                }
            },
            render: function () {
                var json = this.options.model;
                var boxType = this.options.listOptions.field.boxType;
                var $el = this.$el.html('');
                var listOptions = this.options.listOptions;
                var field = listOptions.field;
                var button = field.button;
                var popupLayer = field.popupLayer;
                $.each(field.items, $.proxy(function (i, item) {
                    if (item && !item.locked) {
                        var cellView = new ListItemCellView({ config: item, data: json });
                        $el.append(cellView.render().el);
                    }
                }, this));
                if (button && !button.locked) {
                    var listItemButton = new ListItemButton(button, json);
                    $el.append(listItemButton.$el);
                }
                if (popupLayer && popupLayer.groups) {
                    var lastText = popupLayer.text || '更多';
                    this.$el.append('<td class="tooltip" scope="col"><a href="javascript:;"><i class="ic ic-detail"></i>' + lastText + '</a></td>');
                }
                return this;
            },
            //hover 为即将废弃的代码，不再维护，请用户使用锁定列功能替换
            hover: function (e) {
                var $Tr = $(e.currentTarget)[0];
                var popupLayer = this.options.listOptions.field.popupLayer;
                var json = this.options.model;
                hdb.registerHelper('deal_item', function (items, options) {
                    var arr = [];
                    for (var i = 0; i < items.length; i++) {
                        var fieldConfig = items[i];
                        if (fieldConfig) {
                            var fieldName = items[i].name;
                            var fieldValue = json[fieldName];
                            if (fieldValue) {
                                var text = fieldConfig.render ? fieldConfig.render(fieldConfig, fieldValue) : fieldValue;
                                arr.push({ name: fieldConfig.text, text: text, width: 100 / items.length + '%' })
                            }
                        }

                    }
                    return options.fn(arr);
                });
                var id = "sn-tr-hover";
                if (e.type == "mouseenter") {
                    if (popupLayer && popupLayer.groups.length) {
                        var tempDialog = dialog.get(id);
                        if (tempDialog) {
                            tempDialog.close().remove();
                        }
                        var dialogConfig = {
                            id: id,
                            skin: 'sn-list-popupLayer',
                            align: 'left',
                            content: hdb.compile(listTipsTpl)(popupLayer.groups)
                        }
                        if (popupLayer.width) {
                            // _.extend(dialogConfig, { width: popupLayer.width });
                            $.extend(dialogConfig, { width: popupLayer.width });
                        }
                        if (popupLayer.height) {
                            // _.extend(dialogConfig, { height: popupLayer.height });
                            $.extend(dialogConfig, { height: popupLayer.height });
                        }
                        var d = new dialog(dialogConfig);
                        this.dialog = d;
                        d.show($Tr);
                        $(d.node).on('mouseleave', function () {
                            d.close().remove();
                        });
                    }
                }
            },
            rowClick: function (e) {
                var $src = $(e.currentTarget);
                this.trigger('rowClick', e, this.options.model);
                if (this.options.listOptions.field.boxType == "radio") {
                    this.$el.siblings().removeClass('selected');
                    this.$el.addClass('selected');
                }
            },
            rowDoubleClick: function (e) {
                this.trigger('rowDoubleClick', e, this.options.model);
            },
            rowEnter: function (e) {
                this.trigger('rowEnter', e);
            },
            rowLeave: function (e) {
                this.trigger('rowLeave', e);
            }
        });

        var ListItemButtonItem = function (options) {
            this.options = options;
            this.el = document.createElement('a');
            this.$el = $(this.el);
            this.initialize(options);
            this.eventInit();
        };
        ListItemButtonItem.prototype = {
            eventInit: function () {
                this.$el.on('click', $.proxy(this.buttonClick, this));
            },
            initialize: function (options) {
                this.$el.attr('href', 'javascript:;');
                if (this.options.config && this.options.config.name) {
                    this.$el.attr('name', this.options.config.name);
                }
            },
            render: function () {
                this.$el.html(this.options.config && this.options.config.text);
                return this;
            },
            buttonClick: function (e) {
                if (this.options && this.options.config && this.options.config.click) {
                    this.options.config.click.call(this, e, this.options);
                }
            }
        };

        var ListItemCellView = function (options) {
            this.options = options;
            this.el = document.createElement('td');
            this.$el = $(this.el);
            this.eventInit();
        };
        ListItemCellView.prototype = {
            eventInit: function () {
                this.$el.on('click', $.proxy(this.cellClick, this));
            },
            render: function () {
                var cellVal = this.options.data[this.options.config.name];
                var config = this.options.config;
                if (config) {
                    // if (config.render) {
                    //     cellVal = config.render.call(this, this.options.data, cellVal, this.$el);
                    // }
                    if (config.className) {
                        this.$el.addClass(config.className)
                    }
                    if (config.title) {
                        var titleText = this.options.data[config.title];
                        if (titleText && (typeof titleText) === 'string') {
                            this.$el.attr("title", titleText.replace(/<br>|<br\/>|<br \/>/g, '\n'));
                        } else {
                            this.$el.attr("title", titleText);
                        }
                    }
                    if (config.render) {
                        cellVal = config.render.call(this, this.options.data, cellVal, this.$el);
                    }
                }
                this.$el.html(cellVal);
                return this;
            },
            cellClick: function (e) {
                if (this.options && this.options.config && this.options.config.click) {
                    var cellVal = this.options.data[this.options.config.name];
                    this.options.config.click.call(this, e, cellVal, this.options);
                }
                //this.trigger('click', e,this.options);
            }
        };
        //------------------------------------
        //objClass相关私有方法
        //------------------------------------
        // 加载完成时执行的方法
        var loadOver = function (result) {
            var that = this;
            var $content = $(this.el).find('.sn-list-content-locker, .sn-list-content');
            var $blockOverlay = $(this.el).find('.sn-list-blockOverlay');
            $content.removeClass('sn-list-hide').addClass('sn-list-show');
            $blockOverlay.removeClass('sn-list-display-block').addClass('sn-list-hide');
            // IE8下选中文本后，翻页大面积选中debug
            $(that.el).find('.sn-list-table').css({ 'user-select': 'none' }).attr('unselectable', 'on');
            $(that.el).find('.sn-list-table').css({ 'user-select': 'text' }).attr('unselectable', 'off');
            // 每次查询前先设置0，解决再次搜索造成的尺寸变宽出现滚动条bug               
            $(that.el).find('.sn-list-also').css({ width: '0', 'table-layout': 'auto' });
            // $(that.el).find('.sn-list-also').css({ 'table-layout': 'auto' });

            // IE下checkbox双击选中debug
            var u_agent = navigator.userAgent;
            if (u_agent.indexOf('Trident') > -1 && u_agent.indexOf('rv:11') > -1 || u_agent.indexOf('MSIE') > -1) {
                $(that.el).find("input[type='checkbox']").attr('ondblclick', 'this.click()');
            }            

            $(that.el).find('.sn-list-footer .checkedDetail').show();
            // 处理边框线两层问题
            $(that.el).find('.sn-list-header-locker table tr').find('th:eq(0)').css('borderLeft', 0).end().find('th:last').css('borderRight', 0);
            $(that.el).find('.sn-list-content-locker table tr').find('td:eq(0)').css('borderLeft', 0).end().find('td:last').css('borderRight', 0);
            $(that.el).find('.sn-list-header-wrap table tr').find('th:last').css('borderRight', 0);
            $(that.el).find('.sn-list-content table tr').find('td:last').css('borderRight', 0);
            sizeInit.call(that);            
            that.onSearch = false;
            if ($content.eq(1).height() > $content.find('.sn-list-also').height()) {
                $content.find('>table').css({ borderBottom: '1px solid #d7e0e6' });
            }
            // 模拟scroll事件，解决ie下搜索数据后拉动滚动条到最右，然后搜索为空数据后，再次搜索有数据时表头不对齐bug
            $(that.el).find('.sn-list-content').trigger('scroll');
            // 解决ie下td 省略号bug，在sizeinit算完尺寸后
            $(that.el).find('.sn-list table td, .sn-list table th').css({ 'text-indent': '-1px' });

            that.trigger('success', result);
            that.trigger('afterBuild', result);
        }
        var checkAll = function (e) {
            var $checkAllBox = $(e.currentTarget);
            var checked = $checkAllBox.is(":checked");
            // $.each(this.collection.models, function (i, item) {
            //     item.set('checked', checked);
            // });
            if (this.collection) {
                if (checked) {
                    $checkAllBox.siblings('.checkboxCover').addClass('checked');
                    $.each(this.collection.modules, function (i, item) {
                        item.trigger('changeChecked', e, 0, true);
                    });
                    $.each(this.collection.modules, function (i, item) {
                        item.trigger('changeChecked', e, 1);
                    });
                } else {
                    $checkAllBox.siblings('.checkboxCover').removeClass('checked');
                    $.each(this.collection.modules, function (i, item) {
                        item.trigger('changeChecked', e, 0);
                    });
                }
            }
        };
        var unlockerWidth = function (field) {
            // var tableWidth = _.reduce(field.items, function (basic, add) {
            //     return add && (basic + (!add.locked && (add.width || 100) || 0)) || basic;
            // }, 0);
            var tableWidth = 0;
            for (var i = 0; i < field.items.length; i++) {
                var add = field.items[i];
                tableWidth = add && (tableWidth + (!add.locked && (add.width || 100) || 0)) || tableWidth;
            }
            var button = field.button;
            if (button) {
                tableWidth += button.width || 100;
            }
            return tableWidth;
        };
        var lockerWidth = function (field) {
            // var tableWidth = _.reduce(field.items, function (basic, add) {
            //     return add && (basic + (add.locked && (add.width || 100) || 0)) || basic;
            // }, 0);
            var tableWidth = 0;
            for (var i = 0; i < field.items.length; i++) {
                var add = field.items[i];
                tableWidth = add && (tableWidth + (add.locked && (add.width || 100) || 0)) || tableWidth;
            }
            if (field.boxType == 'checkbox') {
                tableWidth += 29;
            }
            var button = field.button;
            if (button && button.locked) {
                tableWidth += button.width || 100;
            }
            return tableWidth;
        };
        var buttonValidate = function (button, options) {
            if (button && ((button.items && button.items.length) || button.render)) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        };
        var popupLayerValidate = function (popupLayer, options) {
            if (popupLayer && ((popupLayer.groups && popupLayer.groups.length))) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        };
        var messageValidate = function (message, options) {
            if (message) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        };
        var errorCodeValidate = function (errCode, options) {
            if (errCode != null && errCode != 0) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        };

        var formatUnit = function (value, options) {
            var valueStr = '';
            if (value) {
                // value-= 2;
                valueStr = value.toString();
                var endsWith = function (suffix) {
                    return valueStr.indexOf(suffix, valueStr.length - suffix.length) !== -1;
                }
                if (!endsWith('px') && !endsWith('%')) {
                    valueStr += 'px';
                }
                return new hdb.SafeString(valueStr);
            } else {
                return '99px';
            }

        };

        var helperInit = function () {
            hdb.registerHelper('lockerWidth', lockerWidth);
            hdb.registerHelper('unlockerWidth', unlockerWidth);
            hdb.registerHelper('if_button', buttonValidate);
            hdb.registerHelper('if_message', messageValidate);
            hdb.registerHelper('if_errorCode', errorCodeValidate);
            hdb.registerHelper('formatUnit', formatUnit);
            hdb.registerHelper('if_popupLayer', popupLayerValidate);

            hdb.registerHelper('if_false', function (context, options) {
                if (!context) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
            hdb.registerHelper('if_object', function (context, options) {
                if (typeof (context) == options.hash.compare)
                    return options.fn(this);
                return options.inverse(this);
            });
            hdb.registerHelper('if_checkbox', function (context, options) {
                if (context == options.hash.compare)
                    return options.fn(this);
                return options.inverse(this);
            });
            hdb.registerHelper('if_sorting', function (context) {
                if (context == -1 || context == 1) {
                    return 'sortImgShow';
                }
            });
        };

        var sizeInit = function () {
            setColgroup.call(this);
            var options = this.options,
                $el = this.$el;
            var $list = $el.find('.sn-list');
            var $header = $el.find('.sn-list-header');
            var $headerWrap = $el.find('.sn-list-header-wrap');
            var $content = $el.find('.sn-list-content');
            var $contentLocker = $el.find('.sn-list-content-locker');
            var $footer = $el.find('.sn-list-footer');
            var $alsoTable = $el.find('.sn-list-also');
            var $resizableTable = $el.find('.sn-list-resizable');
            var SCROLL_BAR_HEIGHT = 17;
            // var listWidth = this.onSearch ? this.listWidth : $list.width();
            var listWidth = $list[0].clientWidth === 0 ? this.listWidth : $list.width();
            // var listWidth = this.listWidth;
            var contentLockerWidth = headerLockerWidth = lockerWidth(this.options.field);
            var contentWidth = unlockerWidth(this.options.field);
            var contentLockerBottom = headerWrapRight = 0;
            // var headerWrapWidth = this.onSearch ? this.headerWrapWidth : ($header.width() - contentLockerWidth);
            var headerWrapWidth = $list[0].clientWidth === 0 ? this.headerWrapWidth : ($header.width() - contentLockerWidth);
            // var headerWrapWidth = this.headerWrapWidth;
            // 此处移到下方else，处理拖动时候表头尺寸不对应问题
            // $headerWrap.css({ 'width': headerWrapWidth + 'px' });
            $content.css({ 'width': headerWrapWidth + 'px' });
            // 处理拖拽后，拉伸窗口使外层比内层table大时，改变table属性使其自适应；
            if ($content.width() > $alsoTable.width()) {
                $alsoTable.css({ 'width': '100%' });
            }
            // 处理拉伸窗口表头不能跟随伸展宽度问题
            if ($alsoTable[0].offsetWidth) {
                $resizableTable.width($alsoTable.width());
                // $alsoTable.width($alsoTable.width());
            }
            if (headerLockerWidth + contentWidth > listWidth) {
                contentLockerBottom = SCROLL_BAR_HEIGHT;
            }
            if (options.height) {
                // clearTimeout(timer);
                // var timer = setTimeout($.proxy(function () {
                var content = $content[0];
                if (content.scrollHeight > content.clientHeight) {
                    headerWrapRight = SCROLL_BAR_HEIGHT;
                }
                // 判断竖向滚动条存在时，头部宽度调整
                if ($alsoTable[0].clientHeight > $content[0].clientHeight) {
                    $headerWrap.css({ 'width': headerWrapWidth - headerWrapRight + 'px' });
                } else {
                    $headerWrap.css({ 'width': headerWrapWidth + 'px' });
                }
                var rowsAreaHeight = options.height - $header[0].offsetHeight - $footer[0].offsetHeight - 2;
                // $contentLocker.css({ 'height': rowsAreaHeight - contentLockerBottom + 'px' });
                $content.css({ 'height': rowsAreaHeight + 'px' });
                $contentLocker.css({ 'height': $content[0].clientHeight });
                // }, this), 0);

            } else {
                $headerWrap.css({ 'width': headerWrapWidth + 'px' });
                $contentLocker.css({ 'height': 'auto' });
                $content.css({ 'height': 'auto' });
            }

            // $('.sn-list-content-locker, .sn-list-content', this.$el).removeClass('sn-list-hide').addClass('sn-list-show');
            // $('.sn-list-blockOverlay', this.$el).removeClass('sn-list-display-block').addClass('sn-list-hide');          
        };

        var setColgroup = function () {
            // 代替colgroup结构来处理列宽一致问题(右上table列宽和右下table列宽一致)
            var that = this;
            var allItems = that.options.field.items;
            var contentItems = [];
            var alsoTableWidth = that.$el.find('>.sn-list>.sn-list-table').width() - that.$el.find('>.sn-list>.sn-list-table>.sn-list-content-locker').width();
            // +2做ie下宽度兼容问题
            // var u_agent = navigator.userAgent;
            // var hack = 0;
            // if (u_agent.indexOf('Trident')>-1 && u_agent.indexOf('rv:11')>-1 || u_agent.indexOf('MSIE') > -1) {
            //     hack = 2;
            // } else {
            //     hack = 0;
            // }            
            for (var i = 0; i < allItems.length; i++) {
                !allItems[i].locked && contentItems.push(allItems[i]);
            }
            if (that.options.field.button && !that.options.field.button.locked) {
                contentItems.push(that.options.field.button);
            }
            if (that.options.field.popupLayer) {
                // 这里push个空集合，因为pupupLayer的width项是规定弹出框的宽度的
                contentItems.push({});
            }
            $(that.el).find('.sn-list-content tr:eq(0) td').each(function (k, v) {
                // 此处解决初始化部分情况下存在横向滚动条，抛弃原先考虑到表头、主体取最大尺寸考量；
                // var thWidth = $('.sn-list-header-wrap th', that.el).eq(k).width();
                // var tdWidth = $(v).width();
                // var iWidth = Math.max(thWidth, tdWidth);   
                var iWidth = 0;
                if (contentItems[k].width) {
                    // 这里的12是padding和border的和，需注意，后续可优化
                    var paddingBorder = 22;
                    if (typeof contentItems[k].width === 'string' && contentItems[k].width.slice(-1) === '%') {
                        iWidth = alsoTableWidth * parseInt(contentItems[k].width) / 100 - paddingBorder;
                    } else {
                        iWidth = contentItems[k].width - paddingBorder;
                    }
                } else {
                    iWidth = $(v).width();
                }
                $(v).width(iWidth);
                $(that.el).find('.sn-list-header-wrap th').eq(k).width(iWidth);
            });

            // 初始化列宽完成后，设置以下属性满足拖动完全，否则拖动不能压缩内容
            var $also = $(that.el).find('.sn-list-also');
            var $resizable = $(that.el).find('.sn-list-resizable');
            if ($also[0] && $also[0].offsetWidth) {
                $resizable.width($also.width()).css({ 'table-layout': 'fixed' });
                $also.css({ 'table-layout': 'fixed' });
                resizableInit.call(that);
            }
        }

        var positionContentLocker = function (e, headerWrap, contentLocker) {
            var e = e || window.event;
            headerWrap.scrollLeft = e.currentTarget.scrollLeft;
            contentLocker.scrollTop = e.currentTarget.scrollTop;
        };

        var eventInit = function () {
            var headerWrap = $(this.$el).find('.sn-list-header-wrap')[0];
            var contentLocker = $(this.$el).find('.sn-list-content-locker')[0];
            var activeTd = null;
            $(this.$el).find('.sn-list-content').on('scroll', $.proxy(function (e) {
                positionContentLocker(e, headerWrap, contentLocker);
            }, this));
            // 点击表头排序事件
            var me = this;
            this.$el.on('click', '.sortDown:not(.theSort)', function (e) {
                sortFn.call(this, e, -1);
            });
            this.$el.on('click', '.sortUp:not(.theSort)', function (e) {
                sortFn.call(this, e, 1);
            });
            // 是否启用右键菜单（复制单元格操作）
            if (this.options.contextmenu) {
                this.$el.on('contextmenu', 'td', function (e) {
                    e.preventDefault();
                    activeTd = this;
                    var l = e.clientX;
                    var t = e.clientY;
                    $(me.el).find('.sn-list .sn-list-table .copyMenu').show().css({top: t, left: l});
                })
                // this.$el.on('click', '.copyMenu', function (e) {
                //     $(me.el).find('.sn-list .sn-list-table .copyMenu').hide();
                // })
                $(document).on('click.hideCopyMenu', function (e) {
                    $(me.el).find('.sn-list .sn-list-table .copyMenu').hide();
                })
                this.$el.on('click', '.copyMenu li', function (e) {
                    var copyText = '';
                    if ($(this).hasClass('copyTd')) {
                        // 复制单元格内容
                        copyText = $(activeTd).text();
                    } else if ($(this).hasClass('copyRows')) {
                        // 复制整行
                        var index = $(activeTd).closest('tr').index();
                        $(me.el).find('.sn-list-content-locker table tr:eq('+index+'), .sn-list-content table tr:eq('+index+')').find('td').each(function (k, v) {
                            copyText += ($(v).text() + " ");
                        });
                    } else if ($(this).hasClass('copyCols')) {
                        // 复制整列
                        var index = $(activeTd).index();
                        $(activeTd).closest('table').find('tr').each(function (k, v) {
                            copyText += ($(v).find('td').eq(index).text() + " ");
                        });
                    }
                    var $copyInput = $(me.el).find('.sn-list .sn-list-table .copyMenu .copyText');
                    $copyInput.val(copyText);
                    $copyInput[0].select();
                    document.execCommand("Copy");
                })    
            }
            
            var sortFn = function (e, dir) {
                if (!($(me.el).find('.sn-list-also')[0] && $(me.el).find('.sn-list-also')[0].offsetWidth)) {
                    return;
                }
                // 如果存在多选框，需要考虑-1
                if (me.options.field.boxType && me.options.field.boxType === 'checkbox') {
                    var sortIndex = me.$el.find('th').index($(this).closest('th')) - 1;
                } else {
                    var sortIndex = me.$el.find('th').index($(this).closest('th'));
                }
                var obj = {};
                obj.sortField = me.searchParam.sortField = me.options.field.items[sortIndex].name;
                obj.sorting = me.searchParam.sorting = dir;
                me.url = 'data/list_list.json';
                // 解决切换每页条数后查询依然按最初条数查询bug
                // me.search(me.searchParam, 0);
                loading.call(me, me.pageIndex);
                $(me.el).find('.sn-list-header .sortBox .theSort').removeClass('theSort');
                $(this).addClass('theSort');
                me.trigger('sort', e, obj);
            };
        };
        // 初始化拖拽改变列宽方法
        var resizableInit = function () {
            var that = this;
            $.each($(that.el).find('.sn-list-resizable th'), function (k, v) {
                $(v).resizable({
                    alsoResize: $(that.el).find('.sn-list-also td')[k],
                    handles: 'e'
                });
            });
        };
        // 监听拖拽事件，table宽度跟随变化
        var resizeEventInit = function () {
            var that = this;
            var tWidth = $(that.el).find('.sn-list-resizable').width();
            // that.contentLockerHeight = $('.sn-list-content-locker', that.$el).height();
            $(that.$el).on('resizestart', '.sn-list-resizable th', function (event, ui) {
                resizableOnOff = true;
                tWidth = $(that.el).find('.sn-list-resizable').width();
            });
            $(that.$el).on('resize', '.sn-list-resizable th', function (event, ui) {
                var x = ui.size.width - ui.originalSize.width;
                $(that.el).find('.sn-list-resizable').width(tWidth + x);
                $(that.el).find('.sn-list-also').width(tWidth + x);
                // 拖拽出现横向滚动条时，计算左边锁定区域高度
                if (that.options.height) {
                    $(that.el).find('.sn-list-content-locker').css({ 'height': $(that.el).find('.sn-list-content')[0].clientHeight });
                    if ($(that.el).find('.sn-list-resizable')[0].clientWidth > $(that.el).find('.sn-list-header-wrap')[0].clientWidth) {

                        // if (!that.contentLockerHeight) {
                        //     that.contentLockerHeight = $('.sn-list-content-locker', that.$el).height();
                        // }
                        // $('.sn-list-content-locker', that.$el).height(that.contentLockerHeight - 17);
                    } else if (that.contentLockerHeight) {
                        // $('.sn-list-content-locker', that.$el).height(that.contentLockerHeight);
                        $(that.el).find('.sn-list-header-wrap').width(that.headerWrapWidth);
                    }
                }
            });
            $(that.$el).on('resizestop', '.sn-list-resizable th', function (event, ui) {
                resizableOnOff = false;
            });
        };

        var objClass = function (options) {
            this.version = listVersion;
            this.options = options;
            this.options.checkedRecord = this.options.checkedRecord === false ? false : true;
            this.template = hdb.compile(tpl);
            this.el = this.options.el ? this.options.el : document.createElement('div');
            this.$el = $(this.el);
            this.allCheckedRows = [];
            EventTarget.call(this);
            this.initialize(options);

        };
        $.extend(objClass.prototype, EventTarget.prototype, {
            eventInit: function () {
                this.$el.off();
                $(document).off('hideCopyMenu');
                this.$el.on('click', 'thead .checkAllWraper>input, .sn-list-footer .checkAllWraper>input', $.proxy(checkAll, this));
                this.$el.on('click', '.sn-list-footer .btns>.btn', $.proxy(this.btnClick, this));
            },
            initialize: function (options) {
                if (!options || !options.field || !options.field.items) {
                    var noticeStr = 'please config params for list. as el、field、field.items';
                    console.log(noticeStr);
                    this.$el.text(noticeStr);
                    return this;
                }
                this._flag = 'sn-list-' + Math.random().toString().replace('.', '');
                this.validated = 1;
                helperInit.call(this);
                this.$el.html(this.template(options))
                    .find('.sn-list').addClass(this._flag);
                // eventInit.call(this);
                // resizeEventInit.call(this);
                // 只实例化，没有search、load时，待dom显示计算尺寸
                var that = this;
                var timer = null;
                function init_test() {
                    if (document.querySelector('.' + that._flag)) {
                        timer && clearTimeout(timer);
                        // 在元素出来后绑定事件
                        that.eventInit();
                        eventInit.call(that);
                        resizeEventInit.call(that);
                        sizeInit.call(that);
                    } else {
                        timer = setTimeout(init_test, 70);
                    }
                };
                init_test();
                // var timer0 = setInterval($.proxy(function () {
                //     // if ($('.' + this._flag).length > 0) {
                //     if (document.querySelector('.' + this._flag)) {
                //         sizeInit.call(this);
                //         clearInterval(timer0);
                //     }
                // }, this), 70);
                // 主体部分显示后，计算尺寸
                // var timer = setInterval($.proxy(function () {
                //     if ($('.sn-list-content', this.el)[0] && $('.sn-list-content', this.el)[0].clientHeight) {
                //         sizeInit.call(this);
                //         clearInterval(timer);
                //     }
                // }, this), 70);
                $(window).on('resize.listResize', $.proxy(function () {
                    if (resizableOnOff) {
                        return;
                    } else {
                        if (!this.resized && !!$(this.$el).find('.sn-list-header').width()) {
                            setTimeout($.proxy(function () {
                                sizeInit.call(this);
                                this.resized = 0;
                            }, this), 70);
                        }
                        this.resized = 1;
                    }
                }, this));
            },
            getSelected: function () {
                return this.selectedData;
            },
            getCheckedRows: function () {
                // var models = _.filter(this.collection.modules, function (item) {
                //     return item.checked == '1';
                // });
                if ($(this.$el).find('.sn-list-header-locker').find('input').is(':checked')) {
                    return this.collection.models;
                } else if (this.collection) {
                    var checkedModel = [];
                    for (var i = 0; i < this.collection.modules.length; i++) {
                        if (this.collection.modules[i].checked === 1) {
                            checkedModel.push(this.collection.modules[i].options.model);
                        }
                    }
                    return checkedModel;
                } else {
                    // 如果new list()后直接掉这个方法,做以下返回
                    return [];
                }

                // return _.map(models, function (item) {
                //     return item.options.model;
                // });
            },
            getAllCheckedRows: function () {
                if ($(this.$el).find('.sn-list-header-locker').find('input').is(':checked')) {
                    return $.extend(this.allCheckedRows, this.collection.models);
                } else {
                    return this.allCheckedRows;
                }
            },
            refresh: function () {
                loading.call(this, this.objPagination.currentPage || 0);
            },
            search: function (searchParam, pageIndex) {
                if (!this.validated) {
                    return;
                }
                this.selectedData = undefined;
                this.allCheckedRows = [];
                this.loaded = 0;
                this.searchParam = searchParam ? searchParam : {};
                // 首次不再默认发送带排序请求
                // if (searchParam && !searchParam.sorting && this.options.field.items) {
                //     for (var i = 0; i < this.options.field.items.length; i++) {
                //         if (this.options.field.items[i].sorting && this.options.field.items[i].name) {
                //             // searchParam.sorting = this.options.field.items[i].sorting;
                //             // searchParam.sortField = this.options.field.items[i].name;
                //             this.searchParam.sorting = this.options.field.items[i].sorting;
                //             this.searchParam.sortField = this.options.field.items[i].name;
                //             break;
                //         }
                //     }
                // }
                $(this.el).find('.sn-list-footer .checkedCountBox .checkedCount').text(0);
                loading.call(this, pageIndex || 0);
            },
            load: function (beans) {
                this.selectedData = undefined;
                this.allCheckedRows = [];
                $(this.el).find('.sn-list-footer .checkedCountBox .checkedCount').text(0);
                loading.call(this, beans);
                // sizeInit.call(this);
            },
            btnClick: function (e) {
                var target = e.target || e.currentTarget,
                    items = this.options.page.button.items,
                    // i = target.className.slice(13, 14);
                    i = parseInt(target.className.split('btnCustom')[1]);
                if (items[i].click) {
                    items[i].click(e, items[i]);
                }
            },
            clear: function () {
                this.$el.off();
                $(this.$el).find('.sn-list').remove();
                $(window).off('resize.listResize');
                if (this.collection && this.collection.modules) {
                    for (var i = 0; i < this.collection.modules.length; i++) {
                        this.collection.modules[i].$el.off();
                        this.collection.contentModules[i].$el.off();
                    }
                }
                // for (var key in this) {
                //     delete this[key];
                // }
            },
            sizeInit: function () {
                sizeInit.call(this);
            }
        });
        return objClass;
    });


(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('@charset \"UTF-8\";\r\n/** {\r\n    margin: 0;\r\n    padding: 0;\r\n}*/\r\n\r\n.clearfix:before,\r\n.clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n    line-height: 0;\r\n}\r\n\r\n.clearfix:after {\r\n    clear: both;\r\n}\r\n\r\n.clearfix {\r\n    *zoom: 1;\r\n}\r\n\r\n\r\n/* sn-list */\r\n\r\n.sn-list {\r\n    position: relative;\r\n    border: 1px solid #d5dce5;\r\n    box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n\r\n.sn-list table {\r\n    /*width: 100%;*/\r\n    /*table-layout: fixed;*/\r\n    font-size: 13px;\r\n    border-collapse: collapse;\r\n    border-spacing: 0px;\r\n    background: #e6edf5;\r\n}\r\n.sn-list-content-locker table, .sn-list-header-locker table {\r\n    table-layout: fixed;\r\n}\r\n\r\n.sn-list table th,\r\n.sn-list table td {\r\n    min-width: 80px;\r\n    box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    padding: 0 10px;\r\n    /* padding: 0 0 0 5px; */\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    word-break: keep-all;\r\n    /*ie td省略号debug*/\r\n    /* text-indent: -1px; */\r\n}\r\n\r\n.sn-list table th {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    /*border-bottom: 1px solid #d7e0e6;*/\r\n    border: 1px solid #d5dce5 !important;\r\n    color: #78909c;\r\n    font-weight: normal;\r\n    /*background: #e8eff2;*/\r\n    border-top: 0 !important;\r\n}\r\n\r\n.sn-list table td {\r\n    height: 36px;\r\n    /* line-height: 36px; */\r\n    color: #000;\r\n    border: 1px solid #eaedf1 !important;\r\n    border-top: 0 !important;\r\n    border-bottom: 0 !important;\r\n}\r\n\r\n.sn-list table th img {\r\n    border: 0;\r\n}\r\n.sn-list-header-locker table th,\r\n.sn-list-header-wrap table th {\r\n    position: relative;\r\n}\r\n/*.sn-list .sn-list-header thead {\r\n    background: #e8eff2;\r\n}*/\r\n.sn-list table th .sortBox {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 24px;\r\n    height: 24px;\r\n    line-height: 24px;\r\n    margin-right: -24px;\r\n}\r\n\r\n.sn-list table th .sortBox .sortDown,\r\n.sn-list table th .sortBox .sortUp {\r\n    position: absolute;\r\n    display: block;\r\n    margin: 0 7px 2px;\r\n    width: 0;\r\n    height: 0;\r\n    border: 5px solid transparent;    \r\n}\r\n\r\n.sn-list table th .sortBox .sortDown {\r\n    top: 21px;\r\n    border-top: 5px solid #ccc;\r\n}\r\n\r\n.sn-list table th .sortBox .sortUp {\r\n    border-bottom: 5px solid #ccc;\r\n}\r\n\r\n.sn-list table th .sortBox .sortDown.theSort {\r\n    border-top: 5px solid #0085d0;\r\n}\r\n\r\n.sn-list table th .sortBox .sortUp.theSort {\r\n    border-bottom: 5px solid #0085d0;\r\n}\r\n\r\n.sn-list table .sortBox .sortDown:hover{\r\n    border-top: 5px solid #aaa;\r\n}\r\n\r\n.sn-list table .sortBox .sortUp:hover {\r\n    border-bottom: 5px solid #aaa;\r\n}\r\n\r\n.sn-list .checkAllWraper,\r\n.sn-list .boxWraper {\r\n    /* width: 36px; */\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 1;\r\n    text-overflow: clip;\r\n}\r\n\r\n.sn-list .sn-list-table .checkAllWraper,\r\n.sn-list .sn-list-table .boxWraper {\r\n    line-height: 36px;\r\n}\r\n\r\n.sn-list .checkAllWraper input,\r\n.sn-list .boxWraper input{\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    margin: 0;\r\n    width: 12px;\r\n    height: 12px;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n}\r\n\r\n.sn-list .checkAllWraper .checkboxCover,\r\n.sn-list .boxWraper .checkboxCover {\r\n    display: block;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -10px;\r\n    /* margin-left: -11px; */\r\n    margin-top: -10px;\r\n    background: url(\'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAYAAAB7wJiVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Y3NUU2RjRFNjNDMTFFNkI1RUZGNzAzNTY5NTMzNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y3NUU2RjVFNjNDMTFFNkI1RUZGNzAzNTY5NTMzNzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNjI4QzE3NUU2MEExMUU2QjVFRkY3MDM1Njk1MzM3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNjI4QzE3NkU2MEExMUU2QjVFRkY3MDM1Njk1MzM3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqhCFh8AAAKjSURBVHja7FlLaxNRFP4mM51J82je4qRJSKYqFnyBS7vQgoIL0QqlK0G0iKtu/QGu3Lh1Y3BbEcUWUTeKKHXhSoqg2JhOHtO4SaaRZJo2pPFOO5UQgjiWSabpfMwlk7ncL+eeb865595QzWYTFswDm+UCc4HZufn89ftF8pEkjdfJUSDt5qnRI69aH1L3FnfF17xzwlA+WZZ3xefz+QzhY1o6kvFImHfY7brYlFqNF/MrqiHhtq7k26k4f2bYoYtvQVL48cdiV/gGHU6epmldfI1Gg19TqobxtaYs3WKo0MZ0eit0O0+FNqYrfHqdp0IbYxiftYZYi7rxeJ+rmtq+SqWyfwR5uCjjwpMMHn1ZNaV9pWIR6R8plErF/hfk+dIvzLwpYCziwNTRIdPZVy6XIUl5OJ0ueL2+/hGkvtlE+3b2XbaKay8ljAY4PL0cg4Pp3dQ6bbbVNJXNiOA4DvFEAjabrT8EKa9v4tKzLK4T5683tif+qbCGyfkcou4BvJ6Mw8P1blqkjMVyOo1sNvNHGEVRkBGXMcCyEEYO4W/VGLPnqhCKlIoUhdlvJPwrddwdO4DJuRzcHI0XV2MIDdI9tY8itpELq7KM+kYdPM9DJGKoESEIAhiG6a8qy83aMDcRxY3jXnzIKzg7K5IUBsxPxCB42d6/MMTx8YQAvz+AarWCVGppK1ISwghYluvPspchYfLgfBi3T24vjDOn/TgW5ExjnxolkWgUgWBw63swFIL9HzfdDPYw7o/zuHJ4COdiTlPaFw4Pw+PxwOVy74+NIU1ytVnF2IkUPWK0C1JQajXdP6qN+dmhq7AgKbr5Pq4oXeNTK6L/qaKM5GtNWdPaqe1BnZwSabc6PJ/WTllNy6edspqKj7L+MTRZWW+5wFz4LcAAmKsJbn9UN6IAAAAASUVORK5CYII=\') no-repeat;\r\n    background-position: 0;\r\n    z-index: -1;\r\n}\r\n.sn-list .checkAllWraper .checkboxCover.checked,\r\n.sn-list .boxWraper .checkboxCover.checked { \r\n    background-position: -40px center;\r\n}\r\n\r\n.sn-list tfoot td.tooltip a {\r\n    color: #9aacbd;\r\n    text-decoration: none;\r\n}\r\n\r\n.sn-list tfoot td {\r\n    border: none;\r\n}\r\n\r\n.sn-list .evenTr td {\r\n    background-color: #f0f5f7;\r\n}\r\n\r\n.sn-list .oddTr td {\r\n    background-color: #fff;\r\n}\r\n\r\n.sn-list tbody>tr.hover>td {\r\n    /* background-color: #e3f3fa; */\r\n    background-color: #fff3d9;\r\n}\r\n\r\n.sn-list tbody>tr.selected td {\r\n    background-color: #ffe7b2;\r\n    /* background-color: #bee1f3; */\r\n    /*使用e5f3fa根本无法区分背景色与选中项*/\r\n}\r\n\r\n.sn-list tbody>tr.selected:hover td {\r\n    background-color: #ffe7b2;\r\n    /* background-color: #bee1f3; */\r\n}\r\n\r\n.sn-list tbody>tr.info td {\r\n    background-color: #d5edf8;\r\n}\r\n\r\n.sn-list tbody>tr.info:hover td {\r\n    background-color: #bfe4f4;\r\n}\r\n\r\n.sn-list tbody>tr.success td {\r\n    background-color: #e6efc2;\r\n}\r\n\r\n.sn-list tbody>tr.success:hover td {\r\n    background-color: #deeaae;\r\n}\r\n\r\n.sn-list tbody>tr.error td {\r\n    background-color: #fbe3e4;\r\n}\r\n\r\n.sn-list tbody>tr.error:hover td {\r\n    background-color: #f8cdce;\r\n}\r\n\r\n.sn-list tbody>tr.warning td {\r\n    background-color: #fff6bf;\r\n}\r\n\r\n.sn-list tbody>tr.warning:hover td {\r\n    background-color: #fff2a6;\r\n}\r\n\r\n.sn-list tbody>tr .btnStyles>a {\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n/*footer*/\r\n.sn-list .sn-list-footer {\r\n    /* height: 24px; */\r\n    padding: 14px 20px 14px 8px;\r\n    border-top: 1px solid #d7e0e6;\r\n    box-sizing: content-box !important;\r\n    /* padding-bottom: 2px; */\r\n}\r\n.sn-list .sn-list-footer:after {\r\n    content: \".\";\r\n    display: block;\r\n    height: 0;\r\n    clear: both;\r\n    visibility: hidden;\r\n}\r\n/* checkedDetail */\r\n.sn-list .sn-list-footer .checkedDetail {\r\n    display: none;\r\n    float: left;\r\n    height: 100%;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n}\r\n.sn-list .sn-list-footer .checkedDetail .checkAllWraper {\r\n    margin-right: 8px;\r\n}\r\n.sn-list .sn-list-footer .checkedDetail .checkedCountBox {\r\n    margin: 0 20px;\r\n}\r\n.sn-list .sn-list-footer .checkedDetail .checkedCount {\r\n    font-weight: normal;\r\n    color: #ff6e69;\r\n}\r\n\r\n/*buttons*/\r\n\r\n.sn-list .btns {\r\n    float: left;\r\n    height: 100%;\r\n    /*line-height: 22px;*/\r\n    vertical-align: middle;\r\n    /* margin-top: 4px; */\r\n    /*margin: 4px 0 15px;*/\r\n}\r\n\r\n.sn-list .btns .btn {\r\n    height: 22px;\r\n    outline: none;\r\n    font-size: 12px;\r\n    line-height: 22px;\r\n    color: #0085d0;\r\n    padding: 0 10px;\r\n    border: 1px solid #0085d0;\r\n    border-radius: 3px;\r\n    background: #FFF;\r\n}\r\n\r\n.sn-list .btns .btn:hover {\r\n    background: #e5f3fa;\r\n}\r\n\r\n.sn-list .btns .btn:active {\r\n    background: #eaeef1;\r\n}\r\n\r\n\r\n/* pagination */\r\n\r\n.sn-list-pagination {\r\n    float: right;\r\n    /* margin-top: 4px; */\r\n    /*margin: 4px 0 10px;*/\r\n    text-align: right;\r\n    font-size: 12px;\r\n}\r\n\r\n.sn-list-pagination span,\r\n.sn-list-pagination a {\r\n    margin: 0 3px;\r\n    display: inline-block;\r\n    float: none !important;\r\n}\r\n\r\n.sn-list-pagination .current {\r\n    background: #FFF;\r\n    color: #0085d0;\r\n    border: 1px solid #0085d0;\r\n}\r\n\r\n.sn-list-pagination .current.prev,\r\n.sn-list-pagination .current.next {\r\n    background: #FFF;\r\n    color: #ddd;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n.sn-list-pagination .current,\r\n.sn-list-pagination .disabled,\r\n.sn-list-pagination a {\r\n    padding: 0 8px;\r\n    line-height: 22px;\r\n    height: 22px;\r\n    text-decoration: none;\r\n}\r\n\r\n.sn-list-pagination .prev:before {\r\n    content: \"＜\";\r\n}\r\n\r\n.sn-list-pagination .next:before {\r\n    content: \"＞\";\r\n}\r\n\r\n.sn-list-pagination a {\r\n    color: #666;\r\n    background: #FFF;\r\n    border: 1px solid #d0d6d9;\r\n}\r\n\r\n.sn-list-pagination a:hover {\r\n    text-decoration: none;\r\n    color: #0085d0;\r\n    background-color: #FFF;\r\n    border: 1px solid #0085d0;\r\n}\r\n\r\n.sn-list-pagination .current span {\r\n    background: #FFF;\r\n    color: #0085d0;\r\n    border: 1px solid #0085d0;\r\n}\r\n\r\n.sn-list-pagination .disabled span {\r\n    color: #AAA;\r\n}\r\n\r\n.sn-list-pagination input,\r\n.sn-list-pagination select {\r\n    border: solid 1px #ddd;\r\n    width: 24px;\r\n    padding: 3px 0;\r\n}\r\n\r\n.sn-list .buttons>div {\r\n    display: inline-block;\r\n}\r\n\r\n.sn-list-pagination .total {\r\n    color: #999;\r\n}\r\n\r\n.sn-list-pagination .selectPerPage {\r\n    border-radius: 0;\r\n    width: 48px;\r\n    height: 24px;\r\n    opacity: 0;\r\n    filter:alpha(opacity=0);\r\n}\r\n\r\n.sn-list-pagination .per-page em,\r\n.sn-list-pagination .input-box em {\r\n    color: #999;\r\n    font-style: normal;\r\n}\r\n\r\n.sn-list-pagination .per-page,\r\n.sn-list-pagination .input-box {\r\n    position: relative;\r\n    margin-left: 6px;\r\n    z-index: 1;\r\n}\r\n\r\n.sn-list-pagination .per-page .selectValBox{ \r\n    box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    z-index: -1;\r\n    display: block;\r\n    width: 48px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -3px;\r\n    border: 1px solid #ccc;\r\n}\r\n.sn-list-pagination .per-page .selectVal{\r\n    position: absolute;\r\n    right: 22px;\r\n    top: 0;\r\n    display: block;\r\n    width: 26px;\r\n    height: 22px;\r\n    line-height: 22px;\r\n    text-align: left;\r\n    text-indent: 10px;\r\n}\r\n\r\n.sn-list-pagination .per-page .jiantou {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    display: block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background:#fff url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkVBMUM5N0QwMDgwMTFFNzlDQzc5ODQ0MEVEQzY1QTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkVBMUM5N0UwMDgwMTFFNzlDQzc5ODQ0MEVEQzY1QTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RUExQzk3QjAwODAxMUU3OUNDNzk4NDQwRURDNjVBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RUExQzk3QzAwODAxMUU3OUNDNzk4NDQwRURDNjVBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkNgXWoAAACuSURBVEjHY/j//z/DQGKGUQcMuAMqJswxBOLdQCwAxAxYMEh8D0gdMQZi0S8HxPuhNIoczAF7gfg/EJ8GYn40RSD+Kaj8XjIcIAPEd6D670D5GA4QBeIrUEXHkRwBoo9BxUHyoiQ6QAqIb0H1f4PSt6DiKA4AYXEgvg5VdASIJaD0f6i4OEwDkQ4g2jySXUyEA0gKUZLjjAgHkJSmSE61RDiApFw1WhCNOmDAHQAAWBlggEXNrGYAAAAASUVORK5CYII=\') no-repeat 3px 3px;\r\n}\r\n\r\n.sn-list-pagination .input-box input {\r\n    margin: 0 10px;\r\n}\r\n\r\n\r\n/* sn-list-loading */\r\n\r\n.sn-list-blockOverlay {\r\n    display: none;\r\n    /* display: inline-block; */    \r\n    text-align: center;\r\n    background: #FFF;\r\n}\r\n\r\n.sn-list-result {\r\n    display: inline-block;\r\n    height: 216px;\r\n}\r\n\r\n.sn-list-result span {\r\n    display: block;\r\n    line-height: 18px;\r\n    font-size: 12px;\r\n    color: #888;\r\n}\r\n\r\n.sn-list-loading {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin: -6px 0 0 -38px;\r\n}\r\n\r\n.sn-list-loading span {\r\n    line-height: 18px;\r\n    font-size: 12px;\r\n    color: #888;\r\n}\r\n\r\n.sn-list-loading img {\r\n    float: left;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/* sn-tip-content */\r\n\r\n.sn-tip-content {\r\n    font-size: 12px;\r\n}\r\n\r\n.sn-tip-content>ul li {\r\n    list-style: none;\r\n    height: 24px;\r\n    line-height: 24px;\r\n    float: left;\r\n    color: #777;\r\n    margin-right: 20px;\r\n}\r\n\r\n.sn-tip-content>ul li>label {\r\n    display: inline-block;\r\n    text-align: right;\r\n}\r\n\r\n.sn-tip-content>ul li>span {\r\n    display: inline-block;\r\n}\r\n\r\n.sn-tip-content>ul li.width-all {\r\n    width: 100%;\r\n}\r\n\r\n.sn-tip-content>ul li.width-all>label {\r\n    width: auto;\r\n}\r\n\r\n.sn-tip-content>ul li.space-line {\r\n    width: 100%;\r\n    margin: 4px auto;\r\n    height: 1px;\r\n    border-bottom: 1px dotted #DDD;\r\n}\r\n\r\n\r\n/*列表提示样式 add 2016-1-30*/\r\n\r\n.sn-list-tip {\r\n    font-size: 12px;\r\n    color: #777;\r\n    line-height: 24px;\r\n    overflow: hidden;\r\n}\r\n\r\n.sn-list-tip .list-items {\r\n    border-top: 1px dotted #ddd;\r\n    padding: 10px 0;\r\n    margin-top: -1px;\r\n}\r\n\r\n.sn-list-tip .list-items h3 {\r\n    color: #666;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sn-list-tip .list-level {\r\n    float: left;\r\n}\r\n\r\n.sn-list-tip .list-level label {\r\n    display: inline-block;\r\n    text-align: right;\r\n}\r\n\r\n\r\n/*locked*/\r\n\r\n.sn-list-table {\r\n    position: relative;\r\n    white-space: nowrap;\r\n    background: #fff;\r\n}\r\n\r\n.sn-list-header {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n}\r\n\r\n.sn-list-header,\r\n.sn-list-table {\r\n    font-size: 0;\r\n}\r\n\r\n.sn-list-header-locker,\r\n.sn-list-header-wrap {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.sn-list-header-wrap {\r\n    width: 1px;\r\n    overflow: hidden;\r\n}\r\n\r\n.sn-list-content-locker,\r\n.sn-list-content {\r\n    /*height: 1px;*/\r\n    display: none;\r\n    vertical-align: top;\r\n}\r\n\r\n\r\n.sn-list-content table{\r\n    overflow: hidden;\r\n}\r\n\r\n/*.sn-list-content-locker tbody tr:nth-child(1) td,\r\n.sn-list-content tbody tr:nth-child(1) td{\r\n    border-top: 0;\r\n}*/\r\n\r\n.sn-list-content-locker {\r\n    overflow: hidden;\r\n}\r\n\r\n/* .sn-list-content-locker table td input {\r\n    float: left;\r\n} */\r\n\r\n.sn-list-content {\r\n    overflow: auto;\r\n    width: 1px;\r\n}\r\n\r\n.sn-list-show {\r\n    display: inline-block;\r\n}\r\n\r\n.sn-list-hide {\r\n    display: none;\r\n}\r\n\r\n.sn-list-display-block {\r\n    display: block;\r\n}\r\n\r\n.sn-list-content table,\r\n.sn-list-header-wrap table {\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*pupup layer*/\r\n\r\n.sn-list-popupLayer .ui-dialog-body {\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n/* copyMenu */\r\n.sn-list .sn-list-table .copyMenu {\r\n    box-sizing: content-box;\r\n    position: fixed;\r\n    display: none;\r\n    width: 100px;\r\n    border: 1px solid #ccc;\r\n    font-size: 13px;\r\n    background: #fff;\r\n    cursor: pointer;\r\n    z-index: 99;\r\n}\r\n\r\n.sn-list .sn-list-table .copyMenu ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0; \r\n}\r\n\r\n.sn-list .sn-list-table .copyMenu ul li {\r\n    margin: 0;\r\n    height: 24px;\r\n    line-height: 24px;\r\n    padding: 0 10px;\r\n}\r\n\r\n.sn-list .sn-list-table .copyMenu ul li:hover {\r\n    background: #eee;\r\n}\r\n\r\n.sn-list .sn-list-table .copyMenu .copyText {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    z-index: -10;\r\n}\r\n\r\n/* a标签样式 */\r\n.sn-list table a {\r\n    text-decoration: none;\r\n    color: #0085d0;\r\n}\r\n/*! jQuery UI - v1.12.1 - 2017-05-24\r\n* http://jqueryui.com\r\n* Includes: core.css, resizable.css, theme.css\r\n* To view and modify this theme, visit http://jqueryui.com/themeroller/?scope=&folderName=base&cornerRadiusShadow=8px&offsetLeftShadow=0px&offsetTopShadow=0px&thicknessShadow=5px&opacityShadow=30&bgImgOpacityShadow=0&bgTextureShadow=flat&bgColorShadow=666666&opacityOverlay=30&bgImgOpacityOverlay=0&bgTextureOverlay=flat&bgColorOverlay=aaaaaa&iconColorError=cc0000&fcError=5f3f3f&borderColorError=f1a899&bgTextureError=flat&bgColorError=fddfdf&iconColorHighlight=777620&fcHighlight=777620&borderColorHighlight=dad55e&bgTextureHighlight=flat&bgColorHighlight=fffa90&iconColorActive=ffffff&fcActive=ffffff&borderColorActive=003eff&bgTextureActive=flat&bgColorActive=007fff&iconColorHover=555555&fcHover=2b2b2b&borderColorHover=cccccc&bgTextureHover=flat&bgColorHover=ededed&iconColorDefault=777777&fcDefault=454545&borderColorDefault=c5c5c5&bgTextureDefault=flat&bgColorDefault=f6f6f6&iconColorContent=444444&fcContent=333333&borderColorContent=dddddd&bgTextureContent=flat&bgColorContent=ffffff&iconColorHeader=444444&fcHeader=333333&borderColorHeader=dddddd&bgTextureHeader=flat&bgColorHeader=e9e9e9&cornerRadius=3px&fwDefault=normal&fsDefault=1em&ffDefault=Arial%2CHelvetica%2Csans-serif\r\n* Copyright jQuery Foundation and other contributors; Licensed MIT */\r\n\r\n.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:\"\";display:table;border-collapse:collapse}.ui-helper-clearfix:after{clear:both}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabled{cursor:default!important;pointer-events:none}.ui-icon{display:inline-block;vertical-align:middle;margin-top:-.25em;position:relative;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-icon-block{left:50%;margin-left:-8px;display:block}.ui-widget-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ui-resizable{position:relative}.ui-resizable-handle{position:absolute;font-size:0.1px;display:block;-ms-touch-action:none;touch-action:none}.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;width:100%;top:-5px;left:0}.ui-resizable-s{cursor:s-resize;height:7px;width:100%;bottom:-5px;left:0}.ui-resizable-e{cursor:e-resize;width:7px;right:-5px;top:0;height:100%}.ui-resizable-w{cursor:w-resize;width:7px;left:-5px;top:0;height:100%}.ui-resizable-se{cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.ui-resizable-sw{cursor:sw-resize;width:9px;height:9px;left:-5px;bottom:-5px}.ui-resizable-nw{cursor:nw-resize;width:9px;height:9px;left:-5px;top:-5px}.ui-resizable-ne{cursor:ne-resize;width:9px;height:9px;right:-5px;top:-5px}.ui-widget{font-family:Arial,Helvetica,sans-serif;font-size:1em}.ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button{font-family:Arial,Helvetica,sans-serif;font-size:1em}.ui-widget.ui-widget-content{border:1px solid #c5c5c5}.ui-widget-content{border:1px solid #ddd;background:#fff;color:#333}.ui-widget-content a{color:#333}.ui-widget-header{border:1px solid #ddd;background:#e9e9e9;color:#333;font-weight:bold}.ui-widget-header a{color:#333}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default,.ui-button,html .ui-button.ui-state-disabled:hover,html .ui-button.ui-state-disabled:active{border:1px solid #c5c5c5;background:#f6f6f6;font-weight:normal;color:#454545}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited,a.ui-button,a:link.ui-button,a:visited.ui-button,.ui-button{color:#454545;text-decoration:none}.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,.ui-widget-header .ui-state-focus,.ui-button:hover,.ui-button:focus{border:1px solid #ccc;background:#ededed;font-weight:normal;color:#2b2b2b}.ui-state-hover a,.ui-state-hover a:hover,.ui-state-hover a:link,.ui-state-hover a:visited,.ui-state-focus a,.ui-state-focus a:hover,.ui-state-focus a:link,.ui-state-focus a:visited,a.ui-button:hover,a.ui-button:focus{color:#2b2b2b;text-decoration:none}.ui-visual-focus{box-shadow:0 0 3px 1px rgb(94,158,214)}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active,a.ui-button:active,.ui-button:active,.ui-button.ui-state-active:hover{border:1px solid #003eff;background:#007fff;font-weight:normal;color:#fff}.ui-icon-background,.ui-state-active .ui-icon-background{border:#003eff;background-color:#fff}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#fff;text-decoration:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight{border:1px solid #dad55e;background:#fffa90;color:#777620}.ui-state-checked{border:1px solid #dad55e;background:#fffa90}.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#777620}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error{border:1px solid #f1a899;background:#fddfdf;color:#5f3f3f}.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a{color:#5f3f3f}.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#5f3f3f}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary{font-weight:bold}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:normal}.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-state-disabled .ui-icon{filter:Alpha(Opacity=35)}.ui-icon{width:16px;height:16px}.ui-icon,.ui-widget-content .ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_444444_256x240.png\")}.ui-widget-header .ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_444444_256x240.png\")}.ui-state-hover .ui-icon,.ui-state-focus .ui-icon,.ui-button:hover .ui-icon,.ui-button:focus .ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_555555_256x240.png\")}.ui-state-active .ui-icon,.ui-button:active .ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_ffffff_256x240.png\")}.ui-state-highlight .ui-icon,.ui-button .ui-state-highlight.ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_777620_256x240.png\")}.ui-state-error .ui-icon,.ui-state-error-text .ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_cc0000_256x240.png\")}.ui-button .ui-icon{background-image:url(\"../../../src/lib/jqueryui/images/ui-icons_777777_256x240.png\")}.ui-icon-blank{background-position:16px 16px}.ui-icon-caret-1-n{background-position:0 0}.ui-icon-caret-1-ne{background-position:-16px 0}.ui-icon-caret-1-e{background-position:-32px 0}.ui-icon-caret-1-se{background-position:-48px 0}.ui-icon-caret-1-s{background-position:-65px 0}.ui-icon-caret-1-sw{background-position:-80px 0}.ui-icon-caret-1-w{background-position:-96px 0}.ui-icon-caret-1-nw{background-position:-112px 0}.ui-icon-caret-2-n-s{background-position:-128px 0}.ui-icon-caret-2-e-w{background-position:-144px 0}.ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}.ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}.ui-icon-triangle-1-s{background-position:-65px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}.ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}.ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}.ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{background-position:-65px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{background-position:1px -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}.ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px -64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}.ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}.ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}.ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}.ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}.ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}.ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}.ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}.ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position:-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}.ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}.ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-on{background-position:-96px -144px}.ui-icon-radio-off{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-seek-start{background-position:-80px -160px}.ui-icon-seek-first{background-position:-80px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{border-top-left-radius:3px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{border-top-right-radius:3px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{border-bottom-left-radius:3px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{border-bottom-right-radius:3px}.ui-widget-overlay{background:#aaa;opacity:.3;filter:Alpha(Opacity=30)}.ui-widget-shadow{-webkit-box-shadow:0 0 5px #666;box-shadow:0 0 5px #666}/*!\r\n * ui-dialog.css\r\n * Date: 2014-07-03\r\n * https://github.com/aui/artDialog\r\n * (c) 2009-2014 TangBin, http://www.planeArt.cn\r\n *\r\n * This is licensed under the GNU LGPL, version 2.1 or later.\r\n * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html\r\n */\r\n.ui-dialog {\r\n    *zoom:1;\r\n    _float: left;\r\n    position: relative;\r\n    background-color: #FFF;\r\n    border: 1px solid #CCC;\r\n    border-radius: 6px;\r\n    outline: 0;\r\n    background-clip: padding-box;\r\n    \r\n    font-size: 14px;\r\n    line-height: 1.428571429;\r\n    color: #333;\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: -webkit-transform .15s ease-in-out, opacity .15s ease-in-out;\r\n    transition: transform .15s ease-in-out, opacity .15s ease-in-out;\r\n}\r\n.ui-popup-show .ui-dialog {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n.ui-popup-focus .ui-dialog {\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\r\n}\r\n.ui-popup-modal .ui-dialog {\r\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);\r\n}\r\n.ui-dialog-grid {\r\n    width: auto;\r\n    margin: 0;\r\n    border: 0 none;\r\n    border-collapse:collapse;\r\n    border-spacing: 0;\r\n    background: transparent;\r\n}\r\n.ui-dialog-header,\r\n.ui-dialog-body,\r\n.ui-dialog-footer {\r\n    padding: 0;\r\n    border: 0 none;\r\n    text-align: left;\r\n    background: transparent;\r\n}\r\n.ui-dialog-header {\r\n    white-space: nowrap;\r\n    border-bottom: 1px solid #d0d6d9;\r\n}\r\n.ui-dialog-close {\r\n    position: relative;\r\n    _position: absolute;\r\n    float: right;\r\n    top: 11px;\r\n    right: 12px;\r\n    _height: 26px;\r\n    padding: 0 4px;\r\n    font-size: 28px;\r\n    line-height: 1;\r\n    color: #78909c;\r\n    text-shadow: 0 1px 0 #FFF;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    _background: #FFF;\r\n    border: 0;\r\n    -webkit-appearance: none;\r\n}\r\n.ui-dialog-close:hover,\r\n.ui-dialog-close:focus {\r\n    color: #000000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.ui-dialog-title {\r\n    margin: 0;\r\n    color: #222;\r\n    font-size: 16px;\r\n    line-height: 1.428571429;\r\n    min-height: 16.428571429px;\r\n    padding: 14px;\r\n    overflow:hidden; \r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    font-weight: bold;\r\n    cursor: default;\r\n}\r\n.ui-dialog-content {\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    text-align: left;\r\n    overflow: auto;\r\n}\r\n.ui-dialog-footer {\r\n    padding: 13px;\r\n    text-align: center;\r\n    background: #F9FAFC; \r\n    border-top: 1px solid #EAEEF1; \r\n    border-radius: 0 0 4px 4px;\r\n    height:20px;\r\n}\r\n.ui-dialog-statusbar {\r\n    float: left;\r\n    margin-right: 20px;\r\n    padding: 6px 0;\r\n    line-height: 1.428571429;\r\n    font-size: 14px;\r\n    color: #888;\r\n    white-space: nowrap;\r\n}\r\n.ui-dialog-statusbar label:hover {\r\n    color: #333;\r\n}\r\n.ui-dialog-statusbar input,\r\n.ui-dialog-statusbar .label {\r\n    vertical-align: middle;\r\n}\r\n.ui-dialog-button {\r\n    /*float: right;*/\r\n    white-space: nowrap;\r\n}\r\n.ui-dialog-footer button+button {\r\n    margin-bottom: 0;\r\n    margin-left: 30px;\r\n}\r\n.ui-dialog-footer button {\r\n    overflow:visible;\r\n    display: inline-block;\r\n    padding: 6px 52px;\r\n    _margin-left: 5px;\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    line-height: 1.428571429;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    border-radius: 3px;\r\n}\r\n\r\n.ui-dialog-footer button:hover,\r\n.ui-dialog-footer button:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.ui-dialog-footer button:active {\r\n  background-image: none;\r\n  outline: 0;\r\n}\r\n.ui-dialog-footer button[disabled] {\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n}\r\n\r\n.ui-dialog-footer button {\r\n  color: #0085d0;\r\n  background-color: #ffffff;\r\n  border-color: #d0d6d9;\r\n  outline: none;\r\n}\r\n\r\n.ui-dialog-footer button:hover,\r\n.ui-dialog-footer button:focus {\r\n  color: #0085d0;\r\n  background-color: #e5f3fa;\r\n  border-color: #d0d6d9;\r\n}\r\n\r\n.ui-dialog-footer button:active {\r\n  color: #0085d0;\r\n  background-color: #eaeef1;\r\n  border-color: #d0d6d9;\r\n}\r\n\r\n.ui-dialog-footer button:active{\r\n  background-image: none;\r\n}\r\n\r\n.ui-dialog-footer button[disabled],\r\n.ui-dialog-footer button[disabled]:hover,\r\n.ui-dialog-footer button[disabled]:focus,\r\n.ui-dialog-footer button[disabled]:active {\r\n  background-color: #ffffff;\r\n  border-color: #cccccc;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus {\r\n  color: #ffffff;\r\n  background-color: #0085d0;\r\n  border-color: #0085d0;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus:hover,\r\n.ui-dialog-footer button.ui-dialog-autofocus:focus {\r\n  color: #ffffff;\r\n  background-color: #1a91d4;\r\n  border-color: #1a91d4;\r\n}\r\n\r\n.ui-dialog-footer button.ui-dialog-autofocus:active {\r\n  color: #ffffff;\r\n  background-color: #0077ba;\r\n  border-color: #0077ba;\r\n}\r\n.ui-popup-top-left .ui-dialog,\r\n.ui-popup-top .ui-dialog,\r\n.ui-popup-top-right .ui-dialog {\r\n    top: -8px;\r\n}\r\n.ui-popup-bottom-left .ui-dialog,\r\n.ui-popup-bottom .ui-dialog,\r\n.ui-popup-bottom-right .ui-dialog {\r\n    top: 8px;\r\n}\r\n.ui-popup-left-top .ui-dialog,\r\n.ui-popup-left .ui-dialog,\r\n.ui-popup-left-bottom .ui-dialog {\r\n    left: -8px;\r\n}\r\n.ui-popup-right-top .ui-dialog,\r\n.ui-popup-right .ui-dialog,\r\n.ui-popup-right-bottom .ui-dialog {\r\n    left: 8px;\r\n}\r\n\r\n.ui-dialog-arrow-a,\r\n.ui-dialog-arrow-b {\r\n    position: absolute;\r\n    display: none;\r\n    width: 0;\r\n    height: 0;\r\n    overflow:hidden;\r\n    _color:#FF3FFF;\r\n    _filter:chroma(color=#FF3FFF);\r\n    border:8px dashed transparent;\r\n}\r\n.ui-popup-follow .ui-dialog-arrow-a,\r\n.ui-popup-follow .ui-dialog-arrow-b{\r\n    display: block;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-a,\r\n.ui-popup-top .ui-dialog-arrow-a,\r\n.ui-popup-top-right .ui-dialog-arrow-a {\r\n    bottom: -16px;\r\n    border-top:8px solid #7C7C7C;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-b,\r\n.ui-popup-top .ui-dialog-arrow-b,\r\n.ui-popup-top-right .ui-dialog-arrow-b {\r\n    bottom: -15px;\r\n    border-top:8px solid #fff;\r\n}\r\n.ui-popup-top-left .ui-dialog-arrow-a,\r\n.ui-popup-top-left .ui-dialog-arrow-b  {\r\n    left: 15px;\r\n}\r\n.ui-popup-top .ui-dialog-arrow-a,\r\n.ui-popup-top .ui-dialog-arrow-b  {\r\n    left: 50%;\r\n    margin-left: -8px;\r\n}\r\n.ui-popup-top-right .ui-dialog-arrow-a,\r\n.ui-popup-top-right .ui-dialog-arrow-b {\r\n    right: 15px;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-a,\r\n.ui-popup-bottom .ui-dialog-arrow-a,\r\n.ui-popup-bottom-right .ui-dialog-arrow-a {\r\n    top: -16px;\r\n    border-bottom:8px solid #7C7C7C;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-b,\r\n.ui-popup-bottom .ui-dialog-arrow-b,\r\n.ui-popup-bottom-right .ui-dialog-arrow-b {\r\n    top: -15px;\r\n    border-bottom:8px solid #fff;\r\n}\r\n.ui-popup-bottom-left .ui-dialog-arrow-a,\r\n.ui-popup-bottom-left .ui-dialog-arrow-b {\r\n    left: 15px;\r\n}\r\n.ui-popup-bottom .ui-dialog-arrow-a,\r\n.ui-popup-bottom .ui-dialog-arrow-b {\r\n    margin-left: -8px;\r\n    left: 50%;\r\n}\r\n.ui-popup-bottom-right .ui-dialog-arrow-a,\r\n.ui-popup-bottom-right .ui-dialog-arrow-b {\r\n    right: 15px;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-a,\r\n.ui-popup-left .ui-dialog-arrow-a,\r\n.ui-popup-left-bottom .ui-dialog-arrow-a {\r\n    right: -16px;\r\n    border-left:8px solid #7C7C7C;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-b,\r\n.ui-popup-left .ui-dialog-arrow-b,\r\n.ui-popup-left-bottom .ui-dialog-arrow-b {\r\n    right: -15px;\r\n    border-left:8px solid #fff;\r\n}\r\n.ui-popup-left-top .ui-dialog-arrow-a,\r\n.ui-popup-left-top .ui-dialog-arrow-b {\r\n    top: 15px;\r\n}\r\n.ui-popup-left .ui-dialog-arrow-a,\r\n.ui-popup-left .ui-dialog-arrow-b {\r\n    margin-top: -8px;\r\n    top: 50%;\r\n}\r\n.ui-popup-left-bottom .ui-dialog-arrow-a,\r\n.ui-popup-left-bottom .ui-dialog-arrow-b {\r\n    bottom: 15px;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-a,\r\n.ui-popup-right .ui-dialog-arrow-a,\r\n.ui-popup-right-bottom .ui-dialog-arrow-a {\r\n    left: -16px;\r\n    border-right:8px solid #7C7C7C;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-b,\r\n.ui-popup-right .ui-dialog-arrow-b,\r\n.ui-popup-right-bottom .ui-dialog-arrow-b {\r\n    left: -15px;\r\n    border-right:8px solid #fff;\r\n}\r\n.ui-popup-right-top .ui-dialog-arrow-a,\r\n.ui-popup-right-top .ui-dialog-arrow-b {\r\n    top: 15px;\r\n}\r\n.ui-popup-right .ui-dialog-arrow-a,\r\n.ui-popup-right .ui-dialog-arrow-b {\r\n    margin-top: -8px;\r\n    top: 50%;\r\n}\r\n.ui-popup-right-bottom .ui-dialog-arrow-a,\r\n.ui-popup-right-bottom .ui-dialog-arrow-b {\r\n    bottom: 15px;\r\n}\r\n\r\n\r\n@-webkit-keyframes ui-dialog-loading {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes ui-dialog-loading {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n.ui-dialog-loading {\r\n    vertical-align: middle;\r\n    position: relative;\r\n    display: block;\r\n    *zoom: 1;\r\n    *display: inline;\r\n    overflow: hidden;\r\n    width: 32px;\r\n    height: 32px;\r\n    top: 50%;\r\n    margin: -16px auto 0 auto;\r\n    font-size: 0;\r\n    text-indent: -999em;\r\n    color: #666;\r\n}\r\n.ui-dialog-loading {\r\n    width: 100%\\9;\r\n    text-indent: 0\\9;\r\n    line-height: 32px\\9;\r\n    text-align: center\\9;\r\n    font-size: 12px\\9;\r\n}\r\n\r\n.ui-dialog-loading::after {\r\n    position: absolute;\r\n    content: \'\';\r\n    width: 3px;\r\n    height: 3px;\r\n    margin: 14.5px 0 0 14.5px;\r\n    border-radius: 100%;\r\n    box-shadow: 0 -10px 0 1px #ccc, 10px 0px #ccc, 0 10px #ccc, -10px 0 #ccc, -7px -7px 0 0.5px #ccc, 7px -7px 0 1.5px #ccc, 7px 7px #ccc, -7px 7px #ccc;\r\n    -webkit-transform: rotate(360deg);\r\n    -webkit-animation: ui-dialog-loading 1.5s infinite linear;\r\n    transform: rotate(360deg);\r\n    animation: ui-dialog-loading 1.5s infinite linear;\r\n    display: none\\9;\r\n}\r\n.pagination {\r\n    font-size:12px;\r\n}\r\n        \r\n.pagination a {\r\n    text-decoration: none;\r\n\tborder: solid 1px #AAE;\r\n\tcolor: #15B;\r\n}\r\n\r\n.pagination a, .pagination span {\r\n    display: block;\r\n    float: left;\r\n    padding: 2px 0px;\r\n    margin-right: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.pagination .current {\r\n    background: #26B;\r\n    color: #fff;\r\n\tborder: solid 1px #AAE;\r\n}\r\n\r\n.pagination .current.prev, .pagination .current.next{\r\n\tcolor:#999;\r\n\tborder-color:#999;\r\n\tbackground:#fff;\r\n}\r\n\r\n.pagination .input-box select { height:25px; margin:0 0 0 3px;  }\r\n');
