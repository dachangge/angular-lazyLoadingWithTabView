import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TabsModule} from "ngx-bootstrap";
import {UserPageComponent} from "./account/user/user.page.component";
import {RolePageComponent} from "./account/user/role.page";
/**
 * Created by dcg on 2018/3/13.
 */
export const appRoutes:any[]=[
  {path:'account',loadChildren:'app/account/account.module#AccountModule'},
]
export const allChildRoutes:any[]=[
  {path:'/account/user',component:UserPageComponent},
  {path:'/account/role',component:RolePageComponent},
]
@NgModule({
  imports: [
    TabsModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
