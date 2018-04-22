/**
 * Created by dcg on 2018/3/20.
 */
import {Component, ViewChild} from "@angular/core";
import {BaseListComponentPage, BaseComponentPage} from "../../common/utility/BasePage";
import {BaseEntity} from "../../common/utility/Base";
import {CollectionView} from "wijmo/wijmo";
import * as wjcCore from 'wijmo/wijmo';
import {Utility} from "../../common/utility/utility";
import {LayoutItem} from "../../share/component/edit-page";

@Component({
  selector:'user-list',
  moduleId:module.id,
  template:`
  <btn-list-bar [parent]="_this" ></btn-list-bar>
  <search-cont [searchitems]="searchitems"></search-cont>
  
  <div style="width:100%;">
  <wj-flex-grid #grid [itemsSource]="itemview" [isReadOnly]="true" [selectionMode]="'ListBox'" [allowSorting]="false">
     <wj-flex-grid-column [header]="'国家'" [binding]="'country'" [width]="'*'"></wj-flex-grid-column>
     <wj-flex-grid-column [header]="'GDP'" [binding]="'amount'" [format]="'n0'"></wj-flex-grid-column>
     <wj-flex-grid-column [header]="'发达国家'" [binding]="'active'"></wj-flex-grid-column>
  </wj-flex-grid>
</div>
  
  <button class="btn btn-primary" (click)="showMsg()">点击</button>
`,
  providers:[{provide:BaseComponentPage,useExisting:UserListComponent}]
})
export class UserListComponent extends BaseListComponentPage<UserItem>{
  _this=this;
  items=Utility.cloneList<UserItem>(UserItem,[
    {id: 1, country: '中国', amount: Math.random() * 10000, active: false},
    {id: 2, country: '日本', amount: Math.random() * 10000, active: true},
    {id: 3, country: '美国',  amount: Math.random() * 10000, active: true},
    {id: 4, country: '印度',  amount: Math.random() * 10000, active: false},
  ]);
  itemview=new  CollectionView(this.items);
  @ViewChild('grid') grid:any;
  showMsg(){
    console.error(this.grid);
  }
  searchitems:any[]=[
    {label:'GDP',isBetween:1,editcomtype:0,propname:'amount'},
    {label:'日期',isBetween:1,editcomtype:1,propname:'date'}
  ];
}
export class UserItem extends BaseEntity{

}
