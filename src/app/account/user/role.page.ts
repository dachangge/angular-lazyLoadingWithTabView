/**
 * Created by dcg on 2018/3/16.
 */
import {Component, OnInit} from "@angular/core";
import {BaseEntity} from "../../common/utility/Base";
import {DecTest} from "../../common/utility/decorators";
import {BaseListComponentPage} from "../../common/utility/BasePage";
@Component({
  selector:'role-list',
  moduleId:module.id,
  template:`
      this is role page!...welcome~
      <div>
      <button class="btn btn-primary">测试按钮</button>  
    </div>
  `
})
export class RolePageComponent {


}
export class RoleItem extends BaseEntity{

}
