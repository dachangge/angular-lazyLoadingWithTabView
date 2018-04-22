/**
 * Created by dcg on 2018/3/14.
 */
import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {MenuService} from "../../common/service/menu.service";
import {TabsetComponent, TabDirective} from "ngx-bootstrap";
import {BaseEntity} from "../../common/utility/Base";
import {DecTest} from "../../common/utility/decorators";
import {BaseComponentPage} from "../../common/utility/BasePage";
@Component({
  selector:'user-page',
  moduleId:module.id,
  template:`
     <tabset >
          <my-tabset ></my-tabset> 
          <tab mytab [caption]="'员工列表'" [canclose]="false" >
            <user-list></user-list>
          </tab>
          <tab mytab [caption]="'编辑'" [canclose]="false" [hideOnInit]="true" >
            <user-edit></user-edit>
          </tab>
    </tabset>
`,
})
export class UserPageComponent {
}

