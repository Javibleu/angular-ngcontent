import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimationsComponent } from "./animations.component";
import { OpenCloseComponent } from "./open-close/open-close.component";


const routes: Routes = [
  {
    path: '', component: AnimationsComponent,
    children: [
      { path: 'open-close', component: OpenCloseComponent },
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }