import { trigger, state, style, transition,animate } from "@angular/animations";

export const flyInOut =   trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({ 
        opacity: 0,
        transform: 'translateX(100%)'
     }))
    ])
  ]);