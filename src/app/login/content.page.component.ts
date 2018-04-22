/**
 * Created by dcg on 2018/3/14.
 */
import {
  Component, ViewChildren, AfterViewInit, ViewChild, QueryList, ElementRef,
  ViewContainerRef, AfterContentInit
} from "@angular/core";
import {BaseEntity} from "../common/utility/Base";
import {MenuService, MenuChildItem} from "../common/service/menu.service";
import {MyTabsetComponent, TabItem} from "../share/component/tabset";
import {TabsetComponent, TabDirective} from "ngx-bootstrap";
import set = Reflect.set;
@Component({
  selector:'content-tabs',
  moduleId:module.id,
  template:`
    <tabset [type]="'tabs'">
        <my-tabset  [showtitle]="true"></my-tabset>
        <tab mytab >
        </tab>
        <tab mytab ></tab>
        <tab mytab></tab>
        <tab mytab></tab>
        <tab mytab></tab>
        <tab mytab></tab>
  </tabset>
`
})
export class ContentPageComponent implements AfterViewInit{

  @ViewChild(MyTabsetComponent) tabset1:MyTabsetComponent;
  @ViewChildren('containerView',{read:ViewContainerRef}) containers:QueryList<ViewContainerRef>;
  tabs:TabDirective[]=[];

  ngAfterViewInit(){
  //   this.tabset.tabs.forEach((it,index)=>{
  //     Object.defineProperty(it,'view',{value:this.containers.toArray()[index],writable:true});
  //     Object.defineProperty(it,'visible',{value:false,writable:true});
  //     Object.defineProperty(it,'title',{value:'',writable:true});
  //     Object.defineProperty(it,'url',{value:'',writable:true});
  //     Object.defineProperty(it,'num',{value:index,writable:true});
  //
  //   })
  //   this.tabset.tabs.forEach(it=>{
  //     this.tabs.push(it);
  //   })
    setTimeout(()=>{
      this.tabset1.removeTab(this.tabset1.childs[5]);
      this.tabset1.removeTab(this.tabset1.childs[4]);
      this.tabset1.removeTab(this.tabset1.childs[3]);
      this.tabset1.removeTab(this.tabset1.childs[2]);
      this.tabset1.removeTab(this.tabset1.childs[1]);
      this.tabset1.removeTab(this.tabset1.childs[0]);

    },10)

  }
  constructor(private  menu:MenuService){}

  activeMenu(menu:MenuChildItem){
    this.menu.activeMenu(menu,this.tabset1,document.getElementsByClassName('tab-content')[0]);
  }

}

