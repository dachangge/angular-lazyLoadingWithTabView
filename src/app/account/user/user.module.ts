/**
 * Created by dcg on 2018/3/14.
 */
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {UserPageComponent} from "./user.page.component";
import {CommonModule} from "@angular/common";
import {TabsModule} from "ngx-bootstrap";
import {RolePageComponent} from "./role.page";
import {UserListComponent} from "./user.list.component";
import {ComponentModule} from "../../share/component/component.module";
import {WjGridModule} from "wijmo/wijmo.angular2.grid";
import {UserEditComponent} from "./user.edit.component";
@NgModule({
  declarations: [
    UserPageComponent,
    RolePageComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    TabsModule,
    FormsModule,
    WjGridModule,
    ComponentModule
  ],
  providers: [],
})
export class UserModule{}
