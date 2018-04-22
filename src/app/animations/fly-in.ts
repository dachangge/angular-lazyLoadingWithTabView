/**
 * Created by dcg on 2018/3/13.
 */
import {
  trigger,  // 动画封装触发，外部的触发器
  state, // 转场状态控制
  style, // 用来书写基本的样式
  transition, // 用来实现css3的 transition
  animate, // 用来实现css3的animations
  keyframes // 用来实现css3 keyframes的
} from "@angular/animations";
export const flyIn = trigger('flyIn', [
  state('in', style({transform: 'translate(0)'})), // 默认平移0

  transition('void => *', [ // 进场动画
    animate(300, keyframes([
      style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
    ]))
  ]),
  transition('* => void', [ // 离场动画
    animate(300, keyframes([
      style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
      style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
      style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
    ]))
  ])

]);
export const showClose = trigger('showClose',[
  state('show',style({display: 'block'})),
  state('close',style({display: 'none'})),
  transition("show => close",[
    animate(300)
  ]),
  transition("close => show",[
    animate(300, keyframes([
      style({height:0,transform: 'scale(1,0)',offset: 0}),
      style({transform: 'scale(1,0.2)',offset: 0.2}),
      style({transform: 'scale(1,0.5)',offset: 0.5}),
      style({height:'auto',transform: 'scale(1,1)',offset: 1.0}),
    ]))
  ])

])
