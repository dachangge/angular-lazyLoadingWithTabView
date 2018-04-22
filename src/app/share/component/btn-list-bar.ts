/**
 * Created by dcg on 2018/3/20.
 */
import {Component, Input} from "@angular/core";
import {BaseListComponentPage} from "../../common/utility/BasePage";
import {BaseEntity} from "../../common/utility/Base";
@Component({
  selector:'btn-list-bar',
  moduleId:module.id,
  template:`
  <div >
    <button class="btn btn-primary" (click)="view()" *ngIf="hasAction('create')"><i class="fa fa-th-list"></i>查看</button>
    <button class="btn btn-primary" (click)="edit()" *ngIf="hasAction('create')"><i class="fa fa-pencil"></i>编辑</button>
    <button class="btn btn-primary" (click)="create()" *ngIf="hasAction('create')"><i class="fa fa-plus"></i>新增</button>
    <button class="btn btn-primary" (click)="duplicate()" *ngIf="hasAction('create')"><i class="fa fa-copy"></i>复制新增</button>
    <button class="btn btn-danger" (click)="delete()" *ngIf="hasAction('create')"><i class="fa fa-trash-o"></i>删除</button>
    <button class="btn btn-danger" (click)="deleteall()" *ngIf="hasAction('create')"><i class="fa fa-trash-o"></i>批量删除</button>
  </div>
    
`,styles:[`
    div{
    margin-bottom: 10px;
    }
    div>button{
    margin: 0 2px;
    }
  `]
})
export class BtnListBar {
  @Input()parent:BaseListComponentPage<BaseEntity>;
  @Input() actions:string;
  hasAction(str){
    if(!this.actions)
      return true;
    return this.actions.indexOf(str)!=-1;
  }
  view(){
    if(this.parent)
      this.parent.view();
  }
  edit(){
    if(this.parent)
      this.parent.edit();
  }
  create(){
    if(this.parent)
      this.parent.create();
  }
  duplicate(){
    if(this.parent)
      this.parent.duplicate();
  }
  delete(){
    if(this.parent)
      this.parent.delete();
  }
  deleteall(){
    if(this.parent)
      this.parent.deleteAll();
  }l
}
