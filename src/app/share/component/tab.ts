/**
 * Created by dcg on 2018/3/15.
 */
import {Component, Input, ViewContainerRef, ViewChild, ContentChild, AfterContentInit, OnInit} from "@angular/core";
import {TabDirective, TabsetComponent} from "ngx-bootstrap";
import {BaseComponentPage, BaseListComponentPage} from "../../common/utility/BasePage";
import {MyTabsetComponent} from "./tabset";
@Component({
  selector:'mytab,[mytab]',
  moduleId:module.id,
  template:`
    <ng-template tabHeading >
        {{caption}}
        <i class="fa fa-close" (click)="tabclose()" *ngIf="canclose"></i>
    </ng-template>
    <div #containerView class="containerView" ></div>
    <div style="padding:10px 20px 0 20px;">
      <ng-content ></ng-content>    
    </div>

`
})
export class MytabComponent implements AfterContentInit,OnInit{
  @ViewChild('containerView',{read:ViewContainerRef}) container:ViewContainerRef;
  visible:boolean=false;//当前状态：true->added;false->removed
  url:string;
  @Input() canclose:boolean=true;
  @Input() caption:string;
  @Input() hideOnInit:boolean=false;
  tab:TabDirective;
  parent:MyTabsetComponent;
  tabclose(){
    console.error(this);
    this.tabset.removeTab(this.tab);
    this.visible=false;
    this.container.clear();
  }
  constructor(private reltab:TabDirective,private tabset:TabsetComponent){
    this.tab=reltab;
    this.parent = this.tabset['mytabset'];
    if(!this.tabset['mytabset'].childs)
      this.tabset['mytabset'].childs=[];
    this.tabset['mytabset'].childs.push(this);
    if(this.reltab.elementRef.nativeElement.parentNode)
      this.tabset['mytabset'].tabcont = this.reltab.elementRef.nativeElement.parentNode;
    this.tab.select.subscribe(()=>{this.refreshgrid()})
  }
  @ContentChild(BaseComponentPage) basePage:BaseComponentPage;
  refreshgrid(){
    if(this.basePage instanceof BaseListComponentPage){
      this.basePage['itemview'].refresh();
    }
  }
  ngAfterContentInit(){
    if(this.basePage)
      this.basePage.setParentTab(this);
  }
  ngOnInit(){

  }



}
