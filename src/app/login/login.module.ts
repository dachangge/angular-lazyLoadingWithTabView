/**
 * Created by dcg on 2018/3/13.
 */
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoginPageComponent} from "./login.page.component";
import {NgModule} from "@angular/core";
import {LoginRoutingModule} from "./login-routing.module";
import {NavPageComponent} from "./nav.page.component";
import {MenuService} from "../common/service/menu.service";
import {ContentPageComponent} from "./content.page.component";
import {ComponentModule} from "../share/component/component.module";
import {UserModule} from "../account/user/user.module";
import {TabsModule} from "ngx-bootstrap";
import {MymsgComponent} from "./mymsg.page.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ComponentModule,
    UserModule,
   TabsModule.forRoot()

  ],
  declarations: [
    LoginPageComponent,
    NavPageComponent,
    ContentPageComponent,
    MymsgComponent
  ],
  providers: [ MenuService ],
  exports :[
    LoginPageComponent,
  ]
})
export class LoginModule{}
