import {BaseEntity} from "./Base";
import {HttpService} from "../service/http.service";
import {OnInit, EventEmitter, ViewChild} from "@angular/core";
import {MytabComponent} from "../../share/component/tab";
import {MyTabsetComponent} from "../../share/component/tabset";
import {Utility} from "./utility";
import {CollectionView} from "wijmo/wijmo";
/**
 * Created by dcg on 2018/3/20.
 */
export class BaseComponentPage implements OnInit{
  setParentTab(tab:MytabComponent){
    this.parentTab = tab;
    this.parentTabset = tab.parent;
  }
  parentTabset:MyTabsetComponent;
  parentTab:MytabComponent;
  ngOnInit(){

  }
}
export class BaseListComponentPage<T extends BaseEntity> extends BaseComponentPage{
  get editPage(): BaseEditComponentPage<BaseEntity> {

    if(this.parentTabset && this.parentTabset.tabeditPage)
      return this.parentTabset.tabeditPage;
    if(this._editPage)
      return this._editPage;
  }

  set editPage(value: BaseEditComponentPage<BaseEntity>) {
    this._editPage = value;
  }
  items:T[]=[];
  @ViewChild('grid') grid:any;
  itemview:CollectionView;
  private _editPage :BaseEditComponentPage<BaseEntity>;
  setParentTab(tab:MytabComponent) {
    super.setParentTab(tab);
    this.parentTabset.tablistPage = this;
  }

  view(){//查看
    console.error(this.editPage,this.parentTabset.tabeditPage)
    if(this.editPage){
      this.parentTabset.activeTab(this.editPage.parentTab);
      this.editPage.view();
    }
  }
  edit(){//编辑
    if(this.editPage){
      this.parentTabset.activeTab(this.editPage.parentTab);
      this.editPage.edit();
    }
  }
  create(){//新增

  }
  duplicate(){//复制新增

  }
  delete(){//删除

  }
  deleteAll(){
    this.items = this.items.filter(it => !this.grid.selectedItems.find(i => i.id == it['id']));
    this.itemview = new CollectionView(this.items);
    this.itemview.refresh();

  }
}
export class BaseEditComponentPage<T extends BaseEntity> extends BaseComponentPage{
  get listPage(): BaseListComponentPage<BaseEntity> {
    if(this.parentTabset && this.parentTabset.tablistPage )
      return this.parentTabset.tablistPage;
    return this._listPage;
  }

  set listPage(value: BaseListComponentPage<BaseEntity>) {
    this._listPage = value;
  }
  item:T;
  private _listPage:BaseListComponentPage<BaseEntity>;
  editState:EditState = EditState.view;
  setParentTab(tab:MytabComponent) {
      super.setParentTab(tab);
      this.parentTabset.tabeditPage = this;

  }
  view(){
      this.editState = 0;
      this.item=this.listPage.itemview.currentItem;
  }
  edit(){//编辑
      this.editState = EditState.edit;
      this.item=this.listPage.itemview.currentItem;

  }
  create(){//新增

  }
  duplicate(){//复制新增

  }
  delete(){//删除
    Utility.msycomponent.showMsg(0,'提示','确定删除当前记录?').then((res)=>{
      if(res.comfirmed){
          let idx=this.listPage.items.findIndex(it => it ==this.item);
        this.listPage.items.splice(idx,1);
          this.listPage.itemview.refresh();
          this.view();
      }
    })
  }
  goback(){
    if(this.editState != 0)
        Utility.msycomponent.showMsg(0,'提示','当前编辑尚未保存,请确认是否关闭?').then(res=>{
         console.error(res);
         if(res.comfirmed){
           this.parentTabset.activeTab(this.listPage.parentTab);
         }
        })
    else
      this.parentTabset.activeTab(this.listPage.parentTab);

  }
  cancel(){
      this.editState=0;
  }
  save(){

  }
}

export enum EditState {
  view = 0,
  edit = 1,
  insert =2
}
