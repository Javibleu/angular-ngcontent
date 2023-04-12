import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './ngcontent/cards/cards.component';
import { DirectivesComponent } from './directives/directives/directives.component';


const routes: Routes = [
  {path: 'ngcontent', component: CardsComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'ngcontent', component: CardsComponent},
  {path: 'ngcontent', component: CardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
