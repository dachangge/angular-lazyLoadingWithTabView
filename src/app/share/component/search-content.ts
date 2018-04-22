/**
 * Created by dcg on 2018/3/22.
 */
import {Component, Input, OnInit} from "@angular/core";
import {LayoutItem} from "./edit-page";
import {Utility} from "../../common/utility/utility";
@Component({
  selector:'search-cont',
  moduleId:module.id,
  template:`
     <div class="row" style="margin-bottom: 10px;">
        <my-search *ngFor="let item of _searchitems" [searchitem]="item" ></my-search>     
        <div class="col-xs-2 pull-right text-center" >
            <button class="btn btn-primary pull-right"><i class="fa fa-search"></i>查询</button>
        </div>
    </div>
`
})
export class SearchContentComponent  implements OnInit{
  @Input() searchitems : any[];
  _searchitems:LayoutItem[];
  ngOnInit(){
    this._searchitems = Utility.cloneList<LayoutItem>(LayoutItem,this.searchitems);
  }


}
