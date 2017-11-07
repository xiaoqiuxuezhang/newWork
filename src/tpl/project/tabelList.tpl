<table class="t-table t-table-info mt-30">
    <tbody>
        <tr>
            <td class="td-label">项目名称:</td>
            <td class="td-content" style="width:178px">{{data.projectName}}</td>
            <td class="td-label">项目标识:</td>
            <td class="td-content">{{data.tagName}}</td>
        </tr>
        <tr>
            <td class="td-label">项目经理:</td>
            <td class="td-content">{{data.userName}}</td>
            <td class="td-label">状态</td>
            <td class="td-content">
                {{data.projectStatusName}}
            </td>
        </tr>
        <tr>
            <td class="td-label">结束时间:</td>
            <td class="td-content">{{data.endTime}}</td>
            <td class="td-label">开始时间:</td>
            <td class="td-content">{{data.startTime}}</td>
        </tr>
        <tr>
            <td class="td-label">需求负责人:</td>
            <td class="td-content">{{data.requireLeaderName}}</td>
            <td class="td-label">开发负责人:</td>
            <td class="td-content">{{data.developLeaderName}}</td>
        </tr>
        <tr>
            <td class="td-label">测试负责人:</td>
            <td class="td-content">{{data.testLeaderName}}</td>
            <td class="td-label"></td>
            <td class="td-content"></td>
        </tr>
        <tr>
            <td class="td-label" style="line-height:80px">项目描述:</td>
            <td class="td-content" colspan="3" style="vertical-align: unset;">{{data.memo}}</td>
        </tr>
    </tbody>
</table>
{{#if true}}
<form class="projectSpaceForm">
    <table class="t-table t-table-info mt-30">
        <tbody>
            <tr>
                <td class="td-label" style="line-height:30px">confluence服务器:</td>
                <td class="td-content" style="width:178px"><div id="confluenceServer" style="width:100%;height:100%;overflow:unset"></div></td>
                <td class="td-label">空间key:</td>
                <td class="td-content" style="padding:0">
                    <input type="hidden" value="{{data.id}}" name="id" inventoryId="{{data.inventoryId}}">
                    <input type="text" style="width:65%;line-height:27px"/>
                    <a class="t-btn t-btn-blue t-btn-sm" style="padding:0 10px" id="isTrue">√</a>
                </td>
            </tr>
        </tbody>
    </table>
</form>
{{/if}}
