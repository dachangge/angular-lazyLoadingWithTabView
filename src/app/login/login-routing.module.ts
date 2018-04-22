import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by dcg on 2018/3/13.
 */
const loginRoutes:any[]=[

]
@NgModule({
  imports: [
    RouterModule.forChild(
      loginRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule{}
