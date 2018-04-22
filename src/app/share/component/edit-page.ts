/**
 * Created by dcg on 2018/3/21.
 */
import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {BaseEntity} from "../../common/utility/Base";
@Component({
  selector:'edit-component',
  moduleId:module.id,
  template:`

  


<div class="{{'col-xs-'+layoutItem.columns*3}}" *ngIf="layoutItem.editcomtype == 0">
      <div class="input-group">
       <label class="input-group-addon">{{layoutItem.label}}</label>
                <input type="text" class="form-control" [(ngModel)]="value" (change)="dochange()" [readonly]="readonly">
       </div>
 </div>
       
    <div class="{{'col-xs-'+layoutItem.columns*3}}" *ngIf="layoutItem.editcomtype == 11">
        <div class="input-group">
        <label class="input-group-addon" >{{layoutItem.label}}</label>
          <input type="checkbox" class="form-control" [(ngModel)]="value" (change)="dochange()" [disabled]="readonly">
        </div>
    </div>  
    
`,
  styles:[`
   .edit-label{
    min-width: 90px;
    text-align: right;
    padding-right:5px;
   }
   input{
      outline: none;
   }
`]
})
export class EditComponent implements OnInit{
  @Input() layoutObj:any;
  @Input() layoutItem:LayoutItem;
  @Input() value:string;
  @Output() valueChange=new EventEmitter();
  @Input() readonly:boolean=false;
  dochange(){
    this.valueChange.emit(this.value);
  }
  ngOnInit(){
    if(!this.layoutItem && this.layoutObj)
      this.layoutItem = new LayoutItem(this.layoutObj);
  }

}
export class LayoutItem extends  BaseEntity{
  editcomtype:number;
  columns:number=1;
  label:string;
  sectionname:string;//段落名字
  propname:string;//绑定属性
  isBetween:boolean;//是否是区间  用于查询。。


}
