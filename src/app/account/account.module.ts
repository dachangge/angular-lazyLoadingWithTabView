/**
 * Created by dcg on 2018/3/14.
 */
import {NgModule} from "@angular/core";
import {AccountRoutingModule} from "./account-routing.module";
import {UserModule} from "./user/user.module";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UserModule,
    AccountRoutingModule
  ],
  providers: [],
})
export class AccountModule{}
