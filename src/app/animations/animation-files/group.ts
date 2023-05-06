import { trigger, style, state, transition, animate, group } from "@angular/animations"



export const flyInOut =
trigger('flyInOut', [
    state('in', style({
      width: '*',
      transform: 'translateX(0)', opacity: 1
    })),
    transition(':enter', [
      style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: '*'
        })),
        animate('0.3s 0.1s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition(':leave', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.1s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])