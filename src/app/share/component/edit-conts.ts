/**
 * Created by dcg on 2018/3/21.
 */
import {Component, Input, OnInit} from "@angular/core";
import {LayoutItem} from "./edit-page";
import {Utility} from "../../common/utility/utility";
import {BaseEntity} from "../../common/utility/Base";
@Component({
  selector:'edit-conts',
  moduleId:module.id,
  template:`
    <div class="row" *ngFor="let section of sectionArr">
          <h3 >{{section.name}}</h3>
          <edit-component [readonly]="isEditing" [layoutItem]="obj" [(value)]="item[obj.propname]"  *ngFor="let obj of section.arr"></edit-component>
    </div>
`
})
export class EditContsComponent implements OnInit{
  @Input() isEditing:boolean=false;
  @Input() item:any;
  @Input() layoutObjs:any[];
  @Input() layoutItems:LayoutItem[];
  sectionArr:Section[];
  ngOnInit(){
    if(!this.layoutItems && this.layoutObjs)
      this.layoutItems=Utility.cloneList<LayoutItem>(LayoutItem,this.layoutObjs);
    this.sectionArr=[];
    this.layoutItems.forEach(it=>{
      let item =this.sectionArr.find(i => i.name == it.sectionname);
      if(item){
        item.arr.push(it);
      }
      else{
        let obj = new Section({name:it.sectionname,arr:[]});
        obj.arr.push(it);
        this.sectionArr.push(obj);
      }
    })


  }
}
export class Section extends BaseEntity{
  name:string;
  arr:LayoutItem[];
}
