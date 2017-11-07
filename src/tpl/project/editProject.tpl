<div class="t-tabs"> 
    <!-- <ul class="t-tabs-items"> 
        当前页签 
        <li class="active">
            <a>修改项目信息</a>
        </li> 
    </ul>  -->
   <ul class="t-tabs-wrap"> 
        <!-- 当前内容 --> 
        <li class="selected"> 
            <div class="t-panel-content tabProjectEditContainer"> 
                <div class="t-list-title">
                    <h2>
                        <a href="javascript:;" class="btnBack">项目列表</a>
                        <span>修改项目</span>
                    </h2>
                </div>
                <form class="t-list-search t-columns-2 detailProjectEditForm" autocomplete="off"> 
                    <ul class="t-columns-group"> 
                        <li class="">
                            <label for="projectName">
                                <span class="color-red">*</span>
                                项目名称:
                            </label>
                            <div> 
                                <input class="projectName" type="text" name="projectName" maxlength="100" placeholder="" /> 
                            </div>
                        </li>
                        <li class="">
                            <label for="tagName">
                                <span class="color-red">*</span>
                                项目标识:
                            </label>
                            <div> 
                                <input class="tagName grayset" type="text" name="tagName" placeholder="" readonly disabled /> 
                            </div>
                        </li>
                        <li id="projectManage">

                        </li>
                        <li id="projectStatus">

                        </li>
                        <li id="startDate" class="clearfix">

                        </li>
                        <li id="endDate" class="">
                            
                        </li>
                        <li id="requireLeader">
                            
                        </li>
                        <li id="developLeader">
                            
                        </li>
                        <li id="testLeader">
                            
                        </li>
                        <li class="clearfix width-all">
                            <label for="mome">项目描述:</label>
                            <div>
                                <textarea name="memo" class="mome" maxlength="200" style="height: 100px;width:100%;"></textarea>
                            </div>
                        </li> 
                         <li id="confluenceServer">
                            
                        </li>
                         <li class="">
                            <label for="key">
                               <span class="color-red">*</span>空
                               间key:
                            </label>
                            <div> 
                                <input class="key" type="text" name="spacekey" maxlength="100" placeholder="spacekey" /> 
                            </div>
                        </li>
                        <li>
                            <label for=""></label>
                            <div>
                                <a class="t-btn t-btn-blue btnSave">保存</a>
                                <a class="t-btn t-btn-blue ml-10 btnProjectReset">重置</a>
                                <a class="t-btn ml-10 btnBack">返回</a>
                            </div>
                        </li>
                    </ul>

                    <div class="center mt-10">
                        
                    </div> 
                </form> 
            </div>
        </li>
    </ul>
</div>            
