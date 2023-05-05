import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";


export const slideState =  trigger('slideStatus', [
    state('inactive', style({ backgroundColor: 'blue' })),
    state('active', style({ backgroundColor: '#ccc' })),

    transition('* => active', [
      animate('2s', keyframes([
        style({ backgroundColor: 'blue', offset: 0}),
        style({ backgroundColor: 'red', offset: 0.8}),
        style({ backgroundColor: '#ccc', offset: 1.0})
      ])),
    ]),
    transition('* => inactive', [
      animate('2s', keyframes([
        style({ backgroundColor: '#orange', offset: 0}),
        style({ backgroundColor: 'red', offset: 0.5}),
        style({ backgroundColor: 'blue', offset: 1.0})
      ]))
    ]),

    transition('* => active', [
      animate('1s', keyframes([
        style({ backgroundColor: 'blue' }),
        style({ backgroundColor: 'red' }),
        style({ backgroundColor: 'orange' })
      ]))
    ]),
  ])