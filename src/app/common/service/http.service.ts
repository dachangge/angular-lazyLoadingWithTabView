/**
 * Created by dcg on 2018/3/16.
 */
import {Injectable, Type} from "@angular/core";
import {Http} from "@angular/http";
import {BaseEntity} from "../utility/Base";
import {environment} from "../../../environments/environment";
@Injectable()
export class HttpService {
  constructor(private http:Http){

  }
  doPost<T extends BaseEntity>(c:Type<T>,url:string,data:any){
      let relurl='';
      relurl+=environment.serverUrl+url+"?timestamp="+new Date().valueOf()+'&'+"watertoken=";
  }
}
export class Response<T extends BaseEntity>{
  code :number;
  item?:T;
  detailmsg?:string;
  msg:string;
}
