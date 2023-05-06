import { trigger, state, transition, style, animate } from '@angular/animations'

export const shrinkOut =
    trigger('shrinkOut', [
        state('in', style({ height: '*' })),
        transition('* => void', [
            style({ height: '*' }),
            animate(250, style({ height: 0 }))
        ]),
        transition(':enter', [
            style({height: 0}),
            animate(250, style({height: '*'}))
        ])
    ])