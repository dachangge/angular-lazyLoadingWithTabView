/**
 * Created by dcg on 2018/3/13.
 */
import {Component, Output, EventEmitter} from "@angular/core";
import {MenuService, MenuItem, MenuChildItem} from "../common/service/menu.service";
import {BaseEntity} from "../common/utility/Base";
import { showClose} from "../animations/fly-in";
@Component({
  selector:'nav-list',
  moduleId:module.id,
  template:`
          <div class="nav-container">
            <ul >
                <li *ngFor="let menu of menus" class="parent_menu" (click)="showChilds(menu,$event)">
                  <p>{{menu.name?menu.name:'基础模块'}}</p>
                  <ul [@showClose]="menu.state" >
                    <li *ngFor="let child of menu.childs" class="child_menu" (click)="avtiveMenu(child,$event)">
                      {{child.title}}
                    </li>
                  </ul>
                </li>
            </ul>
          </div>
    
`,
  styleUrls:['./nav.page.component.css'],
  animations:[
    showClose
  ]
})
export class NavPageComponent{
  @Output() navChange = new EventEmitter<MenuChildItem>();
  currentMenu:MenuItem;
  showChilds(menu:MenuItem,event:MouseEvent){
    console.error(event);
    if(event.srcElement.className.indexOf('child_menu') == -1){
      menu.state = menu.state == 'show'?'close':'show';
      this.currentMenu = menu;
    }
    // this.state = this.state == 'show'?'close':'show';
  }
  avtiveMenu(menu:MenuChildItem,event:MouseEvent){
    // this.menu.activeMenu(menu);
    this.navChange.emit(menu);
    event.stopPropagation();
  }

  menuItems:any[];
  menus:MenuItem[];
  constructor(private menu :MenuService){
      this.menuItems=menu.getMenu();
      this.refresh();
  }
  refresh(){//获得二级菜单
    this.menus=[];
    this.menuItems.forEach(it=>{
      let item=this.menus.find(i=>i.name == it.level1menu);
      if(item){
        item.childs.push(it);
      }
      else{
        let menu = new MenuItem({name:it.level1menu,childs:[],state:'close'});
        menu.childs.push(it);
        this.menus.push(menu);
      }
    })
  }
}

