/**
 * Created by dcg on 2018/3/21.
 */
import {Component, OnInit} from "@angular/core";
import {Utility} from "../common/utility/utility";
import {BaseEntity} from "../common/utility/Base";
@Component({
  selector:'my-msg',
  moduleId:module.id,
  template:`
     
          <div class="alertBg" *ngIf="isShow"></div>
          <div class="alertCont"  style="text-align: left;" *ngIf="isShow">
          <div class="alertTitle" >{{title}}
            <div class="docancel" (click)="doCancel()" style="font-size:20px;width:30px;height:30px; float:right;margin-right:-20px;padding-top:-10px;cursor:pointer">x</div>
           
          </div>
                <div >
                        <p class="msg">
                            {{msg}}
                        </p>
                        <p style="text-align: right;">
                          <button class="btn btn-primary" (click)="btnok()" >确定</button>
                          <button class="btn btn-danger" (click)="btncancel()">取消</button>
                        </p>
                </div>
          
          
          </div>
  `,
  styles:[`
    .alertTitle{
  width:400px;
  height:42px;
  border-bottom:1px solid #bbb;
  text-align:left;
  font-size:14px;
  margin-bottom: 15px;
  line-height:42px;
  background:#1558A2;
  color:#fff;
  padding:0 24px;
  margin-left: -30px;
  margin-top:-30px;
}
    .alertBg{
      display: block;
      opacity: 1;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(48,48,48,.3);
      transition: .5s;
      transition: display .5s;
      z-index: 1498;
    }
    .docancel:hover{
      /*background-color:#FF7256;*/
      color:#fff;
    }
    .alertCont{
      position: fixed;
      width: 400px;
      background-color: #FFFFFF;
      height: auto;
     
      padding:30px;
      top: 10%;
      left: calc(50% - 200px);
      z-index: 1499;
      text-align: center;
    }
    p.msg{
      min-height:80px;
    }
`]
})
export class MymsgComponent implements OnInit{
  isShow:boolean =false;
  ngOnInit(){
      Utility.msycomponent = this;
  }
  doCancel(){
    this.isShow = false;
  }
  title:string;
  msg:string;
  resolve:(res:MsgRes)=>void;
  reject:(res:MsgRes)=>void;
  msgtype:number;
  showMsg(msgtype:number,title:string,msg:string):Promise<MsgRes>{
    let res=new Promise<MsgRes>((res,rej)=>{this.resolve = res;this.reject=rej});
    this.isShow=true;
    this.msgtype = msgtype;
    this.title =title;
    this.msg =msg;
    return res;
  }
  btnok(){
    this.isShow =false;
    this.resolve(new MsgRes({comfirmed:true}));
  }
  btncancel(){
    this.isShow =false;
    this.resolve(new MsgRes({comfirmed:false}));
  }

}
export class MsgRes extends BaseEntity{
  comfirmed:boolean;
  res:string;
}
