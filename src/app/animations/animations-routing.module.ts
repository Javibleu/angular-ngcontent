import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimationsComponent } from "./animations.component";
import { OpenCloseComponent } from "./open-close/open-close.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {
    path: '', component: AnimationsComponent,
    children: [
      { path: 'open-close', component: OpenCloseComponent },
      { path: 'home', component: HomeComponent },
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }