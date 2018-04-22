/**
 * Created by dcg on 2018/3/13.
 */
export class BaseEntity{
  constructor(obj?:any){
    if(obj){
      this.setValue(obj);
    }
  }
  setValue(obj){
    Object.assign(this,obj);
  }
}
// export class Menu extends BaseEntity{
//
// }
