/**
 * Created by dcg on 2018/3/21.
 */
import {Component} from "@angular/core";
import {BaseEditComponentPage, BaseComponentPage} from "../../common/utility/BasePage";
import {UserItem} from "./user.list.component";
@Component({
  selector:"user-edit",
  moduleId:module.id,
  template:`
    <btn-edit-bar [parentpage]="_this"></btn-edit-bar>
    <edit-conts [layoutObjs]="layoutObjs" [item]="item" [isEditing]="editState == 0" ></edit-conts>
`,
  providers:[{provide:BaseComponentPage,useExisting:UserEditComponent}]
})
export class UserEditComponent extends BaseEditComponentPage<UserItem>{
  _this=this;
  item:UserItem = new UserItem({});
  layoutObjs:any[]=[
    {label:'国家',propname:'country',editcomtype:0,columns:1},
    {label:'GDP',propname:'amount',editcomtype:0,columns:1},
    {label:'状态',propname:'active',editcomtype:11,columns:1},
  ]
}
