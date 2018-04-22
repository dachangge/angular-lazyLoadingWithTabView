/**
 * Created by dcg on 2018/3/15.
 */
import {Component, Input, ViewChild, ViewChildren, QueryList, OnInit} from "@angular/core";
import {TabsetComponent, TabDirective} from "ngx-bootstrap";
import {BaseEntity} from "../../common/utility/Base";
import {MytabComponent} from "./tab";
import {BaseEditComponentPage, BaseListComponentPage} from "../../common/utility/BasePage";
@Component({
  selector:'my-tabset,[mytabset]',
  moduleId:module.id,
  template:`

`
})
export class MyTabsetComponent implements OnInit{
  @Input() showtitle:boolean=false;
  parent:TabsetComponent;
  childs:MytabComponent[];
  tabcont:any;
  tablistPage:BaseListComponentPage<BaseEntity>
  tabeditPage:BaseEditComponentPage<BaseEntity>;

  constructor(private tabset:TabsetComponent){
      this.tabset['mytabset']=this;
      this.tabset.type=null;
      this.parent =this.tabset;

  }
  ngOnInit(){
    if(!this.showtitle)
        this.tabset.classMap.hiddentitle = true;
  }
  activeTab(tab:MytabComponent){
    if(!tab.visible){
      this.tabset.addTab(tab.tab);
    }
    this.childs.forEach(it=>{
      it.tab.active=false;
    })
    tab.tab.active=true;
    tab.visible=true;
  }
  removeTab(tab:MytabComponent){
    this.tabset.removeTab(tab.tab);
    tab.visible=false;
    // this.activeTab(this.childs[this.childs.length-1]);
  }
}
export class TabItem extends BaseEntity{

}
