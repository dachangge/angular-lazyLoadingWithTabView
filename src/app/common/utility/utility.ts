import {MymsgComponent} from "../../login/mymsg.page.component";
import {Type} from "@angular/core";
import {BaseEntity} from "./Base";
/**
 * Created by dcg on 2018/3/16.
 */

export class Utility{
  static msycomponent:MymsgComponent;
  static cloneList<T extends BaseEntity>(c:Type<T>,arr:any[]):Array<T>{
    let res=[];
    arr.forEach(it=>{
      res.push(new c(it));
    })
    return res;
  }
}
