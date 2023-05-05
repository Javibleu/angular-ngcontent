import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimationsComponent } from "./animations.component";
import { OpenCloseComponent } from "./open-close/open-close.component";
import { HomeComponent } from "./home/home.component";
import { StatusSliderComponent } from "./status-slider/status-slider.component";


const routes: Routes = [
  {
    path: '', component: AnimationsComponent,
    children: [
      { path: 'open-close', component: OpenCloseComponent },
      { path: 'home', component: HomeComponent },
      { path: 'status', component: StatusSliderComponent },
      { path: 'toggle', component: HomeComponent },
      { path: 'enter-leave', component: HomeComponent },
      { path: 'auto', component: HomeComponent },
      { path: 'heroes', component: HomeComponent },
      { path: 'hero-groups', component: HomeComponent },
      { path: 'insert-remove', component: HomeComponent },
      { path: 'querying', component: HomeComponent },
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }