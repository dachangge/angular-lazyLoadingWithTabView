/**
 * Created by dcg on 2018/3/14.
 */
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TabsModule} from "ngx-bootstrap";
import {UserPageComponent} from "./user/user.page.component";
import {RolePageComponent} from "./user/role.page";
const accountRoutes:any[]=[
  {path:'user',component:UserPageComponent},
  {path:'role',component:RolePageComponent}
]
@NgModule({
  imports: [
    TabsModule.forRoot(),
    RouterModule.forChild(
      accountRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule {}
