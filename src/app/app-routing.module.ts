import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './ngcontent/cards/cards.component';
import { DirectivesComponent } from './directives/directives/directives.component';
import { InjectionDependencyComponent } from './ID/injection-dependency/injection-dependency.component';
import { NgTemplateOutletComponent } from './ngTemplateOutlet/ng-template-outlet/ng-template-outlet.component';



const routes: Routes = [
  {path: 'ngcontent', component: CardsComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'di', component: InjectionDependencyComponent},
  {path: 'animations', loadChildren: () => import('./animations/animations.module').then(m=>m.AnimationsModule)},
  {path: 'ngtemplateoutlet', loadChildren: ()=> import('./ngTemplateOutlet/ng-template-outlet.module').then(m=>m.NgTemplateOutletModule)},
  
  {path: '**', component: CardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
