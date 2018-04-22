/**
 * Created by dcg on 2018/3/13.
 */
import {Injectable, SystemJsNgModuleLoader, NgModuleFactory, Injector, ViewContainerRef} from "@angular/core";
import {appRoutes, allChildRoutes} from "../../app-routing.module";
import {BaseEntity} from "../utility/Base";
import {MyTabsetComponent} from "../../share/component/tabset";
import {TabsetComponent, TabDirective} from "ngx-bootstrap";
@Injectable()
export class MenuService {
  constructor(private loader:SystemJsNgModuleLoader,private injector:Injector){

  }
  getMenu():any[]{//获得列表页面
    return LOCALURL_JSON;
  }
  activeMenu(menu:MenuChildItem,tabset:MyTabsetComponent,tabcontainer:any):void{

    let rout=appRoutes.find(it=>it.path == menu.url.split('/')[1]);
    let comchild =allChildRoutes.find( it => it.path ==  menu.url);
    if(rout && comchild){
      // alert(rout.loadChildren)
      let openedtab=tabset.childs.find (it => it['url'] == menu.url && it.visible);
      if(openedtab){
        tabset.childs.forEach(it=>{
          it.tab.active=false;
        })
        openedtab.tab.active=true;
        return ;
      }
      let tab = tabset.childs.find(it => !it.visible);
      if(!tab){
        alert("无法加载更多模块");
      }
        else{
        this.loader.load(rout.loadChildren).then((moduleFactory:NgModuleFactory<any>)=>{
          console.error(moduleFactory);
          tab['caption'] =menu.title;
          let ngModuleRef = moduleFactory.create(this.injector);
          let comp = comchild.component;
          let compFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(comp);
          tab['container'].createComponent(compFactory);
          tabset.parent.addTab(tab.tab);
          tabcontainer.appendChild(tab.tab.elementRef.nativeElement);
          tab.tab.active=true;
          tab['visible']=true;
          tab['url'] = menu.url;
          console.error(tabset);

        })


      }
    }
    else{
      alert("无法获得"+menu.url);
    }

  }

}
export class MenuItem extends BaseEntity{
  name:string;
  childs:MenuChildItem[];
  state:string;
}
// {title:"角色列表",menupath:'角色列表',level1menu:'系统管理',name:"basesys.rolelist", url:"/basesys/rolelist",componentType:0},
export class MenuChildItem extends BaseEntity{
  title:string;
  menupath:string;
  level1menu:string;
  name:string;
  url:string;
}
export const LOCALURL_JSON:any[]= [
// 系统管理


// 账户管理
  {title:"员工管理",menupath:'员工管理',level1menu:'账户管理',name:"account.unformallist",url:"/account/user",componentType:0,},
  {title:"角色管理",menupath:'角色管理',level1menu:'账户管理',name:"account.unformallist",url:"/account/role",componentType:0,},

];
