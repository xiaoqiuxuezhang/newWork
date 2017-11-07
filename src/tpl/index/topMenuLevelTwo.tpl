{{#each beans}}
  <div class="menu">
    <!-- <h3 class="title" style="margin:10px">{{menuName}}</h3> -->
    {{#each secondMenu}}
      <ul>
          <a href="#">
            <!-- <img src="src/assets/img/develop.png" width="20px" height="20px"> -->
            <span>{{menuName}}</span>
          </a>
            {{#each thirdMenu}}
              <li> 
                <a href="javascript:;" data-url="{{url}}" data-id="{{menuId}}">
                  <img src="src/assets/img/zicaidan.png" width="10px" height="10px">
                  <span>{{menuName}}</span>
              </a> 
              </li>
            {{/each}}
      </ul>
    {{/each}}
  </div>
{{/each}}