/**
 * Created by dcg on 2018/3/21.
 */
import {Component, Input} from "@angular/core";
import {BaseComponentPage, BaseEditComponentPage} from "../../common/utility/BasePage";
import {BaseEntity} from "../../common/utility/Base";
@Component ({
  selector:'btn-edit-bar',
  moduleId:module.id,
  template:`
  <div>
      <button class="btn btn-primary" (click)="goback()" >返回列表</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0" (click)="view()">查看</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0" (click)="edit()">编辑</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0" (click)="create()">新增</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0" (click)="duplicate()">复制新增</button>
      <button class="btn btn-danger" *ngIf="parentpage.editState == 0" (click)="delete()">删除</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState !=0" (click)="save()">保存</button>
      <button class="btn btn-danger" *ngIf="parentpage.editState !=0" (click)="cancel()">取消</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0">第一个</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0">上一个</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0">下一个</button>
      <button class="btn btn-primary" *ngIf="parentpage.editState == 0">最后一个</button>
  </div>
`,
  styles:[`
    div{
    margin-bottom: 10px;
    }
    div>button{
    margin: 0 2px;
    }
  `]
})
export class BtneditBarComponent {
  @Input() parentpage:BaseEditComponentPage<BaseEntity>;
  goback(){
    if(this.parentpage)
      this.parentpage.goback();
  }
  view(){
    if(this.parentpage)
      this.parentpage.view();
  }
  edit(){//编辑
    if(this.parentpage)
      this.parentpage.edit();
  }
  create(){//新增
    if(this.parentpage)
      this.parentpage.create();
  }
  duplicate(){//复制新增
    if(this.parentpage)
      this.parentpage.duplicate();
  }
  delete(){//删除
    if(this.parentpage)
      this.parentpage.delete();
  }
  save(){
    if(this.parentpage)
      this.parentpage.save();
  }
  cancel(){
    if(this.parentpage)
      this.parentpage.cancel();
  }
}
