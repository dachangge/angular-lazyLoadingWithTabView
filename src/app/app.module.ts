import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader, IterableDiffers} from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {LoginModule} from "./login/login.module";
import {MenuService} from "./common/service/menu.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabsModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [SystemJsNgModuleLoader,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
