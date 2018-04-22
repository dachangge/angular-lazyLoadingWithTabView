/**
 * Created by dcg on 2018/3/13.
 */
import {Component, ViewChild} from "@angular/core";
import {ContentPageComponent} from "./content.page.component";
@Component({
  selector:'login-page',
  moduleId:module.id,
  templateUrl:'./login.page.component.html',
  styleUrls:['./login.page.component.css']
})
export class LoginPageComponent {
  logined:boolean = false;
  item={};
  loginByPsd(){
      this.logined = true;
  }
  @ViewChild(ContentPageComponent) conts:ContentPageComponent;
  avtivetabs(menu){//动态加载组件
    // this.conts.
    this.conts.activeMenu(menu);
  }
}
