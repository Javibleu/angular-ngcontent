import { trigger, transition, query, stagger, animate, style } from "@angular/animations"


export const slideIn =   trigger('slideIn', [
    transition(':enter', [
      query('.hero', [
        style({opacity: 0, transform: 'translateY(-100px)'}),
        stagger(130, [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ])
  ])

export const filter = 
  trigger('filterAnimation', [
    transition(':enter, * => 0, * => -1', []),
    transition(':increment', [
      query(':enter', [
        style({ opacity: 0, width: 0 }),
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 1, width: '*' })),
        ]),
      ], { optional: true })
    ]),
    transition(':decrement', [
      query(':leave', [
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 0, width: 0 })),
        ]),
      ])
    ]),
  ])