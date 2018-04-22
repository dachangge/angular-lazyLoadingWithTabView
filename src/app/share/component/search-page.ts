/**
 * Created by dcg on 2018/3/22.
 */
import {Component, Input} from "@angular/core";
import {LayoutItem} from "./edit-page";
@Component ({
  selector:'my-search',
  moduleId:module.id,
  template:`
    <div class="{{'col-xs-'+searchitem.columns*2}}" *ngIf="searchitem.editcomtype == 0">
          <div class="input-group">
              <label class="input-group-addon">{{searchitem.label}}</label>
              <input type="text" [(ngModel)]="value" class="form-control">
          </div>
    </div>
    <div class="{{'col-xs-'+searchitem.columns*2}}" *ngIf="searchitem.editcomtype == 0 && searchitem.isBetween">
          <div class="input-group">
              <label class="input-group-addon" style="width: 20px;min-width: 0;">至</label>
              <input type="text" [(ngModel)]="value" class="form-control">
          </div>
    </div>
    <div class="{{'col-xs-'+searchitem.columns*2}}" *ngIf="searchitem.editcomtype == 1">
          <div class="input-group">
              <label class="input-group-addon" >{{searchitem.label}}</label>
              <input type="date"  [(ngModel)]="value" class="form-control">
          </div>
    </div>
    <div class="{{'col-xs-'+searchitem.columns*2}}" *ngIf="searchitem.editcomtype == 1 && searchitem.isBetween">
          <div class="input-group">
              <label class="input-group-addon" style="width: 20px;min-width: 0;">至</label>
              <input type="date"  [(ngModel)]="value" class="form-control">
          </div>
    </div>
      

`,styles:[`
            input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{ 
               -webkit-appearance: none !important;            
               }
            input[type = 'date']{
            padding:6px 0;
            }
`]
})
export class MysearchComponent {
  @Input() searchitem:LayoutItem;
  @Input() value:string;


}
