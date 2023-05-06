import {trigger, transition, style, group, query, animate, animateChild, keyframes} from '@angular/animations'

export const queryElements = 
trigger('query', [
    transition(':enter', [
    //   style({ height: 0 }),
      group([
        // animate(500, style({ height: '*' })),
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0)'}),
          animate('500ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
        ]),
        query('.heroes', [
          style({ opacity: 0, transform: 'translateX(-100%)'}),
          animate('500ms ease-in', style({opacity:1,  transform: 'translateX(0)' }))
        ]),
      ]),
      query('@animateMe', animateChild()),
    ]),
    transition(':leave', [
    //   style({ height: '*' }),
      query('@animateMe', animateChild()),
      group([
        animate('500ms', style({ height: '0', padding: '0' })),
        query(':leave', [
          style({ opacity: 1, transform: 'scale(1)'}),
          animate('600ms', style({ opacity: 0, transform: 'scale(0.9)' }))
        ]),
        query('.heroes', [
          style({ transform: 'translateX(0)'}),
          animate('400ms ease-out', style({ transform: 'translateX(-100%)' }))
        ]),
      ]),
    ]),
  ])

  export const animateMe =
  trigger('animateMe', [
    transition('* <=> *', animate('500ms cubic-bezier(.68,-0.73,.26,1.65)', keyframes([
      style({  color: '*', offset: 0 }),
      style({  color: 'orange', offset: 0.5 }),
      style({  color: '*', offset: 1 })
    ])))
  ])