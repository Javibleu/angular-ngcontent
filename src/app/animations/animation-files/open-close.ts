import { state, style, trigger, transition, animate } from '@angular/animations'

export const openClose =
    trigger('openClose', [

        state('open', style({
            height: '200px',
            opacity: 1,
            backgroundColor: '#ccc',
            color: 'black'
        })),
        state('closed', style({
            height: '100px',
            opacity: 0.2,
            backgroundColor: '#0284c7'
        })),
        transition('open => closed', [
            animate('0.1s  ease-in-out')
        ]),
        transition('closed => open', [
            animate('0.5s')
        ]),
        transition('* => open', [
            animate('0.5s')
        ]),
    ])
