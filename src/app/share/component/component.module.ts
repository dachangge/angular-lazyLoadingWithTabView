/**
 * Created by dcg on 2018/3/14.
 */
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {MyTabsetComponent} from "./tabset";
import {MytabComponent} from "./tab";
import {TabsModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";
import {BtnListBar} from "./btn-list-bar";
import {BtneditBarComponent} from "./btn-edit-bar";
import {EditComponent} from "./edit-page";
import {EditContsComponent} from "./edit-conts";
import {MysearchComponent} from "./search-page";
import {SearchContentComponent} from "./search-content";


@NgModule({
  declarations: [
    MyTabsetComponent,
    MytabComponent,
    BtnListBar,
    BtneditBarComponent,
    EditComponent,
    EditContsComponent,
    MysearchComponent,
    SearchContentComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule
  ],
  providers: [],
  exports:[MytabComponent,
    MyTabsetComponent,
    BtnListBar,
    BtneditBarComponent,
    EditComponent,
    EditContsComponent,
    MysearchComponent,
    SearchContentComponent


  ]
})
export class ComponentModule { }
