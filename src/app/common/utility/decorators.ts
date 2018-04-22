/**
 * Created by dcg on 2018/3/18.
 */
export function DecTest(name:string){
  return function (target:Function) {
    console.error('装饰器触发',name);
    if(!target.prototype.$meta)
      target.prototype.$meta = {name:name};
  }
}
